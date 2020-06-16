(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{489:function(t,a,s){"use strict";s.r(a);var r=s(42),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[t._v("#")]),t._v(" 变量")]),t._v(" "),s("h2",{attrs:{id:"command-substitution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-substitution"}},[t._v("#")]),t._v(" Command Substitution")]),t._v(" "),s("p",[t._v("将程序的标准输出保存到变量中。如果有多行，合并成一行。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\nbin Documents Desktop "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nDownloads public_html "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("myvar")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$myvar")]),t._v("\nbin Documents Desktop Downloads public_html "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),s("h2",{attrs:{id:"导出变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导出变量"}},[t._v("#")]),t._v(" 导出变量")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("http_proxy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://127.0.0.1:8080\nhttp -v www.lightxue.com\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("http_proxy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://127.0.0.1:8080 http -v www.lightxue.com\n")])])]),s("h2",{attrs:{id:"特殊变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特殊变量"}},[t._v("#")]),t._v(" 特殊变量")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("变量名")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("$0")]),t._v(" "),s("td",[t._v("脚本名")])]),t._v(" "),s("tr",[s("td",[t._v("$#")]),t._v(" "),s("td",[t._v("参数个数")])]),t._v(" "),s("tr",[s("td",[t._v("$@")]),t._v(" "),s("td",[t._v("传入的所有参数")])]),t._v(" "),s("tr",[s("td",[t._v("$?")]),t._v(" "),s("td",[t._v("最后一个程序退出的状态码")])]),t._v(" "),s("tr",[s("td",[t._v("$$")]),t._v(" "),s("td",[t._v("当前脚本的pid")])]),t._v(" "),s("tr",[s("td",[t._v("$USER")]),t._v(" "),s("td",[t._v("运行脚本的用户名")])]),t._v(" "),s("tr",[s("td",[t._v("$SECONDS")]),t._v(" "),s("td",[t._v("脚本运行到此的时间")])]),t._v(" "),s("tr",[s("td",[t._v("$RANDOM")]),t._v(" "),s("td",[t._v("随机数")])]),t._v(" "),s("tr",[s("td",[t._v("$LINENO")]),t._v(" "),s("td",[t._v("当前行号")])])])]),t._v(" "),s("h2",{attrs:{id:"数组操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组操作"}},[t._v("#")]),t._v(" 数组操作")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Syntax")]),t._v(" "),s("th",[t._v("Result")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("arr=()")])]),t._v(" "),s("td",[t._v("Create an empty array")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("arr=(1 2 3)")])]),t._v(" "),s("td",[t._v("Initialize array")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("${arr[2]}")])]),t._v(" "),s("td",[t._v("Retrieve third element")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("${arr[@]}")])]),t._v(" "),s("td",[t._v("Retrieve all elements")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("${!arr[@]}")])]),t._v(" "),s("td",[t._v("Retrieve array indices")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("${#arr[@]}")])]),t._v(" "),s("td",[t._v("Calculate array size")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("arr[0]=3")])]),t._v(" "),s("td",[t._v("Overwrite 1st element")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("arr+=(4)")])]),t._v(" "),s("td",[t._v("Append value(s)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("str=$(ls)")])]),t._v(" "),s("td",[t._v("Save ls output as a string")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("arr=( $(ls) )")])]),t._v(" "),s("td",[t._v("Save ls output as an array of files")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("${arr[@]:s:n}")])]),t._v(" "),s("td",[t._v("Retrieve n elements starting at index s")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);