<template>
<div id="app">
  <!--弹层-->
  <Elasticlayer></Elasticlayer>
  <LoadMore></LoadMore>
</div>
</template>

<script>
  import Elasticlayer from './Elasticlayer'
  import LoadMore from './LoadMore'

  export default {
    components:{
      "Elasticlayer":Elasticlayer,
      'LoadMore':LoadMore
    }
    }

</script>

<style scoped>

</style>
