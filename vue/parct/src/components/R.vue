<template>
  <div>
    <h3>{{msg}}</h3>
    <ul>
      <li v-for="(item,key) in list" >
        <router-link :to="'/pcontent?id='+key">{{key}} {{item}}</router-link>

      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          msg:'这是 R 组件',
          list:['商品一','商品二','商品三']
        }
      }
    }
</script>

<style scoped>

</style>
