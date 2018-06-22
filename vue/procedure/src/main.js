import Vue from 'vue'
// import App from './App.vue'
import procedure from './procedure'





//全局注册

Vue.component("procedure",procedure)
var myVue=new Vue({
  el:'#app',
  data:{

  }
})
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
