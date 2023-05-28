package config

import (
	"github.com/gogf/gf/v2/container/garray"
	"github.com/gogf/gf/v2/frame/g"
)

func CHATPROXY(ctx g.Ctx) string {
	return g.Cfg().MustGetWithEnv(ctx, "CHATPROXY").String()
}

func AUTHKEY(ctx g.Ctx) string {
	g.Log().Debug(ctx, "config.AUTHKEY", g.Cfg().MustGetWithEnv(ctx, "AUTHKEY").String())
	return g.Cfg().MustGetWithEnv(ctx, "AUTHKEY").String()
}

func USERTOKENLOCK(ctx g.Ctx) bool {
	return g.Cfg().MustGetWithEnv(ctx, "USERTOKENLOCK").Bool()
}

var (
	DefaultModel = "text-davinci-002-render-sha"
	FreeModels   = garray.NewStrArray()
	PlusModels   = garray.NewStrArray()
)

func init() {
	FreeModels.Append("text-davinci-002-render-sha")
	FreeModels.Append("text-davinci-002-render-sha-mobile")
	PlusModels.Append("gpt-4")
	PlusModels.Append("gpt-4-browsing")
	PlusModels.Append("gpt-4-plugins")
	PlusModels.Append("gpt-4-mobile")
}

func PORT(ctx g.Ctx) int {
	g.Log().Debug(ctx, "config.PORT", g.Cfg().MustGetWithEnv(ctx, "PORT").Int())
	if g.Cfg().MustGetWithEnv(ctx, "PORT").Int() == 0 {
		return 8001
	}
	return g.Cfg().MustGetWithEnv(ctx, "PORT").Int()
}
