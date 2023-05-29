package api

import (
	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/net/ghttp"
)

func ConversationLimit(r *ghttp.Request) {
	jsonStr := `
 {
	"message_cap": 25,
	"message_cap_window": 180,
	"message_disclaimer": {
	  "textarea": "GPT-4 currently has a cap of 25 messages every 3 hours.",
	  "model-switcher": "You've reached the GPT-4 cap, which gives all ChatGPT Plus users a chance to try the model.\n\nPlease check back soon."
	}
  }
  
 `
	r.Response.WriteJsonExit(gjson.New(jsonStr))

}
