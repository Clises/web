import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
/*1.state在vuex中用于存储数据*/
var state={
  count:1,
  list:[],
  isShow:false
}

/*2.mutations里面放的是方法，方法主要用于改变state里面的数据
*/
var mutations={
  incCount(){
    ++state.count;
  },
  addList(data){
    state.list.push(data)
  },
  showBar(state){
    state.isShow=true;
  },
  hideBar(state){
    state.isShow=false;
  }
}

//核心方法 getter 改变数据的时候做一些操作,对数据做二次处理，
// 改变state 里面的count数据的时候会触发getters里面的方法 获取新的值
 var  getters={
  computedCount:(state)=>{
    return state.count*2
  },
   isShowMethod(state){
     return state.isShow;
   }
 }

// actions：和mutations类似。不过actions支持异步操作。第一个参数默认是和store具有相同参数属性的对象。外部调用方式：store.dispatch('nameAsyn')。



// 触发mutations中的方法
var actions={
  incMutationsCount(context){
    context.commit('incCount')
  },
  showSideBar({commit}){
    commit('showBar')
  },
  hideSideBar({commit}){
    commit('hideBar')
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

