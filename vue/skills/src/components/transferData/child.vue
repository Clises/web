<template>
<div id="header">
  <h2>这是子组件</h2>
  <h3>{{title}}</h3>
  <button @click="run('~~~~这是子组件传递给父组件的数据')">执行父组件的方法</button>
  <br>
  <br>
  <button @click="getParent()">获取父组件的数据</button><br/>
  <button @click="getParentData()">主动获取父组件的数据和方法</button>
<p>子组件主动获取父组件的数据和方法：</p>
  this.$parent.数据<br>
  this.$parent.方法

</div>
</template>

<script>
    export default {
      data(){
        return{
          msg:'这是子组件的 msg'
        }
      },
      methods:{
        getParent(){
          alert(this.parent.title)
        },getParentData(){
          alert(this.$parent.msg);
        }

      },
      props:{
        "title":String,
        "run":Object,
        "parent":Object
      }
     }
</script>
<style lang="scss" scoped>
  #header{
    border: 1px solid black;
    padding: 10px;
  border-radius: 10px;
  }
  h2{
    color: red;
  }
</style>
