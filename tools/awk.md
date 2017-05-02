# AWK

* 可以用printf

```sh
awk '{printf "%-8s %-8s %-8s %-18s %-22s %-15s\n",$1,$2,$3,$4,$5,$6}' netstat.txt
```

* 只写条件时，{}里为{print}即{print $0}

```sh
awk '$6=="LISTEN" || NR==1' netstat.txt
```

* -F指定分格符

```sh
awk  -F: '{print $1,$3,$6}' /etc/passwd
```

* 按第6列重定向文件

```sh
awk 'NR!=1{print > $6}' netstat.txt
```

* 打印99乘法表

```sh
seq 9 | sed 'H;g' | awk -v RS='' '{for(i=1;i<=NF;i++)printf("%dx%d=%d%s", i, NR, i*NR, i==NR?"\n":"\t")}'
```

* -v可以传变量

```sh
awk -v name=light 'BEGIN {print name}'
```

* 打印某个域之后的所有域

```sh
# 第4个域后面所有域
awk '{for(i=4;i<=NF;i++) printf"%s ",$i} {print ""}' file.txt
# 问题：
# 1） 在NF不够4个的记录（行），将会打印出一个空行；
# 2） 在输出的结果中，每行结尾多了一个空格；

awk '{for(i=4;i<=NF;i++) printf"%s ",$i};NF>4 {print ""}' file.txt
awk 'NF>4 {for (i=4;i<=NF;i++) {printf $i" "}printf "\n"}' file.txt

```

* 按照文件1的key顺序输入文件2内容

```sh
awk -F, 'NR==FNR {r[$1] = $0; next} {print r[$1]}' file1 file2 > file3
```

* awk的内置变量相当实用啊。上网查了一下，做一下记录：

| 变量名      | 作用                                                                          |
|-------------|-------------------------------------------------------------------------------|
| $0          | 当前记录                                                                      |
| $1~$n       | 当前记录第n个字段，字段间由FS分隔                                             |
| FS          | 输入字段分隔土石方 默认空格                                                   |
| NF          | 当前记录中的字段个数，就是有多少列                                            |
| NR          | 已经读出的记录数，就是行号，从1开始                                           |
| RS          | 输入的记录分隔符，默认为换行                                                  |
| OFS         | 输出字段分隔符，默认也是空格                                                  |
| ORS         | 输出记录分隔符，默认为换行符                                                  |
| ARGC        | 命令行参数个数                                                                |
| ARGV        | 命令行参数数组                                                                |
| FILENAME    | 当前输入文件的名字                                                            |
| IGNORECASE  | 如果为真，则进行忽略大小写的匹配                                              |
| ARGIND      | 当前被处理的文件的ARGV标志符                                                  |
| CONVFMT     | 数字转换格式 %.6g                                                             |
| ENVIRON     | UNIX环境变量                                                                  |
| ERRNO       | UNIX系统错误消息                                                              |
| FIELDWIDTHS | 输入字段宽度的空白分隔字符串                                                  |
| FNR         | 也表示当前记录数，但是FNR的作用域只在一个文件内.如果重新打开文件,FNR会从1开始 |
| OFMT        | 数字的输出格式 %.6g                                                           |
| RSART       | 被匹配函数匹配的字符串首                                                      |
| RLENGTH     | 被匹配函数匹配的字符串长度                                                    |
| SUBSEP      | \034                                                                          |


