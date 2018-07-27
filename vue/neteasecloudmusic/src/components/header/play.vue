<template>
  <div id="play">
    <audio :src="list.url" controls="controls"></audio>

  </div>
</template>
<script>
  export default {
    data(){
      return{
        list:[]
      }
    },
    mounted(){
      console.log(this.$route.params);  /*获取动态路由传值*/
      xhrFields: { withCredentials: true }
      var aid=this.$route.params.aid;
      //调用请求数据的方法
      this.requestData(aid);
    },
    methods:{
      requestData(aid){
        let api='http://localhost:3000/music/url?id='+aid;
        this.$http.get(api).then((response)=>{
          console.log(response.data[0]);
          this.list=response.data[0];
        },(err)=>{
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
</style>
