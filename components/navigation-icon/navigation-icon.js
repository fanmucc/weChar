//Component Object
Component({
    properties: {
        status:{
            type:Boolean,
            value: true
        },
        transparent: {
            type: Boolean,
            value: false
        },
        back: {
            type: Boolean,
            value: false
        },
        home: {
            type: Boolean,
            value: false
        },
        titleHeight: {
            type: Number,
            value: 0
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
    data: {

    },
    methods: {
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
    },
    created: function(){

    },
    attached: function(){
        console.log(this.data)
    },
    ready: function(){

    },
    moved: function(){

    },
    detached: function(){

    },
});