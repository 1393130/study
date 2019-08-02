import Vue from 'vue'
Vue.component("Bit", () => import("E:\\mine\\study\\src\\.vuepress\\components\\Bit.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-be27d634430db",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\README.md").then(comp => {
        Vue.component("v-be27d634430db", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-c844ac946c2e4",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-c844ac946c2e4", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-f4d9fbe93151b",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-f4d9fbe93151b", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-00e22232d3578",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-00e22232d3578", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-49f85378633eb",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-49f85378633eb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ca6fc33064c5e",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-ca6fc33064c5e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-75130a11a0013",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-75130a11a0013", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5a039ca0253dc",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-5a039ca0253dc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2506e7888bbe7",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-2506e7888bbe7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-66ef034eb852e",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-66ef034eb852e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-26912fb79a462",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-26912fb79a462", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ece6dc2da138a",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-ece6dc2da138a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f21267941b9a4",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-f21267941b9a4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-6c9e23330ffc4",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-6c9e23330ffc4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c4788b6c1029d",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-c4788b6c1029d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-49894622abb6a",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-49894622abb6a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f9ddc93c6403a",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-f9ddc93c6403a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-57483cce98e27",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-57483cce98e27", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-a2c47080e7e23",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-a2c47080e7e23", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-3bf01c26aeccd",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-3bf01c26aeccd", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-86799024acb91",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-86799024acb91", comp.default)
        next()
      })
    }
  },
  {
    name: "v-284861b19d333",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-284861b19d333", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3a13f5a52203a",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-3a13f5a52203a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-68d887278cc96",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-68d887278cc96", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f4ce2e7730067",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-f4ce2e7730067", comp.default)
        next()
      })
    }
  },
  {
    name: "v-19494b11a63c1",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-19494b11a63c1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-11a0505b6e57e",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-11a0505b6e57e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-09a96427826ea",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-09a96427826ea", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9d6f92b189278",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-9d6f92b189278", comp.default)
        next()
      })
    }
  },
  {
    name: "v-10c1e0fb1bbd4",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-10c1e0fb1bbd4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9e1f706190ebf",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-9e1f706190ebf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9aac9e67185e5",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-9aac9e67185e5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7ee9d90742cd1",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-7ee9d90742cd1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fe8255bcef7f7",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-fe8255bcef7f7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-08d182e45c411",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-08d182e45c411", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d3aa8684b6816",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-d3aa8684b6816", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-592e551937d56",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-592e551937d56", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e25c96b532bc",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-e25c96b532bc", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-ea828ec71dae",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-ea828ec71dae", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-d84c35a128406",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-d84c35a128406", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-3ed4c25a8eaa5",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-3ed4c25a8eaa5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-6607ddf69b6c2",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-6607ddf69b6c2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-c75d3b3f184e6",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-c75d3b3f184e6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-43d200454e2fe",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-43d200454e2fe", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fb93b1096f1f1",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-fb93b1096f1f1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fe3c3398efb67",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-fe3c3398efb67", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-9c9040d6c13a2",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-9c9040d6c13a2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-23a76efaa237d",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-23a76efaa237d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-f0112ad65fc74",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-f0112ad65fc74", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-fcdba7615fc5b",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-fcdba7615fc5b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8750ccfcdc4a3",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-8750ccfcdc4a3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-3a8a089686b8a",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-3a8a089686b8a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-5986e3a77910e",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-5986e3a77910e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-4fc3739eb36a5",
    path: "/zh/standard/Cache.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Cache.md").then(comp => {
        Vue.component("v-4fc3739eb36a5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6855c709a98a1",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-6855c709a98a1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-51ca6f6b14343",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-51ca6f6b14343", comp.default)
        next()
      })
    }
  },
  {
    name: "v-aca2ef839288f",
    path: "/zh/standard/Improve.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Improve.md").then(comp => {
        Vue.component("v-aca2ef839288f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5522fc3e98323",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-5522fc3e98323", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8dd3fb62daccd",
    path: "/zh/standard/Security.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Security.md").then(comp => {
        Vue.component("v-8dd3fb62daccd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-356c75fd448fd",
    path: "/zh/standard/Spa.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Spa.md").then(comp => {
        Vue.component("v-356c75fd448fd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-446a08c2b2964",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-446a08c2b2964", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d2bd8181e83e",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-d2bd8181e83e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d09f9071e3461",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-d09f9071e3461", comp.default)
        next()
      })
    }
  },
  {
    name: "v-110dd621b37e8",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-110dd621b37e8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6e03e7e407fad",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-6e03e7e407fad", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-2bae8291853e4",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-2bae8291853e4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-491c2510392a3",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-491c2510392a3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-60cade8b4f5bc",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-60cade8b4f5bc", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-d4ab7f8f648a",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-d4ab7f8f648a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-ad4c4c86ff65a",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-ad4c4c86ff65a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-10cc6c7319d8d",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-10cc6c7319d8d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-2d3dd5bd9af52",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-2d3dd5bd9af52", comp.default)
        next()
      })
    }
  },
  {
    name: "v-50c50c6c1194b",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-50c50c6c1194b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d8a12b533ef8f",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-d8a12b533ef8f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    name: "v-c1303e65cd5da",
    path: "/zh/webpack/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\webpack\\README.md").then(comp => {
        Vue.component("v-c1303e65cd5da", comp.default)
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