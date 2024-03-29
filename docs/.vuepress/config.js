/*
 * @Author: your name
 * @Date: 2021-01-27 22:17:44
 * @LastEditTime: 2022-05-15 17:58:21
 * @LastEditors: Evan Zuo v_wangxiangbo01@baidu.com
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/.vuepress/config.js
 */
/*
 * @Author: your name
 * @Date: 2021-01-19 09:07:13
 * @LastEditTime: 2021-02-06 14:05:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuepress-starter/docs/.vuepress/config.js
 */
module.exports = {
  title: '二十多岁的老王的个人网站',
  description: 'Just playing around',
  base: '/MyBlog/',
  themeConfig: {
    lastUpdated: '最后更新', // string | boolean
    nav: [
      {
        text: 'Code Languages',
        items: [
          {
            text: 'FrontEnd',
            items: [
              {
                text: 'JavaScript',
                link: '/JavaScript/'
              },
              {
                text: 'TypeScript',
                link: '/TypeScript/'
              },
              {
                text: 'Css3',
                link: '/language/Css3/'
              },
              {
                text: 'Html5',
                link: '/language/Html5/'
              }
            ]
          },
          {
            text: 'BackEnd',
            items: [
              {
                text: 'Python',
                link: '/Python/'
              },
              {
                text: 'Golang',
                link: '/Golang/'
              },
              {
                text: 'Java',
                link: '/Java/'
              }
            ]
          },
          {
            text: 'Others',
            items: [
              {
                text: 'Vim',
                link: '/Vim/'
              },
              {
                text: 'Linux',
                link: '/Linux/'
              },
              {
                text: 'MarkDown',
                link: '/MarkDown/'
              },
              {
                text: 'Shell',
                link: '/Shell/'
              }
            ]
          },
        ]
      },
      {
        text: 'Personal Style',
        items: [
          {
            text: 'About Code Quality',
            items: [
              {
                text: 'Bad Codes',
                link: '/PersonalStyle/Code/BadCodes/'
              },
              {
                text: 'Nice Codes',
                link: '/PersonalStyle/Code/NiceCodes/'
              },
              {
                text: 'Coding Info',
                link: '/PersonalStyle/CodingInfo/'
              },
            ]
          },
          {
            text: 'Interviews FrontEnd',
            items: [
              {
                text: 'JavaScript',
                link: '/PersonalStyle/Interview/FrontEnd/JavaScript/'
              },
              {
                text: 'CSS',
                link: '/PersonalStyle/Interview/FrontEnd/Css3/'
              },
            ]
          },
          {
            text: 'Interviews Backend',
            items: [
              {
                text: 'GoLang',
                link: '/PersonalStyle/Interview/BackEnd/Golang/'
              },
              {
                text: 'Python',
                link: '/PersonalStyle/Interview/BackEnd/Python/'
              },
            ]
          },
        ]
      },
      {
        text: 'About Me',
        items: [
          {
            text: 'My Teaching Videos',
            items: [
              {
                text: 'Bilibili',
                link: 'https://space.bilibili.com/309430466/'
              },
            ]
          },
          {
            text: 'Souce Codes',
            items: [
              {
                text: 'GitHub(GayHub) - Home',
                link: 'https://github.com/PythonWongXb'
              },
            ]
          },
        ]
      },
      {
        text: 'Frames',
        items: [
          {
            text: 'FrontEnd',
            items: [
              {
                text: 'Vue3',
                link: '/Frames/Vue3/'
              },
            ]
          },
          {
            text: 'BackEnd',
            items: [
              {
                text: 'nodejs',
                link: '/Frames/Nodejs/'
              },
            ]
          },
          {
            text: 'Projects',
            items: [
              {
                text: 'VenueOnlineManageSystem',
                link: '/Frames/VenueOnlineManageSystem/'
              },
            ]
          }
        ]
      }
    ],
    sidebarDepth: 3,
    sidebar: {
      '/JavaScript/': [
        {
          title: 'JavaScript基础',
          path: '/JavaScript/#1',
          children: [
            {
              title: '1',
              path: '/JavaScript/one'
            },
            {
              title: '2',
              path: '/JavaScript/two'
            },
          ],
        },
        {
          title: 'JavaScript中级',
          path: '/JavaScript/#2',
          children: [
            '/'
          ]
        },
        {
          title: '算法',
          path: '/JavaScript/algorithm',
          children: [
            {
              title: 'fibo',
              path: '/JavaScript/algorithm/fibonacci'
            }, ]
        },
      ],
      '/Golang/': [
        {
          title: 'Golang基础',
          path: '/Golang/#1',
          children: [
            {
              title: '1',
              path: '/Golang/one/'
            },
            {
              title: '2',
              path: '/Golang/two/'
            },
          ],
        },
        {
          title: 'JavaScript中级',
          path: '/Golang/#2',
          children: [
            '/'
          ]
        },
        {
          title: '基础',
          path: '/Golang/primary/',
          children: [
            {
              title: '并发',
              path: '/Golang/primary/并发'
            }, ]
        },
      ],
      '/PersonalStyle/Code/BadCodes/': [
        {
          title: '1-MysteriousName',
          path: '/PersonalStyle/Code/BadCodes/1-MysteriousName',
        },
        {
          title: '2-DuplicatedCode',
          path: '/PersonalStyle/Code/BadCodes/2-DuplicatedCode',
        },
        {
          title: '3-LongFunction',
          path: '/PersonalStyle/Code/BadCodes/3-LongFunction',
        },
        {
          title: '4-LongParameterList',
          path: '/PersonalStyle/Code/BadCodes/4-LongParameterList',
        },
        {
          title: '5-GlobalData',
          path: '/PersonalStyle/Code/BadCodes/5-GlobalData',
        },
        {
          title: '6-MutableData',
          path: '/PersonalStyle/Code/BadCodes/6-MutableData',
        },
        {
          title: '7-DivergentChange',
          path: '/PersonalStyle/Code/BadCodes/7-DivergentChange',
        },
        {
          title: '8-ShotgunSurgery',
          path: '/PersonalStyle/Code/BadCodes/8-ShotgunSurgery',
        },
        {
          title: '9-FeatureEnvy',
          path: '/PersonalStyle/Code/BadCodes/9-FeatureEnvy',
        },
        {
          title: '10-DataClumps',
          path: '/PersonalStyle/Code/BadCodes/10-DataClumps',
        },
        {
          title: '11-PimitiveObsession',
          path: '/PersonalStyle/Code/BadCodes/11-PimitiveObsession',
        },
        {
          title: '12-RepeatedSwitches',
          path: '/PersonalStyle/Code/BadCodes/12-RepeatedSwitches',
        },
        {
          title: '13-Loops',
          path: '/PersonalStyle/Code/BadCodes/13-Loops',
        },
        {
          title: '14-LazyElement',
          path: '/PersonalStyle/Code/BadCodes/14-LazyElement',
        },
        {
          title: '15-SpeculativeGenerality',
          path: '/PersonalStyle/Code/BadCodes/15-SpeculativeGenerality',
        },
        {
          title: '16-TemporaryField',
          path: '/PersonalStyle/Code/BadCodes/16-TemporaryField',
        },
        {
          title: '17-MessageChains',
          path: '/PersonalStyle/Code/BadCodes/17-MessageChains',
        },
        {
          title: '18-MiddleMan',
          path: '/PersonalStyle/Code/BadCodes/18-MiddleMan',
        },
        {
          title: '19-InsiderTrading',
          path: '/PersonalStyle/Code/BadCodes/19-InsiderTrading',
        },
        {
          title: '20-LargeClass',
          path: '/PersonalStyle/Code/BadCodes/20-LargeClass',
        },
        {
          title: '21-AlternativeClassWithDifferentInterfaces',
          path: '/PersonalStyle/Code/BadCodes/21-AlternativeClassWithDifferentInterfaces',
        },
        {
          title: '22-DataClass',
          path: '/PersonalStyle/Code/BadCodes/22-DataClass',
        },
        {
          title: '23-RefusedBequest',
          path: '/PersonalStyle/Code/BadCodes/23-RefusedBequest',
        },
        {
          title: '24-Comments',
          path: '/PersonalStyle/Code/BadCodes/24-Comments',
        },
      ],
      '/Frames/VenueOnlineManageSystem/': [
        {
          title: '0-文件架构',
          path: '/Frames/VenueOnlineManageSystem/0-FileConstruction',
          children: [
            {
              title: '项目文件架构',
              path: '/Frames/VenueOnlineManageSystem/0-FileConstruction/0-1-StaticFile/'
            },
            {
              title: '环境变量',
              path: '/Frames/VenueOnlineManageSystem/0-FileConstruction/0-3-EnvironmentVaries/'
            },
            {
              title: '插件',
              path: '/Frames/VenueOnlineManageSystem/0-FileConstruction/0-4-Plugins/'
            },
          ],
        },
        {
          title: '1-View架构',
          path: '/Frames/VenueOnlineManageSystem/7-ViewConstruction',
          children: [
            {
              title: 'tab-user',
              path: '/Frames/VenueOnlineManageSystem/7-ViewConstruction/7-0-TabUser/'
            },
            {
              title: 'tab-admin',
              path: '/Frames/VenueOnlineManageSystem/7-ViewConstruction/7-1-TabAdmin/'
            },
            {
              title: 'checkin',
              path: '/Frames/VenueOnlineManageSystem/7-ViewConstruction/7-2-CheckIn/'
            },
            {
              title: '兼容PC',
              path: '/Frames/VenueOnlineManageSystem/7-ViewConstruction/7-3-PC/'
            },
            {
              title: '所有餐厅',
              path: '/Frames/VenueOnlineManageSystem/7-ViewConstruction/7-4-VenueGrounp/'
            },
            {
              title: '错误页面',
              path: '/Frames/VenueOnlineManageSystem/7-ViewConstruction/7-5-ErrorPage/'
            },
            {
              title: '其他正常页面',
              path: '/Frames/VenueOnlineManageSystem/7-ViewConstruction/7-6-Normal/'
            },
          ]
        },
        {
          title: '2-组件架构',
          path: '/Frames/VenueOnlineManageSystem/1-ComponentConstruction',
          children: [
            '/'
          ]
        },
        {
          title: '3-路由架构',
          path: '/Frames/VenueOnlineManageSystem/2-VueRouterConstruction',
          children: [
            {
              title: '1-文件结构',
              path: '/Frames/VenueOnlineManageSystem/2-VueRouterConstruction/2-0-FileConstruction/'
            },
            {
              title: '2-Router拦截',
              path: '/Frames/VenueOnlineManageSystem/2-VueRouterConstruction/2-1-RouterInteract/'
            },
          ]
        },
        {
          title: '4-Axios架构',
          path: '/Frames/VenueOnlineManageSystem/3-AxiosConstruction',
          children: [
            {
              title: '1-Axios设置',
              path: '/Frames/VenueOnlineManageSystem/3-AxiosConstruction/3-1-AxiosSetting/'
            },
            {
              title: '2-错误拦截',
              path: '/Frames/VenueOnlineManageSystem/3-AxiosConstruction/3-2-ErrorInteract/'
            },
            {
              title: '3-错误展示',
              path: '/Frames/VenueOnlineManageSystem/3-AxiosConstruction/3-3-ErrorShow/'
            },
          ]
        },
        {
          title: '5-Vuex数据架构',
          path: '/Frames/VenueOnlineManageSystem/4-VuexDataConstruction',
          children: [
            '/'
          ]
        },
        {
          title: '6-LocalStorage数据架构',
          path: '/Frames/VenueOnlineManageSystem/5-LocalStorageDataConstruction',
          children: [
            '/'
          ]
        },
        {
          title: '7-项目核心难点',
          path: '/Frames/VenueOnlineManageSystem/6-CoreDifficultResolve',
          children: [
            {
              title: '1-app.vue核心架构讲解',
              path: '/Frames/VenueOnlineManageSystem/6-CoreDifficultResolve/6-7-AppVue/'
            },
            {
              title: '2-多Venue数据架构',
              path: '/Frames/VenueOnlineManageSystem/6-CoreDifficultResolve/6-0-MutipleVenue/'
            },
            {
              title: '3-监听页面跳转',
              path: '/Frames/VenueOnlineManageSystem/6-CoreDifficultResolve/6-1-WacthPageChange/'
            },
            {
              title: '4-主题颜色的控制',
              path: '/Frames/VenueOnlineManageSystem/6-CoreDifficultResolve/6-2-ThemeColor/'
            },
            {
              title: '5-nav中切换箭头与menu的方式',
              path: '/Frames/VenueOnlineManageSystem/6-CoreDifficultResolve/6-3-navSetting/'
            },
            {
              title: '6-mixin的使用',
              path: '/Frames/VenueOnlineManageSystem/6-CoreDifficultResolve/6-4-Mixin/'
            },
            {
              title: '7-loading使用',
              path: '/Frames/VenueOnlineManageSystem/6-CoreDifficultResolve/6-5-Loading/'
            },
            {
              title: '8-decorator的使用',
              path: '/Frames/VenueOnlineManageSystem/6-CoreDifficultResolve/6-6-Decorator/'
            },
            {
              title: '9-支付方式',
              path: '/Frames/VenueOnlineManageSystem/6-CoreDifficultResolve/6-8-Payments/'
            },
            {
              title: '10-打印功能',
              path: '/Frames/VenueOnlineManageSystem/6-CoreDifficultResolve/6-9-Print/'
            },
          ]
        },
      ],
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '/'
      }
    }
  },
}