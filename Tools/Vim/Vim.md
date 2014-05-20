# Vim

Emacs是神的编辑器，Vim是编辑器之神

[[image/vim-logo.png | align=center]]

传说中的编辑器学习曲线。都比较容易看懂，但是Emacs的曲线太诡异，没有看明白。
[[image/vim-curves.jpg | align=center]]

## 基础知识

0. 经常看到的^M之类的符号，代表的ascii可以算出来。
比如^M，'M' - 64 = 13，
那么^M代表的就是\r。

0. normal模式下，vaw和viw的区别是有没有包含后面的空格

## 小技巧

0. [[显示vim当前环境变量 | vim-current-env]]

0. 发现g是很好用的命令。:h g可以看到不少好玩的东西，比如ga，gd，gf，g^，g$，gu，gj，gk，gq，gv，g-，g+。如果忘了哪个就看help吧。

0. 同样，\[也是个很好用的命令。:h \[可以看到不少好玩的东西，比如\[(，\[\[，\[{。有趣的是]是与\[对应的。

```vim
:w !sudo tee % "这条命令必须记得
```

```vim
:g/^\s*$/d "这个的实用价值也挺高
```

0. vim内置了grep，比较实用

0. `ctrl + R`是打开寄存器，在命令行下粘贴东西特别有用

0. :goto 3 跳到文件第3个字符

0. :options 这个命令不错，看各个选项的文档

0. :set iskeyword& 后面这个&表示恢复默认值

0. `ctrl + w` `K` 窗口上下内容互换

0. visual模式下，u转小写，U转大写，~大小写反转，J连接所有行

0. normal模式下，!{motion}{program}调用外部程序

0. 下面这个命令能反转整个文件的行
```vim
:global/^/m 0
```

0. 统计字数，`g``ctrl + G`，也可用在visual模式下。h count-item可以看到好玩的东西，比如
```vim
:%s/\<the\>/&/gn
```

0. normal模式下`q:`打开命令窗口

0. :e ++enc=utf8强制使用utf8来解码文件，:e ++ff=unix是指定换行，更多看:h ++enc

0. :set display=uhex 能在查看二进制文件时一些不可打印字符好看一些

0. normal模式`13go`能跳到文件第13个字节

0. insert模式下，`ctrl + v`能插入特殊字符，如`ctrl + v` `esc`插入一个escape字符，
`ctrl + v` `127`输入ascii值是127(del)的字符。
这种方法可以插入0-255所有字符，如果键入数字少于两个，vim会在遇到一个非数字字符的时候才终止这个命令。
要避免键入非数字字符才能让这个命令结束，可以在数字前加上一个或两个0来凑3个数，比如插入tab，`ctrl + v` 009。
还可以输入十六进制：`ctrl + v` `x7f`，八进制`ctrl + v` `o123`，
16bit数字`ctrl + v` `u1234`，
32it数字`ctrl + v` `u12345678`。

0. insert模式下，`ctrl + o`可以使用一条normal模式下的命令

0. :set virtualedit=all 可以让光标移动出行末，到空无一物的地方，这样在做表格的时候比较方便

0. `ctrl + a`自增，`ctrl + x`自减。
```vim
ls | vim -
```
这里的-告诉vim从标准输入读取编辑内容。

0. insert模式下`ctrl + t`和`ctrl + d`可以调节缩进

0. :undolist, g-, g+

0. :h debug-scripts

0. `g``ctrl + g`查看当前位置行数、列数、第几个词

0. `ctrl + g`前可以加数字，数字越大信息越详细

0. `[I`Vim将会显示include文件中匹配这个函数名的一个清单

0. windows下会有找不到pydoc的情况，这时写个bat放到path能找得到的目录下，内容是
```bat
@python D:\Python27\Lib\pydoc.py %*
```

0. 搜索所有打开的文件
```vim
:bufdo /patten/
```

0. 大小写切换

    | 命令                | 作用                                                            |
    | ------------------- | --------------------------------------------------------------- |
    | Vu                  | Lowercase line                                                  |
    | VU                  | Uppercase line                                                  |
    | g~~                 | Invert case                                                     |
    | vEU                 | Switch word to uppercase                                        |
    | vE~                 | Modify word case                                                |
    | ggguG               | Set all text to lowercase                                       |
    | :set ignorecase     | Ignore case in searches                                         |
    | :set smartcase      | Ignore case in searches excepted if an uppercase letter is used |
    | :%s/\<./\u&/g       | Sets first letter of each word to uppercase                     |
    | :%s/\<./\l&/g       | Sets first letter of each word to lowercase                     |
    | :%s/.*/\u&          | Sets first letter of each line to uppercase                     |
    | :%s/.*/\l&          | Sets first letter of each line to lowercase                     |


0. 最后一次设置ruler是在哪里
:verbose set ruler?

0. :verbose autocmd BufEnter

0. You're seeing unexpected maps or abbreviations. Why?
> You can use most define commands (:map, :abbreviate, :function, :autocmd, ...) on their own to list all defined maps, abbreviations, ... Or you can use them with the lhs of the definition to list all matching definitions. Some (like map and abbreviate) will allow partial matches. Add verbose in front and you can see where each item is defined. 

0. g? + 范围，ROT13加密

0. :%TOhtml，当前文件导出为html

0. `g;` `g,`，跳到前一个或后一个修改位置

0. ctags生成C++的tags
```sh
ctags -R --c++-kinds=+p --fields=+iaS --extra=+q .
```

0. In insert mode, pressing Ctrl-O switches to normal mode for one command, then switches back to insert mode when the command is finished.
```vim
" For example, do not write mappings like this:
:imap <F5> <Esc>:set number!<CR>a

" Instead, use:
:imap <F5> <C-o>:set number!<CR>
```

0. 编译Vim74
```sh
./configure --with-features=huge \
            --enable-perlinterp \
            --enable-pythoninterp \
            --enable-python3interp \
            --enable-rubyinterp \
            --enable-cscope \
            --enable-multibyte \
            --enable-sniff \
            --enable-fontset
```


## 学习资料


## 幽默

1.
> 世界上的程序员分三种，
>   一种使用 Emacs，
>   一种使用 Vim，
>   剩余的是其它。

2.
> 给人一条 Vim 命令，
> 他能折腾一晚上；
> 告诉他怎么自定义 Vim 命令，
> 他能捣腾一辈子.
>                -- Emacs

3.
> 商业化产品可能是有用的，
> 但最好的东西往往是免费的，
> 空气，水，Vim。

4.
> Q: How to generate a random string?
> A: Put a fresh student in front of vi and tell him to quit.

