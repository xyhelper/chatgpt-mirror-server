#!/bin/bash
# 清理容器及存储卷

# 出错退出
set -e

# 如果 REMOTE_CONTAINERS 为 true,则为容器开发环境,退出不执行
if [ "$REMOTE_CONTAINERS" = "true" ]; then
    echo "Container development environment, please change to local development environment to execute this script"
    echo "当前为容器开发环境,请切换到本地开发环境执行"
    exit 0
fi

# 读取 data/hostname.txt文件内容为容器ID
hostname=$(cat .devcontainer/data/hostname.txt)

# 如果hostname为空,则退出
if [ -z "$hostname" ]; then
    echo "hostname is empty, please check .devcontainer/data/hostname.txt"
    echo "hostname为空,请检查 .devcontainer/data/hostname.txt"
    exit 0
fi

# get image id by container id
imageId=$(docker inspect -f '{{.Image}}' $hostname)

# 清理容器
echo "Cleaning containers ..."
docker rm -v -f $hostname
echo "Cleaning containers ... done"

# 清理镜像
echo "Cleaning images ..."
docker image rm -f $imageId
echo "Cleaning images ... done"
