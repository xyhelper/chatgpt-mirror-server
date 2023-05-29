package utility

import "github.com/gogf/gf/v2/encoding/gjson"

func AccessTokenFormSession(session string) (accessToken string) {

	return gjson.New(session).Get("accessToken").String()
}
