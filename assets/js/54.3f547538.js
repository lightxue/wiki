(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{526:function(t,v,_){"use strict";_.r(v);var s=_(42),d=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"tmux"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tmux"}},[t._v("#")]),t._v(" tmux")]),t._v(" "),_("h2",{attrs:{id:"session"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[t._v("#")]),t._v(" Session")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("操作")]),t._v(" "),_("th",[t._v("命令/快捷键")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("new-session")]),t._v(" "),_("td",[t._v("tmux new -s name "),_("br"),t._v(" C-b : new -s name")])]),t._v(" "),_("tr",[_("td",[t._v("list-sessions")]),t._v(" "),_("td",[t._v("tmux ls "),_("br"),t._v(" C-b : list-sessions")])]),t._v(" "),_("tr",[_("td",[t._v("rename a session")]),t._v(" "),_("td",[t._v("C-b $")])]),t._v(" "),_("tr",[_("td",[t._v("switch sessions")]),t._v(" "),_("td",[t._v("C-b ( "),_("br"),t._v(" C-b )")])]),t._v(" "),_("tr",[_("td",[t._v("attach session")]),t._v(" "),_("td",[t._v("tmux a -t session-name")])]),t._v(" "),_("tr",[_("td",[t._v("detach session")]),t._v(" "),_("td",[t._v("C-b d")])]),t._v(" "),_("tr",[_("td",[t._v("kill-session")]),t._v(" "),_("td",[t._v("tmux kill-session -t name")])])])]),t._v(" "),_("h2",{attrs:{id:"window"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#window"}},[t._v("#")]),t._v(" Window")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("操作")]),t._v(" "),_("th",[t._v("命令/快捷键")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("create a window")]),t._v(" "),_("td",[t._v("C-b c")])]),t._v(" "),_("tr",[_("td",[t._v("rename a window")]),t._v(" "),_("td",[t._v("C-b ,")])]),t._v(" "),_("tr",[_("td",[t._v("select a window")]),t._v(" "),_("td",[t._v("C-b 0, 1, 2..9 "),_("br"),t._v(" C-b C-h "),_("br"),t._v(" C-b C-l")])]),t._v(" "),_("tr",[_("td",[t._v("find a window")]),t._v(" "),_("td",[t._v("C-b f")])]),t._v(" "),_("tr",[_("td",[t._v("display windows")]),t._v(" "),_("td",[t._v("C-b w")])]),t._v(" "),_("tr",[_("td",[t._v("move a window")]),t._v(" "),_("td",[t._v("C-b .")])]),t._v(" "),_("tr",[_("td",[t._v("swap a window")]),t._v(" "),_("td",[t._v("C-b : swap-window -t 0")])]),t._v(" "),_("tr",[_("td",[t._v("close a window")]),t._v(" "),_("td",[t._v("C-b &")])])])]),t._v(" "),_("h2",{attrs:{id:"pane"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pane"}},[t._v("#")]),t._v(" Pane")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("操作")]),t._v(" "),_("th",[t._v("命令/快捷键")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("new a pane")]),t._v(" "),_("td",[t._v("C-b n"),_("br"),t._v("C-b s"),_("br"),t._v("C-b v")])]),t._v(" "),_("tr",[_("td",[t._v("display panes")]),t._v(" "),_("td",[t._v("C-b q")])]),t._v(" "),_("tr",[_("td",[t._v("switch panes")]),t._v(" "),_("td",[t._v("C-b h"),_("br"),t._v("C-b j"),_("br"),t._v("C-b k"),_("br"),t._v("C-b l")])]),t._v(" "),_("tr",[_("td",[t._v("resize a pane")]),t._v(" "),_("td",[t._v("C-b H"),_("br"),t._v("C-b J"),_("br"),t._v("C-b K"),_("br"),t._v("C-b L")])]),t._v(" "),_("tr",[_("td",[t._v("switch to last pane")]),t._v(" "),_("td",[t._v("C-b ;")])]),t._v(" "),_("tr",[_("td",[t._v("close a pane")]),t._v(" "),_("td",[t._v("C-b x")])]),t._v(" "),_("tr",[_("td",[t._v("create a window from pane")]),t._v(" "),_("td",[t._v("C-b !")])]),t._v(" "),_("tr",[_("td",[t._v("turn a window into a pane")]),t._v(" "),_("td",[t._v("C-b : join-pane -s 1")])])])]),t._v(" "),_("h2",{attrs:{id:"misc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#misc"}},[t._v("#")]),t._v(" Misc")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("操作")]),t._v(" "),_("th",[t._v("命令/快捷键")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("copy mode")]),t._v(" "),_("td",[t._v("C-b C-c")])]),t._v(" "),_("tr",[_("td",[t._v("source config")]),t._v(" "),_("td",[t._v("C-b r")])]),t._v(" "),_("tr",[_("td",[t._v("clock mode")]),t._v(" "),_("td",[t._v("C-b t")])]),t._v(" "),_("tr",[_("td",[t._v("shortcuts")]),t._v(" "),_("td",[t._v("C-b ?")])])])])])}),[],!1,null,null,null);v.default=d.exports}}]);