// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入axios
import axios from 'axios'
// 配置axios
Vue.prototype.axios = axios
// 引入element ui
import ElementUI from 'element-ui'
// 引入css文件
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: {
    App
  },
  template: '<App/>'
})
