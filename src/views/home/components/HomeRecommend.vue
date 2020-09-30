<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,i) in recommendList" :key="i">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="recommend-title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style>
.recommend {
  width: 100%;
  display: flex;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 1px solid #eeeeee;
}
.recommend-item {
  flex: 1;
  font-size: 12px;
}
.recommend-item img {
  width: 70px;
  height: 70px;
}
.recommend-title {
  margin-top: 5px;
}
</style>