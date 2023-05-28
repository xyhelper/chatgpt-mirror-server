package cmd

import (
	"chatgpt-mirror-server/config"
	"context"

	"github.com/cool-team-official/cool-admin-go/cool"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gcmd"
)

var (
	Main = gcmd.Command{
		Name:  "main",
		Usage: "main",
		Brief: "start http server",
		Func: func(ctx context.Context, parser *gcmd.Parser) (err error) {
			if cool.IsRedisMode {
				go cool.ListenFunc(ctx)
			}

			s := g.Server()
			if config.PORT(ctx) != 0 {
				s.SetPort(config.PORT(ctx))
			}

			s.Run()
			return nil
		},
	}
)
