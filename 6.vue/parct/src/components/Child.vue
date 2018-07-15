<template>
  <div id="child">
 <h2>
   {{msg}}
 </h2>
  <button @click="getParentData()">获取父组件的 run 方法</button>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          msg:"这里是新定义的父组件"
        }
      },methods:{
        getParentData(){
              this.$parent.run()
        }
      }
    }
</script>

<style scoped>

</style>
