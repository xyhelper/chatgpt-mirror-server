package middleware

import (
	"chatgpt-mirror-server/config"

	"github.com/gogf/gf/v2/net/ghttp"
)

func ChatgptAdminapiAuth(r *ghttp.Request) {
	ctx := r.Context()
	apiauth := r.Header.Get("apiauth")
	if apiauth == "" {
		r.Response.WriteStatusExit(403, "apiauth is empty")
	}
	if apiauth != config.APIAUTH(ctx) {
		r.Response.WriteStatusExit(403, "apiauth is error")
	}
	r.Middleware.Next()
}
