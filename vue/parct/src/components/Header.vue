<template>
<div>
  <h2>{{msg}}{{title}}</h2>
  <button @click="run('++++++++++这是子组件传给父组件的数据')">执行父组件的方法</button>
  <button @click="getParent()">执行父组件home</button>
</div>
</template>

<script>
    export default {
      data(){
        return{
          msg:' 这是头部组件 '
        }
      },
      methods:{
        getParent(){
          alert(this.home.title)
          // this.home.title
        }
      },
      props:{
        "title":String,
        "run":Object,
        "home":Object
      }
     }
</script>

<style lang="css" scoped>
  h2{
    color: blue;
  }
</style>
