<template>
  <div id="home">
    <h1>使用vue-router</h1>
    <div class="header">
      <!--<router-link to="/article">文章</router-link>-->
      <!--<router-link to="/album">相册</router-link>-->
      <router-link to="/user"></router-link>
    </div>
    <router-view/>

    <!--通过 js 跳转相册-->
    <!--<button @click="getArticle()">通过 js 跳转到相册</button>-->
  </div>
</template>

<script>
  export default {
    methods: {
      getArticle() {
        //编程式导航,官方写的是错的
        // this.$router.push({path:'/ albumDetails?id=1'})
        //命名路由导航
        this.$router.push({path: 'album'})

      }
    }
  }
</script>

<style scoped>
  #home {
    border: 4px solid grey;
    margin-top: 10px;
    border-radius: 10px;
  }

  .header {
    display: flex;
  }

  .header :nth-of-type(n) {
    flex: 1;
    text-align: center;
  }
</style>
