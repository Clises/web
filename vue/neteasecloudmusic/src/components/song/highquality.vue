<template>
<div id="highquality">
  <p>最新音乐</p>
  <div class="list">
    <div v-for="item in list">
      <img :src=item.coverImgUrl alt="">
    </div>
  </div>
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
        var api='http://localhost:3000/top/playlist/highquality?limit=6';
        Axios.get(api).then((response)=>{
          this.list=response.data.playlists;
          console.log(response.data.playlists)
        }).catch((error)=>{
          console.log(error);
        })

      },
    },
    mounted(){
      this.getData()
    }    }
</script>

<style scoped>
  .list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .list div{
    width: 33.3%;
    border: 1px solid red;
  }
  .list div img
  {
    width: 100%;
  }
</style>
