<!--
 * @Author: your name
 * @Date: 2020-12-17 12:52:44
 * @LastEditTime: 2020-12-23 16:17:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shoppingmall\src\components\contact\GoodsList\GoodsList.vue
-->
<template>
  <div class="goods-list">
    <!-- {{ goodsList }} -->
    <goods-item-list
      v-for="(item, i) in goodsList"
      :key="i"
      :goodsItem="item"
      @click="toGoodsDetail(item)"
    />
  </div>
</template>

<script>
import GoodsItemList from "./GoodsListItem";
export default {
  name: "GoodsList",
  components: { GoodsItemList },
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    // 跳转商品详情页
    toGoodsDetail(data) {
      this.$router.push({
        path: `/home/goods-detail/${data.id}`,
        params: data.id
      });
    }
  }
};
</script>

<style scoped>
.goods-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2px;
  margin-bottom: 50px;
}
</style>
