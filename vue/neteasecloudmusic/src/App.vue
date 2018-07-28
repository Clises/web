<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from "@/components/header"

  export default {
    components:{
      'Header':Header
    }
}
</script>

<style>
  @import './assets/css/common.css';

</style>
