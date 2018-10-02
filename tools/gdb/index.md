# GDB

- core dump大小不限制
```bash
ulimit -c unlimited
```

- 显示栈帧
```bash
bt full #显示局部变量
bt 3 # 开头3个栈帧
bt -3 # 最后3个栈帧
```

- 显示寄存器eax内容
```bash
p $eax
```

- 格式化输出
```bash
p/x $eax # 十六进制
p/d $eax # 十进制
p/u $eax # 无符号
p/o $eax # 八进制
p/t $eax # 二进制(two)
p/a $eax # 地址
p/c $eax # 字符(ASCII)
p/f $eax # 浮点小数
p/s $eax # 字符串
p/i $eax # 机器语言(仅在显示内存的x命令(eXamining)中可用)
```

- 显示汇编指令
```bash
x/10i $pc # pc所指地址开始的10条指令
disassemble # 当前整个函数
disassemble $pc # 计数器所在函数的整个函数
disassemble $pc $pc+50 # 开始到结束之间的部分
```

- ni(nexti)和si(stepi)逐条招行汇编指令，ni不进入函数体

- c(continue)可以加次数作参数
```bash
c 5 # 遇到断点5次不停止
```

- watch <表达式>，表达式指常量或变量等
```bash
watch var   # stop if change(write)
awatch var  # stop if access(read or write)
rwatch var  # stop if read
```

- 删除断点和监视
```bash
i b # info break
d 2 # delete 2
```

- 改变变量的值：set variable <变量>=<表达式>
```bash
set variable var = 10
set variable var = var2 + 10
set variable var = func(100) + 10
```

- 生成core dump，保存当前调试镜像
```bash
generate-core-file filename
```

- 查看进程信息
```bash
info proc
```

- attach到进程
```bash
attach 17606 # attach到pid为17606的进程上
detach # 用完分离
```

- 条件断点
```bash
b main if var == func(argc)
condition 3 if var == func(args) # 给断点3加上触发条件
```

- 忽略断点
```bash
ignore 3 4 # 忽略断点3 4次
```

- 跳出当前代码块
```bash
until
until func # 直到执行完func
```

- 执行完当前函数后暂停
```bash
finish
```

- 反复执行
```bash
continue 次数
step 次数
stepi 次数
next 次数
nexti 次数
```

- clear范围删除断点
```bash
clear func
clear lineno
clear file:lineno
clear file:func
clear breakno
```

- enable, disable启用和禁用断点

- 断点命令
```bash
command 2 # 2是断点的编号
>p var # 各种命令
>end
```

- 查看帧信息
```bash
frame    # 查看当前帧
frame 3  # 查看编号为3的帧
i frame 3 # 查看编号为3的帧
```

- 进程内存映射
```bash
i proc mapping
```

- 格式化输出
```bash
printf "%d\n", var
```

- 显示变量
```bash
info variables
```
