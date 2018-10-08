# Bash

## 条件语句

TODO

## for循环

```bash
for i in 1 2 3 4 5
do
   echo "Welcome $i times"
done

for i in {1..5}
do
   echo "Welcome $i times"
done

echo "Bash version ${BASH_VERSION}..."
for i in {0..10..2}
  do
     echo "Welcome $i times"
 done

for i in $(seq 1 2 20)
do
   echo "Welcome $i times"
done

for (( c=1; c<=5; c++ ))
do
   echo "Welcome $c times"
done
```

## while

TODO

## 内置变量

变量名 | 含义
--- | ---
$0 | 脚本名
$# | 参数个数
$@ | 传入的所有参数
$? | 最后一个程序退出的状态码
$$ | 当前脚本的pid
$USER | 运行脚本的用户名
$SECONDS | 脚本运行到此的时间
$RANDOM | 随机数
$LINENO | 当前行号

