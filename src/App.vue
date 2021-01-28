<!--
 * @Author: your name
 * @Date: 2020-12-17 12:52:44
 * @LastEditTime: 2021-01-26 22:08:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\shoppingmall\src\App.vue
-->
<template>
  <div id="app">
    <!-- keep-alive 可以是页面不随意销毁 -->
    <!-- 不使用keep-alive的时候，在页面离开的时候，会自动销毁 -->
    <keep-alive exclude="GoodsDetail">
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
