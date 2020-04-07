const app = getApp();
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({
    data: {
        value: '',
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
        };
    },
    getGoods(event) {
        console.log(event.target.dataset['id'])
        let id = event.target.dataset['id'];
        wx.navigateTo({
            url: `/pages/goods/goods?id=${id}`,
            complete: () => {
                console.log('跳转了')
            }
        })
    },
    // 搜索事件 
    onSearch() {
        console.log('触发搜索')
        this.setData({
            mask: true
        })
        Toast.loading({
            duration: 0,       // 持续展示 toast
            forbidClick: true, // 禁用背景点击
            message: '加载中',
            loadingType: 'spinner',
            selector: '#custom-selector'
        });
        Toast.clear();
    },
    // 取消事件
    onCancel() {
        console.log('取消了')
    },
    
})