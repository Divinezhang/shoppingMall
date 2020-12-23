<!--
 * @Author: your name
 * @Date: 2020-12-17 12:52:44
 * @LastEditTime: 2020-12-23 16:37:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shoppingmall\src\views\home\pages\goodsDetail\GoodsDetail.vue
-->
<template>
  <div class="goods-detail">
    <!-- 导航栏 -->
    <detail-nav></detail-nav>
  </div>
</template>

<script>
import DetailNav from "@/views/home/pages/goodsDetail/components/DetailNav";
export default {
  name: "GoodsDetail",
  components: {
    DetailNav
  },
  data() {
    return {
      goodsId: null
    };
  },
  created() {
    this.goodsId = this.$route.params && this.$route.params.id;
  }
};
</script>

<style></style>
