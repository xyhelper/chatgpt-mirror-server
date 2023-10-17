package tasks

import (
	"chatgpt-mirror-server/config"
	"chatgpt-mirror-server/modules/chatgpt/model"
	"time"

	"github.com/cool-team-official/cool-admin-go/cool"
	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gcron"
	"github.com/gogf/gf/v2/os/gctx"
)

func init() {
	ctx := gctx.GetInitCtx()
	// 任务注册
	corn, err := gcron.AddSingleton(ctx, config.CRONINTERVAL(ctx), RefreshSession, "RefreshSession")
	if err != nil {
		panic(err)
	}
	g.Log().Info(ctx, "RefreshSession", "corn", corn, "cornInterval", config.CRONINTERVAL(ctx), "注册成功")
	go RefreshSession(ctx)
}

func RefreshSession(ctx g.Ctx) {
	m := model.NewChatgptSession()
	result, err := cool.DBM(m).OrderAsc("updateTime").All()
	if err != nil {
		g.Log().Error(ctx, "RefreshSession", err)
		return
	}
	for _, v := range result {
		g.Log().Info(ctx, "RefreshSession", v["email"], "start")
		getSessionUrl := config.CHATPROXY(ctx) + "/getsession"
		refreshCookie := gjson.New(v["officialSession"]).Get("refreshCookie").String()
		sessionVar := g.Client().SetHeader("authkey", config.AUTHKEY(ctx)).PostVar(ctx, getSessionUrl, g.Map{
			"username":      v["email"],
			"password":      v["password"],
			"authkey":       config.AUTHKEY(ctx),
			"refreshCookie": refreshCookie,
		})
		sessionJson := gjson.New(sessionVar)
		if sessionJson.Get("accessToken").String() == "" {
			g.Log().Error(ctx, "RefreshSession", v["email"], "get session error", sessionJson)
			continue
		}
		_, err = cool.DBM(m).Where("email=?", v["email"]).Update(g.Map{
			"officialSession": sessionJson.String(),
		})
		if err != nil {
			g.Log().Error(ctx, "RefreshSession", err)
			continue
		}
		g.Log().Info(ctx, "RefreshSession", v["email"], "success")
		// 延时5分钟
		time.Sleep(5 * time.Minute)
	}

}
