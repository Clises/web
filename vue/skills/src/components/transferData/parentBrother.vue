<template>
  <div id="brother">
    <h2>这是父组件的兄弟组件</h2>
    <button @click="emitparent()">这是parent广播的数据</button>
  </div>
</template>
<script>
  /*非父子组件传值
  1、新建一个js文件   然后引入vue  实例化vue  最后暴露这个实例
  2、在要广播的地方引入刚才定义的实例
  3、通过 VueEmit.$emit('名称','数据') 发送
  4、在接收收数据的地方通过 $on接收广播的数据
    VueEmit.$on('名称',function(){
    })
  */
  import VueEvent from '../../model/VueEvent'
  export default {
    data() {
      return {
        msg: '这是parent广播给 parentbrother 的数据'
      }
    },
    methods: {
      emitparent() {
        VueEvent.$emit('to-parent', this.msg)
      }
    },
    mounted() {
      //监听 parent广播的数据
      VueEvent.$on('to-parentBrother', function (data) {
        alert(data)
      })
    }
  }
</script>

<style scoped>
  #brother {
    margin-top: 10px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
  }
</style>
