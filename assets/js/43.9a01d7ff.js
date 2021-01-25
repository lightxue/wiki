(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{512:function(a,s,t){"use strict";t.r(s);var e=t(42),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"gdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gdb"}},[a._v("#")]),a._v(" GDB")]),a._v(" "),t("ul",[t("li",[a._v("core dump大小不限制")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("ulimit")]),a._v(" -c unlimited\n")])])]),t("ul",[t("li",[a._v("显示栈帧")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("bt full "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示局部变量")]),a._v("\nbt "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开头3个栈帧")]),a._v("\nbt -3 "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 最后3个栈帧")]),a._v("\n")])])]),t("ul",[t("li",[a._v("显示寄存器eax内容")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("p "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$eax")]),a._v("\n")])])]),t("ul",[t("li",[a._v("格式化输出")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("p/x "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$eax")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 十六进制")]),a._v("\np/d "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$eax")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 十进制")]),a._v("\np/u "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$eax")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 无符号")]),a._v("\np/o "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$eax")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 八进制")]),a._v("\np/t "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$eax")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 二进制(two)")]),a._v("\np/a "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$eax")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 地址")]),a._v("\np/c "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$eax")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 字符(ASCII)")]),a._v("\np/f "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$eax")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 浮点小数")]),a._v("\np/s "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$eax")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 字符串")]),a._v("\np/i "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$eax")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 机器语言(仅在显示内存的x命令(eXamining)中可用)")]),a._v("\n")])])]),t("ul",[t("li",[a._v("显示汇编指令")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("x/10i "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$pc")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# pc所指地址开始的10条指令")]),a._v("\ndisassemble "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 当前整个函数")]),a._v("\ndisassemble "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$pc")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 计数器所在函数的整个函数")]),a._v("\ndisassemble "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$pc")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$pc")]),a._v("+50 "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开始到结束之间的部分")]),a._v("\n")])])]),t("ul",[t("li",[t("p",[a._v("ni(nexti)和si(stepi)逐条招行汇编指令，ni不进入函数体")])]),a._v(" "),t("li",[t("p",[a._v("c(continue)可以加次数作参数")])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("c "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 遇到断点5次不停止")]),a._v("\n")])])]),t("ul",[t("li",[a._v("watch <表达式>，表达式指常量或变量等")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("watch")]),a._v(" var   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# stop if change(write)")]),a._v("\nawatch var  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# stop if access(read or write)")]),a._v("\nrwatch var  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# stop if read")]),a._v("\n")])])]),t("ul",[t("li",[a._v("删除断点和监视")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("i b "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# info break")]),a._v("\nd "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# delete 2")]),a._v("\n")])])]),t("ul",[t("li",[a._v("改变变量的值：set variable <变量>=<表达式>")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" variable var "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" variable var "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" var2 + "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" variable var "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" + "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n")])])]),t("ul",[t("li",[a._v("生成core dump，保存当前调试镜像")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("generate-core-file filename\n")])])]),t("ul",[t("li",[a._v("查看进程信息")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("info proc\n")])])]),t("ul",[t("li",[a._v("attach到进程")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("attach "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("17606")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# attach到pid为17606的进程上")]),a._v("\ndetach "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 用完分离")]),a._v("\n")])])]),t("ul",[t("li",[a._v("条件断点")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("b main "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" var "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("argc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\ncondition "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" var "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" func"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 给断点3加上触发条件")]),a._v("\n")])])]),t("ul",[t("li",[a._v("忽略断点")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("ignore "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 忽略断点3 4次")]),a._v("\n")])])]),t("ul",[t("li",[a._v("跳出当前代码块")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("until")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("until")]),a._v(" func "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 直到执行完func")]),a._v("\n")])])]),t("ul",[t("li",[a._v("执行完当前函数后暂停")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("finish\n")])])]),t("ul",[t("li",[a._v("反复执行")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("continue")]),a._v(" 次数\nstep 次数\nstepi 次数\nnext 次数\nnexti 次数\n")])])]),t("ul",[t("li",[a._v("clear范围删除断点")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("clear")]),a._v(" func\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("clear")]),a._v(" lineno\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("clear")]),a._v(" file:lineno\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("clear")]),a._v(" file:func\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("clear")]),a._v(" breakno\n")])])]),t("ul",[t("li",[t("p",[a._v("enable, disable启用和禁用断点")])]),a._v(" "),t("li",[t("p",[a._v("断点命令")])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2是断点的编号")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("p var "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 各种命令")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("end\n")])])]),t("ul",[t("li",[a._v("查看帧信息")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("frame    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看当前帧")]),a._v("\nframe "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看编号为3的帧")]),a._v("\ni frame "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看编号为3的帧")]),a._v("\n")])])]),t("ul",[t("li",[a._v("进程内存映射")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("i proc mapping\n")])])]),t("ul",[t("li",[a._v("格式化输出")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("printf")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"%d'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[a._v("\\n")]),a._v('"')]),a._v(", var\n")])])]),t("ul",[t("li",[a._v("显示变量")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("info variables\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);