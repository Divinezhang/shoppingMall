<!--
 * @Author: your name
 * @Date: 2020-12-17 12:52:44
 * @LastEditTime: 2020-12-23 16:45:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shoppingmall\src\views\home\pages\goodsDetail\components\DetailNav.vue
-->
<template>
  <div class="detail-nav">
    <nav-bar>
      <div class="back" slot="left" @click="backHome">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="nav-bar">
        <div
          class="nav-bar-in"
          :class="{ active: currentIndex === i }"
          v-for="(item, i) in titles"
          :key="i"
          @click="clickNav(item, i)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar/NavBar";
export default {
  name: "DetailNav",
  components: {
    NavBar
  },
  data() {
    return {
      currentIndex: 0, // 默认的高亮是商品
      titles: ["商品", "参数", "评论", "推荐"]
    };
  },
  methods: {
    // 点击切换导航栏
    clickNav(data, index) {
      this.currentIndex = index;
      console.log("切换了商品详情的导航栏");
    },
    // 返回首页
    backHome() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.nav-bar {
  display: flex;
}
.nav-bar-in {
  flex: 1;
  font-size: 13px;
}
.active {
  color: var(--color-high-text);
}
.back {
  margin-top: 5px;
}
img {
  width: 20px;
  height: 20px;
}
</style>
