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
    <tab-switch
      class="tab-switch"
      :tabList="[' 流行', '新款', '精选']"
    ></tab-switch>

    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
      <li>列表31</li>
      <li>列表32</li>
      <li>列表33</li>
      <li>列表34</li>
      <li>列表35</li>
      <li>列表36</li>
      <li>列表37</li>
      <li>列表38</li>
      <li>列表39</li>
      <li>列表40</li>
      <li>列表41</li>
      <li>列表42</li>
      <li>列表43</li>
      <li>列表44</li>
      <li>列表45</li>
      <li>列表46</li>
      <li>列表47</li>
      <li>列表48</li>
      <li>列表49</li>
      <li>列表50</li>
      <li>列表51</li>
      <li>列表52</li>
      <li>列表53</li>
      <li>列表54</li>
      <li>列表55</li>
      <li>列表56</li>
      <li>列表57</li>
      <li>列表58</li>
      <li>列表59</li>
      <li>列表60</li>
      <li>列表61</li>
      <li>列表62</li>
      <li>列表63</li>
      <li>列表64</li>
      <li>列表65</li>
      <li>列表66</li>
      <li>列表67</li>
      <li>列表68</li>
      <li>列表69</li>
      <li>列表70</li>
      <li>列表71</li>
      <li>列表72</li>
      <li>列表73</li>
      <li>列表74</li>
      <li>列表75</li>
      <li>列表76</li>
      <li>列表77</li>
      <li>列表78</li>
      <li>列表79</li>
      <li>列表80</li>
      <li>列表81</li>
      <li>列表82</li>
      <li>列表83</li>
      <li>列表84</li>
      <li>列表85</li>
      <li>列表86</li>
      <li>列表87</li>
      <li>列表88</li>
      <li>列表89</li>
      <li>列表90</li>
      <li>列表91</li>
      <li>列表92</li>
      <li>列表93</li>
      <li>列表94</li>
      <li>列表95</li>
      <li>列表96</li>
      <li>列表97</li>
      <li>列表98</li>
      <li>列表99</li>
      <li>列表100</li>
    </ul>
  </div>
</template>

<script>
// 全局组件
import NavBar from "components/common/navbar/NavBar";
import TabSwitch from "components/contact/TabSwitch/TabSwitch";
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
      }
    };
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
    // 1.获取首页的轮播图和推荐的数据
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
    }
  }
};
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
  /* 粘性定位，该定位基于用户滚动的位置。
它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。 */
  position: sticky;
  top: 45px;
}
</style>
