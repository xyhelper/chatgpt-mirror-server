package backendapi

import (
	"chatgpt-mirror-server/config"
	"chatgpt-mirror-server/modules/chatgpt/service"
	"chatgpt-mirror-server/utility"
	"net/http"
	"net/http/httputil"
	"net/url"
	"time"

	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"github.com/gogf/gf/v2/os/gcache"
)

var (
	ChatgptSessionService = service.NewChatgptSessionService()
	AccessTokenCache      = gcache.New()
)

func init() {
	s := g.Server()
	s.BindHandler("/backend-api/*any", ProxyAll)
	backendGroup := s.Group("/backend-api")
	backendGroup.POST("/accounts/data_export", NotFound) // 禁用导出
	backendGroup.POST("/payments/checkout", NotFound)    // 禁用支付
	backendGroup.ALL("/accounts/*/invites", NotFound)    // 禁用邀请
	// backendGroup.GET("/accounts/check/*any", accounts.Check)
	backendGroup.GET("/me", Me)

}

// NotFound 404
func NotFound(r *ghttp.Request) {
	r.Response.WriteStatus(http.StatusNotFound)
}

func ProxyAll(r *ghttp.Request) {
	ctx := r.GetCtx()
	// 获取header中的token Authorization: Bearer xxx 去掉Bearer
	userToken := ""
	Authorization := r.Header.Get("Authorization")
	if Authorization != "" {
		userToken = r.Header.Get("Authorization")[7:]
	}
	g.Log().Debug(ctx, "userToken", userToken)

	officialAccessToken := ""
	if userToken != "" {
		officialAccessToken = AccessTokenCache.MustGet(ctx, userToken).String()
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
			AccessTokenCache.Set(ctx, userToken, officialAccessToken, time.Minute)
		}
	}
	UpStream := config.CHATPROXY(ctx)
	u, _ := url.Parse(UpStream)
	proxy := httputil.NewSingleHostReverseProxy(u)
	proxy.ErrorHandler = func(writer http.ResponseWriter, request *http.Request, e error) {
		g.Log().Error(ctx, e)
		writer.WriteHeader(http.StatusBadGateway)
	}
	newreq := r.Request.Clone(ctx)
	newreq.URL.Host = u.Host
	newreq.URL.Scheme = u.Scheme
	newreq.Host = u.Host
	newreq.Header.Set("authkey", config.AUTHKEY(ctx))
	g.Log().Debug(ctx, "officialAccessToken", officialAccessToken)
	if officialAccessToken != "" {
		newreq.Header.Set("Authorization", "Bearer "+officialAccessToken)
	}

	// g.Dump(newreq.URL)
	proxy.ServeHTTP(r.Response.Writer.RawWriter(), newreq)

}
