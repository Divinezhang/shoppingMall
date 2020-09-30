<template>
  <div class="home">
    <!-- 导航栏 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :bannerList="banners" v-if="banners"></home-swiper>
    <!-- 推荐 -->
    <home-recommend :recommendList="recommends"></home-recommend>
    <!-- 本周流行 -->
    <home-feature></home-feature>
    <!-- 商品类别 -->
    <tab-switch class="tab-switch" :tabList="[' 流行','新款','精选']"></tab-switch>
    <ul>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
      <li>*1</li>
    </ul>
  </div>
</template>

<script>
// 全局组件
import NavBar from 'components/common/navbar/NavBar'
import TabSwitch from 'components/contact/TabSwitch/TabSwitch'
// 首页组件
import HomeSwiper from './components/HomeSwiper'
import HomeRecommend from './components/HomeRecommend'
import HomeFeature from './components/HomeFeature'

import { getHomeMultiData } from 'service/home'
export default {
  name: 'Home',
  components: {
    NavBar,
    TabSwitch,
    HomeSwiper,
    HomeRecommend,
    HomeFeature
  },
  data () {
    return {
      banners: [], // 轮播图的数据
      recommends: [] // 推荐的热门数据
    }
  },
  created () {
    getHomeMultiData()
      .then(res => {
        console.log('请求首页的数据成功', res.data)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      }, err => {
        console.log('请求首页的数据失败', err)
      })
  },
}

</script>
<style scoped>
.home {
  padding-top: 44px;
}
.nav-bar {
  background: var(--color-tint);
  color: #ffffff;
  font-weight: 600;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
}
.tab-switch {
  /* 该属性可以实现简单的吸顶效果 */
  position: sticky;
  top: 44px;
}
</style>