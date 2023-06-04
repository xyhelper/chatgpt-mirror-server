package middleware

import "github.com/gogf/gf/v2/frame/g"

func init() {
	g.Server().BindMiddleware("/adminapi/*", ChatgptAdminapiAuth)
}
