<template>
  <!--在 vue 中所有的内容要被根节点包含起来-->
  <div id="home">
    <h2>这是首页</h2>
    <hr/>
    <v-header :title="title" :run="run" :home="this"></v-header>
    <hr/>
    <v-life> </v-life>
    <v-axios></v-axios>
    <v-resource></v-resource>

  </div>
</template>
<script>
  /**
   var-resource
  * */
  import Header from './Header.vue';
  import Life from './Life.vue';
  import Axios from './Axios.vue';
  import Resource from './Resource.vue';

  /**
   axios 使用
   1. 安装
   2. 引入 axios
   * */
  export default {
      data(){
        return {
          title:"这是父组件传给子组件 Header的值"
        }
      },
      components: {
        'v-header': Header,
        'v-life': Life,
        'v-axios': Axios,
        'v-resource': Resource
      },
    methods:{
        run(data){
          alert('home 组件的方法'+data)
        }

    }
    }
</script>

<style  scoped>
  h2{
    color:red;
  }

</style>

