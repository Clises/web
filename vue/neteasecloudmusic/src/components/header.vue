<template>
    <div id="header">
      <div class="nav">
        <router-link to="/my">my</router-link>
        <router-link to="/home">home</router-link>
        <router-link to="/search">search</router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style lang="scss" scoped>
  .nav{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 75px;
    line-height: 1;
    background: red;
    }

</style>
