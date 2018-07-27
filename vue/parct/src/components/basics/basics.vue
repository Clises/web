<template>
<div id="basics">
  <v-render></v-render>
</div>
</template>

<script>
  import Rendering from './Rendering'
    export default {
      components:{
      'v-render':Rendering
      }
    }
</script>

<style scoped>
  #basics{
    border: 1px solid red;
    padding: 10px;
    border-radius: 10px;
  }
</style>
