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
			  "id": "user-xopenaiadmin",
			  "name": "admin@openai.com",
			  "email": "admin@openai.com",
			  "image": "https://s.gravatar.com/avatar/558db47f25d89a95df170b4bde9fd72f?s=480\u0026r=pg\u0026d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fli.png",
			  "picture": "https://s.gravatar.com/avatar/558db47f25d89a95df170b4bde9fd72f?s=480\u0026r=pg\u0026d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fli.png",
			  "idp": "auth0",
			  "iat": 1696479284,
			  "mfa": false,
			  "groups": [],
			  "intercom_hash": "30fd0a0ada1c07ce526be7c3d54c22904b80fa7e2713d978630e979e4315cf67"
			},
			"serviceStatus": {},
			"userCountry": "US",
			"geoOk": true,
			"serviceAnnouncement": { "public": {}, "paid": {} },
			"allowBrowserStorage": true,
			"canManageBrowserStorage": false,
			"ageVerificationDeadline": null,
			"isUserInCanPayGroup": true
		  },
		  "__N_SSP": true
		},
		"page": "/[[...default]]",
		"query": {},
		"buildId": "cdCfIN9NUpAX8XOZwcgjh",
		"assetPrefix": "https://cdn.oaistatic.com",
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
				"id": "user-xopenaiadmin",
				"name": "admin@openai.com",
				"email": "admin@openai.com",
			  "image": "https://s.gravatar.com/avatar/558db47f25d89a95df170b4bde9fd72f?s=480\u0026r=pg\u0026d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fli.png",
			  "picture": "https://s.gravatar.com/avatar/558db47f25d89a95df170b4bde9fd72f?s=480\u0026r=pg\u0026d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fli.png",
			  "idp": "auth0",
			  "iat": 1696479284,
			  "mfa": false,
			  "groups": [],
			  "intercom_hash": "30fd0a0ada1c07ce526be7c3d54c22904b80fa7e2713d978630e979e4315cf67"
			},
			"serviceStatus": {},
			"userCountry": "US",
			"geoOk": true,
			"serviceAnnouncement": { "paid": {}, "public": {} },
			"allowBrowserStorage": true,
			"canManageBrowserStorage": false,
			"ageVerificationDeadline": null,
			"isUserInCanPayGroup": true
		  },
		  "__N_SSP": true
		},
		"page": "/[[...default]]",
		"query": { "default": ["c", "7f7f1ae7-ff24-4178-95fc-454dcea308ab"] },
		"buildId": "cdCfIN9NUpAX8XOZwcgjh",
		"assetPrefix": "https://cdn.oaistatic.com",
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
