<template>
  <div class="home">
    <div class="test" @click="showSide" slot="overwrite-left">
首页
    </div>
    <!--<x-header>-->
    <!--<span>首页</span>-->
    <!--<x-icon @click="showSide" slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>-->
    <!--</x-header>-->
    <!--<side-bar></side-bar>-->
    <SideBar>

    </SideBar>
  </div>
</template>


<script>
  import store from '../../../store/index.js';
  import SideBar from './sideBar'

  export default {
    store,
    data() {
      return {}
    },
    methods: {
      showSide:function(){
        this.$store.dispatch('showSideBar')
      }
    },
    mounted: function () {
      console.log(this.$store)
    },
    components: {
      // "side-bar": SideBar
      SideBar
    },

  }
</script>


<style scoped>


</style>
