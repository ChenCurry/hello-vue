import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
// 安装路由
Vue.use(VueRouter);

// 安装 ElementUI
Vue.use(ElementUI);

new Vue({
  el: '#app',
  // 启用路由
  router,
  // 启用 ElementUI
  render: h => h(App)
});
