<template>
  <div id="resource">
    <h3>vue-resource获取数据</h3>
    <button @click="getData()">获取河津市数据</button>
    <p>{{list.citynm}}</p>
    <p>{{list.days}}</p>
    </ul>
  </div>
</template>

<script>
    export default {
        data() {
          return{
            list:{}
          }
        },
      methods:{
          getData() {
            var api = 'http://api.k780.com/?app=weather.today&weaid=101100805&appkey=34784&sign=c0ce2332f61ee8a80b984d18a8615e1e&format=json&jsoncallback=data';
            this.$http.jsonp(api,{jsonpCallback:'data'}).then(function (response) {
              console.log(response.body.result)
          this.list=response.body.result;
            },function (error) {
              console.log(error)
            })
          }
      },
      mounted(){   /*生命周期 */
        this.getData()
      }

    }
</script>

<style scoped>

</style>
