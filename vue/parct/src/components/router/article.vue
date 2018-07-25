<template>
<div id="article">
  <h2>文章列表</h2>
  <ul>
    <li v-for="(item,key) in list">
      <!--动态路由-->
      <router-link :to="'/articleDetails/'+key">{{key}} {{item}}</router-link>
    </li>
  </ul>
</div>
</template>
<script>
    export default {
      data(){
        return{
          list:['html5','css3','javascript','vue']
        }
      }
    }
</script>

<style scoped>
ul{
  list-style: none;
  padding: 0;
}
</style>
