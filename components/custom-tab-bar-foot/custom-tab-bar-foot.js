const app = getApp();

/**
 * @ custom-tab-bar-foot 作用
 * 解决自定义tabbar组件因为css样式position: fixed; 带来的浮动音响，到时页面内容被覆盖
 * 原理添加div高度和tabbar高度保持一致
 */


Component({
    data: {
        iphoneModel: app.globalData.iphoneModel
    }
})