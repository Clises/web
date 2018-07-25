<template>
  <div id="user">
    <div class="user">
      <div class="left">
        <ul>
          <li>

            <router-link to="/user/userid">用户数量</router-link>
          </li>
          <li>

            <router-link to="/user/userlist">用户数量</router-link>

          </li>
        </ul>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped lang="scss">
.user{
  display: flex;
  .left{
    width: 200px;
    min-height: 400px;
    border-right: 1px solid red;
  }
  .right{
    flex: 1;
  }
}

</style>
