package backendapi

import "github.com/gogf/gf/v2/net/ghttp"

func Models(r *ghttp.Request) {
	data := `
	{
		"models": [
			{
				"slug": "text-davinci-002-render-sha",
				"max_tokens": 8191,
				"title": "Default (GPT-3.5)",
				"description": "Our fastest model, great for most everyday tasks.",
				"tags": [
					"gpt3.5"
				],
				"qualitative_properties": {
					"reasoning": [
						3,
						5
					],
					"speed": [
						5,
						5
					],
					"conciseness": [
						2,
						5
					]
				},
				"capabilities": {}
			},
			{
				"slug": "text-davinci-002-render-sha-browsing",
				"max_tokens": 8191,
				"title": "NewBing",
				"description": "Our fastest model, great for most everyday tasks.",
				"tags": [
					"gpt3.5"
				],
				"qualitative_properties": {
					"reasoning": [
						3,
						5
					],
					"speed": [
						5,
						5
					],
					"conciseness": [
						2,
						5
					]
				},
				"capabilities": {}
			},
			{
				"slug": "gpt-4",
				"max_tokens": 4095,
				"title": "GPT-4",
				"description": "Our most capable model, great for tasks that require creativity and advanced reasoning.",
				"tags": [
					"gpt4"
				],
				"qualitative_properties": {
					"reasoning": [
						5,
						5
					],
					"speed": [
						2,
						5
					],
					"conciseness": [
						4,
						5
					]
				},
				"capabilities": {}
			},
			{
				"slug": "gpt-4-browsing",
				"max_tokens": 4095,
				"title": "Web Browsing",
				"description": "An experimental model that knows when and how to browse the internet",
				"tags": [
					"gpt4",
					"beta"
				],
				"qualitative_properties": {},
				"capabilities": {},
				"enabled_tools": [
					"tools"
				]
			},
			{
				"slug": "gpt-4-plugins",
				"max_tokens": 8195,
				"title": "Plugins",
				"description": "An experimental model that knows when and how to use plugins",
				"tags": [
					"gpt4",
					"beta"
				],
				"qualitative_properties": {},
				"capabilities": {},
				"enabled_tools": [
					"tools3"
				]
			},
			{
				"slug": "text-davinci-002-render-sha-mobile",
				"max_tokens": 8191,
				"title": "Default (GPT-3.5) (Mobile)",
				"description": "Our fastest model, great for most everyday tasks.",
				"tags": [
					"mobile"
				],
				"qualitative_properties": {
					"reasoning": [
						3,
						5
					],
					"speed": [
						5,
						5
					],
					"conciseness": [
						2,
						5
					]
				},
				"capabilities": {}
			},
			{
				"slug": "gpt-4-mobile",
				"max_tokens": 4095,
				"title": "GPT-4 (Mobile, V2)",
				"description": "Our most capable model, great for tasks that require creativity and advanced reasoning.",
				"tags": [
					"mobile"
				],
				"qualitative_properties": {
					"reasoning": [
						5,
						5
					],
					"speed": [
						2,
						5
					],
					"conciseness": [
						4,
						5
					]
				},
				"capabilities": {}
			}
		],
		"categories": [
			{
				"category": "gpt_3.5",
				"human_category_name": "GPT-3.5",
				"subscription_level": "free",
				"default_model": "text-davinci-002-render-sha",
				"browsing_model": "text-davinci-002-render-sha-browsing",
				"code_interpreter_model": "text-davinci-002-render-sha-code-interpreter",
				"plugins_model": "text-davinci-002-render-sha-plugins"
			},
			{
				"category": "gpt_4",
				"human_category_name": "GPT-4",
				"subscription_level": "plus",
				"default_model": "gpt-4",
				"browsing_model": "gpt-4-browsing",
				"code_interpreter_model": "gpt-4-code-interpreter",
				"plugins_model": "gpt-4-plugins"
			}
		]
	}`

	r.Response.WriteJsonExit(data)
}
