package backendapi

import (
	"chatgpt-mirror-server/backend-api/accounts"
	"chatgpt-mirror-server/config"
	"chatgpt-mirror-server/modules/chatgpt/service"
	"chatgpt-mirror-server/utility"
	"net/http"
	"net/http/httputil"
	"net/url"

	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
)

var (
	ChatgptSessionService = service.NewChatgptSessionService()
)

func init() {
	s := g.Server()
	s.BindHandler("/backend-api/*any", ProxyAll)
	backendGroup := s.Group("/backend-api")
	backendGroup.POST("/accounts/data_export", NotFound) // 禁用导出
	backendGroup.POST("/payments/checkout", NotFound)    // 禁用支付
	// backendGroup.GET("/accounts/check/*any", accounts.Check)

}

// NotFound 404
func NotFound(r *ghttp.Request) {
	r.Response.WriteStatus(http.StatusNotFound)
}

func ProxyAll(r *ghttp.Request) {
	ctx := r.GetCtx()
	// 获取header中的token Authorization: Bearer xxx 去掉Bearer
	userToken := r.Header.Get("Authorization")[7:]

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
	officialAccessToken := utility.AccessTokenFormSession(officialSession)

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
	newreq.Header.Set("Authorization", "Bearer "+officialAccessToken)

	// g.Dump(newreq.URL)
	proxy.ServeHTTP(r.Response.Writer.RawWriter(), newreq)

}
