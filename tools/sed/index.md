# sed

## 小技巧

* 原文件替换

```bash
sed -i '.bak' 's/xxx/yyy/g' *.txt
sed -i '' 's/xxx/yyy/g' *.txt
```

* 打印99乘法表

```bash
seq 9 | sed 'H;g' | awk -v RS='' '{for(i=1;i<=NF;i++)printf("%dx%d=%d%s", i, NR, i*NR, i==NR?"\n":"\t")}'
```
## pattern space和hold space

### 用途

* pattern space是存储当前处理的行的缓冲区
* hold space可以拿来当临时存储空间

### sed工作流程

- sed先读入一行，去掉尾部换行符，存入pattern space，执行编辑命令。
- 处理完毕，除非加了-n参数，把现在的pattern space打印出来，在后边打印曾去掉的换行符。
- 把pattern space置空。
- 接着读下一行，处理下一行。

特殊情况，一个文件仅一行，尾部没换行，sed只打印，不会尾部加换行，但若在尾部又附加了输出，他会再补上那个换行。

### 操作

| 功能     | 命令   | 介绍                                                                                             |
|----------|--------|--------------------------------------------------------------------------------------------------|
| Hold     | h or H | Copy or append contents of pattern space to hold space.                                          |
| Get      | g or G | Copy or append contents of hold space to pattern space.                                          |
| Exchange | x      | Swap contents of hold space and pattern space.                                                   |
| Delete   | d      | Delete pattern space.  *Start next cycle*.                                                       |
| Delete   | D      | Delete  up  to  the  first  embedded newline in the pattern space.                               |
| \/       | \/     | *Start next cycle*, but skip reading from the input if there is still data in the pattern space. |
| Next     | n or N | Read/append the next line of input into the pattern space.                                       |

### 例子

* 交换第1行和第2行的内容

```bash
sed -n '1{h;n;x;H;x};p' filename
```

* 用sed实现tac的功能

```bash
sed -n -e '1!G;h;$p' filename
sed -e '1!G;h;$!d' filename
```

`1!G`表示除了第一行之外，都执行G操作。

`$p`表示对最后一行直接打印pattern space里的内容，其实就是直接打印最后一行的原文。

* 替换所有换行符，解释在[这里](http://stackoverflow.com/questions/1251999/how-can-i-replace-a-newline-n-using-sed)

```bash
sed ':a;N;$!ba;s/\n/ /g'
```

