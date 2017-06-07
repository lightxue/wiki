# bash

* 发现find的-print0配上xargs -0不错

```sh
    find . -name "*.cpp" -print0 | xargs -0 grep hello
```
当然上面也可以这么写

```sh
    find . name "*.cpp" -exec grep hello {} \;
```

* 在脚本里可以用$PPID来获取父进程pid

* `netstat -t`里有Recv-Q Send-Q，可以查看tcp的发送和接收缓存

* `netstat –tlp` 列出本机进程监听的端口号。（陈皓注：netstat -anop 可以显示侦听在这个端口号的进程）

* `ps -p PID -o lstart,cmd` 可以查看进程启动时间

* grep多行结果：`grep -A3 pat filename`，显示匹配行后3行，`grep -B3 pat filename`，显示匹配行前3行，`grep -C3 pat filename`，显示分别显示前后3行

* `grep -a`搜索二进制文件

* compgen 用法

| 命令       | 说明                                                |
|------------|-----------------------------------------------------|
| compgen -c | will list all the commands you could run.           |
| compgen -a | will list all the aliases you could run.            |
| compgen -b | will list all the built-ins you could run.          |
| compgen -k | will list all the keywords you could run.           |
| compgen -A | function will list all the functions you could run. |
| compgen -A | function -abck will list all the above in one go.   |

* `pstree -p`

* `pkill -f`, `pgrep -f`

* `ctrl + R`搜索输入过的命令

* `uniq -u`，only print unique line; uniq -d, only print duplicate lines

* xargs -I 'replace-str' echo 'replace-str is an argument'

* `bash -n script-filename` 检查语法错误，`bash -x script-filename` 每运行一行输出一行，设置上 `export PS4='+{$LINENO:${FUNCNAME[0]}}` 每行输出时能输出行号跟函数名

* `ls -i`，查看inode编号

* `paste file1 file2`，合并列的方式合并file1, file2

* `wait`是内部命令，wait %1或wait $PID来等待进程退出。没给参数就等待所有子进程

* `var=10 ./echo_var.sh`，在程序echo_var.sh运行时，环境变量会多出一个var，值是10

* 重新加载fstab

```sh
mount -a
```

* screen使用

```sh
screen -ls      # 显示screen列表
screen -r 编号  # 恢复screen
```

* 根据inode删除文件

```sh
ls -i
find . -inum 782263 -exec rm -i {} \;
```

* 查看线程数据的三种方法

```sh
1、top -H
# 手册中说：-H : Threads toggle
# 加上这个选项启动top，top一行显示一个线程。否则，它一行显示一个进程。

2、ps xH
# 手册中说：H Show threads as if they were processes
# 这样可以查看所有存在的线程。

3、ps -mp <PID>
# 手册中说：m Show threads after processes
# 这样可以查看一个进程起的线程数。
```

* 新建用户

```sh
sudo useradd -s /bin/bash -m -d /home/lightxue -c 'lightxue' -g root lightxue
```

* 时区设置

```sh
sudo cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

* 时间同步

```sh
/usr/sbin/ntpdate us.pool.ntp.org | logger -t NTP
```

* 时区设置

```sh
sudo cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

* 设备uuid

```sh
lsblk -o UUID /dev/sda1
```

* cp的两个参数：-p保留原来文件的owner, -P，如果是软连接，保持原样拷贝

* 所谓的glob模式是指shell所使用的简化了的正则表达式。星号（\*）匹配零个或多个任意字符；[abc]匹配任何一个列在方括号中的字符（这个例子要么匹配一个a，要么匹配一个b，要么匹配一个c）；问号（?）只匹配一个任意字符；如果在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配（比如[0-9]表示匹配所有0 到 9 的数字）。

* 删除但是进程还占用着的文件，由此可以找到对应的进程

```sh
lsof | grep deleted
```

* uptime开机时间

* 文件名编码转换

```sh
convmv -f gbk -t utf-8 --notest -r .
```

* ipcs查看，ipcrm删除：共享内存、信号量、队列

```sh
convmv -f gbk -t utf-8 --notest -r .
```

* 当前shell的pid

```sh
echo $$
```

* tar把软链接指向的内容也包上，加上-h参数

* 列出当前目录所有子目录

```sh
ls -d */
echo */, echo */*/
```

* 简单的计算器

```sh
calc(){ awk "BEGIN{ print $*  }" ; }
calc "8 * 99 / 4"
```

* 下载整个网站

```sh
wget --random-wait -r -p -e robots=off -U mozilla http://www.example.com
```

* date命令相关

```sh
# 1381235068转成时间字符串，如果不指定格式，+'%Y-%m-%d %H:%M:%S'可以不要
date -d @1381235068 +'%Y-%m-%d %H:%M:%S'
# '2013-10-08 20:24:28'转成时间戳
date -d '2013-10-08 20:24:28' '+%s'
# 当前时间的时间戳
date +%s
```

* watch命令可以周期性调用其他程序，全屏显示

* sudo刚开始出现的话，很有意思
> We trust you have received the usual lecture from the local System
> Administrator. It usually boils down to these three things:
>
>     #1) Respect the privacy of others.
>     #2) Think before you type.
>     #3) With great power comes great responsibility.

* 提示符

```sh
export PS1="\[\e[31;1m\]64bit_\[\e[31;1m\]\u\[\e[0m\]@\[\e[32;1m\]`/sbin/ifconfig eth1|grep "inet addr:"|cut -d: -f 2|cut -d" " -f1`\[\e[0m\]:\[\e[35;1m\]\w\[\e[0m\]\\$ "
```
* 软件连接最终指向的文件

```sh
readlink -f symbol-link-file-name
```

* 本地语言修改

```sh
export LC_ALL=zh_CN.UTF-8
```

* 当前脚本所在目录

```sh
cwd=$(dirname ${BASH_SOURCE[0]})
echo $cwd
```

* excect脚本如果不是交互下运行，最后不能用`interact`，要用`expect eof`

* top显示单个进程信息

```sh
top -p `pgrep process-name | tr "\\n" "," | sed 's/,$//'`
```

* for loop

```sh
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

* 用python实现`urldecode`和`urlencode`命令

```sh
$ alias urldecode='python -c "import sys, urllib as ul; \
    print ul.unquote_plus(sys.argv[1])"'

$ alias urlencode='python -c "import sys, urllib as ul; \
    print ul.quote_plus(sys.argv[1])"'
```

* 删除第一行

```sh
tail -n +2 "$FILE"
```

* 多行字符串

```sh
read -r -d '' MULTILINE << EOM
one
two
three
EOM
```

* `whence`可以查看`alias`的定义

* 给用户增加sudo权限

```sh
# 方法1
sudo usermod -aG sudo lightxue
# 方法2
sudo vi /etc/sudoers
```

