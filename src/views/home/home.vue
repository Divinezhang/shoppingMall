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
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './components/HomeSwiper'
import HomeRecommend from './components/HomeRecommend'
import { getHomeMultiData } from 'service/home'
export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend
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
.nav-bar {
  background: var(--color-tint);
  color: #ffffff;
  font-weight: 600;
}
</style>