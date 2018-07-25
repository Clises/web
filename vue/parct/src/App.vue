<template>
  <div id="app">
    <getData></getData>
    <transferData></transferData>
    <router></router>
    <!--<M-map></M-map>-->
  </div>
</template>
<script>
  /*声明周期韩式*/
  /*获取数据的方式*/
  import getData from './components/getData/getData';
  /*父子组件传值*/
  import transferData from './components/transferData/transferData';
  /*使用路由*/
  import router from './components/router/home';
  /*使用百度地图 api*/
  import Map from './components/api/Map'

  export default {
  data(){
    return{
    }
  },
  components:{
    'getData':getData,
    'transferData':transferData,
    'router':router,
    'M-map':Map
  },
  mounted(){

  }

}
</script>
<style>
</style>
