(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{338:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"ssh免密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh免密码","aria-hidden":"true"}},[s._v("#")]),s._v(" SSH免密码")]),s._v(" "),t("h2",{attrs:{id:"目标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目标","aria-hidden":"true"}},[s._v("#")]),s._v(" 目标")]),s._v(" "),t("p",[s._v("A机器免密码向B机器登陆，可以在A机器通过ssh在B机器上运行脚本")]),s._v(" "),t("h2",{attrs:{id:"步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤","aria-hidden":"true"}},[s._v("#")]),s._v(" 步骤")]),s._v(" "),t("ul",[t("li",[s._v("在A机器生成密钥对")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("a@A:~"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ssh-keygen -t rsa\nGenerating public/private rsa key pair.\nEnter "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" to save the key "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/home/a/.ssh/id_rsa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\nCreated directory "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/home/a/.ssh'")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v("\nEnter passphrase "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("empty "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" no passphrase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": \nEnter same passphrase again: \nYour identification has been saved "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /home/a/.ssh/id_rsa.\nYour public key has been saved "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /home/a/.ssh/id_rsa.pub.\nThe key fingerprint is:\n3e:4f:05:79:3a:9f:96:7c:3b:ad:e9:58:37:bc:37:e4 a@A\n")])])]),t("ul",[t("li",[s._v("B机器创建目录~/.ssh")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("a@A:~"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" b@B "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p .ssh\nb@B's password:\n")])])]),t("ul",[t("li",[s._v("最后把A机器的公钥追加到B机器的"),t("code",[s._v("authorized_keys")]),s._v("里")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("a@A:~"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .ssh/id_rsa.pub "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" b@B "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cat >> .ssh/authorized_keys'")]),s._v("\nb@B's password:\n")])])]),t("p",[s._v("试试能不能ssh免密码访问B机器")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("a@A:~"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" b@B\n")])])]),t("h2",{attrs:{id:"注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意事项","aria-hidden":"true"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),t("p",[s._v("不同版本的SSH可能有一些不一样的地方")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("公钥放在"),t("code",[s._v(".ssh/authorized_keys2")])])]),s._v(" "),t("li",[t("p",[t("code",[s._v(".ssh")]),s._v("目录的权限是700")])]),s._v(" "),t("li",[t("p",[t("code",[s._v(".ssh/authorized_keys2")]),s._v("的权限是640")])])])])}],!1,null,null,null);a.default=r.exports}}]);