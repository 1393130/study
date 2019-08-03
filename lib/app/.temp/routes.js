import Vue from 'vue'
Vue.component("Bit", () => import("/Users/liulu/Downloads/study/src/.vuepress/components/Bit.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-7f181545263ab",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/README.md").then(comp => {
        Vue.component("v-7f181545263ab", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-88e9a06ec4e3d",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/config/README.md").then(comp => {
        Vue.component("v-88e9a06ec4e3d", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-f86a53d066a1d",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/default-theme-config/README.md").then(comp => {
        Vue.component("v-f86a53d066a1d", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-8b4bafb35fffd",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/README.md").then(comp => {
        Vue.component("v-8b4bafb35fffd", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-5db6df9a2ce64",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/assets.md").then(comp => {
        Vue.component("v-5db6df9a2ce64", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6e98e04e3513c",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/basic-config.md").then(comp => {
        Vue.component("v-6e98e04e3513c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d0fcae8497e6f",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/custom-themes.md").then(comp => {
        Vue.component("v-d0fcae8497e6f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-95da88c8105f5",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/deploy.md").then(comp => {
        Vue.component("v-95da88c8105f5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-529c4d1a23ed6",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/getting-started.md").then(comp => {
        Vue.component("v-529c4d1a23ed6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-45f6990e37cd9",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/i18n.md").then(comp => {
        Vue.component("v-45f6990e37cd9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cd6e2373aba7",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/markdown.md").then(comp => {
        Vue.component("v-cd6e2373aba7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-297b88cfcddb3",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/using-vue.md").then(comp => {
        Vue.component("v-297b88cfcddb3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5b4d5ff452035",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/README.md").then(comp => {
        Vue.component("v-5b4d5ff452035", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-22f06994be78a",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/algorithm/Charpter4.md").then(comp => {
        Vue.component("v-22f06994be78a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-285973b5de6ed",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/algorithm/Charpter5.md").then(comp => {
        Vue.component("v-285973b5de6ed", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f4a410d910373",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/algorithm/Charpter6.md").then(comp => {
        Vue.component("v-f4a410d910373", comp.default)
        next()
      })
    }
  },
  {
    name: "v-67adbb3624c1a",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/algorithm/Index.md").then(comp => {
        Vue.component("v-67adbb3624c1a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-3aeff74d65fad",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/config/README.md").then(comp => {
        Vue.component("v-3aeff74d65fad", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-be56b135616c8",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/default-theme-config/README.md").then(comp => {
        Vue.component("v-be56b135616c8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-bb2ab891b2da3",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/README.md").then(comp => {
        Vue.component("v-bb2ab891b2da3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-ad57dfe1d35e3",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/assets.md").then(comp => {
        Vue.component("v-ad57dfe1d35e3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c83091f739d79",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/basic-config.md").then(comp => {
        Vue.component("v-c83091f739d79", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7a490b42c174f",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/custom-themes.md").then(comp => {
        Vue.component("v-7a490b42c174f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ab650a0f41c21",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/deploy.md").then(comp => {
        Vue.component("v-ab650a0f41c21", comp.default)
        next()
      })
    }
  },
  {
    name: "v-15acffb75c19a",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/getting-started.md").then(comp => {
        Vue.component("v-15acffb75c19a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cd732b51700a5",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/i18n.md").then(comp => {
        Vue.component("v-cd732b51700a5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6d6ea5cc22a49",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/markdown.md").then(comp => {
        Vue.component("v-6d6ea5cc22a49", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8d07a8e66afa7",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/using-vue.md").then(comp => {
        Vue.component("v-8d07a8e66afa7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2f612ade4f513",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/interface/BlackMarket.md").then(comp => {
        Vue.component("v-2f612ade4f513", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fdc330e83bd7b",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/interface/Mind.md").then(comp => {
        Vue.component("v-fdc330e83bd7b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1d02cd62ba90b",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/interface/TouTiao.md").then(comp => {
        Vue.component("v-1d02cd62ba90b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dcd8d885c5945",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/interface/Yuedu.md").then(comp => {
        Vue.component("v-dcd8d885c5945", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a8403dbbc088e",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/interview/ali.md").then(comp => {
        Vue.component("v-a8403dbbc088e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ef1266577124",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/interview/index.md").then(comp => {
        Vue.component("v-ef1266577124", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-0dee71ace35d4",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/interview/longhu.md").then(comp => {
        Vue.component("v-0dee71ace35d4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2a599a2050338",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/miniapp/README.md").then(comp => {
        Vue.component("v-2a599a2050338", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-0d7069e4583ca",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/miniapp/WXS.md").then(comp => {
        Vue.component("v-0d7069e4583ca", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3378c39b60942",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/miniapp/wepy组件通信.md").then(comp => {
        Vue.component("v-3378c39b60942", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-d94c364689247",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/miniapp/小程序事件.md").then(comp => {
        Vue.component("v-d94c364689247", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-e664627d16513",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/miniapp/小程序组件.md").then(comp => {
        Vue.component("v-e664627d16513", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-fe7a3ca52c18b",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/miniapp/小程序组件化.md").then(comp => {
        Vue.component("v-fe7a3ca52c18b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-261f7be933e6",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/miniapp/小程序路由.md").then(comp => {
        Vue.component("v-261f7be933e6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-7ed748bdd8777",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/JSX.md").then(comp => {
        Vue.component("v-7ed748bdd8777", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c989472b5ca2a",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/MVVM.md").then(comp => {
        Vue.component("v-c989472b5ca2a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-46cd5a09b3a8b",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/Props.md").then(comp => {
        Vue.component("v-46cd5a09b3a8b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-74807c396bb74",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/README.md").then(comp => {
        Vue.component("v-74807c396bb74", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-f6913e9094af1",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/React生命周期.md").then(comp => {
        Vue.component("v-f6913e9094af1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-fe5854f70243d",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/React组件.md").then(comp => {
        Vue.component("v-fe5854f70243d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-99ede4dc99d21",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/React路由.md").then(comp => {
        Vue.component("v-99ede4dc99d21", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-79fcbbc25475f",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/redux.md").then(comp => {
        Vue.component("v-79fcbbc25475f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-af958a685831d",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/redux中间件.md").then(comp => {
        Vue.component("v-af958a685831d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-e48a117a2b249",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/组件通信.md").then(comp => {
        Vue.component("v-e48a117a2b249", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-a89fcf15ec7e5",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/高阶组件.md").then(comp => {
        Vue.component("v-a89fcf15ec7e5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-74542bdc5e843",
    path: "/zh/standard/Cache.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Cache.md").then(comp => {
        Vue.component("v-74542bdc5e843", comp.default)
        next()
      })
    }
  },
  {
    name: "v-85386a6a736ad",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Compatibility.md").then(comp => {
        Vue.component("v-85386a6a736ad", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1e5b999c06508",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Cooperation.md").then(comp => {
        Vue.component("v-1e5b999c06508", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7d4359a3aedf5",
    path: "/zh/standard/Improve.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Improve.md").then(comp => {
        Vue.component("v-7d4359a3aedf5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ced5c91eb6cdd",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Project.md").then(comp => {
        Vue.component("v-ced5c91eb6cdd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e01244ad2403a",
    path: "/zh/standard/Security.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Security.md").then(comp => {
        Vue.component("v-e01244ad2403a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dfb1056a3c79",
    path: "/zh/standard/Spa.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Spa.md").then(comp => {
        Vue.component("v-dfb1056a3c79", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6f1604a0f854c",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Standard.md").then(comp => {
        Vue.component("v-6f1604a0f854c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6723d3c6c7ae",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Start.md").then(comp => {
        Vue.component("v-6723d3c6c7ae", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0d5f3417f1ea3",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Babel.md").then(comp => {
        Vue.component("v-0d5f3417f1ea3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-84422838c8885",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Es6.md").then(comp => {
        Vue.component("v-84422838c8885", comp.default)
        next()
      })
    }
  },
  {
    name: "v-03a9eaf106e39",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Es6方法扩展.md").then(comp => {
        Vue.component("v-03a9eaf106e39", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-342858a48233a",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Promise.md").then(comp => {
        Vue.component("v-342858a48233a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-41327a226dae1",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/README.md").then(comp => {
        Vue.component("v-41327a226dae1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-e654825547516",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-e654825547516", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-2b20d71715a55",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Vue动画.md").then(comp => {
        Vue.component("v-2b20d71715a55", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-c6bc8d0ab51c5",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Vue组件.md").then(comp => {
        Vue.component("v-c6bc8d0ab51c5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-b61e9aafdf097",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Vue路由.md").then(comp => {
        Vue.component("v-b61e9aafdf097", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-fc7c9e15f770d",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Webpack.md").then(comp => {
        Vue.component("v-fc7c9e15f770d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3c3fcc1b17ff",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/vuex.md").then(comp => {
        Vue.component("v-3c3fcc1b17ff", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2c4b521473784",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/vue钩子函数.md").then(comp => {
        Vue.component("v-2c4b521473784", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    name: "v-1cc5b466e27d6",
    path: "/zh/webpack/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/webpack/README.md").then(comp => {
        Vue.component("v-1cc5b466e27d6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/webpack/index.html",
    redirect: "/zh/webpack/"
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]