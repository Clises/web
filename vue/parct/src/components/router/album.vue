<template>
<div id="alumn">
  <h2>相册</h2>
  <ul>
    <li v-for="(item,key) in list">
      <!--get 方式-->
      <router-link :to="'/albumDetails?id='+key">{{key}} {{item}}</router-link>

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
