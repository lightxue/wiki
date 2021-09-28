# Linux程序调试与性能分析

2012年9月10日听lanshou的讲座，这里梳理一下。

## 静态分析

查看二进制程序工具
- `objdump`查看二进制文件
- `readelf`查看elf二进制文件
- `nm`查看符号表
- `strings`查看字符串
- `strip`去除符号表

可以去`/proc/pid/maps`看进程内存逻辑空间布局，`pmap`命令也可以看

编译时.a一般放.o后面；底层库放在上层库后面(如果相互依赖，可以a.a b.a a.a这么放)；适当使用.a可以加速链接，避免目标文件不必要的增大

`man ld.so`, `man ldconfig` 看这两个man去了解一下动态链接

## 运行阶段

`printf`常用技巧
- 语句中使用：`__ FILE__`、`__ FUNCTION__`、`__ LINE__`
- 用自定义宏代替`printf`本身
- 输出乱码导致屏幕错乱的处理：执行`reset`命令，还不行就只有重新login了
- 用fprintf(stderr...)/cerr，不用printf/cout，以免缓存问题而在ssh或是多进程线程看不到，或是debug信息与正常输出信息混杂在一起

gdb常用技巧
- `watch`设定监控断点(修改指定变量时中断)。gdb会在离开函数时自动删除对自动变量的监控。为了对一些变量更好的监控，watch地址会比watch变量名更好一些
- `attach <pid>`能attach已经运行的进程，`gdb -p <pid>`也可以
- core文件使用`gdb program core`

对于错误难以重现，难以生成core文件，没有调试信息的情况，可以捕获SIGSEGV/SIGBUS，在信号处理函数中log下关键信息

对于栈溢出的bug，可以用gcc中堆栈保护技术来检测问题出现的地方。gcc4.1中有三个与堆栈保护有关的编译选项：
- `-fstack-protector`
- `-fstack-protector-all`
- `-fno-stack-protector`

错误难以重现，运营中的系统没有调试信息，负载高，直接log性能低的情况，可以用内存log的方法。原理是：
- log时不写磁盘，而是写内存
- 发现错误时才把log从内存写入磁盘
- 需要使用共享内存
- log下整个请求包，及主要处理流程
- 必要时重放请求包来重现

一定规模的集群系统，逻辑复杂，涉及多台机器，错误难以重现的情况，用远程log。把包发到logserver集中存储，配合染色机制

valgrind是套Linux下开源仿真调试工具

## 性能分析

性能分析步骤
- 确定运行时间主要花在用户态还是内核态
- 如果是内核态，用`strace`
- 如果是用户态，用`gprof`
- 另外可以使用其他工具(比如`ltrace`/`valgrind`等)辅助

时间分析工具：
- `time`
- `sar -x`
- `cat /proc/pid/stat`

`strace`重要参数：
- `-c`计算各个系统调用累计占用的时间
- `-T`, `-tt`显示单个系统调用的开始时间、执行时间

gprof使用注意
- `gcc -pg -g`
- 不能strip
- 必须正常途径退出(exit, main返回)，不能`kill -9`
- 有时不太准，数据量大和运行时间长的时候好一些
- 可以c为函数进行性能分析，libc_p.a(pgc -lc_p)

系统整体性能
- `vmstat`
- `iostat`(通常用法`iostat -x`)
- `sar`(`sar -x` 或 `sar -d -p`)
- `top`
- `free`
- `netstat`

## 学习方法
- man
    * man 5 proc
    * man strace
    * man ld.so; man ldconfig
- info
    * info info
    * info gcc
    * info gprof
    * info gdb
- google
- 测试程序


