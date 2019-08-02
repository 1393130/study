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
    name: "v-2fdd8e9949fd1",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\README.md").then(comp => {
        Vue.component("v-2fdd8e9949fd1", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-fad4b5a162fe6",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-fad4b5a162fe6", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-d85cb4290f5cf",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-d85cb4290f5cf", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-f60cb83568146",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-f60cb83568146", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-edb799a889e2d",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-edb799a889e2d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b208057fd124f",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-b208057fd124f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-01a6de776e999",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-01a6de776e999", comp.default)
        next()
      })
    }
  },
  {
    name: "v-860708750c802",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-860708750c802", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5ff643c41b8b",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-5ff643c41b8b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1555337d210b4",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-1555337d210b4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4c0566adb8d77",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-4c0566adb8d77", comp.default)
        next()
      })
    }
  },
  {
    name: "v-738ffe7dbcde4",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-738ffe7dbcde4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-22d5abf882f4a",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-22d5abf882f4a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-a8e5cbe5c60d7",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-a8e5cbe5c60d7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8ef06d8d0b3a",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-8ef06d8d0b3a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-12c0eb5867511",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-12c0eb5867511", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bf859d8c6414",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-bf859d8c6414", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-cea88bc90533c",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-cea88bc90533c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-cf6f9f85752ad",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-cf6f9f85752ad", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-98d889d1f6e27",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-98d889d1f6e27", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-fd5c162feeb89",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-fd5c162feeb89", comp.default)
        next()
      })
    }
  },
  {
    name: "v-978e5199148b",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-978e5199148b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-63b4d40393835",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-63b4d40393835", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1d616b5102fde",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-1d616b5102fde", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c3c41bf0d856",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-c3c41bf0d856", comp.default)
        next()
      })
    }
  },
  {
    name: "v-311dcdca67072",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-311dcdca67072", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a535a0d0d5946",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-a535a0d0d5946", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3faecfdbbf7f5",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-3faecfdbbf7f5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9b2af3fd96fc7",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-9b2af3fd96fc7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ec65fedf518a7",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-ec65fedf518a7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-329a2bee26a23",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-329a2bee26a23", comp.default)
        next()
      })
    }
  },
  {
    name: "v-eab1ead43de0a",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-eab1ead43de0a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8638a8aa27222",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-8638a8aa27222", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a973d9de7cb6a",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-a973d9de7cb6a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-92726b1783e67",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-92726b1783e67", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0f32622d6fd09",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-0f32622d6fd09", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-08a250ec5d53a",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-08a250ec5d53a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-804df2cfe877c",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-804df2cfe877c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-85c167dff0eb9",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-85c167dff0eb9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-38a24a5d3eae2",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-38a24a5d3eae2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-2d771f00e0163",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-2d771f00e0163", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-dd428ff789a62",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-dd428ff789a62", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-5ffa972c4e75a",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-5ffa972c4e75a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6d4b21ad4260f",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-6d4b21ad4260f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-786f7af0b93f1",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-786f7af0b93f1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ba90829b87936",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-ba90829b87936", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-d5da5cb6a6e87",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-d5da5cb6a6e87", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-f09cf3e8a1699",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-f09cf3e8a1699", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-3b904dc29017a",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-3b904dc29017a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-8d0e20805805d",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-8d0e20805805d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-037d40a73d5bb",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-037d40a73d5bb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-b92aeb850daa8",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-b92aeb850daa8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-66a83fa6faa7e",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-66a83fa6faa7e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-287a6af9cdbab",
    path: "/zh/standard/Cache.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Cache.md").then(comp => {
        Vue.component("v-287a6af9cdbab", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e7e666587dc55",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-e7e666587dc55", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5529ba319f964",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-5529ba319f964", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e363fa9b8baaa",
    path: "/zh/standard/Improve.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Improve.md").then(comp => {
        Vue.component("v-e363fa9b8baaa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b6da6ceb2fe29",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-b6da6ceb2fe29", comp.default)
        next()
      })
    }
  },
  {
    name: "v-95f1c395e22ca",
    path: "/zh/standard/Security.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Security.md").then(comp => {
        Vue.component("v-95f1c395e22ca", comp.default)
        next()
      })
    }
  },
  {
    name: "v-458a4b4f52db5",
    path: "/zh/standard/Spa.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Spa.md").then(comp => {
        Vue.component("v-458a4b4f52db5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c184a7d5fb97a",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-c184a7d5fb97a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fb2752fcc6548",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-fb2752fcc6548", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2d0e121cdeebd",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-2d0e121cdeebd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c54da11cb1b3e",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-c54da11cb1b3e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-022aa7344b767",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-022aa7344b767", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-2c130828029eb",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-2c130828029eb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4e5377b5748fe",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-4e5377b5748fe", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-131b37d5cae83",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-131b37d5cae83", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-493310f63ae8d",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-493310f63ae8d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-cc7b94e254896",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-cc7b94e254896", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-b9e194b15439c",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-b9e194b15439c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-e41dd270fa9fa",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-e41dd270fa9fa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ab30e305fd537",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-ab30e305fd537", comp.default)
        next()
      })
    }
  },
  {
    name: "v-604bd70d545b9",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-604bd70d545b9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    name: "v-d02b173f27468",
    path: "/zh/webpack/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\webpack\\README.md").then(comp => {
        Vue.component("v-d02b173f27468", comp.default)
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