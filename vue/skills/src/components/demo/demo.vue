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
  <!--<home></home>-->
  <!--全选-->
  <check></check>


</div>
</template>

<script>
  import Elasticlayer from './Elasticlayer'
  import LoadMore from './LoadMore'
  import PreviewPicture from './PreviewPicture'
  import check from './check'
  import cehua from './cehua/home'
  export default {
    components:{
      Elasticlayer,LoadMore,PreviewPicture,cehua,check
    }
    }

</script>

<style scoped>


</style>
