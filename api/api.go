package api

import (
	"chatgpt-mirror-server/modules/chatgpt/service"

	"github.com/gogf/gf/v2/frame/g"
)

var (
	ChatgptSessionService = service.NewChatgptSessionService()
)

func init() {
	s := g.Server()
	group := s.Group("/")
	group.GET("/", Index)
	group.GET("/login", Login)
	group.POST("/login", LoginPost)
	group.POST("/login_token", LoginToken)
}
