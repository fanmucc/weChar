const app = getApp();
Page({
    onShow () {
        console.log(1)
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 2
            })
        }
    }
})