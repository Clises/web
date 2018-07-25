<template>
  <div id="getData">
    <resource></resource>
    <axios></axios>
  </div>
</template>
<script>
  import Resource from './Resource';
  import Axios from './Axios'
  export default {
    data(){
      return{
        // msg:'charlie',
        // list:[]
      }
    },
    components:{
      'resource':Resource,
      'axios':Axios
    },
    mounted(){
      console.log('我是一个声明周期函数')
    }
  }
</script>
<style>
  #getData{
    border: 1px solid red;
    border-radius: 10px;
    padding: 10px;
  }
</style>
