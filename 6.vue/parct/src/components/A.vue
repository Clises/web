<template>
<div id="a">
这是A组件
  <button @click="emitB()">给 b 组件广播数据</button>
</div>

</template>

<script>
  import VueEvent from '../model/VueEvent'
    export default {
    data(){
      return{
        msg:'这是给 b 组件的数据'
      }
    },methods:{
      emitB(){
        VueEvent.$emit('to-B',this.msg)
      }
      },
      mounted(){
        VueEvent.$on('to-A',function(data){
          console.log(data);
        })
      }
    }
</script>

<style scoped>

</style>
