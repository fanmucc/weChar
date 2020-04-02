const app = getApp();
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({
    data: {
        activeKey: 1,
        list: [
            {
                imgPath: '',
                name: '商品1号',
                goods_sku: '123456',
                goods_color: '红色',
                goods_nums: 123,
                id: 0
            },
            {
                imgPath: '',
                name: '商品2号',
                goods_sku: '123456',
                goods_color: '红色',
                goods_nums: 123,
                id: 1
            },
            {
                imgPath: '',
                name: '商品3号',
                goods_sku: '123456',
                goods_color: '红色',
                goods_nums: 123,
                id: 2
            },
            {
                imgPath: '',
                name: '商品3号',
                goods_sku: '123456',
                goods_color: '红色',
                goods_nums: 123,
                id: 3
            },
            {
                imgPath: '',
                name: '商品3号',
                goods_sku: '123456',
                goods_color: '红色',
                goods_nums: 123,
                id: 4
            },
            {
                imgPath: '',
                name: '商品3号',
                goods_sku: '123456',
                goods_color: '红色',
                goods_nums: 123,
                id: 5
            },
            {
                imgPath: '',
                name: '商品3号',
                goods_sku: '123456',
                goods_color: '红色',
                goods_nums: 123,
                id: 6
            },
            {
                imgPath: '',
                name: '商品3号',
                goods_sku: '123456',
                goods_color: '红色',
                goods_nums: 123
            },
            {
                imgPath: '',
                name: '商品3号',
                goods_sku: '123456',
                goods_color: '红色',
                goods_nums: 123,
                id: 7
            },
            {
                imgPath: '',
                name: '商品3号',
                goods_sku: '123456',
                goods_color: '红色',
                goods_nums: 123,
                id: 8
            },
            {
                imgPath: '',
                name: '商品3号',
                goods_sku: '123456',
                goods_color: '红色',
                goods_nums: 123,
                id: 9
            },
            {
                imgPath: '',
                name: '商品3号',
                goods_sku: '123456',
                goods_color: '红色',
                goods_nums: 123,
                id: 10
            },
            {
                imgPath: '',
                name: '商品3号',
                goods_sku: '123456',
                goods_color: '红色',
                goods_nums: 123,
                id: 11
            },
            {
                imgPath: '',
                name: '商品3号',
                goods_sku: '123456',
                goods_color: '红色',
                goods_nums: 123,
                id: 12
            }
        ],
        mask: false
    },
    onShow () {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 1
            })
        }
    },
    getGoods(event) {
        console.log(event.target.dataset['id'])
        let id = event.target.dataset['id'];
        this.setData({
            mask: true
        })
        Toast.loading({
            mask: this.data.mask,
            message: '跳转中...'
        })
        wx.navigateTo({
            url: `/pages/goods/goods?id=${id}`,
            complete: () => {
                console.log('跳转了')
            }
        })
    }
})