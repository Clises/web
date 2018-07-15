<template>
  <div>
    <h3>{{msg}}</h3>
    <ul>
      <li v-for="(item,key) in list">
        <router-link :to="'/content/'+key">{{key}} {{item}}</router-link>

      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          msg:'这是 RR 组件',
          list:['1111111111','222222222','3333333']
        }
      }
    }
</script>

<style scoped>

</style>
