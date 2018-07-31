<template>
<div id="alumn">
  这是相册页使用，路由使用 get 方式
  <ul>
    <li v-for="(item,key) in list">
      <!--get 方式-->
      <router-link :to="'/albumDetails?id='+key">{{item}}</router-link>

    </li>
  </ul>
</div>
</template>
<script>
    export default {
      data(){
        return{
          list:['昌平','朝阳','西城','大兴区']
        }
      },


    }
</script>

<style scoped>

</style>
