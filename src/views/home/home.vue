<template>
  <div class="home">
    <!-- 导航栏 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 可以实现简单的吸顶效果 -->
    <tab-switch
      :class="{ tabFixed: isFixed }"
      :tabList="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabSwitchFixed"
      v-show="isFixed"
    ></tab-switch>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scrollPosition="currentPosition"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <!-- 轮播图 -->
      <home-swiper
        :bannerList="banners"
        v-if="banners"
        @imageLoad="swiperImageLoad"
      ></home-swiper>
      <!-- 推荐 -->
      <home-recommend :recommendList="recommends"></home-recommend>
      <!-- 本周流行 -->
      <home-feature></home-feature>
      <!-- 商品类别 -->
      <!-- class="tab-switch" -->
      <tab-switch
        :tabList="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabSwitch"
      ></tab-switch>
      <!-- 商品列表 -->
      <goods-list :goodsList="showGoodsList"></goods-list>
    </scroll>
    <!-- 回到顶部 -->
    <!-- 监听原生组件的点击事件，可以使用.native -->
    <back-top @click.native="clickToTop" v-if="isShowBackTop"></back-top>
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
// 工具类函数
import { debounce } from "common/js/util";
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
      currentType: "pop",
      isShowBackTop: false,
      taboffsetTop: 0, // tab栏距离父级的高度
      isFixed: false,
      saveY: 0 // 页面实时滚动的位置
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
  mounted() {
    /* this.$bus.$on("imageHaveLoad", () => {
      this.$refs["scroll"].refresh();
    }); */
    // 这里的图片会一直刷新，就是说每加载一次图片，刷新一次操作
    // 使用防抖函数，避免重复刷新
    const refresh = debounce(this.$refs["scroll"].refresh, 100);

    // 想要使用事件总线，必须在main.js中创建一个vue实例
    // 然后使用on来监听事件总线发射的事件
    this.$bus.$on("imageHaveLoad", () => {
      console.log("图片已经全部加载完成");
      // 当图片加载完成的时候，重新刷新页面
      // this.$refs["scroll"].refresh();
      refresh();
    });

    // 获取tabSwitch的高度offsetTop
    // 每一个组件都有一个$el属性，用于获取组件中的元素
    // console.log(this.$refs["tabSwitch"].$el);
  },
  // 在当前页面
  activated() {
    // console.log("actived");
    // 下次进入页面之后，显示到上次离开页面的的位置
    this.$refs["scroll"].scrollTop(0, this.saveY, 0);
    this.$refs["scroll"].refresh();
  },
  // 离开当前页面
  deactivated() {
    // console.log("deactived");
    // 记录离开页面的时候实时滚动的位置
    this.saveY = this.$refs["scroll"].getScrollY();
    console.log(this.saveY);
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
      // 注意第一个tabcontrol的显示，只能用v-show控制显示隐藏，不能使用v-if
      this.$refs["tabSwitch"].currentIndex = index;
      this.$refs["tabSwitchFixed"].currentIndex = index;
    },
    // 点击按钮返回顶部
    clickToTop() {
      // 不传第三个参数，则是方法scrollTop默认的第三个参数
      this.$refs["scroll"].scrollTop(0, 0, 1000);
    },
    // 监听滚动的实时位置
    currentPosition(position) {
      // 1.监听backTop的位置
      this.isShowBackTop = -position.y > 1000;
      // 2.监听tabSwitch的位置
      this.isFixed = -position.y > this.taboffsetTop;
    },
    // 上拉加载更多
    loadMore() {
      console.log("当前的类型是", this.currentType);
      this.getHomeCategory(this.currentType);
    },
    // 监听绿农图加载完成
    swiperImageLoad() {
      this.taboffsetTop = this.$refs["tabSwitch"].$el.offsetTop;
      // console.log(this.$refs["tabSwitch"].$el.offsetTop);
    }
  }
};
</script>

<style scoped>
.home {
  height: 100vh; /*vh代表的是视口viewportheight高度*/
  /* padding-top: 44px; */
  /* margin-top: 44px; */
  /* position: relative; */
}

.nav-bar {
  background: var(--color-tint);
  color: #ffffff;
  font-weight: 600;
  /* 固定定位可以用在原生浏览器的滚动 */
  /* position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9; */
}

.tab-switch {
  /* 该属性可以实现简单的吸顶效果 */
  /* 粘性定位，该定位基于用户滚动的位置。
它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。 */
  /* position: sticky;
  top: 44px; */
  position: relative;
  z-index: 9;
}
.tabFixed {
  position: fixed;
  z-index: 9;
  top: 43px;
  left: 0;
  right: 0;
}
.content {
  height: calc(100% - 93px);
  overflow: hidden;
  /*  */
  /* overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0; */
}
</style>
