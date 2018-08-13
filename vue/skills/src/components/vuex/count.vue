<template>
<div id="count">
  {{this.$store.state.count}}
  {{this.$store.getters.computedCount}}

  <button @click="incCount()">增加数量+</button>


</div>
</template>
<script>
  //引入
  import store from '../../store/index';
  // import {mapState,mapActions} from 'vuex'

  //注册
  export default {
    store,
      methods:{
      incCount(){
          //改变vuex store里面的数据
          // this.$store.commit('incCount');   /*触发 mutations 改变 state里面的数据*/
        this.$store.dispatch('incMutationsCount')  /*触发action 中的方法*/
        }
      }
    }
</script>

<style scoped>
#count{
  margin-top: 10px;
}

</style>
