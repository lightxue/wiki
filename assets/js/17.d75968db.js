(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{471:function(s,t,a){s.exports=a.p+"assets/img/mysql-joins.26356b40.png"},515:function(s,t,a){"use strict";a.r(t);var e=a(42),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" MySQL")]),s._v(" "),e("h2",{attrs:{id:"小技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小技巧"}},[s._v("#")]),s._v(" 小技巧")]),s._v(" "),e("ul",[e("li",[s._v("显示字符集设置")])]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" variables "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%char%'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("ul",[e("li",[s._v("改变字符集")])]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" names utf8 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 相当于")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" character_set_client "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 用来设置客户端送给mysql服务器的数据的字符集")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" character_set_results "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 服务器返回查询结果时使用的字符集")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" character_set_connection "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- mysql服务器把客户端传来的数据，从character_set_client字符集转换成character_set_connection字符集")]),s._v("\n")])])]),e("ul",[e("li",[e("p",[s._v("mysql把结果输出到文件")]),s._v(" "),e("ul",[e("li",[s._v("方案1，在shell里")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"select * from database.tbl_name;"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" file_name\n")])])]),e("ul",[e("li",[s._v("方案2，在mysql里")])]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 文件会存在数据所在的位置，在datadir变量中，show variables like '%datadir%'可以看到，在/etc/my.conf里的datadir可配置")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OUTFILE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'file_name'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tbl_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),e("li",[e("p",[e("code",[s._v("last_insert_id")]),s._v("只会返回当前链接的insert id，多链接并发操作不会互相影响。"),e("code",[s._v("last_insert_id")]),s._v("只会返回自动生成的id，比如"),e("code",[s._v("auto-increment")]),s._v("，自己插入的id不算。")])]),s._v(" "),e("li",[e("p",[s._v("查询当前事务级别")])])]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" variables "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%isola%'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" cast"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("create_time "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),e("ul",[e("li",[s._v("查找多个key")])]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tbl_name\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" col_name "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("h2",{attrs:{id:"sql语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sql语句"}},[s._v("#")]),s._v(" SQL语句")]),s._v(" "),e("ul",[e("li",[s._v("数据基本操作")])]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 创建数据库")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" database_name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHARACTER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" utf8 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLLATE")]),s._v(" utf8_general_ci"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 更新记录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" tbl_name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" col_name1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" exp1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" col_name2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" exp2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 删除记录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tbl_name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" col_name1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" exp1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 插入记录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" tbl_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("col_name1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" col_name2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exp11"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" exp21"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exp12"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" exp22"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 表增加列")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" tbl_name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" col_name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tinyint")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 表删除列")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" tbl_name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" col_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 表修改列")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" tbl_name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MODIFY")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" col_name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tinyint")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 表重命名列")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" tbl_name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RENAME")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" old_name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" new_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 表修改列")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" tbl_name CHANGE "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" old_name new_name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tinyint")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 表增加索引")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" tbl_name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INDEX")]),s._v(" idx_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("col1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" col2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" col2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 表增加唯一索引")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" tbl_name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNIQUE")]),s._v(" idx_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("col1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" col2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" col2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 表修改引擎")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" tbl_name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("InnoDB")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("ul",[e("li",[s._v("不存在就插入，存在就更新")])]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" tbl_name\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("col_name1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" col_name2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DUPLICATE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" col_name2"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),e("ul",[e("li",[s._v("自动更新时间")])]),s._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("t_table"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("modify_time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TIMESTAMP")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CURRENT_TIMESTAMP")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CURRENT_TIMESTAMP")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENGINE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MyISAM "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CHARSET")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),e("ul",[e("li",[s._v("各种"),e("code",[s._v("join")]),s._v("的图")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(471),alt:""}})]),s._v(" "),e("ul",[e("li",[e("code",[s._v("datetime")]),s._v("转成"),e("code",[s._v("date")])])]),s._v(" "),e("h2",{attrs:{id:"命令行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令行"}},[s._v("#")]),s._v(" 命令行")]),s._v(" "),e("ul",[e("li",[s._v("mysql连unix domain socket")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("mysql -S /tmp/mysql*.sock\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);