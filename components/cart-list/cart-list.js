const app = getApp();
Component({
    // 默认值
    properties: {
        image: {
            type: String,
            value: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'     // 暂时未空，到时会找商品加载失败占位图
        },
        name: {
            type: String,
            value: '123'     // 商品款号
        },
        color: {
            type: String,
            value: '白色'     // 商品颜色
        },
        nums: {
            type: Number,
            value: 0
        }
    },
    lifetimes: {
        ready () {

        }
    },
    methods: {

    }
})