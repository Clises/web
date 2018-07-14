<template>
  <div id="app">
    <!--执行方法-->
    <button v-on:click="run()">执行方法</button>
    <button @:click="run2()">执行方法简写</button>
    <!--获取数据-->
    <button @click="getMsg()">获取data 中的 msg</button>
    <!--改变数据-->
    <button @click="setMsg()">改变 data 中的 msg</button>
    <!--请求数据-->
    <button @click="requestMsg()">请求数据</button>
    <ul v-for="(item,key) in list">
    {{key}} {{item}}
    </ul>
    <!--删除数据-->
    <button @click="sendData('1111')">传值</button>
    <!--触发事件对象-->
    <button @click="eventFn($event)">事件对象</button>
    <!--获取自定义属性-->
    <button data-aid='123' @click="eventFn($event)">事件对象</button>
    <!--组件-->
    <v-home></v-home>

  </div>
</template>
<!--
引入组件

挂载组件

在模板中使用组件

-->
<script>
  import Home from './components/Home';
export default {
  data(){
    return{
      msg:'charlie',
      list:[]
    }
  },
  components:{
    'v-home':Home
  },
  methods:{
    run:function () {
      alert('this is a methods')
    },
    run2(){
      alert('this is other methods')
    },
    getMsg:function () {
      alert(this.msg);
    },
    setMsg:function () {
      this.msg="this is the change data"
      alert(this.msg)
    },
    requestMsg(){
      for (var i=0;i<10;i++){
          this.list.push('这是第'+i+'条数据')
      }
    },
    sendData(val){
      alert(val)
    },
    eventFn(e){
      console.log(e.srcElement.dataset.aid)
      e.srcElement.style.background='red';
    }
  }




}
</script>
<style>
</style>
