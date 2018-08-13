<template>
  <!--在 vue 中所有的内容要被根节点包含起来-->
  <div id="parent">
    <h2>这是父组件</h2>
    <v-child :title="title" :run="run" :parent="this" ref="child"></v-child>
    <button @click="getChildData()">获取子组件的数据和方法</button>


    <h2>非父子组件传值</h2>
    <button @click="emitparentBrother()">这是 parentBrother 广播的数据</button>
    <p>
      父组件给子组件传值<br/>
      1.父组件调用子组件的时候 绑定动态属性 类似 :title :run 等等<br/>
      2.在子组件里面通过 props接收父组件传过来的数据
      props:['title']
      子组件可规定传递过来的值的类型.
      3.成功之后直接在子组件中去使用
      <br/>
    </p>
    <p>父组件主动获取子组件的数据和方法：
      1.调用子组件的时候定义一个ref<br/>
      2.在父组件里面通过<br/>
      this.$refs.header.属性<br/>
      this.$refs.header.方法<br/>
    </p>
  </div>
</template>
<script>
  import VueEvent from '../../model/VueEvent';
  import child from './child.vue';

  export default {
    data() {
      return {
        msg: ' 这是parent广播给 parentBrother的数据',
        title: "这是父组件传递给子组件的值"

      }
    },
    components: {
      'v-child': child,
    },
    methods: {
      run(data) {
        alert('home 组件的方法' + data)
      },
      getChildData() {
        alert(this.$refs.child.msg)
      },
      emitparentBrother() {
        VueEvent.$emit('to-parentBrother', this.msg)
      }
    }
    ,mounted() {
      //监听 parentBrother 广播的数据
      VueEvent.$on('to-parent', function (data) {
        alert(data)
      })
    }
  }
</script>
<style scoped>
  #parent {
    margin-top: 10px;
    border: 1px solid red;
    border-radius: 10px;
    padding: 10px;
  }

  h2 {
    color: red;
  }

</style>

