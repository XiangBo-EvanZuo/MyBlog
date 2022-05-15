(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{524:function(t,a,s){"use strict";s.r(a);var n=s(65),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linux-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-commands"}},[t._v("#")]),t._v(" Linux Commands")]),t._v(" "),s("h2",{attrs:{id:"_1-file-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-file-control"}},[t._v("#")]),t._v(" 1-File Control")]),t._v(" "),s("h3",{attrs:{id:"awk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#awk"}},[t._v("#")]),t._v(" awk")]),t._v(" "),s("p",[t._v("AWK 是一种处理文本文件的语言，是一个强大的文本分析工具。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("选项参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("value file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n或\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("选项参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" -f scriptfile "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("value file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"wc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wc"}},[t._v("#")]),t._v(" wc")]),t._v(" "),s("blockquote",[s("p",[t._v("wc命令用来计算数字。利用wc指令我们可以计算文件的Byte数、字数或是列数。")])]),t._v(" "),s("p",[t._v("语法： wc [options] [filename]\nOptions:\n-l：=line 统计行数\n-m：=member 统计字符数\n-w：=Word 统计词数")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@adai003 tmp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# wc -l !$wc -l 2.txt2 2.txt")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@adai003 tmp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# wc -m 2.txt10 2.txt")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@adai003 tmp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat !$cat 2.txt1234qwer")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@adai003 tmp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat -A 2.txt1234$qwer$[root@adai003 tmp]# wc -w 2.txt4 2.txt")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@adai003 tmp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat 2.txt1234 456 789,10qwer")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("说明： wc -m会统计文件内所有字符，包括隐藏的换行符“&”；wc -w是以空格作为分隔符进行词组统计的。")])]),t._v(" "),s("h2",{attrs:{id:"_3-system-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-system-control"}},[t._v("#")]),t._v(" 3-System Control")]),t._v(" "),s("h3",{attrs:{id:"id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#id"}},[t._v("#")]),t._v(" id")]),t._v(" "),s("p",[t._v("Linux id命令用于显示用户的ID，以及所属群组的ID。")]),t._v(" "),s("blockquote",[s("p",[t._v("id会显示用户以及所属群组的实际与有效ID。若两个ID相同，则仅显示实际ID。若仅指定用户名称，则显示目前用户的ID。")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-gGnru"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--help"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("用户名称"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("ul",[s("li",[t._v("-g或--group 　显示用户所属群组的ID。")]),t._v(" "),s("li",[t._v("-G或--groups 　显示用户所属附加群组的ID。")]),t._v(" "),s("li",[t._v("-n或--name 　显示用户，所属群组或附加群组的名称。")]),t._v(" "),s("li",[t._v("-r或--real 　显示实际ID。")]),t._v(" "),s("li",[t._v("-u或--user 　显示用户ID。")]),t._v(" "),s("li",[t._v("-help 　显示帮助。")]),t._v(" "),s("li",[t._v("-version 　显示版本信息。")])]),t._v(" "),s("h2",{attrs:{id:"_4-file-edit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-file-edit"}},[t._v("#")]),t._v(" 4-File Edit")]),t._v(" "),s("h3",{attrs:{id:"grep"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grep"}},[t._v("#")]),t._v(" grep")]),t._v(" "),s("blockquote",[s("p",[t._v("Linux grep 命令用于查找文件里符合条件的字符串。")])]),t._v(" "),s("blockquote",[s("p",[t._v("grep 指令用于查找内容包含指定的范本样式的文件，如果发现某文件的内容符合所指定的范本样式，预设 grep 指令会把含有范本样式的那一列显示出来。若不指定任何文件名称，或是所给予的文件名为 -，则 grep 指令会从标准输入设备读取数据。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);