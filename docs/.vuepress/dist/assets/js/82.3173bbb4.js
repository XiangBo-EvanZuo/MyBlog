(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{525:function(t,a,s){"use strict";s.r(a);var n=s(65),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_6-mutabledata-可变数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-mutabledata-可变数据"}},[t._v("#")]),t._v(" 6-MutableData 可变数据")]),t._v(" "),s("h2",{attrs:{id:"函数式编程的理念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程的理念"}},[t._v("#")]),t._v(" 函数式编程的理念")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("ul",[s("li",[t._v("函数式编程完全建立在数据永不变的理念上。")]),t._v(" "),s("li",[t._v("如果要更新一个数据结构，那就返回一份新的数据副本，旧的数据依然保持不变。")]),t._v(" "),s("li",[t._v("这也是我个人一直坚持的一种理念，但是有时候我们也难免有直接的更新操作在函数中。")])])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),s("ul",[s("li",[t._v("一句话，尽量避免")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bad codes")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_getVariableNameData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nice codes")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_getVariableNameData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_setVariableData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tempData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_getVariableNameData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_setVariableData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tempData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("这里指的可变数据：能从其他地方计算出来的可变数据")])]),t._v(" "),s("h2",{attrs:{id:"方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案"}},[t._v("#")]),t._v(" 方案")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("拆分变量")]),t._v(" "),s("ul",[s("li",[t._v("将其拆分成不同用途的变量，从而避免危险的更新操作")])])]),t._v(" "),s("li",[s("p",[t._v("移动语句与提炼函数")]),t._v(" "),s("ul",[s("li",[t._v("尽量把逻辑从更新操作的代码之中搬移出来，将没有副作用的代码与执行数据更新操作的代码分开。")])])]),t._v(" "),s("li",[s("p",[t._v("分离")]),t._v(" "),s("ul",[s("li",[t._v("将查询参数与修改函数参数分离，确保调用者不会调用到有副作用的代码，除非真的要进行更新数据。")])])]),t._v(" "),s("li",[s("p",[t._v("移除设值函数")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);