import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
/*1.state在vuex中用于存储数据*/
var state={
  count:1,
  list:[]
}

/*2.mutations里面放的是方法，方法主要用于改变state里面的数据
*/
var mutations={
  incCount(){
    ++state.count;
  },
  addList(state,data){
    state.list = data;
  }
}
//核心方法 getter 改变数据的时候做一些操作,改变state 里面的count数据的时候会触发getters里面的方法 获取新的值
 var  getters={
  computedCount:(state)=>{
    return state.count*2
  }
}
var actions={
  incMutationsCount(context){
    context.commit('incCount')
  }
}

//vuex  实例化 Vuex.store
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store;

