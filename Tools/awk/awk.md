# awk

* [[awk的内置变量 | awk-internal-var]]

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

