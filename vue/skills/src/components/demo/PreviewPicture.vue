<template>
<div id="app">
  <lg-preview></lg-preview>
  <img v-for="(img,index) in imgs"
       v-preview="img.url"
       :src="img.url"
       :alt="img.title"
       :key="index"
       preview-title-enable="true"
       preview-nav-enable="true">

</div>
</template>

<script>
  export default {
    data () {
      return {
        imgs: [
          {
            url: 'http://covteam.u.qiniudn.com/ka2.jpg',
            title: 'pic1'
          },
          {
            url: 'http://covteam.u.qiniudn.com/poster.png',
            title: 'pic2'
          }
        ]
      }
    }
  }

</script>

<style scoped>
  img {
    width: 100%;
    height: 100%;
  }
</style>
