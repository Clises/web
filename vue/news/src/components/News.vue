<template>
  <div id="news">
    <ul class="list">
      <li v-for="(item,key) in list">
        <router-link :to="'/Details/'+item.aid">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: []
      }
    }, methods: {
      requestData() {
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
        this.$http.jsonp(api).then((response) => {
          console.log(response);
          //注意：用到this要注意this指向
          this.list = response.body.result;
        }, function (err) {
          console.log(err);
        })
      }
    },
    mounted() {
      this.requestData();
    }
  }
</script>

<style lang="css" scoped>
  .list{
    padding: 1rem;
  }
  .list li{
    overflow:hidden;
    white-space:nowrap;
    line-height:2.8rem;
    boder-bottom:1px solid #eee;
    font-size:1.6rem;
    text-overflow: ellipsis;

  }
  .list li a{
    text-decoration: none;
  }
</style>
