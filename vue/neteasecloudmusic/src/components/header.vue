<template>
    <div id="header">
      <div class="nav">
        <span class="iconfont icon-menu"@click="showMueu"></span>
        <router-link to="/my">my</router-link>
        <router-link to="/home">home</router-link>
        <router-link to="/search">search</router-link>
      </div>
    </div>
</template>

<script>
  // import store from '../store/menulist'
  export default {
      methods:{
        showMueu () {
        },
        hideMenu () {
        }
        }
    }



</script>

<style lang="scss" scoped>
  .nav{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100px;
    line-height: 1;
    background: red;
    }

  .icon-menu{
    font-size: 40px;
    margin-left: 0;
    position: absolute;
    left: 20px;
  }

</style>
