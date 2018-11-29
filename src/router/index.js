import Vue from 'vue'
import Router from 'vue-router'
import Config from "@/config";

Vue.use(Router)
let Login = () => import('@/pages/login')
let second = () => import('@/pages/second')
let Update = () => import('@/update')
let baseUrl = !Config.isDesktop ? 'csws' : process.env.NODE_ENV === "development" ? '' : Config.absUrl
let mode = Config.isDesktop ? 'hash' : 'history'

// 布局
let MainLayout = () => import('@/layouts/mainLayout');
// 路由
let Chat = () => import('@/pages/chat') // 会话

const routerConfig = {
  mode: mode,
  base: baseUrl,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/manager',
      component: MainLayout,
      meta: { requiresAuth: true },
      children : [
        {
          path: '',
          name: 'chat',
          component: Chat
        },
        {
          path: 'second',
          name: 'second',
          component: second
        }
      ]
    },
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      name: 'indexPage',
      component: Update
    }
  ]
}
// 开发时的测试页面
// if (process.env.NODE_ENV === "development") {
//   let test = () => import("@/test.vue");
//   routerConfig.routes.push(
//     {
//       path: '/test',
//       name: 'test',
//       component: test
//     }
//   )
// }

export default new Router(routerConfig)
