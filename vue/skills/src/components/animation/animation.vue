<template>
    <div id="animation">

动画
      <button v-on:click="show = !show">
        Toggle
      </button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>

过渡
      <div id="example-1">
        <button @click="show = !show">
          Toggle render
        </button>
        <transition name="slide-fade">
          <p v-if="show">hello</p>
        </transition>
      </div>



    </div>
</template>

<script>
    export default {
      data(){
        return{
          show:true
        }
      }
    }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(10px);
    opacity: 0;
  }

</style>
