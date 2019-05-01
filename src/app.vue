<template>
  <div id="app">
    <router-link to="/">活动页</router-link>
    <router-link to="/pay_url">快捷支付</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>
<style lang="less">
@import "base/reset.css";
</style>

