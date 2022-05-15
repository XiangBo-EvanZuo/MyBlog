(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{542:function(t,s,a){"use strict";a.r(s);var e=a(65),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript"}},[t._v("#")]),t._v(" TypeScript")]),t._v(" "),a("ol",[a("li",[t._v("接口与接口之间是继承关系 => extends")]),t._v(" "),a("li",[t._v("类和接口之间是实现的关系 => implements")]),t._v(" "),a("li",[t._v("抽象类 => Abstruct Clas")]),t._v(" "),a("li",[t._v("重载 => callable overloads")]),t._v(" "),a("li",[t._v("泛形 => Generic Type Variables")])]),t._v(" "),a("ul",[a("li",[t._v("泛形类")]),t._v(" "),a("li",[t._v("泛形约束\n"),a("ul",[a("li",[t._v("format => T extends Lengthwise")])])]),t._v(" "),a("li",[t._v("泛形接口")]),t._v(" "),a("li",[t._v("函数泛形")]),t._v(" "),a("li",[t._v("多个泛形参数的函数")])]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("内置对象")])]),t._v(" "),a("ul",[a("li",[t._v("Window")]),t._v(" "),a("li",[t._v("Document")]),t._v(" "),a("li",[t._v("HTMLElement")]),t._v(" "),a("li",[t._v("DocumentFragment")]),t._v(" "),a("li",[t._v("Event")]),t._v(" "),a("li",[t._v("NodeList")])]),t._v(" "),a("h2",{attrs:{id:"关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关键字"}},[t._v("#")]),t._v(" 关键字")]),t._v(" "),a("h2",{attrs:{id:"类型系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型系统"}},[t._v("#")]),t._v(" 类型系统")]),t._v(" "),a("ol",[a("li",[t._v("基本注解")]),t._v(" "),a("li",[t._v("基本类型注解")]),t._v(" "),a("li",[t._v("数组注解")]),t._v(" "),a("li",[t._v("接口注解")]),t._v(" "),a("li",[t._v("内联类型注解")]),t._v(" "),a("li",[t._v("特殊类型")]),t._v(" "),a("li",[t._v("泛形")]),t._v(" "),a("li",[t._v("联合类型注解")]),t._v(" "),a("li",[t._v("交叉类型注解")]),t._v(" "),a("li",[t._v("元祖类型")]),t._v(" "),a("li",[t._v("类型别名")])]),t._v(" "),a("h2",{attrs:{id:"环境声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境声明"}},[t._v("#")]),t._v(" 环境声明")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能")])]),t._v(" "),a("li",[a("p",[t._v("假如我们想使用第三方库 jQuery，一种常见的方式是在 html 中通过 <script> 标签引入 jQuery，然后就可以使用全局变量 $ 或 jQuery 了。")])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("但是在 ts 中，编译器并不知道 $ 或 jQuery 是什么东西")])]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这时，我们需要使用 declare var 来定义它的类型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("jQuery")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("jQuery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("一般声明文件都会单独写成一个 xxx.d.ts 文件")]),t._v(" "),a("p",[t._v("创建 01_jQuery.d.ts, 将声明语句定义其中, TS编译器会扫描并加载项目中所有的TS声明文件")]),t._v(" "),a("p",[t._v("declare var jQuery: (selector: string) => any;")]),t._v(" "),a("p",[t._v("很多的第三方库都定义了对应的声明文件库, 库文件名一般为 @types/xxx, 可以在 "),a("a",{attrs:{href:"https://www.npmjs.com/package/package",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm包地址"),a("OutboundLink")],1),t._v(" 进行搜索")])])}),[],!1,null,null,null);s.default=v.exports}}]);