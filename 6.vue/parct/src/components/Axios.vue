<template>
<div id="axios">
  <h3>axios获取数据</h3>
  <button @click="getData()">获取数据</button>
  <ul>
    <li v-for="item in list">
      {{item.title}}
    </li>
  </ul>
</div>
</template>

<script>
  import Axios from 'axios';
  export default {
    data(){
      return {
        list:[]
      }
    },
    methods:{
      getData(){
        var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
        /**
         箭头函数  =>
         then
         getData(){}===getData:function(){}
         catch()axios的错误处理
        * */
        Axios.get(api).then((response)=>{
          console.log(response.data.result[0])
          this.list=response.data.result;
        }).catch((error)=>{
          console.log(error);
        })

      },
    },
    mounted(){   /*生命周期 */
      this.getData()
    }

  }
</script>

<style scoped>

</style>
