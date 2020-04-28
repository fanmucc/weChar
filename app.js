//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'],       // 获取屏幕信息栏高度
    screenHeight: wx.getSystemInfoSync()['statusBarHeight'],         // 获取屏幕高度
    phoneSystem: wx.getSystemInfoSync()["system"].indexOf("iOS") !== -1 ? 2 : 1,    // 判断是否为ios系统设置
    getMenuButtonBoundingClientRect: wx.getMenuButtonBoundingClientRect(),      // 获取小程序右上角按钮的布局位置(绝对定位 top right bottom left) 一次来布局自定义左上角返回按钮位置
    screenWidth: wx.getSystemInfoSync()['screenWidth'],       // 获取屏幕宽度
    customHeight: 61,             // 固定高度， tabbar高度为61px
    iphoneModel: wx.getSystemInfoSync()["model"].indexOf("iPhone X") !== -1 || wx.getSystemInfoSync()["model"].indexOf("iPhone 11") !== -1 || wx.getSystemInfoSync()["model"].indexOf("iPhone XR") !== -1 || wx.getSystemInfoSync()["model"].indexOf("unknow") !== -1,  // 检测是否为ios特定版本设备，此版本设备应当注意小白条遮挡效果
    // 自定义tabbar数据
    isShowTabBar: true,  
    // screenViewHieght:  wx.getSystemInfoSync()['statusBarHeight'] - (wx.getMenuButtonBoundingClientRect().bottom + 10 +  61) - iphoneModel     //      此数据在每个页面进行调用 判断是否有小白条来进行设置
  }
})