<template>
  <div id="app">
    <!--<router></router>-->
    <demo></demo>
    <!--<getData></getData>-->
    <!--<transferData></transferData>-->
    <!--<vuex></vuex>-->
    <!--<animation></animation>-->
    <!--<Map></Map>-->
    <!--<c-frame></c-frame>-->
    <!--<Signin></Signin>-->
  </div>
</template>

<script>
  /*demo*/
  import demo from './components/demo/demo'
  /*router*/
  import router from './components/router/home'
  /*获取数据*/
  import getData from './components/getData/getData'
  /*父子组件传值*/
  import transferData from './components/transferData/transferData';
  /*使用 vuex*/
  import vuex from './components/vuex/count'
  /*使用百度地图 api*/
  // import Map from './components/api/Map'
  //学习动画
  import animation from './components/animation/animation'
  //使用框架
  import frame from './components/frame/Vant/vant'
  //login
  import Signin from './components/login/Signin'


  export default {
    components: {
      demo,router,getData,transferData,vuex,animation,frame,Signin
    }
  }
</script>

<style>
  #app {
  }
</style>
