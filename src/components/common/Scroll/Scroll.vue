<!--
 * @Author: your name
 * @Date: 2020-10-29 15:08:50
 * @LastEditTime: 2020-10-30 17:39:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \shoppingmall\src\components\common\Scroll\Scroll.vue
-->
<template>
  <div class="wraper" ref="wraper">
    <div class="conetnt">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import betterScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    console.log(this.$refs["wraper"]);
    this.scroll = new betterScroll(this.$refs["wraper"], {
      /* probeType: 3,
      pullUpLoad: true */
    });
    /* this.scroll.on("scroll", position => {
      console.log("当前的位置是", position);
    });
    this.scroll.on("pullingUpLaod", () => {
      console.log("上拉加载更多");
    }); */
  },
  methods: {
    scrollTop(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    }
  }
};
</script>

<style scoped></style>
