<template>
  <div id="app">
    <!-- keep-alive 可以是页面不随意销毁 -->
    <!-- 不使用keep-alive的时候，在页面离开的时候，会自动销毁 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <app-tab-bar></app-tab-bar>
  </div>
</template>

<script>
import AppTabBar from "components/contact/AppTabBar/AppTabBar";
export default {
  name: "App",
  components: {
    AppTabBar
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
