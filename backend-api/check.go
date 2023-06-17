package backendapi

import "github.com/gogf/gf/v2/net/ghttp"

func Check(r *ghttp.Request) {
	data := `
	{
		"accounts": {
			"default": {
				"account": {
					"account_id": "a323bd05-db25-4e8f-9173-2f0c228cc8fa",
					"account_user_id": "d0322341-7ace-4484-b3f7-89b03e82b927",
					"account_user_role": "account-owner",
					"has_previously_paid_subscription": true,
					"is_most_recent_expired_subscription_gratis": true,
					"processor": {
						"a001": {
							"has_customer_object": true
						},
						"b001": {
							"has_transaction_history": true
						}
					}
				},
				"entitlement": {
					"expires_at": "2089-08-08T23:59:59+00:00",
					"has_active_subscription": true,
					"subscription_id": "d0dcb1fc-56aa-4cd9-90ef-37f1e03576d3",
					"subscription_plan": "chatgptplusplan"
				},
				"features": [
					"model_switcher",
					"model_preview",
					"system_message",
					"data_controls_enabled",
					"data_export_enabled",
					"show_existing_user_age_confirmation_modal",
					"bucketed_history",
					"priority_driven_models_list",
					"message_style_202305",
					"layout_may_2023",
					"plugins_available",
					"beta_features",
					"infinite_scroll_history",
					"browsing_available",
					"browsing_inner_monologue",
					"browsing_bing_branding",
					"shareable_links",
					"plugin_display_params",
					"tools3_dev",
					"tools2",
					"debug",
					"new_model_switcher_20230512"
				],
				"last_active_subscription": {
					"purchase_origin_platform": "chatgpt_mobile_ios",
					"subscription_id": "d0dcb1fc-56aa-4cd9-90ef-37f1e03576d3",
					"will_renew": true
				}
			}
		},
		"temp_ap_available_at": "2023-05-20T17:30:00+00:00"
	}`

	r.Response.WriteJsonExit(data)
}
