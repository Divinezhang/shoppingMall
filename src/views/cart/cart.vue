<!--
 * @Author: your name
 * @Date: 2020-12-17 12:52:44
 * @LastEditTime: 2021-01-20 17:38:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shoppingmall\src\views\cart\Cart.vue
-->
<template>
  <div class="cart">
    购物车
    <button @click="addInfo">添加</button>
    <div class="map">
      <el-amap
        class="map-box"
        vid="amap-location"
        :zoom="zoom"
        :center="markerPosition[0].position"
        :plugin="plugin"
      >
        <el-amap-marker
          v-for="(item, index) in markerPosition"
          :position="item.position"
          :key="index"
          vid="index"
          :events="markerDetail"
          :extData="item"
          :icon="item.url"
          draggable
        >
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
// import AMap from "vue-amap";
export default {
  name: "cart",
  data() {
    return {
      markerPosition: [
        {
          position: [121.670629, 31.247346],
          custId: "1",
          custName: "上海银行",
          url: ""
        },
        {
          position: [121.667373, 31.249433],
          custId: "2",
          custName: "上海银行财神庙",
          url: ""
        },
        {
          position: [121.678253, 31.247538],
          custId: "3",
          custName: "招商银行",
          url: ""
        }
      ],
      markerImg: "",
      addressList: [], // 当前的地址列表
      markerDetail: {
        click: item => {
          let tempData = item.target.w.extData;
          console.log("点击的数据是", tempData);
          // let tempArr = this.markerPosition;
          this.markerPosition.forEach(element => {
            if (element.custName == tempData.custName) {
              element.url = require("@/assets/img/common/red-map.png");
            } else {
              element.url = "";
            }
          }); /* 
          console.log("++++++++", tempArr);
          this.markerPosition = tempArr; */
        }
      },
      zoom: 15,
      plugin: [
        {
          pName: "ToolBar",
          events: {
            /*  */
            zoomchanged: ({ type }) => {
              let ratioRange;
              if (type === "zoomin") {
                if (this.zoom < 19) {
                  this.zoom += 1;
                  ratioRange = this.scaleList[this.zoom][0];
                  console.log(`能够放大，当前范围是：${ratioRange}`);
                }
              } else {
                if (this.zoom > 3) {
                  this.zoom -= 1;
                  ratioRange = this.scaleList[this.zoom][0];
                  console.log(`能够缩小，当前范围是：${ratioRange}`);
                }
              }
            }
          }
        },
        {
          pName: "Scale",
          events: {
            init: instance => {
              this.scaleList = instance.H0;
            }
          }
        }
      ]
    };
  },
  /* watch: {
    markerPosition(newVal) {
      console.log("新的值是", newVal);
    }
  }, */
  created() {
    let tempPosition = ["121.67047", "31.246974"];
    // computePosition(tempPosition);
    this.positionScale(tempPosition);
  },
  mounted() {
    this.$nextTick(() => {
      // this.getCurrentAddress(this.position);
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
    }
    // 获取当前经纬度的具体位置数据
    /* getCurrentAddress(position) {
      let _this = this;
      let geo = new AMap.Geocoder({
        extensions: "all"
      });
      geo.getAddress(position, (status, result) => {
        console.log("获取到的地址信息列表是", result);
        _this.addressList = result.regeocode.position;
        console.log("获取到的地址列表是", _this.addressList);
      });
    } */
  }
};
</script>
<style>
.amap-icon > img {
  top: 0px;
  left: 0px;
  width: 38px;
  height: 66px;
}

.map {
  width: 100%;
  height: 500px;
}
</style>
