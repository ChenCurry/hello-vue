import Vue from 'vue'
import Router from 'vue-router'

import Login from "../views/Login"
import Main from '../views/Main'

import UserList from '../views/user/List'
import UserProfile from '../views/user/Profile'
import NotFound from '../views/NotFound'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      // 登录页
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      // 首页 /:name
      path: '/main',
      name: 'Main',
      props: true,
      component: Main,
      children: [
        {path: '/user/profile/:id', name: 'UserProfile', component: UserProfile, props: true},
        {path: '/user/list', name: 'UserList', component: UserList}
      ]
    }, {
      path: '/goHome',
      redirect: '/main'
    }, {
      path: '*',
      component: NotFound
    }
  ]
});
