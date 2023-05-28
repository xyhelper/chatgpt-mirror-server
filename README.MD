# Cool Admin Go Simple

## 使用

1. 安装依赖

```bash
go mod tidy
```

2. 运行

```bash
cool-tools run main.go
```

## 集成命令

Makefile 中集成了一些常用的命令，可以直接使用 `make` 命令执行。

```bash
clean                          清理项目,用于删除开发容器及存储卷,需在本地开发环境执行
help                           查看帮助
init                           初始化项目,用于在开发容器生成后配置一些常用镜像,如: golang, nodejs, docker
mysql-backup                   备份mysql
mysql-down                     停止mysql
mysql-up                       启动mysql
redis-down                     停止redis
redis-up                       启动redis
setmirror                      设置国内镜像源,用于在开发容器生成后配置国内镜像源
```
