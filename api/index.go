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
	model := r.Get("model").String()
	props := `
  {
    "props": {
      "pageProps": {
        "user": {
          "id": "user-HUagcZWRoCLaYBjUWal6Ax9b",
          "name": "admin@openai.com",
          "email": "admin@openai.com",
          "image": "https://s.gravatar.com/avatar/e3602eeb8e3136bf37808604da5ba1d6?s=480\u0026r=pg\u0026d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fcn.png",
          "picture": "https://s.gravatar.com/avatar/e3602eeb8e3136bf37808604da5ba1d6?s=480\u0026r=pg\u0026d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fcn.png",
          "idp": "auth0",
          "iat": 1689474424,
          "mfa": false,
          "groups": [],
          "intercom_hash": "f4ded2c9ed2ba48edf71cea6c54a290a865faed484eb07c4e663c90c00a66f65"
        },
        "serviceStatus": {},
        "userCountry": "JP",
        "geoOk": true,
        "serviceAnnouncement": { "public": {}, "paid": {} },
        "isUserInCanPayGroup": true,
        "_sentryTraceData": "8ae977dd68be4a2294ff41e07ee64f18-8270fa23f457a348-1",
        "_sentryBaggage": "sentry-environment=production,sentry-release=3a086bf213a0eb4a539a25373d4fb7e214c61f07,sentry-transaction=%2F,sentry-public_key=33f79e998f93410882ecec1e57143840,sentry-trace_id=8ae977dd68be4a2294ff41e07ee64f18,sentry-sample_rate=1"
      },
      "__N_SSP": true
    },
    "page": "/",
    "query": {},
    "buildId": "8TObkIccovI1-nluVgBpN",
    "isFallback": false,
    "gssp": true,
    "scriptLoader": []
  }`
	propsJson := gjson.New(props)
	propsJson.Set("query.model", model)

	r.Response.WriteTpl("chat.html", g.Map{
		"props": propsJson,
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
			  "name": "admin@openai.com",
			  "email": "admin@openai.com",
			  "image": "https://s.gravatar.com/avatar/e3602eeb8e3136bf37808604da5ba1d6?s=480\u0026r=pg\u0026d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fcn.png",
			  "picture": "https://s.gravatar.com/avatar/e3602eeb8e3136bf37808604da5ba1d6?s=480\u0026r=pg\u0026d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fcn.png",
			  "idp": "auth0",
			  "iat": 1689474424,
			  "mfa": false,
			  "groups": [],
			  "intercom_hash": "f4ded2c9ed2ba48edf71cea6c54a290a865faed484eb07c4e663c90c00a66f65"
			},
			"serviceStatus": {},
			"userCountry": "JP",
			"geoOk": true,
			"serviceAnnouncement": { "paid": {}, "public": {} },
			"isUserInCanPayGroup": true,
			"_sentryTraceData": "e5db5813b133420392e225c2a490765d-8633d434a35afd92-1",
			"_sentryBaggage": "sentry-environment=production,sentry-release=3a086bf213a0eb4a539a25373d4fb7e214c61f07,sentry-transaction=%2Fc%2F%5BchatId%5D,sentry-public_key=33f79e998f93410882ecec1e57143840,sentry-trace_id=e5db5813b133420392e225c2a490765d,sentry-sample_rate=1"
		  },
		  "__N_SSP": true
		},
		"page": "/c/[chatId]",
		"query": { "chatId": "8f6c608a-642c-4a32-8519-f9bf633bb54a" },
		"buildId": "8TObkIccovI1-nluVgBpN",
		"isFallback": false,
		"gssp": true,
		"scriptLoader": []
	  }
	`
	propsJson := gjson.New(props)
	propsJson.Set("query.chatId", chatId)

	r.Response.WriteTpl("detail.html", g.Map{
		"props": propsJson,
	})
}
