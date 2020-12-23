/*
 * @Author: your name
 * @Date: 2020-12-17 12:52:44
 * @LastEditTime: 2020-12-18 14:26:59
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \shoppingmall\src\common\js\util.js
 */
// 防抖函数(防止一直刷新对象)
// 第一个参数是要执行的函数,第二个参数是，延迟的时间
// 返回的也是一个函数
export function debounce(func, delay) {
    let timer = null;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// 计算固定范围内的经纬度
/**
 * 附近位置最大最小经纬度计算 
 * @param   longitude  经度
 * @param   latitude   纬度
 * @param   distince    距离（千米）
 * @returns 格式：经度最小值-经度最大值-纬度最小值-纬度最大值
 */
export function computePosition(longitude, latitude, distance) {
    console.log("MaxMinLongitudeLatitude", longitude, latitude);
    let r = 6371.393;    // 地球半径千米
    let lng = longitude;
    let lat = latitude;
    let dlng = 2 * Math.asin(Math.sin(distance / (2 * r)) / Math.cos(lat * Math.PI / 180));
    dlng = dlng * 180 / Math.PI;// 角度转为弧度
    let dlat = distance / r;
    dlat = dlat * 180 / Math.PI;
    let minlat = (lat - dlat).toFixed(6);
    let maxlat = (lat + dlat).toFixed(6);
    let minlng = (lng - dlng).toFixed(6);
    let maxlng = (lng + dlng).toFixed(6);
    // return minlng + "----" + maxlng + "----" + minlat + "-----" + maxlat;
    // x d
    return [minlng, maxlng, minlat, maxlat]
}