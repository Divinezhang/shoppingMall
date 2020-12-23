<!--
 * @Author: your name
 * @Date: 2020-12-17 12:52:44
 * @LastEditTime: 2020-12-21 16:35:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shoppingmall\src\views\cart\Cart.vue
-->
<template>
  <div class="cart">
    购物车
    <button @click="addInfo">添加</button>
    <div class="map">
      <el-amap class="map-box" vid="amap-location" zoom="15" :center="position">
        <el-amap-marker :position="position">
          <!-- v-for="(marker, index) in markerPosition"
          :key="index"
          :vid="index" 
          :events="events"-->
        </el-amap-marker>
      </el-amap>
    </div>
    <!-- <div class="address-list">
      <ul>
        <li v-for="(item,i) in addressList" :key="i">{{item}}</li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import { computePosition } from "common/js/util";
import AMap from "vue-amap";
export default {
  name: "cart",
  data() {
    return {
      position: ["121.67047", "31.246974"],
      // markerPosition:[];
      addressList: [] // 当前的地址列表
    };
  },
  created() {
    let tempPosition = ["121.67047", "31.246974"];
    // computePosition(tempPosition);
    this.positionScale(tempPosition);
  },
  mounted() {
    this.$nextTick(() => {
      this.getCurrentAddress(this.position);
    });
  },
  methods: {
    addInfo() {
      this.$router.replace("cartone");
    },
    // 计算实时的范围
    positionScale(position) {
      let lng = Number(position[0]);
      let lan = Number(position[1]);
      let distance = 0.5;
      let result = computePosition(lng, lan, distance);
      console.log("最终的计算结果是", result);
    },
    // 获取当前经纬度的具体位置数据
    getCurrentAddress(position) {
      let _this = this;
      let geo = new AMap.Geocoder({
        extensions: "all"
      });
      geo.getAddress(position, (status, result) => {
        console.log("获取到的地址信息列表是", result);
        _this.addressList = result.regeocode.position;
        console.log("获取到的地址列表是", _this.addressList);
      });
    }
  }
};
</script>
<style>
.map {
  width: 100%;
  height: 200px;
}
</style>
