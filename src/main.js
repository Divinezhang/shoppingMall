/*
 * @Author: your name
 * @Date: 2020-12-17 12:52:44
 * @LastEditTime: 2020-12-21 16:33:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shoppingmall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AMap from 'vue-amap'
Vue.config.productionTip = false
// 创建一个事件总线
Vue.prototype.$bus = new Vue()

Vue.use(AMap)
// 初始化高德地图
AMap.initAMapApiLoader({
  key:'9b6c2270906415f5836d5e9d80a78950',
  plugin:['Autocomplete','PlaceSearch','Geocoder'],
  v:'1.4.0'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
