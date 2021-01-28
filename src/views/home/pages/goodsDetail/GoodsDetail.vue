<!--
 * @Author: your name
 * @Date: 2020-12-17 12:52:44
 * @LastEditTime: 2021-01-26 22:40:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shoppingmall\src\views\home\pages\goodsDetail\GoodsDetail.vue
-->
<template>
  <div class="goods-detail">
    <!-- 导航栏 -->
    <detail-nav />
    <!-- 轮播图 -->
    <detail-swiper :imageList="imageList" />
  </div>
</template>

<script>
import DetailNav from "@/views/home/pages/goodsDetail/components/DetailNav";
import DetailSwiper from "./components/DetailSwiper";
import { getDetailData, goods } from "service/detail";
export default {
  name: "GoodsDetail",
  components: {
    DetailNav,
    DetailSwiper
  },
  data() {
    return {
      goodsId: null,
      imageList: [], // 轮播图的数据
      goods: null // 商品的详细数据
    };
  },
  created() {
    // 接收列表传递的商品Id
    this.goodsId = this.$route.params && this.$route.params.id;
    // 请求详情的数据
    getDetailData(this.goodsId)
      .then(res => {
        console.log("请求详情数据成功", res);
        const goodsData = res.result;
        // 获取轮播图的数据
        this.imageList = goodsData.itemInfo.topImages;
        // 获取商品的具体数据
        this.goods = new goods(
          goodsData.itemInfo,
          goodsData.columns,
          goodsData.shopInfo.services
        );
      })
      .catch(err => console.log("请求详情数据失败", err));
  }
};
</script>

<style></style>
