package arkose

import (
	"bytes"
	"io"
	"net/http"
	"net/http/httputil"
	"net/url"

	"github.com/gogf/gf/v2/net/ghttp"
	"github.com/gogf/gf/v2/text/gstr"
	"github.com/gogf/gf/v2/util/gconv"
)

var (
	UpStream = "https://client-api.arkoselabs.com/"
	u, _     = url.Parse(UpStream)
	proxy    = httputil.NewSingleHostReverseProxy(u)
)

func init() {

}

func Proxy(r *ghttp.Request) {

	proxy.Director = func(req *http.Request) {
		requrl := r.Request.URL.Path
		if requrl == "/fc/gt2/public_key/35536E1E-65B4-4D96-9D97-6ADB7EFF8147" {
			body := r.GetBodyString()
			bodyArray := gstr.Split(body, "&")
			// 遍历数组 当数组元素以 "site=http" 开头时，将其替换为 "site=http%3A%2F%2Flocalhost%3A3000"
			for i, v := range bodyArray {
				if gstr.HasPrefix(v, "site=http") {
					bodyArray[i] = "site=http%3A%2F%2Flocalhost%3A3000"
				}
			}
			body = gstr.Join(bodyArray, "&")

			req.Body = io.NopCloser(bytes.NewReader(gconv.Bytes(body)))
			req.ContentLength = int64(len(body))
		}

		req.Header = r.Header
		req.Host = u.Host
		req.URL.Scheme = u.Scheme
		req.URL.Host = u.Host
		req.URL.Path = requrl

		req.Header.Set("Origin", "http://localhost:3000")
		req.Header.Set("Referer", "http://localhost:3000/v2/1.5.4/enforcement.cd12da708fe6cbe6e068918c38de2ad9.html")

	}

	proxy.ServeHTTP(r.Response.RawWriter(), r.Request)

}
