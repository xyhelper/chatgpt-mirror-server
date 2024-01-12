package publicapi

import "github.com/gogf/gf/v2/frame/g"

func init() {
	s := g.Server()
	publicApiGroup := s.Group("/public-api")
	publicApiGroup.ALL("/*", ProxyPublic)
}
