(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{530:function(t,a,e){"use strict";e.r(a);var s=e(65),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("hr"),t._v(" "),e("h2",{attrs:{id:"sidebar-auto"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sidebar-auto"}},[t._v("#")]),t._v(" sidebar: auto")]),t._v(" "),e("h1",{attrs:{id:"coding-info"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coding-info"}},[t._v("#")]),t._v(" Coding Info")]),t._v(" "),e("h2",{attrs:{id:"devops"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#devops"}},[t._v("#")]),t._v(" DevOps")]),t._v(" "),e("h2",{attrs:{id:"test-driven-development-tdd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-driven-development-tdd"}},[t._v("#")]),t._v(" Test-Driven Development( TDD )")]),t._v(" "),e("p",[t._v("是一种不同于传统软件开发流程的新型的开发方法。它要求在编写某个功能的代码之前先编写测试代码，然后只编写使测试通过的功能代码，通过测试来推动整个开发的进行。这有助于编写简洁可用和高质量的代码，并加速开发过程。")]),t._v(" "),e("p",[t._v("测试驱动开发的基本思想就是在开发功能代码之前，先编写测试代码，然后只编写使测试通过的功能代码，从而以测试来驱动整个开发过程的进行。这有助于编写简洁可用和高质量的代码，有很高的灵活性和健壮性，能快速响应变化，并加速开发过程。\n测试驱动开发的基本过程如下：\n①　快速新增一个测试\n②　运行所有的测试（有时候只需要运行一个或一部分），发现新增的测试不能通过\n③　做一些小小的改动，尽快地让测试程序可运行，为此可以在程序中使用一些不合情理的方法\n④　运行所有的测试，并且全部通过\n⑤　重构代码，以消除重复设计，优化设计结构\n简单来说，就是不可运行/可运行/重构——这正是测试驱动开发的口号。")]),t._v(" "),e("h3",{attrs:{id:"unit-testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unit-testing"}},[t._v("#")]),t._v(" unit testing")]),t._v(" "),e("p",[t._v("单元测试（unit testing），是指对软件中的最小可测试单元进行检查和验证。对于单元测试中单元的含义，一般来说，要根据实际情况去判定其具体含义，如C语言中单元指一个函数，Java里单元指一个类，图形化的软件中可以指一个窗口或一个菜单等。总的来说，单元就是人为规定的最小的被测功能模块。单元测试是在软件开发过程中要进行的最低级别的测试活动，软件的独立单元将在与程序的其他部分相隔离的情况下进行测试。")]),t._v(" "),e("p",[t._v("单元测试（模块测试）是开发者编写的一小段代码，用于检验被测代码的一个很小的、很明确的功能是否正确。通常而言，一个单元测试是用于判断某个特定条件（或者场景）下某个特定函数的行为。例如，你可能把一个很大的值放入一个有序list 中去，然后确认该值出现在list 的尾部。或者，你可能会从字符串中删除匹配某种模式的字符，然后确认字符串确实不再包含这些字符了。\n单元测试是由程序员自己来完成，最终受益的也是程序员自己。可以这么说，程序员有责任编写功能代码，同时也就有责任为自己的代码编写单元测试。执行单元测试，就是为了证明这段代码的行为和我们期望的一致。")]),t._v(" "),e("h3",{attrs:{id:"regression-testing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#regression-testing"}},[t._v("#")]),t._v(" Regression Testing")]),t._v(" "),e("p",[t._v("回归测试是指修改了旧代码后，重新进行测试以确认修改没有引入新的错误或导致其他代码产生错误。自动回归测试将大幅降低系统测试、维护升级等阶段的成本。\n回归测试作为软件生命周期的一个组成部分，在整个软件测试过程中占有很大的工作量比重，软件开发的各个阶段都会进行多次回归测试。在渐进和快速迭代开发中，新版本的连续发布使回归测试进行的更加频繁，而在极端编程方法中，更是要求每天都进行若干次回归测试。因此，通过选择正确的回归测试策略来改进回归测试的效率和有效性是很有意义的")]),t._v(" "),e("h3",{attrs:{id:"stub"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stub"}},[t._v("#")]),t._v(" stub")]),t._v(" "),e("p",[t._v("桩，或称桩代码，是指用bai来du代替关联代码zhi或者未实dao现代码的代码。如果函数B用B1来代zhuan替，那么，B称为原函数，B1称为桩函数。打桩就是编写或生成桩代码。\n打桩的目的\n打桩的目的主要有：隔离、补齐、控制。\n隔离是指将测试任务从产品项目中分离出来，使之能够独立编译、链接，并独立运行。隔离的基本方法就是打桩，将测试任务之外的，并且与测试任务相关的代码，用桩来代替，从而实现分离测试任务。例如函数A调用了函数B，函数B又调用了函数C和D，如果函数B用桩来代替，函数A就可以完全割断与函数C和D的关系。\n补齐是指用桩来代替未实现的代码，例如，函数A调用了函数B，而函数B由其他程序员编写，且未实现，那么，可以用桩来代替函数B，使函数A能够运行并测试。补齐在并行开发中很常用。")]),t._v(" "),e("h2",{attrs:{id:"scm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scm"}},[t._v("#")]),t._v(" SCM")]),t._v(" "),e("p",[t._v("软件配置管理\n软件配置管理(SCM)是指通过执行版本控制、变更控制的规程，以及使用合适的配置管理软件，来保证所有配置项的完整性和可跟踪性。配置管理是对工作成果的一种有效保护。 (Software configuration management (SCM, or just plain CM) is an organizational framework — that is, a discipline — for managing the evolution of computer systems throughout all stages of systems development.)\nSoftware Config Management\nPoll 轮询\nPoll SCM")]),t._v(" "),e("h2",{attrs:{id:"svn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#svn"}},[t._v("#")]),t._v(" SVN")]),t._v(" "),e("ul",[e("li",[t._v("SVN是subversion的缩写，是一个开放源代码的版本控制系统，通过采用分支管理系统的高效管理，简而言之就是用于多个人共同开发同一个项目，实现共享资源，实现最终集中式的管理")])]),t._v(" "),e("h2",{attrs:{id:"extremeprogramming-xp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extremeprogramming-xp"}},[t._v("#")]),t._v(" ExtremeProgramming (XP)")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://baike.baidu.com/item/%E6%9E%81%E9%99%90%E7%BC%96%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("极限编程"),e("OutboundLink")],1),t._v("（ExtremeProgramming，简称XP）是由KentBeck在1996年提出的，是一种软件工程方法学，是敏捷软件开发中可能是最富有成效的几种方法学之一。如同其他敏捷方法学，极限编程和传统方法学的本质不同在于它更强调可适应性能性以及面临的困难。1996年三月，Kent终于在为DaimlerChrysler所做的一个项目中引入了新的软件开发观念——XP。适用于小团队开发。")]),t._v(" "),e("p",[t._v("极限编程是一个轻量级的、灵巧的软件开发方法；同时它也是一个非常严谨和周密的方法。它的基础和价值观是交流、朴素、反馈和勇气；即，任何一个软件项目都可以从四个方面入手进行改善：加强交流；从简单做起；寻求反馈；勇于实事求是。\nXP是一种近螺旋式的开发方法，它将复杂的开发过程分解为一个个相对比较简单的小周期；通过积极的交流、反馈以及其它一系列的方法，开发人员和客户可以非常清楚开发进度、变化、待解决的问题和潜在的困难等，并根据实际情况及时地调整开发过程。")]),t._v(" "),e("p",[t._v("极限编程的主要目标在于降低因需求变更而带来的成本。在传统系统开发方法中，系统需求是在项目开发的开始阶段就确定下来，并在之后的开发过程中保持不变的。这意味着项目开发进入到之后的阶段时出现的需求变更（而这样的需求变更在一些发展极快的领域中是不可避免的）将导致开发成本急速增加。\n极限编程透过引入基本价值、原则、方法等概念来达到降低变更成本的目的。一个应用了极限编程方法的系统开发项目在应对需求变更时将显得更为灵活。")]),t._v(" "),e("p",[t._v("极限编程方法的基本特征是：\n增量和反复式的开发----一次小的改进跟着一个小的改进。\n反复性，通常是自动重复的单元测试，回归测试。参见JUnit。\n结对程序设计\n在程序设计团队中的用户交互（在场的客户）\n软件重构\n共享的代码所有权\n简单\n反馈\n用隐喻来组织系统\n可以忍受的速度")]),t._v(" "),e("h2",{attrs:{id:"前端自动化测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端自动化测试"}},[t._v("#")]),t._v(" 前端自动化测试")]),t._v(" "),e("ol",[e("li",[t._v("E2E (End to End) 属于黑盒测试")]),t._v(" "),e("li",[t._v("unit test 组件、function、TDD")])]),t._v(" "),e("h3",{attrs:{id:"工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[t._v("#")]),t._v(" 工具")]),t._v(" "),e("ul",[e("li",[t._v("Karma + Mocha")])]),t._v(" "),e("h2",{attrs:{id:"前端埋点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端埋点"}},[t._v("#")]),t._v(" 前端埋点")]),t._v(" "),e("p",[t._v("hooks方式")]),t._v(" "),e("h2",{attrs:{id:"sdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sdk"}},[t._v("#")]),t._v(" SDK")])])}),[],!1,null,null,null);a.default=r.exports}}]);