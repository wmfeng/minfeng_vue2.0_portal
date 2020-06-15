import Vue from 'vue'
import Router from 'vue-router'
const innerLayout = () =>
  import("@/views/layout/inner_layout");
// const Layout = () =>
//   import("@/views/layout/layout");
//横向nav时，打开下句
const Layout = () =>
  import("@/views/layout/layout_horizontal");

Vue.use(Router)

export const constantRouterMap = [{
  path: '/login',
  component: () =>
    import("@/views/login/login"),
  hidden: true
},
{
  path: '/sso/logout',
  hidden: true,
  component: () =>
    import("@/views/login/logout")
},
{
  path: '/404',
  component: () =>
    import('@/views/errorPage/404'),
  hidden: true
},
{
  path: '/',
  component: Layout,
  redirect: '/home',
  hidden: true
},
{
  path: '/home',
  component: Layout,
  redirect: '/home/home',
  meta: {
    title: '',
    icon: "el-icon-star-off"
  },
  children: [{
    path: 'home',
    component: () =>
      import("@/views/home/home"),
    name: 'home',
    meta: {
      title: '首页',
      icon: 'home'
    }
  }]
},
{
  path: '/nyqxsk',
  component: Layout,
  redirect: '/nyqxsk/nyqxsk',
  meta: {
    title: '',
    icon: "el-icon-star-off"
  },
  children: [{
    path: 'nyqxsk',
    component: () =>
      import("@/views/nyqxsk/nyqxsk"),
    name: 'nyqxsk',
    meta: {
      title: '农业气象实况',
      icon: 'nyqxsk'
    }
  }]
},
{
  path: '/nyqxls',
  component: Layout,
  redirect: '/nyqxls/nyqxls',
  meta: {
    title: '',
    icon: "el-icon-star-off"
  },
  children: [{
    path: 'nyqxls',
    component: () =>
      import("@/views/nyqxls/nyqxls"),
    name: 'nyqxls',
    meta: {
      title: '农业气象历史',
      icon: 'nyqxls'
    }
  }]
},
{
  path: '/nqjcyj',
  component: Layout,
  redirect: '/nqjcyj/nqjcyj',
  meta: {
    title: '',
    icon: "el-icon-star-off"
  },
  children: [{
    path: 'nqjcyj',
    component: () =>
      import("@/views/nqjcyj/nqjcyj"),
    name: 'nqjcyj',
    meta: {
      title: '农情监测预警',
      icon: 'nqjcyj'
    }
  }]
},
{
  path: '/nyqxyzt',
  component: Layout,
  redirect: '/nyqxyzt/nyqxyzt',
  meta: {
    title: '',
    icon: "el-icon-star-off"
  },
  children: [{
    path: 'nyqxyzt',
    component: () =>
      import("@/views/nyqxyzt/nyqxyzt"),
    name: 'nyqxyzt',
    meta: {
      title: '农业气象一张图',
      icon: 'nyqxyzt'
    }
  }]
},
{
  path: '/grzx',
  component: Layout,
  redirect: '/grzx/grzx',
  meta: {
    title: '',
    icon: "el-icon-star-off"
  },
  children: [{
    path: 'grzx',
    component: () =>
      import("@/views/grzx/grzx"),
    name: 'grzx',
    meta: {
      title: '个人中心',
      icon: 'grzx'
    }
  }]
},
{
  path: '*',
  redirect: '/404',
  hidden: true
}
]
export default new Router({
  // mode: "history",//浏览模式切换
  scrollBehavior: () => {
    document.getElementsByClassName("el-scrollbar__wrap")[0] ? document.getElementsByClassName("el-scrollbar__wrap")[0].scrollTop = 0 : '';
    return {
      y: 0
    }
  },
  routes: constantRouterMap
})