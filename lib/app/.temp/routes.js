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
    name: "v-dd7680ae74463",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/README.md").then(comp => {
        Vue.component("v-dd7680ae74463", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-8d6f02cc9ea48",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/config/README.md").then(comp => {
        Vue.component("v-8d6f02cc9ea48", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-c30bbbd53a364",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/default-theme-config/README.md").then(comp => {
        Vue.component("v-c30bbbd53a364", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-767e707458ff5",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/README.md").then(comp => {
        Vue.component("v-767e707458ff5", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-edc8d9a8c194d",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/assets.md").then(comp => {
        Vue.component("v-edc8d9a8c194d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b9fe5b81842f2",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/basic-config.md").then(comp => {
        Vue.component("v-b9fe5b81842f2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dfa3e3ad00305",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/custom-themes.md").then(comp => {
        Vue.component("v-dfa3e3ad00305", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f8ae23da97ecb",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/deploy.md").then(comp => {
        Vue.component("v-f8ae23da97ecb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-859f35531f57e",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/getting-started.md").then(comp => {
        Vue.component("v-859f35531f57e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-22a6badc2a5c3",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/i18n.md").then(comp => {
        Vue.component("v-22a6badc2a5c3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ce45d5a2a6fc1",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/markdown.md").then(comp => {
        Vue.component("v-ce45d5a2a6fc1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d61a543236aaa",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/using-vue.md").then(comp => {
        Vue.component("v-d61a543236aaa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a79db14856623",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/README.md").then(comp => {
        Vue.component("v-a79db14856623", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-67c84d6c8241e",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/algorithm/Charpter4.md").then(comp => {
        Vue.component("v-67c84d6c8241e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-03665a8159815",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/algorithm/Charpter5.md").then(comp => {
        Vue.component("v-03665a8159815", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ac02b9eb0f4a2",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/algorithm/Charpter6.md").then(comp => {
        Vue.component("v-ac02b9eb0f4a2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c0b4b03402033",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/algorithm/Index.md").then(comp => {
        Vue.component("v-c0b4b03402033", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-321d7acdb6c9b",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/config/README.md").then(comp => {
        Vue.component("v-321d7acdb6c9b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-c783934df88ca",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/default-theme-config/README.md").then(comp => {
        Vue.component("v-c783934df88ca", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-c1fc6b5b5e135",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/README.md").then(comp => {
        Vue.component("v-c1fc6b5b5e135", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-74d0f4e76c429",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/assets.md").then(comp => {
        Vue.component("v-74d0f4e76c429", comp.default)
        next()
      })
    }
  },
  {
    name: "v-85039a300e79d",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/basic-config.md").then(comp => {
        Vue.component("v-85039a300e79d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c11ba675dd668",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/custom-themes.md").then(comp => {
        Vue.component("v-c11ba675dd668", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5fdc89c4afb4e",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/deploy.md").then(comp => {
        Vue.component("v-5fdc89c4afb4e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1f239100f18f6",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/getting-started.md").then(comp => {
        Vue.component("v-1f239100f18f6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c11c0a145b25f",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/i18n.md").then(comp => {
        Vue.component("v-c11c0a145b25f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5225dfab95026",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/markdown.md").then(comp => {
        Vue.component("v-5225dfab95026", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5587f285cba9d",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/using-vue.md").then(comp => {
        Vue.component("v-5587f285cba9d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5437ef67bf803",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/interface/BlackMarket.md").then(comp => {
        Vue.component("v-5437ef67bf803", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0d65b49f71588",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/interface/Mind.md").then(comp => {
        Vue.component("v-0d65b49f71588", comp.default)
        next()
      })
    }
  },
  {
    name: "v-041f3d47f09b8",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/interface/TouTiao.md").then(comp => {
        Vue.component("v-041f3d47f09b8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-025ea3e7c9f81",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/interface/Yuedu.md").then(comp => {
        Vue.component("v-025ea3e7c9f81", comp.default)
        next()
      })
    }
  },
  {
    name: "v-41410f742d907",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/interview/ali.md").then(comp => {
        Vue.component("v-41410f742d907", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f8ce7783e1e89",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/interview/index.md").then(comp => {
        Vue.component("v-f8ce7783e1e89", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-9daff646c340c",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/interview/longhu.md").then(comp => {
        Vue.component("v-9daff646c340c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a3063ff68593",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/miniapp/README.md").then(comp => {
        Vue.component("v-a3063ff68593", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-46d30e7e751b9",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/miniapp/WXS.md").then(comp => {
        Vue.component("v-46d30e7e751b9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8d546c5716571",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/miniapp/wepy组件通信.md").then(comp => {
        Vue.component("v-8d546c5716571", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-00b29c8660e48",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/miniapp/小程序事件.md").then(comp => {
        Vue.component("v-00b29c8660e48", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-11a5bccb4bc2c",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/miniapp/小程序组件.md").then(comp => {
        Vue.component("v-11a5bccb4bc2c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-af1dee7637667",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/miniapp/小程序组件化.md").then(comp => {
        Vue.component("v-af1dee7637667", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-f6533a410f0f2",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/miniapp/小程序路由.md").then(comp => {
        Vue.component("v-f6533a410f0f2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-2eddabce2b74b",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/JSX.md").then(comp => {
        Vue.component("v-2eddabce2b74b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4ad5b49a6b4a8",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/MVVM.md").then(comp => {
        Vue.component("v-4ad5b49a6b4a8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-55937f75cd5f6",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/Props.md").then(comp => {
        Vue.component("v-55937f75cd5f6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-99fb4a57c383",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/README.md").then(comp => {
        Vue.component("v-99fb4a57c383", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-e2471f3ab25c2",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/React生命周期.md").then(comp => {
        Vue.component("v-e2471f3ab25c2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-393f01a228eba",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/React组件.md").then(comp => {
        Vue.component("v-393f01a228eba", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-a898baaedbf6c",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/React路由.md").then(comp => {
        Vue.component("v-a898baaedbf6c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-cd64ecb911eec",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/redux.md").then(comp => {
        Vue.component("v-cd64ecb911eec", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1a4ea5e837467",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/redux中间件.md").then(comp => {
        Vue.component("v-1a4ea5e837467", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-21f8c1f142dee",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/组件通信.md").then(comp => {
        Vue.component("v-21f8c1f142dee", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-f9095a12eb1c7",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/高阶组件.md").then(comp => {
        Vue.component("v-f9095a12eb1c7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-7eb9ecd0b17e6",
    path: "/zh/standard/Cache.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Cache.md").then(comp => {
        Vue.component("v-7eb9ecd0b17e6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e2928f4128a39",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Compatibility.md").then(comp => {
        Vue.component("v-e2928f4128a39", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ee443b0830181",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Cooperation.md").then(comp => {
        Vue.component("v-ee443b0830181", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3635cbdc98108",
    path: "/zh/standard/Improve.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Improve.md").then(comp => {
        Vue.component("v-3635cbdc98108", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b1a19bf5ba55d",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Project.md").then(comp => {
        Vue.component("v-b1a19bf5ba55d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b4ef2e76c1c8d",
    path: "/zh/standard/Security.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Security.md").then(comp => {
        Vue.component("v-b4ef2e76c1c8d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f9dd93f3ccb66",
    path: "/zh/standard/Spa.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Spa.md").then(comp => {
        Vue.component("v-f9dd93f3ccb66", comp.default)
        next()
      })
    }
  },
  {
    name: "v-aa923138d2a8f",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Standard.md").then(comp => {
        Vue.component("v-aa923138d2a8f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-97a7d3afe4b29",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Start.md").then(comp => {
        Vue.component("v-97a7d3afe4b29", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c849943c5f33c",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Babel.md").then(comp => {
        Vue.component("v-c849943c5f33c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-46943be61c5d7",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Es6.md").then(comp => {
        Vue.component("v-46943be61c5d7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-25e941cfe0d34",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Es6方法扩展.md").then(comp => {
        Vue.component("v-25e941cfe0d34", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-bd5e61c07e4a8",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Promise.md").then(comp => {
        Vue.component("v-bd5e61c07e4a8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ef058046e534b",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/README.md").then(comp => {
        Vue.component("v-ef058046e534b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-e1c11f56ed4c5",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-e1c11f56ed4c5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-e5c35b9318431",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Vue动画.md").then(comp => {
        Vue.component("v-e5c35b9318431", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-d39d31534d95a",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Vue组件.md").then(comp => {
        Vue.component("v-d39d31534d95a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-b2059f74b7eb9",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Vue路由.md").then(comp => {
        Vue.component("v-b2059f74b7eb9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-c8e409b289723",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Webpack.md").then(comp => {
        Vue.component("v-c8e409b289723", comp.default)
        next()
      })
    }
  },
  {
    name: "v-38d0d2cbf35f1",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/vuex.md").then(comp => {
        Vue.component("v-38d0d2cbf35f1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-995d0ece7701d",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/vue钩子函数.md").then(comp => {
        Vue.component("v-995d0ece7701d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    name: "v-2ea3fb99c7bd1",
    path: "/zh/webpack/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/webpack/README.md").then(comp => {
        Vue.component("v-2ea3fb99c7bd1", comp.default)
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