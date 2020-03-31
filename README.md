## 小程序知识练习

封装`navigation`导航栏组件

> Navigation     ==>  components/custom-navigation

使用到的知识点
- `css` fixed定位 `flex`
- `wx.getSystemInfo()`   获取手机设备数据
- `wx.getMenuButtonBoundingClientRect`    获取小程序胶囊位置信息
- 小程序组件传值


> tabBar        ===> custom-tab-bar

使用到的知识点
- `css` fixed定位 `flex`
- `wx.getSystemInfoSync()['model']` 获取手机型号

需要注意的问题点
在每个页面`onShow`中 通过 `this.getTabBar()` 设置一下 `selected` 不然 设置的点击后的样式会错乱

``` js
// 
if (typeof this.getTabBar === 'function' && this.getTabBar()) {
    this.getTabBar().setData({
        selected: 2
    })
}
```