const app = getApp();
Page({
    data: {
        id: 0,
        background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 2000,
        duration: 500
    },
    onLoad: function(option){
        this.setData({
            id: option.id
        })
    },
    onShow(option) {
        console.log(this.data.id)
    }
})