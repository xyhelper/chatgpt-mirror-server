package cmd

import (
	"chatgpt-mirror-server/config"
	"context"
	"time"

	"github.com/cool-team-official/cool-admin-go/cool"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gcmd"
	"github.com/gogf/gf/v2/os/gfile"
	"github.com/gogf/gf/v2/os/gsession"
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
			if !gfile.Exists("./data/sessions") {
				gfile.Mkdir("./data/sessions")
			}
			s.SetSessionStorage(gsession.NewStorageFile("./data/sessions", 3600*24*7*time.Second))
			s.SetSessionCookieMaxAge(3600 * 24 * 7 * time.Second)
			if config.PORT(ctx) != 0 {
				s.SetPort(config.PORT(ctx))
			}

			s.Run()
			return nil
		},
	}
)
