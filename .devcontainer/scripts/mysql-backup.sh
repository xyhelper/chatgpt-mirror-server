#!/bin/bash
# MySQL backup script

set -e
BASE_DIR=$(pwd)
BACKUP_DIR="$BASE_DIR/data/backup"
BACKUPTIME=$(date +%Y%m%d-%H%M%S)


# 如果 REMOTE_CONTAINERS 不为 true,则非容器开发环境,退出不执行
if [ "$REMOTE_CONTAINERS" != "true" ]; then
    echo "Not container development environment, exit"
    exit 0
fi

# 如果 BACKUP_DIR 不存在,则创建
if [ ! -d "$BACKUP_DIR" ]; then
    echo "Create backup directory $BACKUP_DIR"
    mkdir -p "$BACKUP_DIR"
fi

# 备份所有库
docker compose exec mysql sh -c 'exec mysqldump --all-databases -uroot -p"$MYSQL_ROOT_PASSWORD"' >$BACKUP_DIR/all-$BACKUPTIME.sql

# 只备份cool数据库
# docker compose exec mysql sh -c 'exec mysqldump cool -uroot -p"$MYSQL_ROOT_PASSWORD"' >$BACKUP_DIR/cool-$BACKUPTIME.sql

# 删除7天前的备份文件
# find $BACKUP_DIR -mtime +7 -name "*.sql" -exec rm {} \; 