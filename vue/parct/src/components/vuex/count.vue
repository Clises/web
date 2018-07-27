<template>
<div id="count">
  {{this.$store.state.count}}
  <button @click="incCount()">增加数量+</button>

</div>
</template>

<script>
  import store from '../../vuex/store.js';

  export default {
    store,
      methods:{
      incCount(){
          //改变vuex store里面的数据
          this.$store.commit('incCount');   /*触发 mutations 改变 state里面的数据*/
        }
      }
    }
</script>

<style scoped>
#count{
  margin-top: 10px;
}

</style>
