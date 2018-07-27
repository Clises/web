<template>
  <div id="app">
    <basics></basics>
    <getData></getData>
    <transferData></transferData>
    <router></router>
    <vframe></vframe>
    <count></count>
    <!--<M-map></M-map>-->
  </div>
</template>
<script>
  /*生命周期函数*/
  /*基础语法*/
  import basics from './components/basics/basics'
  /*获取数据的方式*/
  import getData from './components/getData/getData';
  /*父子组件传值*/
  import transferData from './components/transferData/transferData';
  /*使用路由*/
  import router from './components/router/home';

  /*使用框架*/
  import frame from './components/frame/frame'

  /*使用 vuex*/
  import vuex from './components/vuex/count'

  /*使用百度地图 api*/
  import Map from './components/api/Map'

  export default {
  data(){
    return{
    }
  },
  components:{
    'basics':basics,
    'getData':getData,
    'transferData':transferData,
    'router':router,
    'vframe':frame,
    'count':vuex,
    'M-map':Map

  },
  mounted(){

  }

}
</script>
<style>
</style>
