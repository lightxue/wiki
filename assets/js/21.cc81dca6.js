(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{488:function(t,a,s){"use strict";s.r(a);var v=s(42),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"awk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#awk"}},[t._v("#")]),t._v(" AWK")]),t._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),s("ul",[s("li",[t._v("只写条件时，{}里为{print}即{print $0}")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$6")]),t._v('=="LISTEN" || NR==1\'')]),t._v(" netstat.txt\n")])])]),s("h2",{attrs:{id:"命令参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令参数"}},[t._v("#")]),t._v(" 命令参数")]),t._v(" "),s("ul",[s("li",[t._v("-F指定分格符")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v("  -F: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(","),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$3")]),t._v(","),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$6")]),t._v("}'")]),t._v(" /etc/passwd\n")])])]),s("ul",[s("li",[t._v("-v可以传变量")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" -v "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("light "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BEGIN {print name}'")]),t._v("\n")])])]),s("h2",{attrs:{id:"函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[t._v("#")]),t._v(" 函数")]),t._v(" "),s("ul",[s("li",[t._v("可以用"),s("code",[t._v("printf")])])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{printf \"%-8s %-8s %-8s %-18s %-22s %-15s"),s("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('",'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(","),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v(","),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$3")]),t._v(","),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$4")]),t._v(","),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$5")]),t._v(","),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$6")]),t._v("}'")]),t._v(" netstat.txt\n")])])]),s("h2",{attrs:{id:"技巧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技巧"}},[t._v("#")]),t._v(" 技巧")]),t._v(" "),s("ul",[s("li",[t._v("按第6列重定向文件")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NR!=1{print > "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$6")]),t._v("}'")]),t._v(" netstat.txt\n")])])]),s("ul",[s("li",[t._v("打印某个列之后的所有列")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第4个列后面所有列")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{for (i=4; i<=NF; i++) printf "%s ", '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),t._v('} {print ""}\'')]),t._v(" file.txt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 问题：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1） 在NF不够4个的记录（行），将会打印出一个空行；")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2） 在输出的结果中，每行结尾多了一个空格；")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{for(i=4;i<=NF;i++) printf "%s ", '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),t._v('}; NF > 4 {print ""}\'')]),t._v(" file.txt\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NF > 4 {for (i=4; i<=NF; i++) {printf "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),t._v('" "} printf "'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("\"}'")]),t._v(" file.txt\n\n")])])]),s("ul",[s("li",[t._v("按照文件2的key顺序输出文件1内容")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" -F, "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NR==FNR {r["),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("] = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$0")]),t._v("; next} {print r["),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("]}'")]),t._v(" file1 file2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" file3\n")])])]),s("h2",{attrs:{id:"内置变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置变量"}},[t._v("#")]),t._v(" 内置变量")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("变量名")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("$0")]),t._v(" "),s("td",[t._v("当前记录")])]),t._v(" "),s("tr",[s("td",[t._v("$1~$n")]),t._v(" "),s("td",[t._v("当前记录第n个字段，字段间由FS分隔")])]),t._v(" "),s("tr",[s("td",[t._v("FS")]),t._v(" "),s("td",[t._v("输入字段分隔符，默认空格")])]),t._v(" "),s("tr",[s("td",[t._v("NF")]),t._v(" "),s("td",[t._v("当前记录中的字段个数，就是有多少列")])]),t._v(" "),s("tr",[s("td",[t._v("NR")]),t._v(" "),s("td",[t._v("已经读出的记录数，就是行号，从1开始")])]),t._v(" "),s("tr",[s("td",[t._v("RS")]),t._v(" "),s("td",[t._v("输入的记录分隔符，默认为换行")])]),t._v(" "),s("tr",[s("td",[t._v("OFS")]),t._v(" "),s("td",[t._v("输出字段分隔符，默认也是空格")])]),t._v(" "),s("tr",[s("td",[t._v("ORS")]),t._v(" "),s("td",[t._v("输出记录分隔符，默认为换行符")])]),t._v(" "),s("tr",[s("td",[t._v("ARGC")]),t._v(" "),s("td",[t._v("命令行参数个数")])]),t._v(" "),s("tr",[s("td",[t._v("ARGV")]),t._v(" "),s("td",[t._v("命令行参数数组")])]),t._v(" "),s("tr",[s("td",[t._v("FILENAME")]),t._v(" "),s("td",[t._v("当前输入文件的名字")])]),t._v(" "),s("tr",[s("td",[t._v("IGNORECASE")]),t._v(" "),s("td",[t._v("如果为真，则进行忽略大小写的匹配")])]),t._v(" "),s("tr",[s("td",[t._v("ARGIND")]),t._v(" "),s("td",[t._v("当前被处理的文件的ARGV标志符")])]),t._v(" "),s("tr",[s("td",[t._v("CONVFMT")]),t._v(" "),s("td",[t._v("数字转换格式 %.6g")])]),t._v(" "),s("tr",[s("td",[t._v("ENVIRON")]),t._v(" "),s("td",[t._v("UNIX环境变量")])]),t._v(" "),s("tr",[s("td",[t._v("ERRNO")]),t._v(" "),s("td",[t._v("UNIX系统错误消息")])]),t._v(" "),s("tr",[s("td",[t._v("FIELDWIDTHS")]),t._v(" "),s("td",[t._v("输入字段宽度的空白分隔字符串")])]),t._v(" "),s("tr",[s("td",[t._v("FNR")]),t._v(" "),s("td",[t._v("也表示当前记录数，但是FNR的作用域只在一个文件内.如果重新打开文件,FNR会从1开始")])]),t._v(" "),s("tr",[s("td",[t._v("OFMT")]),t._v(" "),s("td",[t._v("数字的输出格式 %.6g")])]),t._v(" "),s("tr",[s("td",[t._v("RSART")]),t._v(" "),s("td",[t._v("被匹配函数匹配的字符串首")])]),t._v(" "),s("tr",[s("td",[t._v("RLENGTH")]),t._v(" "),s("td",[t._v("被匹配函数匹配的字符串长度")])]),t._v(" "),s("tr",[s("td",[t._v("SUBSEP")]),t._v(" "),s("td",[t._v("\\034")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);