package publicapi

import (
	"chatgpt-mirror-server/config"
	"net/http"
	"net/http/httputil"
	"net/url"

	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
)

func ProxyPublic(r *ghttp.Request) {
	ctx := r.GetCtx()
	u, _ := url.Parse(config.CHATPROXY(ctx))
	proxy := httputil.NewSingleHostReverseProxy(u)
	proxy.ErrorHandler = func(writer http.ResponseWriter, request *http.Request, e error) {
		g.Log().Error(ctx, e)
		writer.WriteHeader(http.StatusBadGateway)
	}
	newreq := r.Request.Clone(ctx)
	newreq.URL.Host = u.Host
	newreq.URL.Scheme = u.Scheme
	newreq.Host = u.Host
	// newreq.Header.Set("Cookie", "__Secure-next-auth.session-token="+carinfo.RefreshCookie)
	// // 去除header 中的 压缩
	// newreq.Header.Del("Accept-Encoding")
	proxy.ServeHTTP(r.Response.Writer.RawWriter(), newreq)
}
