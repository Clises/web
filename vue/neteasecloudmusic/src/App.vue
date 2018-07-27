<template>
  <div id="app">
    <c-header></c-header>
    <c-home></c-home>
    <!--<c-highquality></c-highquality>-->
  </div>
</template>

<script>
  /*header*/
  import header from './components/header/header'
  import home from './components/home/home'
  import Goods from './components/playlist/highquality'
export default {
    components:{
      'c-header':header,
      'c-home':home,
      'c-highquality':Goods
    }
}
</script>

<style>
  @import './assets/css/common.css';

  #app {
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;*/
}
</style>
