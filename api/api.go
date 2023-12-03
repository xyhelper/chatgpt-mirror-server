package api

import (
	backendapi "chatgpt-mirror-server/backend-api"
	"chatgpt-mirror-server/config"
	"chatgpt-mirror-server/modules/chatgpt/service"
	"chatgpt-mirror-server/utility"
	"net/http"
	"net/http/httputil"
	"net/url"

	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"github.com/gogf/gf/v2/text/gstr"
)

var (
	ChatgptSessionService = service.NewChatgptSessionService()
)

func init() {
	s := g.Server()
	s.BindHandler("/api/*", Api2backend)
	// s.SetServerRoot("./resource/public/" + config.BuildDate)
	group := s.Group("/")
	group.GET("/", Index)
	group.GET("/c/:convId", C)
	group.GET("/g/:gizmoId", G)
	group.GET("/gpts/discovery", Discovery)
	group.GET("/gpts/editor", Editor)
	group.GET("/gpts/editor/:slug", Slug)
	group.GET("/g/:gizmoId/c/:convId", GC)
	group.GET(("/gpts/mine"), Mine)

	// s.BindHandler("/_next/data/*any", Next)

	group.GET("/login", Login)
	group.POST("/login", LoginPost)
	group.ALL("/login_token", LoginToken)
	group.GET("/auth/logout", Logout)
	group.GET("/api/auth/session", Session)
	group.GET("/public-api/conversation_limit", backendapi.ProxyAll)
	group.POST("/api/accounts/data_export", NotFound) // 禁用导出
	group.POST("/api/payments/checkout", NotFound)    // 禁用支付

}

// NotFound 404
func NotFound(r *ghttp.Request) {
	r.Response.WriteStatus(http.StatusNotFound)
}

func Api2backend(r *ghttp.Request) {
	ctx := r.GetCtx()
	userToken := r.Session.MustGet("userToken")
	record, _, err := ChatgptSessionService.GetSessionByUserToken(ctx, userToken.String())
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
	officialAccessToken := utility.AccessTokenFormSession(officialSession)

	UpStream := config.CHATPROXY(ctx)
	u, _ := url.Parse(UpStream)
	proxy := httputil.NewSingleHostReverseProxy(u)
	proxy.ErrorHandler = func(writer http.ResponseWriter, request *http.Request, e error) {
		g.Log().Error(ctx, e)
		writer.WriteHeader(http.StatusBadGateway)
	}
	newreq := r.Request.Clone(ctx)
	// 替换PATH /api 为 /backend-api
	newreq.URL.Path = gstr.Replace(newreq.URL.Path, "/api", "/backend-api", 1)
	newreq.URL.Host = u.Host
	newreq.URL.Scheme = u.Scheme
	newreq.Host = u.Host
	newreq.Header.Set("authkey", config.AUTHKEY(ctx))
	newreq.Header.Set("Authorization", "Bearer "+officialAccessToken)

	// g.Dump(newreq.URL)
	proxy.ServeHTTP(r.Response.Writer.RawWriter(), newreq)

}
