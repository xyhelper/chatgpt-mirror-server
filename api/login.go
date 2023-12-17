package api

import (
	"chatgpt-mirror-server/config"
	"chatgpt-mirror-server/modules/chatgpt/model"

	"github.com/cool-team-official/cool-admin-go/cool"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
)

func Login(r *ghttp.Request) {
	ctx := r.GetCtx()
	if r.Session.MustGet("userToken").IsEmpty() {
		r.Response.WriteTpl("login.html", g.Map{
			"ONLYTOKEN": config.ONLYTOKEN(ctx),
		})

	} else {
		r.Response.RedirectTo("/")
	}

}

func LoginPost(r *ghttp.Request) {
	ctx := r.GetCtx()
	// 如果用户名为空，就是token登录
	// g.Log().Debug(ctx, "1232", r.Get("username").String() == "")
	if r.Get("username").String() == "" {
		// token登录
		userToken := r.Get("password").String()
		record, _, err := ChatgptSessionService.GetSessionByUserToken(ctx, userToken)
		if err != nil {
			g.Log().Error(ctx, "LoginPost", "err", err)
			r.Response.WriteTpl("login.html", g.Map{
				"ONLYTOKEN": config.ONLYTOKEN(ctx),
				"error":     err.Error(),
			})
			return
		}
		if record.IsEmpty() {
			r.Response.WriteTpl("login.html", g.Map{
				"ONLYTOKEN": config.ONLYTOKEN(ctx),
				"error":     "token登录失败",
			})
			return
		}
		officialSession := record["officialSession"].String()
		r.Session.Set("offical-session", officialSession)
		r.Session.Set("userToken", userToken)
		r.Response.RedirectTo("/")
		return
	}
	// 正常用户名密码登录
	record, err := cool.DBM(model.NewChatgptSession()).Where(g.Map{
		"email":    r.Get("username").String(),
		"password": r.Get("password").String(),
	}).One()
	if err != nil {
		g.Log().Error(ctx, "LoginPost", "err", err)

		r.Response.WriteTpl("login.html", g.Map{
			"username": r.Get("username").String(),
			"error":    err.Error(),
		})
		return
	}
	if record.IsEmpty() {
		r.Response.WriteTpl("login.html", g.Map{
			"username": r.Get("username").String(),
			"error":    "用户名或密码错误",
		})
		return
	}
	if record["userID"].Int() == 0 {
		r.Response.WriteTpl("login.html", g.Map{
			"username": r.Get("username").String(),
			"error":    "未开通直登权限",
		})
		return
	}
	// 获取userToken
	user, err := cool.DBM(model.NewChatgptUser()).Where("id=?", record["userID"].Int()).Where("expireTime>now()").One()
	if err != nil {
		g.Log().Error(ctx, "LoginPost", "err", err)
		r.Response.WriteTpl("login.html", g.Map{
			"username": r.Get("username").String(),
			"error":    err.Error(),
		})
		return
	}
	if user.IsEmpty() {
		r.Response.WriteTpl("login.html", g.Map{
			"username": r.Get("username").String(),
			"error":    "用户不存在或已过期",
		})
		return
	}
	officialSession := user["officialSession"].String()
	r.Session.Set("offical-session", officialSession)
	r.Session.Set("userToken", user["userToken"].String())
	r.Response.RedirectTo("/")

	//  延迟跳转
	// 	r.Response.WriteTpl("login_success.html", g.Map{"Success": "登录成功，正在跳转..."})

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
	officialSession := record["officialSession"].String()
	r.Session.Set("offical-session", officialSession)
	r.Session.Set("userToken", r.Get("access_token").String())
	r.Response.RedirectTo("/")
}
