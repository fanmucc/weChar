### 组件生命周期
``` js
Component({
    // 自定义属性值
    properties: {
        text: {
            type: String,
            defaulte: ''
        }
    },
    // 生命周期写在这里
    lifetimes: {
        created () {
            // 节点实例化， 节点未导入， 无法使用setData
        },
        attached () {
            // 节点导入，可以使用setData，不能对节点进行操作
        },
        ready () {
            // 节点导入完成，可以使用setData, 可以操作节点
        },
        moved () {
            // 节点移动到节点树的其他位置
        },
        detached () {
            // 节点删除
        }
    },
    // // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
    attached () {
        // 会覆盖lifetimes中的节点
    },
    // 组件在页面中的生命周期
    pageLifetimes: {
        show () {
            // 页面展示
        },
        hide () {
            // 页面隐藏
        },
        resize (size) {
            // 页面尺寸发生变化
        }
    },
    methods: {
        // 事件方法
    }
})
```