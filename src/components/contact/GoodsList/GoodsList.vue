<template>
  <div class="goods-list">
    <!-- {{ goodsList }} -->
    <goods-item-list
      v-for="(item, i) in goodsList"
      :key="i"
      :goodsItem="item"
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
