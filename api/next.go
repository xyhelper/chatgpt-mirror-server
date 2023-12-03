package api

import (
	backendapi "chatgpt-mirror-server/backend-api"
	"chatgpt-mirror-server/config"
	"chatgpt-mirror-server/utility"
	"net/http"
	"time"

	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
)

func Next(r *ghttp.Request) {
	ctx := r.Context()
	path := r.RequestURI
	userToken := r.Session.MustGet("userToken").String()
	if userToken == "" {
		r.Response.WriteStatus(401)
		return
	}
	officialAccessToken := backendapi.AccessTokenCache.MustGet(ctx, userToken).String()
	if officialAccessToken == "" {
		record, _, err := ChatgptSessionService.GetSessionByUserToken(ctx, userToken)
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
		officialSession := record["officialSession"].String()
		if officialSession == "" {
			r.Response.WriteStatus(http.StatusUnauthorized)
			return
		}
		officialAccessToken = utility.AccessTokenFormSession(officialSession)
		backendapi.AccessTokenCache.Set(ctx, userToken, officialAccessToken, time.Minute)
	}
	refreshCookie := gjson.New(officialAccessToken).Get("refreshToken").String()
	res, err := g.Client().SetCookie("refreshToken", refreshCookie).Get(ctx, config.CHATPROXY(ctx)+path)
	if err != nil {
		r.Response.WriteStatus(http.StatusUnauthorized)
		return
	}
	res.RawDump()
	resStr := res.ReadAllString()
	if res.StatusCode != http.StatusOK {
		r.Response.Status = res.StatusCode
		r.Response.Write(resStr)

		return
	}
	r.Response.Write(resStr)

}
