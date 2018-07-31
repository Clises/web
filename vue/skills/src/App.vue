<template>
  <div id="app">
    <demo></demo>
    <router></router>
    <getData></getData>
    <transferData></transferData>
    <vuex></vuex>
    <!--<Map></Map>-->
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


  export default {
  components:{
      'demo':demo,
      'router':router,
      'getData':getData,
      'transferData':transferData,
    'vuex':vuex,
    // 'Map':Map
    }
}
</script>

<style>
#app {
}
</style>
