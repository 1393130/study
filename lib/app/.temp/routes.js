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
    name: "v-924ea8d235c02",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/README.md").then(comp => {
        Vue.component("v-924ea8d235c02", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-2069fa1546b18",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/config/README.md").then(comp => {
        Vue.component("v-2069fa1546b18", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-4e7be18011186",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/default-theme-config/README.md").then(comp => {
        Vue.component("v-4e7be18011186", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-c2cc819624667",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/README.md").then(comp => {
        Vue.component("v-c2cc819624667", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-bc31f07cbe7c6",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/assets.md").then(comp => {
        Vue.component("v-bc31f07cbe7c6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-195381ca2049e",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/basic-config.md").then(comp => {
        Vue.component("v-195381ca2049e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a57ec38df89f5",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/custom-themes.md").then(comp => {
        Vue.component("v-a57ec38df89f5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5ec73ade5d232",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/deploy.md").then(comp => {
        Vue.component("v-5ec73ade5d232", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2f5bdf1af9b7",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/getting-started.md").then(comp => {
        Vue.component("v-2f5bdf1af9b7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a05921a84e499",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/i18n.md").then(comp => {
        Vue.component("v-a05921a84e499", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0d9cc73d854b7",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/markdown.md").then(comp => {
        Vue.component("v-0d9cc73d854b7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c120f51c2d94c",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/guide/using-vue.md").then(comp => {
        Vue.component("v-c120f51c2d94c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3309a3011c965",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/README.md").then(comp => {
        Vue.component("v-3309a3011c965", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-32d4817c68e36",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/algorithm/Charpter4.md").then(comp => {
        Vue.component("v-32d4817c68e36", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b0682357f09f8",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/algorithm/Charpter5.md").then(comp => {
        Vue.component("v-b0682357f09f8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-79a1b3f890206",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/algorithm/Charpter6.md").then(comp => {
        Vue.component("v-79a1b3f890206", comp.default)
        next()
      })
    }
  },
  {
    name: "v-be79e81a1f71b",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/algorithm/Index.md").then(comp => {
        Vue.component("v-be79e81a1f71b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-e63862b4867c2",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/config/README.md").then(comp => {
        Vue.component("v-e63862b4867c2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-1db92ff9ab396",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/default-theme-config/README.md").then(comp => {
        Vue.component("v-1db92ff9ab396", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-a27b79b93aef2",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/README.md").then(comp => {
        Vue.component("v-a27b79b93aef2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-56fd8c4f42475",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/assets.md").then(comp => {
        Vue.component("v-56fd8c4f42475", comp.default)
        next()
      })
    }
  },
  {
    name: "v-acc019ec9d09",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/basic-config.md").then(comp => {
        Vue.component("v-acc019ec9d09", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cfaebed03c491",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/custom-themes.md").then(comp => {
        Vue.component("v-cfaebed03c491", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7fa9e13dbd8a6",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/deploy.md").then(comp => {
        Vue.component("v-7fa9e13dbd8a6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-afbf0ffa4da5",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/getting-started.md").then(comp => {
        Vue.component("v-afbf0ffa4da5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-40a79411ca0f4",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/i18n.md").then(comp => {
        Vue.component("v-40a79411ca0f4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d7a5d36ae2b2d",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/markdown.md").then(comp => {
        Vue.component("v-d7a5d36ae2b2d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4240ff5019cff",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/guide/using-vue.md").then(comp => {
        Vue.component("v-4240ff5019cff", comp.default)
        next()
      })
    }
  },
  {
    name: "v-501fdc2664c23",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/interface/BlackMarket.md").then(comp => {
        Vue.component("v-501fdc2664c23", comp.default)
        next()
      })
    }
  },
  {
    name: "v-17f790af21b5e",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/interface/Mind.md").then(comp => {
        Vue.component("v-17f790af21b5e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-63fd5af466313",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/interface/TouTiao.md").then(comp => {
        Vue.component("v-63fd5af466313", comp.default)
        next()
      })
    }
  },
  {
    name: "v-127a246fe63a8",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/interface/Yuedu.md").then(comp => {
        Vue.component("v-127a246fe63a8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-610a0a5f92abd",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/interview/ali.md").then(comp => {
        Vue.component("v-610a0a5f92abd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c6ba6c911a486",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/interview/index.md").then(comp => {
        Vue.component("v-c6ba6c911a486", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-6183e7fa8c927",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/interview/longhu.md").then(comp => {
        Vue.component("v-6183e7fa8c927", comp.default)
        next()
      })
    }
  },
  {
    name: "v-47d264ae764cb",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/miniapp/README.md").then(comp => {
        Vue.component("v-47d264ae764cb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-033e1b4ae742d",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/miniapp/WXS.md").then(comp => {
        Vue.component("v-033e1b4ae742d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d330d03a5a05e",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/miniapp/wepy组件通信.md").then(comp => {
        Vue.component("v-d330d03a5a05e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-47291cf677a3",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/miniapp/小程序事件.md").then(comp => {
        Vue.component("v-47291cf677a3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-ab159a67e9b43",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/miniapp/小程序组件.md").then(comp => {
        Vue.component("v-ab159a67e9b43", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-8d3d1d55388bf",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/miniapp/小程序组件化.md").then(comp => {
        Vue.component("v-8d3d1d55388bf", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-e731ea046119c",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/miniapp/小程序路由.md").then(comp => {
        Vue.component("v-e731ea046119c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-447a1e9f95687",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/JSX.md").then(comp => {
        Vue.component("v-447a1e9f95687", comp.default)
        next()
      })
    }
  },
  {
    name: "v-63f317f6cd10c",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/MVVM.md").then(comp => {
        Vue.component("v-63f317f6cd10c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-032ef5c1fa54d",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/Props.md").then(comp => {
        Vue.component("v-032ef5c1fa54d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8042a642eb196",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/README.md").then(comp => {
        Vue.component("v-8042a642eb196", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-10fc4ae17e768",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/React生命周期.md").then(comp => {
        Vue.component("v-10fc4ae17e768", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-a985094d5d28a",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/React组件.md").then(comp => {
        Vue.component("v-a985094d5d28a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-4bb3d366f25d5",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/React路由.md").then(comp => {
        Vue.component("v-4bb3d366f25d5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-6c1f9ca6de844",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/redux.md").then(comp => {
        Vue.component("v-6c1f9ca6de844", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e3c35881daac7",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/redux中间件.md").then(comp => {
        Vue.component("v-e3c35881daac7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-e857811084e7f",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/组件通信.md").then(comp => {
        Vue.component("v-e857811084e7f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-ebf9acde839cc",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/react/高阶组件.md").then(comp => {
        Vue.component("v-ebf9acde839cc", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-6ba0bb040052",
    path: "/zh/standard/Cache.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Cache.md").then(comp => {
        Vue.component("v-6ba0bb040052", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c463317daa841",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Compatibility.md").then(comp => {
        Vue.component("v-c463317daa841", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bdf35d11f1f02",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Cooperation.md").then(comp => {
        Vue.component("v-bdf35d11f1f02", comp.default)
        next()
      })
    }
  },
  {
    name: "v-aea4158730d3a",
    path: "/zh/standard/Improve.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Improve.md").then(comp => {
        Vue.component("v-aea4158730d3a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b8cb356e50fa6",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Project.md").then(comp => {
        Vue.component("v-b8cb356e50fa6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b19293515a2db",
    path: "/zh/standard/Security.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Security.md").then(comp => {
        Vue.component("v-b19293515a2db", comp.default)
        next()
      })
    }
  },
  {
    name: "v-46678f1e74b85",
    path: "/zh/standard/Spa.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Spa.md").then(comp => {
        Vue.component("v-46678f1e74b85", comp.default)
        next()
      })
    }
  },
  {
    name: "v-410f6260b5c9d",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Standard.md").then(comp => {
        Vue.component("v-410f6260b5c9d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1956293c3f5d",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/standard/Start.md").then(comp => {
        Vue.component("v-1956293c3f5d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5b47cb7143b98",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Babel.md").then(comp => {
        Vue.component("v-5b47cb7143b98", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4ce85967a8608",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Es6.md").then(comp => {
        Vue.component("v-4ce85967a8608", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fca7301c973e3",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Es6方法扩展.md").then(comp => {
        Vue.component("v-fca7301c973e3", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-bcdb81dd3cf11",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Promise.md").then(comp => {
        Vue.component("v-bcdb81dd3cf11", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f34c6a8da8f97",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/README.md").then(comp => {
        Vue.component("v-f34c6a8da8f97", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-28bc31f0adf88",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-28bc31f0adf88", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-f727658a5e5aa",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Vue动画.md").then(comp => {
        Vue.component("v-f727658a5e5aa", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-6694fcedefd89",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Vue组件.md").then(comp => {
        Vue.component("v-6694fcedefd89", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-0068c144e61b1",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Vue路由.md").then(comp => {
        Vue.component("v-0068c144e61b1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-03744d317cca7",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/Webpack.md").then(comp => {
        Vue.component("v-03744d317cca7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e296c0308e6ed",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/vuex.md").then(comp => {
        Vue.component("v-e296c0308e6ed", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cee73f9597189",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/vue/vue钩子函数.md").then(comp => {
        Vue.component("v-cee73f9597189", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    name: "v-bec7195255feb",
    path: "/zh/webpack/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/liulu/Downloads/study/src/zh/webpack/README.md").then(comp => {
        Vue.component("v-bec7195255feb", comp.default)
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