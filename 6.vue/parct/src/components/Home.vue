<template>
  <!--在 vue 中所有的内容要被根节点包含起来-->
  <div>
  <h2>这是 Home 组件{{msg}}</h2>
    <button @click="run()">点击查看</button>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          msg:'这是首页的组件'
        }
      },
      methods:{
        run(){
          alert('sss')
        }
      }
    }
</script>

<style  scoped>
  h2{
    color:red;
  }

</style>

