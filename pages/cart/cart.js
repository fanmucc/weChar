const app = getApp();
Page({
    data: {
        activeKey: 1,
        list: [
            {
                imgPath: '',
                name: '商品1号',
                goods_sku: '123456',
                goods_color: '红色',
                goods_nums: 123
            },
            {
                imgPath: '',
                name: '商品2号',
                goods_sku: '123456',
                goods_color: '红色',
                goods_nums: 123
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
                goods_nums: 123
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
                goods_nums: 123
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
                goods_nums: 123
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
                goods_nums: 123
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
                goods_nums: 123
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
                goods_nums: 123
            }
        ]
    },
    onShow () {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 1
            })
        }
    },

})