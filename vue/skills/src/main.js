// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router/index'
import '@/assets/css/common.css'
//rem自适应
import 'lib-flexible/flexible'

//使用 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource);

//MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//图片预览 demo
import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview)

// 使用 Vant
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
Vue.use(Vant);

//启动时生成生产提示
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
