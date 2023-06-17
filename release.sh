#!/bin/bash

set -e

gf build main.go -a amd64 -s linux
gf docker main.go -t registry.cn-beijing.aliyuncs.com/xyhelper/chatgpt-mirror-server:latest
# 修改镜像标签为当前日期时间
time=$(date "+%Y%m%d%H%M%S")
docker tag registry.cn-beijing.aliyuncs.com/xyhelper/chatgpt-mirror-server:latest registry.cn-beijing.aliyuncs.com/xyhelper/chatgpt-mirror-server:$time
# 推送镜像到docker hub
docker push registry.cn-beijing.aliyuncs.com/xyhelper/chatgpt-mirror-server:latest
docker push registry.cn-beijing.aliyuncs.com/xyhelper/chatgpt-mirror-server:$time