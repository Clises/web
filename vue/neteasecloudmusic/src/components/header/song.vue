<template>
<div id="song">
  <p>最新音乐</p>
    <div v-for="item in list">
      <router-link :to="'/play/'+item.id" class="list">
          <div class="song_msg">
            <p>{{item.song.name}}</p>
            <p>{{item.song.artists[0].name}}</p>
          </div>
          <span class="iconfont icon-iconset0481"></span>
      </router-link>

    </div>
</div>
</template>
<script>
  import Axios from 'axios';

  export default {
    data(){
      return {
        list:[],
      }
    },
    methods:{
      getData(){
        let api='http://localhost:3000/personalized/newsong';
        Axios.get(api).then((response)=>{
          console.log(response.data.result[1].song.artists[0].albumSize)
          this.list=response.data.result;
        }).catch((error)=>{
          console.log(error);
        })

      },
    },
    mounted(){   /*生命周期 */
      this.getData()
    }    }

</script>

<style scoped>
  #song{
    padding-left: 15px;
  }
  p{
    font-size: 36px;
    font-weight: 300;
  }
  .list{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    border-bottom: 1px solid rgba(0,0,0,.1);
    font-size: 36px;
    color: #000;
  }
  .song_msg{
    flex: 1 1 auto;
  }
  .list p:nth-of-type(2){
    margin:8px 0;
    font-size: 22px;
    font-weight: lighter;
  }
  .iconfont{
    font-size: 55px;
    margin-right: 15px;
  }
</style>
