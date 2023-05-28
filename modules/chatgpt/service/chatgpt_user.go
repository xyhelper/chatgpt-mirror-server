package service

import (
	"chatgpt-mirror-server/modules/chatgpt/model"

	"github.com/cool-team-official/cool-admin-go/cool"
	"github.com/gogf/gf/v2/frame/g"
)

type ChatgptUserService struct {
	*cool.Service
}

func NewChatgptUserService() *ChatgptUserService {
	return &ChatgptUserService{
		&cool.Service{
			Model: model.NewChatgptUser(),
			NotNullKey: g.MapStrStr{
				"userToken":  "UserToken不能为空",
				"expireTime": "过期时间不能为空",
			},
			UniqueKey: g.MapStrStr{
				"userToken": "UserToken不能重复",
			},
			PageQueryOp: &cool.QueryOp{
				FieldEQ:      []string{"userToken", "remark"},
				KeyWordField: []string{"userToken", "remark"},
			},
		},
	}
}
