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
    name: "v-d421b1494e29c",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\README.md").then(comp => {
        Vue.component("v-d421b1494e29c", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-d1c428ea2028a",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-d1c428ea2028a", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-d3ad5d9d655d1",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-d3ad5d9d655d1", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-fe4f0dc6e3821",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-fe4f0dc6e3821", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-e899a47b592cf",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-e899a47b592cf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ea29be0587921",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-ea29be0587921", comp.default)
        next()
      })
    }
  },
  {
    name: "v-09412df41fec7",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-09412df41fec7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c597f6a9276b7",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-c597f6a9276b7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-976fb036021cf",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-976fb036021cf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-92d857920e0c5",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-92d857920e0c5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-24643c58f2edf",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-24643c58f2edf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-477b5bb4f9c7a",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-477b5bb4f9c7a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-13d8962f36e82",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-13d8962f36e82", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-71e688535e62f",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-71e688535e62f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8bb1ad6b8ea6f",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-8bb1ad6b8ea6f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-31c9221a32ea8",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-31c9221a32ea8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-37f3339353f2b",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-37f3339353f2b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-c72061783b67c",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-c72061783b67c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-cc9a04aaf4bb7",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-cc9a04aaf4bb7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-0bd17414073a",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-0bd17414073a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-55f8bdf1c81ca",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-55f8bdf1c81ca", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2111802b566e3",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-2111802b566e3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-81fed334c73f",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-81fed334c73f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-73d67bf94ba1c",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-73d67bf94ba1c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-57bad2cfec641",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-57bad2cfec641", comp.default)
        next()
      })
    }
  },
  {
    name: "v-728a0b1e7e646",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-728a0b1e7e646", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e09506692afad",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-e09506692afad", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0f4346353d74f",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-0f4346353d74f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-878440d1426e7",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-878440d1426e7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3b53439673321",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-3b53439673321", comp.default)
        next()
      })
    }
  },
  {
    name: "v-91d8ca472c5d1",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-91d8ca472c5d1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cc3480edfa218",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-cc3480edfa218", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3716aff6df292",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-3716aff6df292", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c5ddb13701694",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-c5ddb13701694", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-59f078925dc48",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-59f078925dc48", comp.default)
        next()
      })
    }
  },
  {
    name: "v-398748a20e499",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-398748a20e499", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-13206685e8c54",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-13206685e8c54", comp.default)
        next()
      })
    }
  },
  {
    name: "v-56f364f5d5e01",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-56f364f5d5e01", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-0f50b7d0f1d14",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-0f50b7d0f1d14", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-48b66112a0a41",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-48b66112a0a41", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-07263f5d6926c",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-07263f5d6926c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-7a94da88984fe",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-7a94da88984fe", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-8de6f5ceb91fa",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-8de6f5ceb91fa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0475cfc2498e3",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-0475cfc2498e3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5f96141087279",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-5f96141087279", comp.default)
        next()
      })
    }
  },
  {
    name: "v-55b7a4997e31b",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-55b7a4997e31b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-95a28dc1eac99",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-95a28dc1eac99", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-6ddc33eadfd9",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-6ddc33eadfd9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-d69aabf7c2468",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-d69aabf7c2468", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-88e2c13b5b557",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-88e2c13b5b557", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d422f43cd26b3",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-d422f43cd26b3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-13ba3f97983b2",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-13ba3f97983b2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-9819ccb02982d",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-9819ccb02982d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-e91068daba542",
    path: "/zh/standard/Cache.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Cache.md").then(comp => {
        Vue.component("v-e91068daba542", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6cc633471e2e7",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-6cc633471e2e7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a4a6c94310558",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-a4a6c94310558", comp.default)
        next()
      })
    }
  },
  {
    name: "v-21aeafdd17b55",
    path: "/zh/standard/Improve.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Improve.md").then(comp => {
        Vue.component("v-21aeafdd17b55", comp.default)
        next()
      })
    }
  },
  {
    name: "v-124c7f96e0529",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-124c7f96e0529", comp.default)
        next()
      })
    }
  },
  {
    name: "v-637926d1ebe86",
    path: "/zh/standard/Security.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Security.md").then(comp => {
        Vue.component("v-637926d1ebe86", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ea2938caf1d25",
    path: "/zh/standard/Spa.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Spa.md").then(comp => {
        Vue.component("v-ea2938caf1d25", comp.default)
        next()
      })
    }
  },
  {
    name: "v-500e2c538838c",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-500e2c538838c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2b35e97eb57c5",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-2b35e97eb57c5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9297f46e89b0b",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-9297f46e89b0b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-88d777c635e2b",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-88d777c635e2b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0723afe72d91b",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-0723afe72d91b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-376a8ebb3c8aa",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-376a8ebb3c8aa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f8cfef92f4982",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-f8cfef92f4982", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-994f96aae27d5",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-994f96aae27d5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-dbe86df028dee",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-dbe86df028dee", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-165f01b22dc3e",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-165f01b22dc3e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-5d2bcfc1e2667",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-5d2bcfc1e2667", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-1e0b7f52ee833",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-1e0b7f52ee833", comp.default)
        next()
      })
    }
  },
  {
    name: "v-31cbe19f426de",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-31cbe19f426de", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ec3cb0d4a9321",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-ec3cb0d4a9321", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    name: "v-cca7742f93dae",
    path: "/zh/webpack/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\webpack\\README.md").then(comp => {
        Vue.component("v-cca7742f93dae", comp.default)
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