<template>
  <div id="check">
    <input type="checkbox" v-model="checkAll.check" @change="checkAllchange">
    <label>全选</label>
    <ul>
      <li v-for="(item,index) in list">
        <input type="checkbox" v-model="item.check" @change="curCheck">
        <label>{{item.name}}</label>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "check",
    data() {
      return {
        checkAll: {
          name: '全选',
          check: false
        },
        list: [
          {
            name: 'charlie', check: false, id: 1
          }, {
            name: 'errol', check: false, id: 2
          }
        ]
      }
    },
    methods: {
      checkAllchange: function () {
        //使用箭头函数,this指向的问题
        let that=this;
        // this.list.forEach(item => {
        //   item.check = this.checkAll.check
        // })
        that.list.forEach(function (item) {
          item.check=that.checkAll.check

        })
      },
      curCheck: function () {
        let selector = this.list.filter(function (item) {
          return item.check == true;
        });
        selector.length == this.list.length ? this.checkAll.check = true : this.checkAll.check = false
      }
    },
  }
</script>

<style scoped>

</style>
