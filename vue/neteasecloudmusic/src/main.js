// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from './util/http'
import App from './App'
import router from './router'
import '@/assets/css/common.css'/*引入公共样式*/
//rem 自适应
import 'lib-flexible/flexible'

//MintUI
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//使用 swiper 插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

//暂不使用
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {
  threshold: 100 //手指左右滑动距离
};

Vue.prototype.$http=axios;
Vue.prototype.config={
  api:'http://192.168.1.101:3000'
}
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
