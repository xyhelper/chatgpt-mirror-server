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
			  "id": "user-x60109AdOz2vzAGAaUlSPH77",
			  "name": "admin@openai.com",
			  "email": "admin@openai.com",
			  "image": "https://s.gravatar.com/avatar/558db47f25d89a95df170b4bde9fd72f?s=480\u0026r=pg\u0026d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fad.png",
			  "picture": "https://s.gravatar.com/avatar/558db47f25d89a95df170b4bde9fd72f?s=480\u0026r=pg\u0026d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fad.png",
			  "idp": "auth0",
			  "iat": 1691515306,
			  "mfa": false,
			  "groups": [],
			  "intercom_hash": "30fd0a0ada1c07ce526be7c3d54c22904b80fa7e2713d978630e979e4315cf67"
			},
			"serviceStatus": {},
			"userCountry": "US",
			"geoOk": true,
			"serviceAnnouncement": { "paid": {}, "public": {} },
			"isUserInCanPayGroup": true,
			"_sentryTraceData": "106475cec7fd4dde89a553f6de7fbbb8-822f426ebc676489-1",
			"_sentryBaggage": "sentry-environment=production,sentry-release=3eca9cfc18cd9387a5d91b928a2591648f413128,sentry-transaction=%2F%5B%5B...default%5D%5D,sentry-public_key=33f79e998f93410882ecec1e57143840,sentry-trace_id=106475cec7fd4dde89a553f6de7fbbb8,sentry-sample_rate=1"
		  },
		  "__N_SSP": true
		},
		"page": "/[[...default]]",
		"query": {},
		"buildId": "oDTsXIohP85MnLZj7TlaB",
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
			  "id": "user-x60109AdOz2vzAGAaUlSPH77",
			  "name": "admin@openai.com",
			  "email": "admin@openai.com",
			  "image": "https://s.gravatar.com/avatar/558db47f25d89a95df170b4bde9fd72f?s=480\u0026r=pg\u0026d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fad.png",
			  "picture": "https://s.gravatar.com/avatar/558db47f25d89a95df170b4bde9fd72f?s=480\u0026r=pg\u0026d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fad.png",
			  "idp": "auth0",
			  "iat": 1691515306,
			  "mfa": false,
			  "groups": [],
			  "intercom_hash": "30fd0a0ada1c07ce526be7c3d54c22904b80fa7e2713d978630e979e4315cf67"
			},
			"serviceStatus": {},
			"userCountry": "US",
			"geoOk": true,
			"serviceAnnouncement": { "public": {}, "paid": {} },
			"isUserInCanPayGroup": true,
			"_sentryTraceData": "b61140614a8c45b88d6ee7fb9e351b65-81dc74700dff0f99-1",
			"_sentryBaggage": "sentry-environment=production,sentry-release=3eca9cfc18cd9387a5d91b928a2591648f413128,sentry-transaction=%2F%5B%5B...default%5D%5D,sentry-public_key=33f79e998f93410882ecec1e57143840,sentry-trace_id=b61140614a8c45b88d6ee7fb9e351b65,sentry-sample_rate=1"
		  },
		  "__N_SSP": true
		},
		"page": "/[[...default]]",
		"query": { "default": ["c", "657f7b51-e288-4dbe-ab79-78950022be61"] },
		"buildId": "oDTsXIohP85MnLZj7TlaB",
		"isFallback": false,
		"gssp": true,
		"scriptLoader": []
	  }
	`
	propsJson := gjson.New(props)
	propsJson.Set("query.query.default.1", chatId)

	r.Response.WriteTpl("detail.html", g.Map{
		"props": propsJson,
	})
}
