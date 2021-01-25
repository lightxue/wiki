# 算术

## let

语法

```bash
let <arithmetic expression>
```

例子

```bash
let a=5+4
echo $a # 9

let "a = 5 + 4"
echo $a # 9

let a++
echo $a # 10

let "a = 4 * 5"
echo $a # 20

let "a = $1 + 30"
echo $a # 30 + 参数1
```

常用运算操作

运算符      | 操作
---         | ---
+, -, /*, / | 加减乘除
var++       | 自增
var--       | 自减
%           | 取模

## expr

语法

```bash
expr item1 operator item2
```

例子

```bash
expr 5 + 4 # 9

expr "5 + 4" # 5 + 4

expr 5+4 # 5+4

expr 5 \* $1 # 20，当$1=4时

a=$( expr 10 - 3 )
echo $a # 7
```

## 双括号

语法

```bash
$(( expression ))
```

例子

```bash
a=$(( 4 + 5 ))
echo $a # 9

a=$((3+5))
echo $a # 8

b=$(( a + 3 ))
echo $b # 11

b=$(( $a + 4 ))
echo $b # 12

(( b++ ))
echo $b # 13

(( b += 3 ))
echo $b # 16

a=$(( 4 * 5 ))
echo $a # 20
```

## 字符串操作

语法

```bash
s='Hello World'

${#string} # len(stirng)
echo ${#s} # 11

${string:position} # string[position:]
${string:position:length} # string[position:position+length]
echo ${s:6} # World
echo ${s:6:2} # Wo

${string#substring} # 删除前面开始的最短匹配
${string%substring} # 删除末尾的最短匹配
echo ${s#Hel} # lo World
echo ${s#*l}  # lo World
echo ${s%ld}  # Hello Wor
echo ${s%l*}  # Hello Wor

${string#substring} # 删除前面开始的最长匹配
${string%substring} # 删除末尾的最长匹配
echo ${s##Hel} # lo World
echo ${s##*l}  # d
echo ${s%%ld}  # Hello Wor
echo ${s%%l*}  # He

${string-default} # 如果变量不存在，给默认值
${string:-default} # 如果变量不存在或空字符串，给默认值
empty=''
echo ${null-hello}   # hello
echo ${empty-hello}  #
echo ${null:-hello}  # hello
echo ${empty:-hello} # hello
```
