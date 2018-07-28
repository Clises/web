<template>
<div id="home">
  <router-link to="/News">新闻</router-link>
  <router-link to="/album">相册</router-link>
  <router-view/>
</div>
</template>

<script>
    export default {
      data(){
        return{
          msg:'首页'
        }
      }
    }
</script>

<style scoped>

</style>
