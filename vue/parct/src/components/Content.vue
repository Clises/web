<template>
    <div>
      我是详情
    </div>
</template>

<script>
    export default {
      data(){
        return{
          msg:'数据'
        }
      },mounted(){
        //获取动态路由传值
        console.log(this.$route.params)
      }
    }
</script>

<style scoped>

</style>
