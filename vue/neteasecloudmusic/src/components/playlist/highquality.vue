<template>
<div id="highquality">
  <ul>
    <li v-for="item in list">
      {{item.name}}
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
        var api='http://localhost:3000/top/playlist/highquality?limit=30';
        Axios.get(api).then((response)=>{
          this.list=response.data.playlists;
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
#highquality ul{
  list-style: none;
}
</style>
