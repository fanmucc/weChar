const app = getApp();
Component({
  /**
   * 组件的属性列表
   * @title 自定义标题内容
   * @back 是否显示返回
   * @home 是否显示返回主页
   * @customBack 自定义返回事件    自定义返回时间和 返回首页事件在同一个页面中使用的话只能2选1
   * @customHome 自定义返回首页事件
   * @transparent 是否只显示返回或者返回主页按钮， 不占用顶部空间 不显示title文字
   * 可使用样式依旧待完善
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
     },
     transparent: {
       type: Boolean,
       value: false
     }
  },
  /**
   * 组件的初始数据
   */
  data: {
    navigationHeight: app.globalData.getMenuButtonBoundingClientRect.bottom,
    navigationLeft: app.globalData.screenWidth - app.globalData.getMenuButtonBoundingClientRect.right,
    navigationWidth: 0,
    navigationTop: app.globalData.getMenuButtonBoundingClientRect.top,
    titleHeight: app.globalData.getMenuButtonBoundingClientRect.bottom - app.globalData.getMenuButtonBoundingClientRect.top,
    status: true
  },
  lifetimes: {
    attached () {
      this.setData({
        navigationWidth: this.data.back === false ? '25px' : app.globalData.getMenuButtonBoundingClientRect.width || this.data.home === false ? '25px' : app.globalData.getMenuButtonBoundingClientRect.width,
        status: this.oneIcon()
      }),
      console.log(this.data)
    },
    ready() {
        //
    }
  },
  /**
   * 组件的方法列表 */
  methods: {
      oneIcon() {
          if (this.data.back && this.data.home) return true
          else return false
          
      },
      goBack() {
        if (this.data.customBack) {
          this.triggerEvent('goback')
          return
        }
        // 获取当前页面栈
        let getCurrent = getCurrentPages();
        // 如果页面栈长度大于1的时候才能触发back挑战  tabbar页面之间相互跳转是不会存入到页面栈中
        if (getCurrent.length > 1) {
            wx.navigateBack({
                data: 1
            })
        }
        
        console.log(getCurrent)
      },
      goHome() {
        if (this.data.customHome) {
          this.triggerEvent('gohome')
        }
        wx.reLaunch({
          url: '/pages/index/index'
        });
      }
  }
})
