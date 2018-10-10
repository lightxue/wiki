# Bash

## read

```bash
read var1
read var1 var2 var3 ... # 按空格切分输入
```

例子

```bash

read -p 'Username: ' uservar  # -p 指定prompt
read -sp 'Password: ' passvar # -s 不回显输入内容
echo
echo Thankyou $uservar we now have your login details
```

## 精品文章

* 简洁的教程：[Ryans Tutorials](https://ryanstutorials.net/bash-scripting-tutorial/)

