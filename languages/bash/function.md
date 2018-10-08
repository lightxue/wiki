# 函数

## 定义

```bash
print_something () {
    echo Hello I am a function
}
# 或者
function print_something () {
    echo Hello I am a function
}

# 调用
print_something
```

## 参数

按位置获取`$1`, `$2`...

```bash
print_something () {
    echo Hello $1
}

# 调用
print_something Mars
```

## 返回值

只能返回状态码。`return`返回，`$?`获取上一个命令返回的状态码

```bash
print_something () {
echo Hello $1
    return 5
}

# 调用
print_something Mars
echo The previous function has a return value of $?
```

## 变量作用域

默认是**全局**的，使用`local`关键字变成局部变量

```bash
var_change () {
    local var1='local 1'
    echo Inside function: var1 is $var1 : var2 is $var2
    var1='changed again'
    var2='2 changed again'
}

var1='global 1'
var2='global 2'

echo Before function call: var1 is $var1 : var2 is $var2

var_change

echo After function call: var1 is $var1 : var2 is $var2

# 运行结果
# Before function call: var1 is global 1 : var2 is global 2
# Inside function: var1 is local 1 : var2 is global 2
# After function call: var1 is global 1 : var2 is 2 changed again
```

