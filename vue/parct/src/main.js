// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//使用 router 路由
import router from './router'

//使用 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource);

//MintUI
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;
//实例化
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


