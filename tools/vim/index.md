# Vim

Emacs是神的编辑器，Vim是编辑器之神

<!--![](./img/vim-logo.png)-->

传说中的编辑器学习曲线。都比较容易看懂，但是Emacs的曲线太诡异，没有看明白。
![](./img/vim-curves.jpg)

## 基础知识

- 经常看到的^M之类的符号，代表的ascii可以算出来。
比如^M，'M' - 64 = 13，
那么^M代表的就是\r。

- normal模式下，vaw和viw的区别是有没有包含后面的空格

## 小技巧

- 发现g是很好用的命令。:h g可以看到不少好玩的东西，比如gi，ga，gd，gf，g^，g$，gu，gj，gk，gq，gv，g-，g+。如果忘了哪个就看help吧。

- 同样，\[也是个很好用的命令。:h \[可以看到不少好玩的东西，比如\[(，\[\[，\[{。有趣的是]是与\[对应的。

```vim
:w !sudo tee % "这条命令必须记得
```

```vim
:g/^\s*$/d "这个的实用价值也挺高
```

- vim内置了grep，比较实用

- `ctrl + R`是打开寄存器，在命令行下粘贴东西特别有用

- :goto 3 跳到文件第3个字符

- :options 这个命令不错，看各个选项的文档

- :set iskeyword& 后面这个&表示恢复默认值

- `ctrl + w` `K` 窗口上下内容互换

- visual模式下，u转小写，U转大写，~大小写反转，J连接所有行

- normal模式下，!{motion}{program}调用外部程序

- 下面这个命令能反转整个文件的行

```vim
:global/^/m 0
```

- 统计字数，`g``ctrl + G`，也可用在visual模式下。h count-item可以看到好玩的东西，比如

```vim
:%s/\<the\>/&/gn
```

- normal模式下`q:`打开命令窗口

- :e ++enc=utf8强制使用utf8来解码文件，:e ++ff=unix是指定换行，更多看:h ++enc

- :set display=uhex 能在查看二进制文件时一些不可打印字符好看一些

- normal模式`13go`能跳到文件第13个字节

- insert模式下，`ctrl + v`能插入特殊字符，如`ctrl + v` `esc`插入一个escape字符，
`ctrl + v` `127`输入ascii值是127(del)的字符。
这种方法可以插入0-255所有字符，如果键入数字少于两个，vim会在遇到一个非数字字符的时候才终止这个命令。
要避免键入非数字字符才能让这个命令结束，可以在数字前加上一个或两个0来凑3个数，比如插入tab，`ctrl + v` 009。
还可以输入十六进制：`ctrl + v` `x7f`，八进制`ctrl + v` `o123`，
16bit数字`ctrl + v` `u1234`，
32it数字`ctrl + v` `u12345678`。

- insert模式下，`ctrl + o`可以使用一条normal模式下的命令

- :set virtualedit=all 可以让光标移动出行末，到空无一物的地方，这样在做表格的时候比较方便

- `ctrl + a`自增，`ctrl + x`自减。

-  标准输出到vim。这里的`-`告诉vim从标准输入读取编辑内容。
```bash
ls | vim -
```


- insert模式下`ctrl + t`和`ctrl + d`可以调节缩进

- :undolist, g-, g+

- :h debug-scripts

- `g``ctrl + g`查看当前位置行数、列数、第几个词

- `ctrl + g`前可以加数字，数字越大信息越详细

- `[I`Vim将会显示include文件中匹配这个函数名的一个清单

- windows下会有找不到pydoc的情况，这时写个bat放到path能找得到的目录下，内容是

```batch
@python D:\Python27\Lib\pydoc.py %*
```

- 搜索所有打开的文件
```vim
:bufdo /patten/
```

- 大小写切换

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


- 最后一次设置ruler是在哪里
:verbose set ruler?

- :verbose autocmd BufEnter

- You're seeing unexpected maps or abbreviations. Why?
> You can use most define commands (:map, :abbreviate, :function, :autocmd, ...) on their own to list all defined maps, abbreviations, ... Or you can use them with the lhs of the definition to list all matching definitions. Some (like map and abbreviate) will allow partial matches. Add verbose in front and you can see where each item is defined. 

- g? + 范围，ROT13加密

- :%TOhtml，当前文件导出为html

- `g;` `g,`，跳到前一个或后一个修改位置

- ctags生成C++的tags
```bash
ctags -R --c++-kinds=+p --fields=+iaS --extra=+q .
```

- In insert mode, pressing Ctrl-O switches to normal mode for one command, then switches back to insert mode when the command is finished.
```vim
" For example, do not write mappings like this:
:imap <F5> <Esc>:set number!<CR>a

" Instead, use:
:imap <F5> <C-o>:set number!<CR>
```

- 编译Vim74
```bash
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

- vimscript用户手册
```bash
:help usr_41.txt
```

- 命令模式下`<C-R><C-W>`, 输出当前光标所在的单词

- 外部命令的输出导到当前的buffer
```bash
:r !cmd
```

- 从右到左展示，字符为单位左右翻转
```bash
:set rl!
```

- 列合并(参考[这里](http://stackoverflow.com/questions/10760326/merge-multiple-lines-two-blocks-in-vim/10760494#10760494))
```bash
把第5-8行的文本作为第1-4行的最后一列
:5,8del | let l=split(@") | 1,4s/$/\=remove(l,0)/
```

- `:h magic`，用`\v`、`\m`、`\M`、`\M`，控制使用正则的程度，very magic, magic, no magic, very no magic

- http://vimawesome.com/ 淘插件的好地方

- 垂直diff
```bash
vert diffsplit file2
```

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

5.[vi之歌](http://www.gnu.org/fun/jokes/vi.song.html)
> Addicted To vi
> (with apologies to Robert Palmer)
>
> You press the keys with no effect,
> Your mode is not correct.
> The screen blurs, your fingers shake;
> You forgot to press escape.
> Can't insert, can't delete,
> Cursor keys won't repeat.
> You try to quit, but can't leave,
> An extra "bang" is all you need.
>
> You think it's neat to type an "a" or an "i"--
> Oh yeah?
> You won't look at emacs, no you'd just rather die
> You know you're gonna have to face it;
> You're addicted to vi!
>
> You edit files one at a time;
> That doesn't seem too out of line?
> You don't think of keys to bind--
> A meta key would blow your mind.
> H, J, K, L?  You're not annoyed?
> Expressions must be a Joy!
> Just press "f", or is it "t"?
> Maybe "n", or just "g"?
>
> Oh--You think it's neat to type an "a" or an "i"--
> Oh yeah?
> You won't look at emacs, no you'd just rather die
> You know you're gonna have to face it;
> You're addicted to vi!
>
> Might as well face it,
> You're addicted to vi!
>
> You press the keys without effect,
> Your life is now a wreck.
> What a waste!  Such a shame!
> And all you have is vi to blame.
>
> Oh--You think it's neat to type an "a" or an "i"--
> Oh yeah?
> You won't look at emacs, no you'd just rather die
> You know you're gonna have to face it;
> You're addicted to vi!
>
> Might as well face it,
> You're addicted to vi!
>
> Copyright 1989, by Chuck Musciano.  All Rights Reserved

6.
> From: Alex Lopez-Ortiz
> Subject:VI manual pages
> Date: 27 Feb 91 11:30:04 GMT
>
> A few days ago, we were trying to explain to a MS-DOS user how the VI editor works. Here's what we come up with:
>
> Vi is an editor with two distinguished modes:
>
> In Edit mode you have all the capabilities of grandma's typewriter right under your finger tips! You can make the very same mistakes as you did with grany's typewriter (and your possibilities to correct them are about the same).
>
> That's why Vi was provided with a second mode, namely the Beep mode. On a vt100 terminal or compatible you can get into Beep mode by pressing an arrow or escape function key. In this powerful Beep mode even the more inocuos keystroke will promptly produce a Beep sound. As an example, arrows, return, blankspaces and most capital letters will produce beeps in the most arbitrary places of the screen. Just think about the whole world of possibilities that this mode gives to you:
>
> Compose a monotonic symphony or rap while editing your thesis!
> Send messages in morse code to the secretary next door!
> Keep yourself awake with the clear sound of the Beep tone!
> The possibilities are up to you!

7.
> I have been using Vim for about 2 years now, mostly because I can't figure out how to exit it.
