import Vue from 'vue'
// import App from './App.vue'
import procedure from './procedure'
import NwdLoading from './components/index.js'

//全局注册
Vue.component("procedure",procedure);
Vue.use(NwdLoading);
new Vue({
  el:'#app',
  data:{

  }
});


// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
