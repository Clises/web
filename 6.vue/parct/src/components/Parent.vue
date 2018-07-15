<template>
 <div id="parent">
   这里是父组件
   <hr/>
   <h1>{{msg}}</h1>
   <button @click="run()">点击运行父组件的放的</button>
   <button @click="getChildData()">获取子组件的数据和方法</button>
   <br/>
   <br/>

   这是子组件 child
   <hr/>
   <v-child ref="child">
   </v-child>
 </div>
</template>

<script>
  import Child from './Child.vue';
  export default {
    data(){
      return{
      msg:"这是父组件的方法"
      }
    },
    components:{
      'v-child':Child
    },
    methods:{
      run(){
        alert(this.msg)
      },
      getChildData(){
        alert(this.$refs.child.msg)
      }
    }

    }
</script>

<style scoped>

</style>
