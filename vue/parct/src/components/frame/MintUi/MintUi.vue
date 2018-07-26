<template>
<div id="mu">
  <mt-button type="default">default</mt-button>

  <mt-index-list>
    <mt-index-section index="A">
      <mt-cell title="Aaron"></mt-cell>
      <mt-cell title="Alden"></mt-cell>
      <mt-cell title="Austin"></mt-cell>
    </mt-index-section>
    <mt-index-section index="B">
      <mt-cell title="Baldwin"></mt-cell>
      <mt-cell title="Braden"></mt-cell>
    </mt-index-section>
    ...
    <mt-index-section index="Z">
      <mt-cell title="Zack"></mt-cell>
      <mt-cell title="Zane"></mt-cell>
    </mt-index-section>
  </mt-index-list>
  <actionSheet></actionSheet>
  <loadMore></loadMore>
</div>
</template>

<script>
  import actionSheet from './actionSheet'
  import loadMore from './loadMore'
  export default {
      components:{
      'actionSheet':actionSheet,
        'loadMore':loadMore
    }
    }
</script>

<style scoped>
#mu{
  border: 1px solid red;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
}
</style>
