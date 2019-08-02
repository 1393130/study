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
    name: "v-ca80be75ba2e8",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\README.md").then(comp => {
        Vue.component("v-ca80be75ba2e8", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-81ba9515d253",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-81ba9515d253", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-f4c01d7c32207",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-f4c01d7c32207", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-de4e4cd13375",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-de4e4cd13375", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-841bb4dbd5f6b",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-841bb4dbd5f6b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ef8aa56062ef2",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-ef8aa56062ef2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f23bf32c168ca",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-f23bf32c168ca", comp.default)
        next()
      })
    }
  },
  {
    name: "v-73703120a73c4",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-73703120a73c4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f45a80eaaaf2a",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-f45a80eaaaf2a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2f4542984e408",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-2f4542984e408", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1238024746436",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-1238024746436", comp.default)
        next()
      })
    }
  },
  {
    name: "v-21f16672acb3a",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-21f16672acb3a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-13de55f6da54c",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-13de55f6da54c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-8daf5ecaf77a7",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-8daf5ecaf77a7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-160025324d32",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-160025324d32", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f56f417d1d9de",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-f56f417d1d9de", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6eae7527bb0c7",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-6eae7527bb0c7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-b18e6a55954ec",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-b18e6a55954ec", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-596a842fd881f",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-596a842fd881f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-4339733679454",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-4339733679454", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-524476c4c012",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-524476c4c012", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8222fd04c5acd",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-8222fd04c5acd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6fdcd5757de73",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-6fdcd5757de73", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5ff37addfbffe",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-5ff37addfbffe", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3b66556693d84",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-3b66556693d84", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ce96881d5a33f",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-ce96881d5a33f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-55d7cd7fc280e",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-55d7cd7fc280e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d232d09d1e9e",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-d232d09d1e9e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e26ecb67d533d",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-e26ecb67d533d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7167f1c1c84a8",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-7167f1c1c84a8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9343cfd69372a",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-9343cfd69372a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-64d53b5a659d7",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-64d53b5a659d7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c8fcddfeb4b93",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-c8fcddfeb4b93", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bf62764591255",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-bf62764591255", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-58d21a3d73db5",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-58d21a3d73db5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e1e2588cde948",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-e1e2588cde948", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-2e64fd3102101",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-2e64fd3102101", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0f69a27f292eb",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-0f69a27f292eb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-13fcbb8f190a6",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-13fcbb8f190a6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-480efe852b0b8",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-480efe852b0b8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-0c0e27b25eed9",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-0c0e27b25eed9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-40ae62fdbc65c",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-40ae62fdbc65c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-31dff80dd87ca",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-31dff80dd87ca", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b1243e7b735c2",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-b1243e7b735c2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2e25215ff3176",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-2e25215ff3176", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f172ddebd2a3a",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-f172ddebd2a3a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-491eecfa4ae44",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-491eecfa4ae44", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-6bf17bb1f5e02",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-6bf17bb1f5e02", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-561a57df6796a",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-561a57df6796a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-ecad92182ad2e",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-ecad92182ad2e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c47458636fd0d",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-c47458636fd0d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-d5ad27f6b3a64",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-d5ad27f6b3a64", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-3a62ac527027",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-3a62ac527027", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-fb956fcc19934",
    path: "/zh/standard/Cache.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Cache.md").then(comp => {
        Vue.component("v-fb956fcc19934", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fb867d8255c3",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-fb867d8255c3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ff426e02cd62a",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-ff426e02cd62a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2b97335921efe",
    path: "/zh/standard/Improve.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Improve.md").then(comp => {
        Vue.component("v-2b97335921efe", comp.default)
        next()
      })
    }
  },
  {
    name: "v-479b56293bcfd",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-479b56293bcfd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6a31c29d0ea4e",
    path: "/zh/standard/Security.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Security.md").then(comp => {
        Vue.component("v-6a31c29d0ea4e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-90ad0adad3bb4",
    path: "/zh/standard/Spa.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Spa.md").then(comp => {
        Vue.component("v-90ad0adad3bb4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d9150ede0735b",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-d9150ede0735b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7e5c4874213ef",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-7e5c4874213ef", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bc298bd3107df",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-bc298bd3107df", comp.default)
        next()
      })
    }
  },
  {
    name: "v-623637bdda123",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-623637bdda123", comp.default)
        next()
      })
    }
  },
  {
    name: "v-af4fba62c1b47",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-af4fba62c1b47", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-6cbe95bb31fa1",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-6cbe95bb31fa1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9fd26e3828841",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-9fd26e3828841", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-d8ea7e36558bc",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-d8ea7e36558bc", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-39f2240496773",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-39f2240496773", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-41760fc08cc86",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-41760fc08cc86", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-64696d46ec222",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-64696d46ec222", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-9d8509761d8f8",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-9d8509761d8f8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1e252e35b3582",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-1e252e35b3582", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5b2127be0f9e2",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-5b2127be0f9e2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    name: "v-6e47571dc390f",
    path: "/zh/webpack/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("E:\\mine\\study\\src\\zh\\webpack\\README.md").then(comp => {
        Vue.component("v-6e47571dc390f", comp.default)
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