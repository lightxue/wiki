# mysql

0. select * from table \G; 加了\G，列名就变成竖着放的。

0. show variables like '%char%'; 显示字符集设置

0. set names utf8相当于 <br>
  set character_set_client = utf8 用来设置客户端送给mysql服务器的数据的字符集 <br>
  set character_set_results = utf8 服务器返回查询结果时使用的字符集 <br>
  set character_set_connection = utf8 mysql服务器把客户端传来的数据，从character_set_client字符集转换成character_set_connection字符集

0. UPDATE tbl_name SET col_name1 = exp1, col_name2 = exp2;

0. DELETE FROM tbl_name WHERE col_name1 = exp1;

0. INSERT INTO tbl_name(col_name1, col_name2) VALUES(exp1, exp2);

0. ALTER TABLE tbl_name ADD col_name tinyint NOT NULL DEFAULT '0';

0. 不存在就插入，存在就更新
```sql
INSERT INTO tbl_name
  (col_name1, col_name2) VALUES(1, 2)
  ON DUPLICATE KEY UPDATE col_name2=1;
```


0. mysql连unix domain socket
```sh
mysql -S /tmp/mysql*.sock
```

0. mysql把结果输出到文件
    * 方案1，在shell里
    ```sh
    echo "select * from database.tbl_name;" | mysql > file_name
    ```

    * 方案2，在mysql里
    ```sql
    -- 文件会存在数据所在的位置，在datadir变量中，show variables like '%datadir%'可以看到，在/etc/my.conf里的datadir可配置
    select * INTO OUTFILE 'file_name' from tbl_name;
    ```

0. 自动更新时间
```sql
CREATE TABLE `t_table`
(
             `id`   INT(11) NOT NULL DEFAULT '0',
             `modify_time`    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
       PRIMARY KEY (`user_id`),
       UNIQUE KEY `id` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

```

0. `last_insert_id`只会返回当前链接的insert id，多链接并发操作不会互相影响。`last_insert_id`只会返回自动生成的id，比如`auto-increment`，自己插入的id不算。
