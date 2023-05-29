package api

import "github.com/gogf/gf/v2/net/ghttp"

func Logout(r *ghttp.Request) {
	r.Session.RemoveAll()
	r.Response.RedirectTo("/login")
}
