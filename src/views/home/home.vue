<template>
  <div class="home">
    <!-- 导航栏 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <!-- 轮播图 -->
      <home-swiper :bannerList="banners" v-if="banners"></home-swiper>
      <!-- 推荐 -->
      <home-recommend :recommendList="recommends"></home-recommend>
      <!-- 本周流行 -->
      <home-feature></home-feature>
      <!-- 商品类别 -->
      <tab-switch
        class="tab-switch"
        :tabList="[' 流行', '新款', '精选']"
        @tabClick="tabClick"
      ></tab-switch>
      <!-- 商品列表 -->
      <goods-list :goodsList="showGoodsList"></goods-list>
    </scroll>
    <!-- 回到顶部 -->
    <!-- 监听原生组件的点击事件，可以使用.native -->
    <back-top @click.native="clickToTop"></back-top>
  </div>
</template>

<script>
// 全局组件
import NavBar from "components/common/NavBar/NavBar";
import TabSwitch from "components/contact/TabSwitch/TabSwitch";
import GoodsList from "components/contact/GoodsList/GoodsList";
import Scroll from "components/common/Scroll/Scroll";
import BackTop from "components/contact/BackTop/BackTop";
// 首页组件
import HomeSwiper from "./components/HomeSwiper";
import HomeRecommend from "./components/HomeRecommend";
import HomeFeature from "./components/HomeFeature";
// 服务接口
import { getHomeMultiData, getHomeGoods } from "service/home";
export default {
  name: "Home",
  components: {
    NavBar,
    TabSwitch,
    GoodsList,
    Scroll,
    BackTop,
    HomeSwiper,
    HomeRecommend,
    HomeFeature
  },
  data() {
    return {
      banners: [], // 轮播图的数据
      recommends: [], // 推荐的热门数据，
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop"
    };
  },
  computed: {
    // 1.计算切换分类显示的列表
    showGoodsList() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    // 1.获取首页的轮播图和推荐的数据
    this.getMultiData();
    // 2.获取首页的切换分类数据
    this.getHomeCategory("pop");
    this.getHomeCategory("new");
    this.getHomeCategory("sell");
  },
  methods: {
    /**
     * 1.获取请求数据的方法
     */
    // 1.1获取首页的轮播图和推荐的数据
    getMultiData() {
      getHomeMultiData().then(
        res => {
          console.log("请求首页的数据成功", res.data);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        },
        err => {
          console.log("请求首页的数据失败", err);
        }
      );
    },
    // 1.2 获取首页分类的数据
    getHomeCategory(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(
        res => {
          console.log("请求分类数据成功", res.data);
          // 将请求到的列表数据，放到pops的list中
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page++;
        },
        err => {
          console.log("请求分类数据失败", err);
        }
      );
    },

    /**
     * 2.点击事件的方法
     */
    tabClick(index) {
      // console.log("切换的下标是", index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    // 点击按钮返回顶部
    clickToTop() {
      // 不传第三个参数，则是方法scrollTop默认的第三个参数
      this.$refs["scroll"].scrollTop(0, 0, 1000);
    }
  }
};
</script>

<style scoped>
.home {
  height: 100vh; /*vh代表的是视口viewportheight高度*/
  /* padding-top: 44px; */
  /* margin-top: 44px; */
  position: relative;
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
  /* 粘性定位，该定位基于用户滚动的位置。
它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。 */
  position: sticky;
  top: 44px;
}
.content {
  /* height: calc(100% - 93px);
  overflow: hidden; */
  /*  */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
