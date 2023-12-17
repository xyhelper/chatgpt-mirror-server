package api

import (
	"bytes"
	"chatgpt-mirror-server/config"
	"io"
	"net/http"
	"net/http/httputil"
	"net/url"

	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/net/ghttp"
	"github.com/gogf/gf/v2/text/gstr"
	"github.com/gogf/gf/v2/util/gconv"
)

func ProxyNext(r *ghttp.Request) {
	ctx := r.Context()
	officalSession := gjson.New(r.Session.MustGet("offical-session"))
	refreshCookie := officalSession.Get("refreshCookie").String()
	u, _ := url.Parse(config.CHATPROXY(ctx))
	proxy := httputil.NewSingleHostReverseProxy(u)
	proxy.ErrorHandler = func(writer http.ResponseWriter, request *http.Request, e error) {
		writer.WriteHeader(http.StatusBadGateway)
	}
	req := r.Request.Clone(ctx)
	req.URL.Host = u.Host
	req.URL.Scheme = u.Scheme
	req.Host = u.Host
	// 去除header 中的 压缩
	req.Header.Del("Accept-Encoding")
	// 替换path 中的 cacheBuildId 为 buildId
	req.URL.Path = gstr.Replace(req.URL.Path, config.CacheBuildId, config.BuildId, 1)
	req.Header.Set("Cookie", "__Secure-next-auth.session-token="+refreshCookie)
	proxy.ModifyResponse = func(response *http.Response) error {
		response.Header.Del("Set-Cookie")
		// 读取响应体
		body, err := io.ReadAll(response.Body)
		if err != nil {
			return err
		}
		// 修改响应体
		bodyJson := gjson.New(body)
		bodyJson.Set("pageProps.user.email", "admin@openai.com")
		bodyJson.Set("pageProps.user.name", "admin")
		bodyJson.Set("pageProps.user.image", "/avatars.png")
		bodyJson.Set("pageProps.user.picture", "/avatars.png")
		bodyJson.Set("pageProps.user.id", "user-xadmin")

		// 写入响应体
		response.Body = io.NopCloser(bytes.NewReader(gconv.Bytes(bodyJson)))
		// 重写响应头大小
		response.ContentLength = int64(len(body))

		return nil
	}
	proxy.ServeHTTP(r.Response.Writer.RawWriter(), req)

}
