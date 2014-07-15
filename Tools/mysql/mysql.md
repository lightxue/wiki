# mysql

0. select * from table \G; 加了\G，列名就变成竖着放的。

0. show variables like '%char%'; 显示字符集设置

0. set names utf8相当于 <br>
  set character_set_client = utf8 用来设置客户端送给mysql服务器的数据的字符集 <br>
  set character_set_results = utf8 服务器返回查询结果时使用的字符集 <br>
  set character_set_connection = utf8 mysql服务器把客户端传来的数据，从character_set_client字符集转换成character_set_connection字符集

0. update tle_name set col_name1 = exp1, col_name2 = exp2;

0. delete from tbl_name where col_name1 = exp1;

0. insert into tbl_name(col_name1, col_name2) values(exp1, exp2);

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

