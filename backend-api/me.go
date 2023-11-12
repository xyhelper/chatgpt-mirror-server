package backendapi

import (
	"chatgpt-mirror-server/config"
	"net/http"

	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
)

func Me(r *ghttp.Request) {
	ctx := r.GetCtx()
	// 获取header中的token Authorization: Bearer xxx 去掉Bearer
	userToken := r.Header.Get("Authorization")[7:]
	record, expireTime, err := ChatgptSessionService.GetSessionByUserToken(ctx, userToken)
	if err != nil {
		g.Log().Error(ctx, err)
		r.Response.WriteStatus(http.StatusUnauthorized)
		return
	}
	if record.IsEmpty() {
		g.Log().Error(ctx, "session is empty")
		r.Response.WriteStatus(http.StatusUnauthorized)
		return
	}
	officialSession := gjson.New(record["officialSession"].String())
	AccessToken := officialSession.Get("accessToken").String()
	UpStream := config.CHATPROXY(ctx)
	// 请求后端接口
	res, err := g.Client().SetHeaderMap(map[string]string{
		"Authorization": "Bearer " + AccessToken,
		"User-Agent":    r.Header.Get("User-Agent"),
	}).Get(ctx, UpStream+"/backend-api/me")
	if err != nil {
		r.Response.WriteStatus(http.StatusUnauthorized)
		return
	}
	resStr := res.ReadAllString()
	if res.StatusCode != http.StatusOK {
		r.Response.Status = res.StatusCode
		r.Response.Write(resStr)

		return
	}
	resJson := gjson.New(resStr)
	resJson.Set("email", "admin@openai.com")
	resJson.Set("name", expireTime)
	resJson.Set("picture", "/avatars.png")
	resJson.Set("phone_number", "+1911")
	resJson.Set("orgs.data.0.description", "OpenAI")
	resJson.Dump()
	r.Response.WriteJson(resJson)
}
