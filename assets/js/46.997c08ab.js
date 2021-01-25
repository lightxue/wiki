(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{517:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sed"}},[t._v("#")]),t._v(" sed")]),t._v(" "),a("h2",{attrs:{id:"小技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小技巧"}},[t._v("#")]),t._v(" 小技巧")]),t._v(" "),a("ul",[a("li",[t._v("原文件替换")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.bak'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s/xxx/yyy/g'")]),t._v(" *.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s/xxx/yyy/g'")]),t._v(" *.txt\n")])])]),a("ul",[a("li",[t._v("打印99乘法表")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("seq")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'H;g'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" -v "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("RS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{for(i=1;i<=NF;i++)printf("%dx%d=%d%s", i, NR, i*NR, i==NR?"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('":"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[t._v("\\t")]),t._v("\")}'")]),t._v("\n")])])]),a("h2",{attrs:{id:"pattern-space和hold-space"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pattern-space和hold-space"}},[t._v("#")]),t._v(" pattern space和hold space")]),t._v(" "),a("h3",{attrs:{id:"用途"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用途"}},[t._v("#")]),t._v(" 用途")]),t._v(" "),a("ul",[a("li",[t._v("pattern space是存储当前处理的行的缓冲区")]),t._v(" "),a("li",[t._v("hold space可以拿来当临时存储空间")])]),t._v(" "),a("h3",{attrs:{id:"sed工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sed工作流程"}},[t._v("#")]),t._v(" sed工作流程")]),t._v(" "),a("ul",[a("li",[t._v("sed先读入一行，去掉尾部换行符，存入pattern space，执行编辑命令。")]),t._v(" "),a("li",[t._v("处理完毕，除非加了-n参数，把现在的pattern space打印出来，在后边打印曾去掉的换行符。")]),t._v(" "),a("li",[t._v("把pattern space置空。")]),t._v(" "),a("li",[t._v("接着读下一行，处理下一行。")])]),t._v(" "),a("p",[t._v("特殊情况，一个文件仅一行，尾部没换行，sed只打印，不会尾部加换行，但若在尾部又附加了输出，他会再补上那个换行。")]),t._v(" "),a("h3",{attrs:{id:"操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[t._v("#")]),t._v(" 操作")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("功能")]),t._v(" "),a("th",[t._v("命令")]),t._v(" "),a("th",[t._v("介绍")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Hold")]),t._v(" "),a("td",[t._v("h or H")]),t._v(" "),a("td",[t._v("Copy or append contents of pattern space to hold space.")])]),t._v(" "),a("tr",[a("td",[t._v("Get")]),t._v(" "),a("td",[t._v("g or G")]),t._v(" "),a("td",[t._v("Copy or append contents of hold space to pattern space.")])]),t._v(" "),a("tr",[a("td",[t._v("Exchange")]),t._v(" "),a("td",[t._v("x")]),t._v(" "),a("td",[t._v("Swap contents of hold space and pattern space.")])]),t._v(" "),a("tr",[a("td",[t._v("Delete")]),t._v(" "),a("td",[t._v("d")]),t._v(" "),a("td",[t._v("Delete pattern space.  "),a("em",[t._v("Start next cycle")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[t._v("Delete")]),t._v(" "),a("td",[t._v("D")]),t._v(" "),a("td",[t._v("Delete  up  to  the  first  embedded newline in the pattern space.")])]),t._v(" "),a("tr",[a("td",[t._v("/")]),t._v(" "),a("td",[t._v("/")]),t._v(" "),a("td",[a("em",[t._v("Start next cycle")]),t._v(", but skip reading from the input if there is still data in the pattern space.")])]),t._v(" "),a("tr",[a("td",[t._v("Next")]),t._v(" "),a("td",[t._v("n or N")]),t._v(" "),a("td",[t._v("Read/append the next line of input into the pattern space.")])])])]),t._v(" "),a("h3",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),a("ul",[a("li",[t._v("交换第1行和第2行的内容")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1{h;n;x;H;x};p'")]),t._v(" filename\n")])])]),a("ul",[a("li",[t._v("用sed实现tac的功能")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -n -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1!G;h;"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$p")]),t._v("'")]),t._v(" filename\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1!G;h;"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$!")]),t._v("d'")]),t._v(" filename\n")])])]),a("p",[a("code",[t._v("1!G")]),t._v("表示除了第一行之外，都执行G操作。")]),t._v(" "),a("p",[a("code",[t._v("$p")]),t._v("表示对最后一行直接打印pattern space里的内容，其实就是直接打印最后一行的原文。")]),t._v(" "),a("ul",[a("li",[t._v("替换所有换行符，解释在"),a("a",{attrs:{href:"http://stackoverflow.com/questions/1251999/how-can-i-replace-a-newline-n-using-sed",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("':a;N;"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$!")]),t._v("ba;s/"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("/ /g'")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);