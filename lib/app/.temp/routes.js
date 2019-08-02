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
    name: "v-811c1aa6514ff",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\README.md").then(comp => {
        Vue.component("v-811c1aa6514ff", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-ed249b6b4a4a5",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-ed249b6b4a4a5", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-3a59626dbd5d",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-3a59626dbd5d", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-5f3ee8126368",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-5f3ee8126368", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-3695a219dd88f",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-3695a219dd88f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-80f8da2dc5fe7",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-80f8da2dc5fe7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-96280769f8c5",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-96280769f8c5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7bb3a6c343231",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-7bb3a6c343231", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c50d4043bb11e",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-c50d4043bb11e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ae85732d18a1d",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-ae85732d18a1d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f22bb5eb7376c",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-f22bb5eb7376c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8d00c1907cccb",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-8d00c1907cccb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c81b9fdcf597f",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-c81b9fdcf597f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-fa03b38002203",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-fa03b38002203", comp.default)
        next()
      })
    }
  },
  {
    name: "v-76ffc15635e4d",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-76ffc15635e4d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ef314f1ca7d0b",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-ef314f1ca7d0b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d5de57c930ff1",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-d5de57c930ff1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-1606cad5a658e",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-1606cad5a658e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-dd9ba30d2f64b",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-dd9ba30d2f64b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-1c10b0a780dc3",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-1c10b0a780dc3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-f55fc6eece362",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-f55fc6eece362", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a344cc8f2eab9",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-a344cc8f2eab9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9720cdd50287b",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-9720cdd50287b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f0b9ebf92fa56",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-f0b9ebf92fa56", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6e2cfd913b07e",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-6e2cfd913b07e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-700997e7757dc",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-700997e7757dc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9b59ccc9aa2e1",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-9b59ccc9aa2e1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-afd74d081c7d1",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-afd74d081c7d1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-90d89d084e49d",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-90d89d084e49d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bfc2a435d05fd",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-bfc2a435d05fd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d70a9ab17653f",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-d70a9ab17653f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8ca888e0875c7",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-8ca888e0875c7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d94173cb411fb",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-d94173cb411fb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bc06e6de913e8",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-bc06e6de913e8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-df908e10fb93f",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-df908e10fb93f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9b2159991ff65",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-9b2159991ff65", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-80df1010c542f",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-80df1010c542f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-47239540a6834",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-47239540a6834", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-0a0b1185166c5",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-0a0b1185166c5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-b3d5abdfe7a45",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-b3d5abdfe7a45", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-227c150dd112d",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-227c150dd112d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-78a93373c96ce",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-78a93373c96ce", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-69fb93e2915e8",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-69fb93e2915e8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bfcf78a2d6b6e",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-bfcf78a2d6b6e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-db06d9fd763ac",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-db06d9fd763ac", comp.default)
        next()
      })
    }
  },
  {
    name: "v-977db71ae284e",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-977db71ae284e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-9a87bbc690d77",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-9a87bbc690d77", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-5a1feeba0ad85",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-5a1feeba0ad85", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-60c1ec462c34d",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-60c1ec462c34d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-4401c77a5a2ec",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-4401c77a5a2ec", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1c72806ae81f2",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-1c72806ae81f2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-3d2d8ab646878",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-3d2d8ab646878", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-3c2fa9cae289a",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-3c2fa9cae289a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-1838e1d59604",
    path: "/zh/standard/Cache.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Cache.md").then(comp => {
        Vue.component("v-1838e1d59604", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c93d3da1932c8",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-c93d3da1932c8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c59493b2f4a55",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-c59493b2f4a55", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8670731a11325",
    path: "/zh/standard/Improve.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Improve.md").then(comp => {
        Vue.component("v-8670731a11325", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b52c1ffa5d3cd",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-b52c1ffa5d3cd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f8992b59105fc",
    path: "/zh/standard/Security.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Security.md").then(comp => {
        Vue.component("v-f8992b59105fc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bb5c500c89aa3",
    path: "/zh/standard/Spa.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Spa.md").then(comp => {
        Vue.component("v-bb5c500c89aa3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-af70f6e74e565",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-af70f6e74e565", comp.default)
        next()
      })
    }
  },
  {
    name: "v-40596c9e6db1a",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-40596c9e6db1a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1e9782ddbbdee",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-1e9782ddbbdee", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9f19907b640df",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-9f19907b640df", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c744cbecd7ee2",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-c744cbecd7ee2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-4d1c2046cee73",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-4d1c2046cee73", comp.default)
        next()
      })
    }
  },
  {
    name: "v-416ea988fe3c2",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-416ea988fe3c2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-3add4067818ff",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-3add4067818ff", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-509b1671db61d",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-509b1671db61d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-e31335b3dd792",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-e31335b3dd792", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-888c88134bbc7",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-888c88134bbc7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-1dd0e6f033744",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-1dd0e6f033744", comp.default)
        next()
      })
    }
  },
  {
    name: "v-90bb480ed0e3b",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-90bb480ed0e3b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-de70a0e735a3c",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-de70a0e735a3c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    name: "v-e13d565afe3be",
    path: "/zh/webpack/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\webpack\\README.md").then(comp => {
        Vue.component("v-e13d565afe3be", comp.default)
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