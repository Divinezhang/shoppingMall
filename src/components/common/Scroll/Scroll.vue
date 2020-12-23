<!--
 * @Author: your name
 * @Date: 2020-12-17 12:52:44
 * @LastEditTime: 2020-12-18 14:26:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shoppingmall\src\components\common\Scroll\Scroll.vue
-->
<!--
 * @Author: your name
 * @Date: 2020-10-29 15:08:50
 * @LastEditTime: 2020-11-05 14:23:25
 * @LastEditors: Please set LastEditors
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
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    console.log(this.$refs["wraper"]);
    // 1.创建一个BetterScroll对象
    this.scroll = new betterScroll(this.$refs["wraper"], {
      click: true, //scroll组件默认组织原生的点击事件，设置为true，better-scroll会配发一个点击事件
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
      /* probeType: 3,
      pullUpLoad: true */
    });
    // 2.实时监听scroll的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        this.$emit("scrollPosition", position);
      });
    }
    // 3.上拉加载更多
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        console.log("上拉加载更多");
        // 默认的只是执行一次上拉加载
        this.$emit("pullingUp");
        // 上拉加载完成以后，调用finishPullUp继续执行上拉加载
        this.scroll.finishPullUp();
      });
    }
  },
  methods: {
    // 回到页面顶部
    scrollTop(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    } /* ,
    finishUpLoad() {
      this.scroll.finishPullUp();
    } */,
    // 滚动页面之后，刷新页面
    refresh() {
      console.log("+++++++++++");
      this.scroll && this.scroll.refresh();
    },
    // 记住页面的滚动位置
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
};
</script>

<style scoped></style>
