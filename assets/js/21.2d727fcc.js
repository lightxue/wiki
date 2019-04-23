(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{329:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件","aria-hidden":"true"}},[t._v("#")]),t._v(" 条件")]),t._v(" "),a("h2",{attrs:{id:"if语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if语法","aria-hidden":"true"}},[t._v("#")]),t._v(" if语法")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("some test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commands"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("some test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("different commands"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("other commands"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n")])])]),a("h2",{attrs:{id:"test用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test用法","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("test")]),t._v("用法")]),t._v(" "),a("p",[t._v("if语句中的"),a("code",[t._v("[]")]),t._v("实际用到的是"),a("code",[t._v("test")]),t._v("命令。可以"),a("code",[t._v("man test")]),t._v("看更详细用法。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("操作")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("! EXPRESSION")]),t._v(" "),a("td",[t._v("EXPRESSION 是 false")])]),t._v(" "),a("tr",[a("td",[t._v("-n STRING")]),t._v(" "),a("td",[t._v("STRING 长度大于 0")])]),t._v(" "),a("tr",[a("td",[t._v("-z STRING")]),t._v(" "),a("td",[t._v("STRING 长度为 0 (空串)")])]),t._v(" "),a("tr",[a("td",[t._v("STRING1 = STRING2")]),t._v(" "),a("td",[t._v("STRING1等于STRING2")])]),t._v(" "),a("tr",[a("td",[t._v("STRING1 != STRING2")]),t._v(" "),a("td",[t._v("STRING1 不等于 STRING2")])]),t._v(" "),a("tr",[a("td",[t._v("INTEGER1 -eq INTEGER2")]),t._v(" "),a("td",[t._v("INTEGER1 数值等于 INTEGER2")])]),t._v(" "),a("tr",[a("td",[t._v("INTEGER1 -ne INTEGER2")]),t._v(" "),a("td",[t._v("INTEGER1 数值不等于 INTEGER2")])]),t._v(" "),a("tr",[a("td",[t._v("INTEGER1 -gt INTEGER2")]),t._v(" "),a("td",[t._v("INTEGER1 数值大于 INTEGER2")])]),t._v(" "),a("tr",[a("td",[t._v("INTEGER1 -lt INTEGER2")]),t._v(" "),a("td",[t._v("INTEGER1 数值小于 INTEGER2")])]),t._v(" "),a("tr",[a("td",[t._v("-d FILE")]),t._v(" "),a("td",[t._v("FILE 存在且是目录")])]),t._v(" "),a("tr",[a("td",[t._v("-e FILE")]),t._v(" "),a("td",[t._v("FILE 存在")])]),t._v(" "),a("tr",[a("td",[t._v("-r FILE")]),t._v(" "),a("td",[t._v("FILE 存在且有读权限")])]),t._v(" "),a("tr",[a("td",[t._v("-s FILE")]),t._v(" "),a("td",[t._v("FILE 存在且大小大于0(文件非空)")])]),t._v(" "),a("tr",[a("td",[t._v("-w FILE")]),t._v(" "),a("td",[t._v("FILE 存在且有写权限")])]),t._v(" "),a("tr",[a("td",[t._v("-x FILE")]),t._v(" "),a("td",[t._v("FILE 存在且有执行权限")])])])]),t._v(" "),a("h2",{attrs:{id:"布尔操作符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布尔操作符","aria-hidden":"true"}},[t._v("#")]),t._v(" 布尔操作符")]),t._v(" "),a("p",[a("code",[t._v("&&")]),t._v("和"),a("code",[t._v("||")])]),t._v(" "),a("h2",{attrs:{id:"case语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#case语法","aria-hidden":"true"}},[t._v("#")]),t._v(" case语法")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("variable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("pattern 1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commands"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("pattern 2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("other commands"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nesac\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 例子")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/bin/bash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# case example")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v("\n    start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" starting\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    stop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" stoping\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    restart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" restarting\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    *"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" don\\'t know\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nesac\n")])])])])}],!1,null,null,null);s.default=n.exports}}]);