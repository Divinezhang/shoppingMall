<!--
 * @Author: your name
 * @Date: 2021-01-26 21:44:00
 * @LastEditTime: 2021-01-26 22:07:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\shoppingmall\src\views\home\pages\goodsDetail\components\DetailSwiper.vue
-->
<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, i) in imageList" :key="i">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/Swiper";

export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    imageList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
