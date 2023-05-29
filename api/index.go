package api

import (
	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
)

func Index(r *ghttp.Request) {

	if r.Session.MustGet("userToken").IsEmpty() {
		r.Response.RedirectTo("/login")
		return
	}
	props := `
	{
		"props": {
			"pageProps": {
				"user": {
					"id": "user-HUagcZWRoCLaYBjUWal6Ax9b",
					"name": "admin",
					"email": "admin@openai.com",
					"image": "",
					"picture": "",
					"idp": "auth0",
					"iat": 2684985735,
					"mfa": false,
					"groups": [],
					"intercom_hash": "f4ded2c9ed2ba48edf71cea6c54a290a865faed484eb07c4e663c90c00a66f65"
				},
				"serviceStatus": {},
				"userCountry": "US",
				"geoOk": true,
				"serviceAnnouncement": {
					"paid": {},
					"public": {}
				},
				"isUserInCanPayGroup": true,
				"_sentryTraceData": "b8d327b969c64290bc9daca0ca255d6d-85fc20e54d888cea-1",
				"_sentryBaggage": "sentry-environment=production,sentry-release=5593c6f6aa15c68df3ba79cee2239262faee3022,sentry-transaction=%2F,sentry-public_key=33f79e998f93410882ecec1e57143840,sentry-trace_id=b8d327b969c64290bc9daca0ca255d6d,sentry-sample_rate=1"
			},
			"__N_SSP": true
		},
		"page": "/",
		"query": {},
		"buildId": "MYarkpkg17PeZHlffaxc-",
		"isFallback": false,
		"gssp": true,
		"scriptLoader": []
	}
	`

	r.Response.WriteTpl("chat.html", g.Map{
		"props":          props,
		"pandora_sentry": false,
		"api_prefix":     "",
	})
}

func C(r *ghttp.Request) {
	if r.Session.MustGet("userToken").IsEmpty() {
		r.Response.RedirectTo("/login")
		return
	}
	chatId := r.RequestURI[3:]

	g.Log().Debug(r.GetCtx(), "chatId", chatId)
	props := `
	{
        "props": {
          "pageProps": {
            "user": {
              "id": "user-HUagcZWRoCLaYBjUWal6Ax9b",
              "name": "admin",
              "email": "admin@openai.com",
              "image": "https://s.gravatar.com/avatar/e3602eeb8e3136bf37808604da5ba1d6?s=480\u0026r=pg\u0026d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fcn.png",
              "picture": "https://s.gravatar.com/avatar/e3602eeb8e3136bf37808604da5ba1d6?s=480\u0026r=pg\u0026d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fcn.png",
              "idp": "auth0",
              "iat": 1685028161,
              "mfa": false,
              "groups": [],
              "intercom_hash": "f4ded2c9ed2ba48edf71cea6c54a290a865faed484eb07c4e663c90c00a66f65"
            },
            "serviceStatus": {},
            "userCountry": "US",
            "geoOk": true,
            "serviceAnnouncement": { "paid": {}, "public": {} },
            "isUserInCanPayGroup": true,
            "_sentryTraceData": "9635e8a5ed8d42d694b65a665ffeab2a-b4bd3c4464a5db64-1",
            "_sentryBaggage": "sentry-environment=production,sentry-release=5593c6f6aa15c68df3ba79cee2239262faee3022,sentry-transaction=%2Fc%2F%5BchatId%5D,sentry-public_key=33f79e998f93410882ecec1e57143840,sentry-trace_id=9635e8a5ed8d42d694b65a665ffeab2a,sentry-sample_rate=1"
          },
          "__N_SSP": true
        },
        "page": "/c/[chatId]",
        "query": { "chatId": "b242a52c-2038-473b-8c46-5a141879203a" },
        "buildId": "MYarkpkg17PeZHlffaxc-",
        "isFallback": false,
        "gssp": true,
        "scriptLoader": []
      }
	`
	propsJson := gjson.New(props)
	propsJson.Set("query.chatId", chatId)
	g.Dump(propsJson)
	r.Response.WriteTpl("detail.html", g.Map{
		"props":          propsJson,
		"pandora_sentry": false,
		"api_prefix":     "",
	})
}
