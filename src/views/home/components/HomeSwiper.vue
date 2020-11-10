<!--
 * @Author: your name
 * @Date: 2020-09-29 18:25:57
 * @LastEditTime: 2020-11-10 11:24:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shoppingmall\src\views\home\components\HomeSwiper.vue
-->

<template>
  <swiper>
    <swiper-item v-for="(item, i) in bannerList" :key="i">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageHaveLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/Swiper/index";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    bannerList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false
    };
  },
  methods: {
    imageHaveLoad() {
      if (!this.isLoad) {
        this.$emit("imageLoad");
        this.isLoad = true;
      }
    }
  }
};
</script>
<style></style>
