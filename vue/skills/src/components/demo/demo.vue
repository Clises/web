<template>
<div id="app">
  <!--弹层-->
  <!--<Elasticlayer></Elasticlayer>-->
  <!--<LoadMore></LoadMore>-->
  <!--<PreviewPicture></PreviewPicture>-->
  <!--<router-link to="/Elasticlayer">点击查看弹出层</router-link>-->
  <!--<router-link to="/LoadMore">加载更多</router-link>-->
  <!--<router-link to="/PreviewPicture">图片预览组件</router-link>-->
  <!--<router-view></router-view>-->
  <home></home>



</div>
</template>

<script>
  import tab from './tab/tab'
  import Elasticlayer from './Elasticlayer'
  import LoadMore from './LoadMore'
  import PreviewPicture from './PreviewPicture'
  import home from './cehua/home'



  export default {
    components:{
      "Elasticlayer":Elasticlayer,
      'LoadMore':LoadMore,
      'PreviewPicture':PreviewPicture,
      'home':home,
      'tab':tab
    }
    }

</script>

<style scoped>


</style>
