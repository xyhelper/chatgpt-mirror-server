package backendapi

import "github.com/gogf/gf/v2/net/ghttp"

func ProxyAll(r *ghttp.Request) {

	r.Response.WriteJson(r.GetMap())
}
