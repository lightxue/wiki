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

## 字符串长度

语法

```bash
${#variable}
```

例子

```bash
a='Hello World'
echo ${#a} # 11

b=4953
echo ${#b} # 4
```
