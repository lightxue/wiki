(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{524:function(a,t,s){"use strict";s.r(t);var e=s(42),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"samba"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#samba"}},[a._v("#")]),a._v(" samba")]),a._v(" "),s("ul",[s("li",[a._v("增加用户")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("smbpasswd -a lightxue\n")])])]),s("ul",[s("li",[a._v("编辑/etc/samba/smb.conf，增加以下内容")])]),a._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[a._v("[lightxue]")]),a._v("\nnetbios name "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" lightxue")]),a._v("\nvalid users "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" lightxue")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("path")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" /home/lightxue")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("browseable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" yes")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("writable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" yes")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("printable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" no")]),a._v("\ncreate mask "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" 0644")]),a._v("\n")])])]),s("ul",[s("li",[a._v("重启samba服务")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("/etc/init.d/smbd restart\n// 或者\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" smb restart\n")])])]),s("ul",[s("li",[s("p",[a._v("这样就新建一个samba用户并新建一个目录了")])]),a._v(" "),s("li",[s("p",[a._v("删除samba密码的缓存")])])]),a._v(" "),s("div",{staticClass:"language-batch extra-class"},[s("pre",{pre:!0,attrs:{class:"language-batch"}},[s("code",[a._v("; 查看当前的连接\n"),s("span",{pre:!0,attrs:{class:"token command"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("net")]),a._v(" use")]),a._v("\n; 删除\n"),s("span",{pre:!0,attrs:{class:"token command"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("net")]),a._v(" use * "),s("span",{pre:!0,attrs:{class:"token parameter attr-name"}},[a._v("/delete")])]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);