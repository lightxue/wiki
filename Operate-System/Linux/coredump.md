# coredump

## 生成core的方法和设置

在linux平台下，设置core dump文件生成的方法：

0. 在终端中输入`ulimit -c` 如果结果为0，说明当程序崩溃时，系统并不能生成core dump。

0. 使用`ulimit -c unlimited`命令，开启core dump功能，并且不限制生成core dump文件的大小。如果需要限制，加数字限制即可。`ulimit - c 1024`

0. 默认情况下，core dump生成的文件名为core，而且就在程序当前目录下。新的core会覆盖已存在的core。通过修改/proc/sys/kernel/core_uses_pid文件，可以将进程的pid作为作为扩展名，生成的core文件格式为core.xxx，其中xxx即为pid

0. 通过修改/proc/sys/kernel/core_pattern可以控制core文件保存位置和文件格式。例如：将所有的core文件生成到/corefile目录下，文件名的格式为core-命令名-pid-时间戳. echo "/corefile/core-%e-%p-%t" > /proc/sys/kernel/core_pattern


