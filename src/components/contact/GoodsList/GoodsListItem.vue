<!--
 * @Author: your name
 * @Date: 2020-10-27 17:08:10
 * @LastEditTime: 2020-11-05 14:42:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shoppingmall\src\components\contact\GoodsList\GoodsListItem.vue
-->
<template>
  <div class="item">
    <img :src="goodsItem.show.img" @load="imageLaod" />
    <div class="item-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imageLaod() {
      // 通过事件总线发射一个事件
      // 当图片加载完成的时候触发改事件
      this.$bus.$emit("imageHaveLoad");
    }
  }
};
</script>

<style scoped>
.item {
  padding-bottom: 40px;
  position: relative;
  width: 46%;
}
.item img {
  width: 100%;
}

.item-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.item-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.item-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.item-info .collect {
  position: relative;
}

.item-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
