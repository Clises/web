<template>
  <div id="transferData">
    <parent></parent>
    <brother></brother>
  </div>
</template>

<script>
  import parent from './parent';
  import parentBrother from './parentBrother';
  export default {
    data(){
      return{

      }
    },
    components:{
      'parent':parent,
      'brother':parentBrother
    }

  }
</script>
<style lang="css" scoped>
  #transferData{
    margin-top: 10px;
    border: 1px solid blue;
    padding: 10px;
    border-radius: 10px;
  }
  h2{
    color: blue;
  }
</style>
