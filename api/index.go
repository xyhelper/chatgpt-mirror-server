package api

import (
	"chatgpt-mirror-server/config"

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
          "id": "user-x5xxxxxxxxxx7",
          "name": "admin@openai.com",
          "email": "admin@openai.com",
          "image": "https://s.gravatar.com/avatar/558db47f25d89a95df170b4bde9fd72f?s=480\u0026r=pg\u0026d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fli.png",
          "picture": "https://s.gravatar.com/avatar/558db47f25d89a95df170b4bde9fd72f?s=480\u0026r=pg\u0026d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fli.png",
          "idp": "auth0",
          "iat": 1698495829,
          "mfa": false,
          "groups": [],
          "intercom_hash": "30fd0a0ada1c07ce526be7c3d54c22904b80fa7e2713d978630e979e4315cf67"
        },
        "serviceStatus": {},
        "userCountry": "US",
        "geoOk": true,
        "serviceAnnouncement": { "paid": {}, "public": {} },
        "serverPrimedAllowBrowserStorageValue": true,
        "canManageBrowserStorage": false,
        "ageVerificationDeadline": null,
        "showCookieConsentBanner": false,
        "isUserInCanPayGroup": true
      },
      "__N_SSP": true
    },
    "page": "/[[...default]]",
    "query": {},
    "buildId": "DxhyfP3OR5HFF69ve_LJq",
    "assetPrefix": "",
    "isFallback": false,
    "gssp": true,
    "scriptLoader": []
  }`
	propsJson := gjson.New(props)
	propsJson.Set("query.model", model)

	r.Response.WriteTpl("chat.html", g.Map{
		"props":     propsJson,
		"arkoseUrl": config.ArkoseUrl,
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
			"id": "user-x5xxxxxxxxxx7",
			"name": "admin@openai.com",
			"email": "admin@openai.com",
          "image": "https://s.gravatar.com/avatar/558db47f25d89a95df170b4bde9fd72f?s=480\u0026r=pg\u0026d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fli.png",
          "picture": "https://s.gravatar.com/avatar/558db47f25d89a95df170b4bde9fd72f?s=480\u0026r=pg\u0026d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fli.png",
          "idp": "auth0",
          "iat": 1698495829,
          "mfa": false,
          "groups": [],
          "intercom_hash": "30fd0a0ada1c07ce526be7c3d54c22904b80fa7e2713d978630e979e4315cf67"
        },
        "serviceStatus": {},
        "userCountry": "US",
        "geoOk": true,
        "serviceAnnouncement": { "public": {}, "paid": {} },
        "serverPrimedAllowBrowserStorageValue": true,
        "canManageBrowserStorage": false,
        "ageVerificationDeadline": null,
        "showCookieConsentBanner": false,
        "isUserInCanPayGroup": true
      },
      "__N_SSP": true
    },
    "page": "/[[...default]]",
    "query": { "default": ["c", "608abed0-32ac-4147-af49-739a8d05340f"] },
    "buildId": "DxhyfP3OR5HFF69ve_LJq",
    "assetPrefix": "",
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
