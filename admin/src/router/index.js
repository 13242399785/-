import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from 'views/Main'

Vue.use(VueRouter)

const routes = [{
    path: '/login',
    component: () => import('../views/Login.vue'),
    meta: {
      noRequiredAuth: true
    }
  },
  {
    path: "*",
    redirect: "/404",
    // component:() => import('@/pages/404')
  },
  {
    path: '/',
    component: Main,
    redirect: '/home',
    children: [
      //welcome
      {
        path: 'home',
        component: () => import('../views/welcome/Welcome.vue')
      },
      //404
      {
        path: '404',
        component: () => import('../views/404.vue')
      },
      //分类
      {
        path: 'category',
        component: () => import('../views/category/Category.vue')
      },
      //物品
      {
        path: 'item',
        component: () => import('../views/item/Item.vue')
      },
      //英雄
      {
        path: 'hero/create',
        component: () => import('../views/hero/HeroEdit.vue')
      },
      {
        path: 'hero/edit/:id',
        component: () => import('../views/hero/HeroEdit.vue'),
        props: true
      },
      {
        path: 'hero/list',
        component: () => import('../views/hero/HeroList.vue')
      },
      //文章
      {
        path: 'article/create',
        component: () => import('../views/article/ArticleEdit.vue')
      },
      {
        path: 'article/edit/:id',
        component: () => import('../views/article/ArticleEdit.vue'),
        props: true
      },
      {
        path: 'article/list',
        component: () => import('../views/article/ArticleList.vue')
      },
      //广告位
      {
        path: 'ad/list',
        component: () => import('../views/ad/AdList.vue')
      },
      //用户
      {
        path: 'admin_user/list',
        component: () => import('../views/adminUser/AdminUserList.vue')
      },
      //目录管理
      {
        path: 'catalog',
        component: () => import('../views/menu/menu.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

router.onError((error) => {
  console.error(error)
  const pattern = /Loading chunk/g
  // const pattern = /Loading chunk (\d)+ failed/g
  const isChunkLoadFailed = error.message.match(pattern)
  const targetPath = router.history.pending.fullPath
  if (isChunkLoadFailed && error.type === 'missing') {
    // const targetPath = $router.history.pending.fullPath
    router.push(targetPath)
  }
})

router.beforeEach((to, from, next) => {

  if (!to.meta.noRequiredAuth && !sessionStorage.token) return next('/login')

  return next()

})

export default router