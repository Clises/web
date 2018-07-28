<template>
    <div id="header">
      <div class="nav">
        <router-link to="/song">推荐音乐</router-link>
        <router-link to="/home">首页</router-link>
        <router-link to="/list">热歌榜</router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
  .nav{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background: red;
    height: 75px;
  }

</style>
