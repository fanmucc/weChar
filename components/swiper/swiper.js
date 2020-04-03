const app = getApp();
const computedBehavior = require('miniprogram-computed');
/**
 *  @title 轮播图组件
 *  @width 组件宽度  String  100%    如果传入px值 请携带px值  如: 300px
 *  @height 组件高度 String  100%    如果传入px值 请携带px值  如: 300px
 *  @contour 屏幕等宽等高 false Boolean 必填: 否
 *  @currentBlock 轮播图右下角是否显示图片数量和当前图片位置 Boolean 默认 false 
 *  @indicator_dots 是否显示面板指示点  Boolean    必填: 否
 *  @indicator_color 指示点颜色    rgba值         必填: 否
 *  @indicator_active_color 当前选中的指示点颜色  #000 值    必填: 否
 *  @autoplay 自动切换  Boolean   必填: 否  默认 false
 *  @current  当前所在滑块index Number 默认0  必填:否 
 *  @interval 自动切换时间间隔 Number  默认5000毫秒  必填:否  
 *  @duration 滑块滑动时间 Number 默认500毫秒  必填:否
 *  @circular 是否采用衔接滑动 Boolean 默认false 必填: 否
 *  @vertical 滑动方向是否为纵向 Boolean 默认false 必填: 否
 *  @data 需要渲染的数据 默认需要imgsrc 
 */
Component({
    behaviors: [computedBehavior],
    properties: {
        width: {
            type: String,
            value: '100%'
        },
        height: {
            type: String,
            value: '100%'
        },
        contour: {
            type: Boolean,
            value: false
        },
        currentBlock: {
            type: Boolean,
            value: false
        },
        indicator_dots: {
            type: Boolean,
            value: false
        },
        indicator_color: {
            type: String,
            value: 'rgba(0, 0, 0, .3)'
        },
        indicator_active_color: {
            type: String,
            value: '#000'
        },
        autoplay: {
            type: Boolean,
            value: false
        },
        current: {
            type: Number,
            value: 0
        },
        interval: {
            type: Number,
            value: 5000
        },
        duration: {
            type: Number,
            value: 500
        },
        circular: {
            type: Boolean,
            value: false
        },
        vertical: {
            type: Boolean,
            value: false
        },
        data: {
            type: Array,
            value: [
                {
                    index: 0,
                    imagePath: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'
                },
                {
                    index: 1,
                    imagePath: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08'
                }
            ]
        }
    },
    data: {

    },
    lifetiems: {
        created() {

        },
        attached() {

        },
        ready() {

        },
        moved() {

        },
        detached() {

        }
    },
    computed: {
        wh(data) {
            if (data.contour) {
                console.log(wx.getSystemInfoSync()['screenWidth'])
                return {
                    width: `${wx.getSystemInfoSync()['screenWidth']}px`,
                    height: `${wx.getSystemInfoSync()['screenWidth'] / 5 * 6 }px`
                }
            }
        }
    },
    methods: {
        currentChange(event) {
            this.setData({
                current: event.detail.current
            })
        },
        // 图片加载失败
        errorimg(err) {
            console.log(err)
            let errImgIndex = err.target.dataset.errImg;   // 找到错误图片的下标
            let imgObject = this.data.data[errImgIndex].imagePath;   // 获取到data中错误的链接
            let obj = {};
            obj[imgObject] = 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg';
            console.log(obj)
            this.setData(obj)
        },
        // 图片渲染完毕
        imgLoad(load) {
            console.log(load)
        }
    }
})