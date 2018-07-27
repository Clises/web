<template>
  <div id="home">
    <h1>vue-router</h1>
    <router-link to="/article">文章</router-link>
    <router-link to="/album">相册</router-link>
    <router-link to="/user">用户中心</router-link>
    <router-view></router-view>

    <!--通过 js 跳转相册-->
    <!--<button @click="getArticle()">通过 js 跳转到相册</button>-->
  </div>
</template>

<script>
    export default {
      methods:{
        getArticle(){
          //编程式导航,官方写的是错的
          // this.$router.push({path:'/ albumDetails?id=1'})
         //命名路由导航
          this.$router.push({path:'album'})

        }

      }

    }
</script>

<style scoped>
#home{
  border: 1px solid grey;
  margin-top: 10px;
  border-radius: 10px;
  padding: 11rem;
}
</style>
