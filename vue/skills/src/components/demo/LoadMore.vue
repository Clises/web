<template>
  <div>
    <h2>loadMore</h2>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10" class="list">
      <li v-for="item in list">{{item.title}}</li>
    </ul>

  </div>

</template>

<script>
  export default {
    data(){
      return{
        list:[],
        page:1,
        loading:false
      }
    },

    methods: {
      loadMore() {
        //  默认的话也会请求数据,所以不需要放在生命周期函数中去
        this.requestData()
      },
      requestData() {
        var loading=true;  /*请求数据开关*/
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page='+this.page;
        this.$http.get(api).then((response) => {
          this.list=this.list.concat(response.body.result)
          ++this.page;
          var loading=false;
          //判断最后一页是否有数据
          if(response.body.result.length<20){
            this.loading=true;   /*终止请求*/
          }else {
            //终止请求
            this.loading=false;
          }
        }, (error) => {
          console.log(error)
        })
      }

    }
  }
</script>

<style scoped>

</style>
