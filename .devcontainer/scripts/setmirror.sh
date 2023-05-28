#!/bin/bash
# 设置debian镜像源

# 出错时停止执行
set -e

# 如果 REMOTE_CONTAINERS 不为 true,则非容器开发环境,退出不执行
if [ "$REMOTE_CONTAINERS" != "true" ]; then
    echo "Not container development environment, please change to container development environment to execute this script"
    echo "当前非容器开发环境,请切换到容器开发环境执行"
    exit 0
fi

# 保存原始源
cp /etc/apt/sources.list /etc/apt/sources.list.bak

# 替换源

# 替换为163源
# sed -i 's/deb.debian.org/mirrors.163.com/g' /etc/apt/sources.list

# 替换为ustc源
# sed -i 's/deb.debian.org/mirrors.ustc.edu.cn/g' /etc/apt/sources.list

# 替换为aliyun源
sed -i 's@http://\(deb\|security\).debian.org@https://mirrors.aliyun.com@g' /etc/apt/sources.list

# 更新源
apt-get update