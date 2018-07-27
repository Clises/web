<template>
    <div>
      <p>在对象中使用通过一个属性的迭代</p>
    <div v-for="item in object">
      {{item}}
    </div>
      <small>提供键名、索引</small>
      <div v-for="(item,key,index) in object">

        {{index}}:{{key}}:{{item}}
      </div>
      <p>列表渲染</p>
        <ul v-for="item in list">
          {{item.cate}}
          <li v-for="news in item.list">
          {{news.title}}
          </li>
        </ul>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          list:[
            {
              'cate':"news",
              list:[
                {'title':'1'},
                {'title':'2'}
              ]
            }
          ],
          object:{
            username:"charlies",
            sex:"man",
            age:"22"
          }
        }
      }
    }
</script>

<style scoped>

</style>
