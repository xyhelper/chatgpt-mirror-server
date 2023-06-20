package service

import (
	"chatgpt-mirror-server/modules/chatgpt/model"

	"github.com/cool-team-official/cool-admin-go/cool"
	"github.com/gogf/gf/v2/container/garray"
	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gtime"
	"github.com/gogf/gf/v2/util/gconv"
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

// ModifyAfter 新增/删除/修改之后的操作
func (s *ChatgptUserService) ModifyAfter(ctx g.Ctx, method string, param map[string]interface{}) (err error) {
	g.Log().Debug(ctx, "ChatgptSessionService.ModifyAfter", method, param)
	if method == "Delete" {
		ids := garray.NewIntArrayFrom(gconv.Ints(param["ids"]))
		for _, id := range ids.Slice() {
			g.Log().Debug(ctx, "ChatgptSessionService.ModifyAfter", "userID", id)
			cool.DBM(model.NewChatgptSession()).Where("userID=?", id).Update(g.Map{"userID": 0})
		}
	}

	return
}

// Auth 验证用户
func (s *ChatgptUserService) Auth(ctx g.Ctx, accessToken string) (data interface{}, err error) {
	record, err := cool.DBM(s.Model).Where("userToken=?", accessToken).Where("expireTime>?", gconv.Time(gtime.Now())).One()
	if err != nil {
		return
	}
	if record.IsEmpty() {
		err = gerror.New("accessToken无效")
		return
	}
	data = record

	return
}
