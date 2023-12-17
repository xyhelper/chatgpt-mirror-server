package service

import (
	"chatgpt-mirror-server/config"
	"chatgpt-mirror-server/modules/chatgpt/model"

	"github.com/cool-team-official/cool-admin-go/cool"
	"github.com/gogf/gf/v2/database/gdb"
	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/errors/gerror"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/util/gconv"
)

type ChatgptSessionService struct {
	*cool.Service
}

func NewChatgptSessionService() *ChatgptSessionService {
	return &ChatgptSessionService{
		&cool.Service{
			Model: model.NewChatgptSession(),
			UniqueKey: g.MapStrStr{
				"email": "邮箱不能重复",
			},
			NotNullKey: g.MapStrStr{
				"email":    "邮箱不能为空",
				"password": "密码不能为空",
			},
			PageQueryOp: &cool.QueryOp{
				FieldEQ:      []string{"email", "password", "remark"},
				KeyWordField: []string{"email", "password", "remark"},
			},
		},
	}
}

// ModifyAfter 新增/删除/修改之后的操作
func (s *ChatgptSessionService) ModifyAfter(ctx g.Ctx, method string, param map[string]interface{}) (err error) {
	g.Log().Debug(ctx, "ChatgptSessionService.ModifyAfter", method, param)
	// 新增/修改 之后，更新session
	if method != "Add" && method != "Update" {
		return
	}
	officialSession := gjson.New(param["officialSession"])
	refreshCookie := officialSession.Get("refreshCookie").String()
	// 如果没有officialSession，就去获取
	g.Log().Debug(ctx, "ChatgptSessionService.ModifyAfter", "officialSession is empty")
	getSessionUrl := config.CHATPROXY(ctx) + "/getsession"
	sessionVar := g.Client().SetHeader("authkey", config.AUTHKEY(ctx)).SetCookie("arkoseToken", gconv.String(param["arkoseToken"])).PostVar(ctx, getSessionUrl, g.Map{
		"username":      param["email"],
		"password":      param["password"],
		"authkey":       config.AUTHKEY(ctx),
		"refreshCookie": refreshCookie,
	})
	sessionJson := gjson.New(sessionVar)
	if sessionJson.Get("accessToken").String() == "" {
		g.Log().Error(ctx, "ChatgptSessionService.ModifyAfter", "get session error", sessionJson)
		detail := sessionJson.Get("detail").String()
		if detail != "" {
			err = gerror.New(detail)
			cool.DBM(s.Model).Where("email=?", param["email"]).Update(g.Map{
				"officialSession": sessionJson.String(),
				"status":          0,
			})
		} else {
			err = gerror.New("get session error")
		}
		return
	}
	models := sessionJson.Get("models").Array()
	_, err = cool.DBM(s.Model).Where("email=?", param["email"]).Update(g.Map{
		"officialSession": sessionJson.String(),
		"isPlus":          len(models) > 1,
		"status":          1,
	})
	return

}

// GetSessionByUserToken 根据userToken获取session
func (s *ChatgptSessionService) GetSessionByUserToken(ctx g.Ctx, userToken string) (record gdb.Record, expireTime string, err error) {

	user, err := cool.DBM(model.NewChatgptUser()).Where("userToken", userToken).Where("expireTime>now()").One()
	if err != nil {
		return nil, "", err
	}
	if user.IsEmpty() {
		return nil, "", gerror.New("用户不存在或已过期")
	}
	userID := user["id"]
	expireTime = user["expireTime"].String()
	g.Log().Debug(ctx, "ChatgptSessionService.GetSessionByUserToken", "userID", userID)
	record, err = cool.DBM(model.NewChatgptSession()).Where("userID", userID).One()
	if err != nil {
		return nil, "", err
	}
	if record.IsEmpty() {
		// 随机选择一个 status=1  userID=0 的session
		record, err = cool.DBM(model.NewChatgptSession()).Where("status", 1).Where("userID", 0).Where("isPlus", user["isPlus"]).One()
		if err != nil {
			return nil, "", err
		}
		if record.IsEmpty() {
			return nil, "", gerror.New("没有可用的账号,请联系管理员")
		}
		_, err = cool.DBM(model.NewChatgptSession()).Where("id", record["id"]).Update(g.Map{
			"userID": userID,
		})
		if err != nil {
			return nil, "", err
		}
		// 清除历史会话
		ClearChatHistory(ctx, record["officialSession"].String())
	}

	return
}

// 清除历史会话
func ClearChatHistory(ctx g.Ctx, officalSession string) {
	if !config.CLEARCHATHISTORY(ctx) {
		return
	}
	g.Log().Debug(ctx, "ChatgptSessionService.ClearChatHistory", "officalSession", officalSession)
	clearUrl := config.CHATPROXY(ctx) + "/backend-api/conversations"
	accessToken := gjson.New(officalSession).Get("accessToken").String()
	// 请求内容 {"is_visible":false}
	client := g.Client()
	client.SetHeader("authkey", config.AUTHKEY(ctx))
	client.SetHeader("Authorization", "Bearer "+accessToken)
	client.SetHeader("Content-Type", "application/json")
	result := client.PostVar(ctx, clearUrl, g.Map{
		"is_visible": false,
	})
	g.Log().Debug(ctx, "ChatgptSessionService.ClearChatHistory", "result", result)

}
