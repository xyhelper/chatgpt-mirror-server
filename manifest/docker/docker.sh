#!/bin/bash

# This shell is executed before docker build.
# 显示当前目录
# 如果 frontend/dist 目录不存在,则编译前端
if [ ! -d "frontend/dist" ]; then
    echo "Building frontend ..."
    cd frontend && yarn build && cd ..
else
    echo "Frontend build directory exists, skip building frontend"
fi






