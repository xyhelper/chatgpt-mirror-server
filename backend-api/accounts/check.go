package accounts

import (
	"github.com/gogf/gf/v2/container/gset"
	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
)

func Check(r *ghttp.Request) {
	ctx := r.GetCtx()
	// g.Log().Info(ctx, "check", r.GetHost(), r.RequestURI, r.URL.String(), r.GetUrl())
	// g.Dump(r.Header)
	// 获取header中的authorization
	authHeader := r.Header.Get("Authorization")
	client := g.Client().SetBrowserMode(true)
	client.SetHeader("Authorization", authHeader)

	res := client.GetVar(ctx, "https://chat.openai.com/backend-api/accounts/check/v4-2023-04-27")
	resJson := gjson.New(res)

	features := resJson.Get("accounts.default.features").Array()
	featuresSet := gset.New()
	for _, feature := range features {
		featuresSet.Add(feature)
	}
	featuresSet.Remove("log_statsig_events")
	if r.Session.MustGet("offical-session").IsEmpty() {
		featuresSet.Remove("arkose_enabled")
	}
	featuresSet.Remove("log_intercom_events")
	featuresSet.Remove("shareable_links")
	featuresSet.Remove("dfw_inline_message_regen_comparison")
	featuresSet.Remove("dfw_message_feedback")

	featuresSet.Add("debug")
	featuresSet.Add("model_switcher")
	featuresSet.Add("new_model_switcher_20230512")
	featuresSet.Add("model_preview")
	featuresSet.Add("tools3_dev")
	featuresSet.Add("tools2")
	featuresSet.Add("tools3")
	featuresSet.Add("priority_driven_models_list")

	// g.Dump(featuresSet)
	resJson.Set("accounts.default.features", featuresSet.Slice())
	// g.Dump(resJson)

	r.Response.WriteJson(resJson)

}
