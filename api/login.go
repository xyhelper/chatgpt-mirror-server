package api

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
)

func Login(r *ghttp.Request) {
	if r.Session.MustGet("userToken").IsEmpty() {
		r.Response.WriteTpl("login.html")

	} else {
		r.Response.RedirectTo("/")
	}

}

func LoginPost(r *ghttp.Request) {
	// ctx := r.GetCtx()
	// accessToken, session, cookie, err := autologin.Login(ctx, r.Get("username").String(), r.Get("password").String())
	// if err != nil {
	// 	g.Log().Error(ctx, err)

	// 	r.Response.WriteTpl("login.html", g.Map{
	// 		"username": r.Get("username").String(),
	// 		"error":    err.Error(),
	// 	})
	// 	return
	// } else {
	// 	r.Session.Set("session-token", cookie.Value)
	// 	r.Session.Set("access-token", accessToken)
	// 	r.Session.Set("session", session)
	// r.Cookie.Set("access-token", accessToken)
	// cookie.Name = "session-token"
	// r.Cookie.SetHttpCookie(cookie)
	// r.Response.RedirectTo("/")
	//  延迟跳转
	// 	r.Response.WriteTpl("login_success.html", g.Map{"Success": "登录成功，正在跳转..."})

	// }

}

func LoginToken(r *ghttp.Request) {
	ctx := r.GetCtx()
	if r.Get("access_token").String() == "" {
		r.Response.WriteJson(g.Map{
			"code":    500,
			"message": "access_token is empty",
		})
		return
	}
	record, _, err := ChatgptSessionService.GetSessionByUserToken(ctx, r.Get("access_token").String())
	if err != nil {
		r.Response.WriteJson(g.Map{
			"code":    500,
			"message": err.Error(),
		})
		return
	}
	if record.IsEmpty() {
		r.Response.WriteJson(g.Map{
			"code":    500,
			"message": "session is empty",
		})
		return
	}
	r.Session.Set("userToken", r.Get("access_token").String())
	r.Response.WriteJsonExit(g.Map{
		"code": 0,
		"url":  "/",
	})
}
