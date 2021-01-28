/*
 * @Author: your name
 * @Date: 2021-01-26 21:54:38
 * @LastEditTime: 2021-01-26 22:40:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\shoppingmall\src\service\detail.js
 */

import { request } from './request'
export function getDetailData(goodsId) {
    return request({
        url: '/detail',
        params: {
            iid:goodsId
        }
    })

}

// 详情中创建一个商品类
export class goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}