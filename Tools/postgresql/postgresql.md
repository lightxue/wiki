# PostgreSQL

# 常用命令
```
\q：退出
\h：查看SQL命令的解释，比如\h select。
\?：查看psql命令列表。
\l：列出所有数据库。
\c [database\_name]：连接其他数据库。
\d：列出当前数据库的所有表格。
\d [table\_name]：列出某一张表格的结构。
\du：列出所有用户。
\e：打开文本编辑器。
\conninfo：列出当前数据库和连接的信息。
```

# 连接数据库
```
psql -U dbuser -d exampledb -h 127.0.0.1 -p 5432
```

# ubuntu安装
```
sudo apt-get install postgresql-client
sudo apt-get install postgresql
```

# 新建用户
```
create user dbuser with password 'password';
```

# 新建数据库
```
create database exampledb owner dbuser;
grant all privileges on database exampledb to dbuser;
```
