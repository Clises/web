<template>
  <div id="app">
    <h2>点击查看弹出层</h2>
    <mt-button type="primary" @click="showDetail">点击查看弹出层</mt-button>
    <div v-show="detailShow" class="detail">
      <div class="content clearfix">
        <div class="main">
        </div>
      </div>
      <div class="close" @click="closeDetail">
        关闭
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        detailShow: false
      }
    },
    methods: {
      showDetail() {
        this.detailShow = true
      },
      closeDetail(){
        this.detailShow = false

      }
    }
  }
</script>

<style scoped>
  #app{
    padding: 10px;
  }
  .detail {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    overflow: auto;
    background: rgba(7, 17, 27, 0.8);
  }
  .content {
    min-height: 100%;
  }
  .main {
    padding-bottom: 75px;
  }
  .close {
    position: relative;
    margin: -75px auto 0 auto;
    width: 100%;
    height: 75px;
    background: red;
    clear: both;
    color: white;
    font-size: 30px;
    text-align: center;
    line-height: 75px;
  }

</style>
