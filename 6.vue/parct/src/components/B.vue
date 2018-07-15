<template>
<div id="b">
这是 B 组件
  <button @click="emitA()">给 a 组件广播数据</button>
</div>
</template>

<script>
  import VueEvent from '../model/VueEvent'
  export default {
    data(){
      return{
        msg:"这是给a 组件的数据"
      }
    },methods:{
        emitA(){
        VueEvent.$emit('to-A',this.msg)
      }
    }
    ,mounted(){
      VueEvent.$on('to-B',function(data){
        console.log(data);
      })
    }
  }
</script>

<style scoped>

</style>
