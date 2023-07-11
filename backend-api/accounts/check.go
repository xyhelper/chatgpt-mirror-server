package accounts

import (
	"chatgpt-mirror-server/modules/chatgpt/service"

	"github.com/gogf/gf/v2/container/gset"
	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/net/ghttp"
)

var (
	ChatgptSessionService = service.NewChatgptSessionService()
)

func Check(r *ghttp.Request) {
	// ctx := r.GetCtx()

	// userToken := r.Header.Get("Authorization")[7:]

	// record, _, err := ChatgptSessionService.GetSessionByUserToken(ctx, userToken)
	// if err != nil {
	// 	g.Log().Error(ctx, err)
	// 	r.Response.WriteStatus(http.StatusUnauthorized)
	// 	return
	// }
	// if record.IsEmpty() {
	// 	g.Log().Error(ctx, "session is empty")
	// 	r.Response.WriteStatus(http.StatusUnauthorized)
	// 	return
	// }
	// officialSession := record["officialSession"].String()
	// if officialSession == "" {
	// 	r.Response.WriteStatus(http.StatusUnauthorized)
	// 	return
	// }
	// officialAccessToken := utility.AccessTokenFormSession(officialSession)
	// authHeader := "Bearer " + officialAccessToken
	// client := g.Client().SetBrowserMode(true)
	// client.SetHeader("Authorization", authHeader)
	// client.SetHeader("authkey", config.AUTHKEY(ctx))

	// res := client.GetVar(ctx, config.CHATPROXY(ctx)+"/backend-api/accounts/check/v4-2023-04-27")
	// resJson := gjson.New(res)
	jsonStr := `{
		"accounts": {
			"default": {
				"account": {
					"account_user_role": "account-owner",
					"account_user_id": "213407b0-0f76-4e58-b561-80cb7a41815e",
					"processor": {
						"a001": {
							"has_customer_object": false
						},
						"b001": {
							"has_transaction_history": true
						}
					},
					"account_id": "809f1f0b-aaf3-4911-baf9-876c5f9b9250",
					"is_most_recent_expired_subscription_gratis": false,
					"has_previously_paid_subscription": true,
					"name": null,
					"structure": "personal"
				},
				"features": [
					"dfw_inline_message_regen_comparison",
					"plugins_available",
					"model_switcher",
					"browsing_available",
					"code_interpreter_available",
					"shareable_links",
					"new_plugin_oauth_endpoint",
					"beta_features",
					"log_intercom_events",
					"arkose_enabled",
					"layout_may_2023",
					"infinite_scroll_history",
					"ios_disable_citation_menu",
					"dfw_message_feedback",
					"log_statsig_events"
				],
				"entitlement": {
					"subscription_id": "16e77ab1-6b2f-4b30-8d77-7cf0da3a0fd2",
					"has_active_subscription": true,
					"subscription_plan": "chatgptplusplan",
					"expires_at": "2024-07-24T18:14:02+00:00"
				},
				"last_active_subscription": {
					"subscription_id": "16e77ab1-6b2f-4b30-8d77-7cf0da3a0fd2",
					"purchase_origin_platform": "chatgpt_mobile_ios",
					"will_renew": true
				}
			}
		}
	}`
	resJson := gjson.New(jsonStr)

	features := resJson.Get("accounts.default.features").Array()
	featuresSet := gset.New()
	for _, feature := range features {
		featuresSet.Add(feature)
	}
	featuresSet.Remove("log_statsig_events")
	// if !r.Session.MustGet("userToken").IsEmpty() {
	// 	featuresSet.Add("arkose_enabled")
	// }
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
