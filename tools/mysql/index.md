# MySQL

## 小技巧

* 显示字符集设置

```sql
show variables like '%char%';
```

* 改变字符集

```sql
set names utf8 -- 相当于

set character_set_client = utf8     -- 用来设置客户端送给mysql服务器的数据的字符集
set character_set_results = utf8    -- 服务器返回查询结果时使用的字符集
set character_set_connection = utf8 -- mysql服务器把客户端传来的数据，从character_set_client字符集转换成character_set_connection字符集
```

* mysql把结果输出到文件

    * 方案1，在shell里

    ```sh
    echo "select * from database.tbl_name;" | mysql > file_name
    ```

    * 方案2，在mysql里

    ```sql
    -- 文件会存在数据所在的位置，在datadir变量中，show variables like '%datadir%'可以看到，在/etc/my.conf里的datadir可配置
    select * INTO OUTFILE 'file_name' from tbl_name;
    ```

* `last_insert_id`只会返回当前链接的insert id，多链接并发操作不会互相影响。`last_insert_id`只会返回自动生成的id，比如`auto-increment`，自己插入的id不算。

* 查询当前事务级别

```sql
show variables like '%isola%';
```

```sql
select cast(create_time as date)
```

* 查找多个key

```sql
SELECT *
FROM tbl_name
WHERE col_name IN (1, 2, 3, 4, 5);
```

## SQL语句

* 数据基本操作

```sql
-- 创建数据库
CREATE DATABASE database_name DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
-- 更新记录
UPDATE tbl_name SET col_name1 = exp1, col_name2 = exp2;
-- 删除记录
DELETE FROM tbl_name WHERE col_name1 = exp1;
-- 插入记录
INSERT INTO tbl_name(col_name1, col_name2) VALUES(exp11, exp21), (exp12, exp22);
-- 表增加列
ALTER TABLE tbl_name ADD col_name tinyint NOT NULL DEFAULT '0';
-- 表删除列
ALTER TABLE tbl_name DROP COLUMN col_name;
-- 表修改列
ALTER TABLE tbl_name MODIFY COLUMN col_name tinyint NOT NULL DEFAULT '0';
-- 表重命名列
ALTER TABLE tbl_name RENAME COLUMN old_name to new_name;
-- 表修改列
ALTER TABLE tbl_name CHANGE COLUMN old_name new_name tinyint NOT NULL DEFAULT '0';
-- 表增加索引
ALTER TABLE tbl_name ADD INDEX idx_name(col1, col2, col2);
-- 表增加唯一索引
ALTER TABLE tbl_name ADD UNIQUE idx_name(col1, col2, col2);
-- 表修改引擎
ALTER TABLE tbl_name ENGINE=InnoDB;
```


* 不存在就插入，存在就更新

```sql
INSERT INTO tbl_name
  (col_name1, col_name2) VALUES(1, 2)
  ON DUPLICATE KEY UPDATE col_name2=1;
```

* 自动更新时间

```sql
CREATE TABLE `t_table`
(
    `id`   INT(11) NOT NULL DEFAULT '0',
    `modify_time`    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

```

* 各种`join`的图

![](./img/mysql-joins.png)

* `datetime`转成`date`

## 命令行

* mysql连unix domain socket

```bash
mysql -S /tmp/mysql*.sock
```
