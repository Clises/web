<template>
    <div>
      商品详情
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
        console.log(this.$route.query  )
      }
    }
</script>

<style scoped>

</style>
