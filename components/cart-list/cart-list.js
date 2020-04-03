const app = getApp();
Component({
    // 默认值
    /**
   * 组件的属性列表
   * @title 渲染商品列表
   * @image 图片地址
   * @name  商品款号
   * @color 商品颜色
   * @nums 商品数量
   */
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