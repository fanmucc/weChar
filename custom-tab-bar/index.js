const app = getApp();
Component({
    // 自定义属性
    properties: {

    },
    data: {
        // 变量
        selected: 0,
        isShowTabBar: app.globalData.isShowTabBar,
        list: [],
        switchLock: false,
        color: "#7A7E83",
        selectedColor: "#3cc51f",
        iphoneModel: app.globalData.iphoneModel
    },
    // 组件生命周期 写在这里
    lifetimes: {
        created () {   // 组件实例化，但节点树并未导入，此时不能使用setData

        },
        attached () {  // 节点树完成，可以使用setData渲染节点，但是无法操作节点
            this.tabBarList()
        },
        ready () {     // 组件布局完成，这时可以获取节点信息，也可以操作节点

        },
        moved () {     // 组件实例被移动到树的另一个位置

        },
        detached () {  // 组件实例从节点树种移除

        }
    },
    methods: {
        // 事件方法写在这里
        tabBarList () {
            let tabBarList = [];
            tabBarList = [
                {
                    index: 0,
                    iconClassName: 'iconfont icon icon-home',
                    text: '首页',
                    pagePath: "/pages/index/index"
                },
                {
                    index: 1,
                    iconClassName: 'iconfont icon icon-cart',
                    text: "购物车",
                    pagePath: "/pages/cart/cart"
                },
                {
                    index: 2,
                    iconClassName: 'iconfont icon icon-My',
                    text: '个人中心',
                    pagePath: "/pages/user/user"
                }
            ];
            this.setData({
                list: tabBarList
            })
        },
        // tabBar点击事件
        switchTab(e) {
            if (this.data.switchLock) {   // 如果为true 则退出事件 防止多次点击
                return   
            };
            
            // 点击过后将 switchLock 设置为true
            this.setData({
                switchLock: true
            })

            // 获取点击时携带的参数信息
            const tabBarData = e.currentTarget.dataset;
            const url = tabBarData.path;
            console.log(url)
            // 进行页面跳转
            wx.switchTab({
                url,
                fail: (err) => {
                    console.log(err)
                },
                complete: () => {
                    console.log(111)
                    this.setData({
                        switchLock: false
                    })
                }
            })
            this.setData({
                selected: tabBarData.index
            });
        }
    }
})