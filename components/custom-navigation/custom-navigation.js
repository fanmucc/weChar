const app = getApp();
Component({
  /**
   * 组件的属性列表
   * @title 自定义标题内容
   * @back 是否显示返回
   * @home 是否显示返回主页
   * @customBack 自定义返回事件    自定义返回时间和 返回首页事件在同一个页面中使用的话只能2选1
   * @customHome 自定义返回首页事件
   */
  properties: {
     title: {
       type: String,
       value: '标题'
     },
     back: {
       type: Boolean,
       value: false
     },
     home: {
       type: Boolean,
       value: false
     },
     customBack: {
       type: Boolean,
       value: false
     },
     customHome: {
       type: Boolean,
       value: false
     }
  },
  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    phoneSystem: app.globalData.phoneSystem,
    navigationHeight: app.globalData.getMenuButtonBoundingClientRect.bottom,
    navigationLeft: app.globalData.screenWidth - app.globalData.getMenuButtonBoundingClientRect.right,
    navigationWidth: 0,
    navigationTop: app.globalData.getMenuButtonBoundingClientRect.top,
    titleHeight: app.globalData.getMenuButtonBoundingClientRect.bottom - app.globalData.getMenuButtonBoundingClientRect.top
  },
  lifetimes: {
    attached () {
      this.setData({
        navigationWidth: this.data.back === false ? '25px' : app.globalData.getMenuButtonBoundingClientRect.width || this.data.home === false ? '25px' : app.globalData.getMenuButtonBoundingClientRect.width
      })
    },
    ready() {
        //
    }
  },
  /**
   * 组件的方法列表 */
  methods: {
      goBack() {
        console.log('123')
        // if (this.data.customBack) {
        //   this.triggerEvent('goback')
        //   return
        // }
        // // 获取当前页面栈
        // console.log(123)
        // let getCurrent = wx.getCurrentPages();
        // console.log(getCurrent)
      },
      goHome() {
        if (this.data.customHome) {
          this.triggerEvent('gohome')
        }
        console.log('返回首页')
      }
  }
})
