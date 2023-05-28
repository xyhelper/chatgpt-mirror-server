.PHONY: help
help: ## 查看帮助
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'


.PHONY: init
init: ## 初始化项目,用于在开发容器生成后配置一些常用镜像,如: golang, nodejs, docker
	@echo "初始化项目"
	@bash ./.devcontainer/scripts/init.sh
	@echo "初始化完成"

.PHONY: clean
clean: ## 清理项目,用于删除开发容器及存储卷,需在本地开发环境执行
	@echo "清理项目"
	@bash ./.devcontainer/scripts/clean.sh
	@echo "清理完成"

.PHONY: setmirror
setmirror: ## 设置国内镜像源,用于在开发容器生成后配置国内镜像源
	@echo "设置国内镜像源"
	@bash ./.devcontainer/scripts/setmirror.sh
	@echo "设置完成"
# 启动mysql
.PHONY: mysql-up
mysql-up: ## 启动mysql
	@echo "启动mysql"
	@docker-compose -f ./.devcontainer/docker-compose.yml up -d mysql

# 停止mysql
.PHONY: mysql-down
mysql-down: ## 停止mysql
	@echo "停止mysql"
	@docker-compose -f ./.devcontainer/docker-compose.yml stop mysql

# 备份mysql
.PHONY: mysql-backup
mysql-backup: ## 备份mysql
	@echo "备份mysql"
	@bash ./.devcontainer/devcontainer/scripts/mysql-backup.sh

# 启动redis
.PHONY: redis-up
redis-up: ## 启动redis
	@echo "启动redis"
	@docker-compose -f ./.devcontainer/docker-compose.yml up -d redis

# 停止redis
.PHONY: redis-down
redis-down: ## 停止redis
	@echo "停止redis"
	@docker-compose -f ./.devcontainer/docker-compose.yml stop redis
	
