//Component Object
Component({
    properties: {
        myProperty:{
            type:String,
            value:'',
            observer: function(){}
        },

    },
    data: {
        randomIndex: 0,    // 设置随机数
        endText: {
            '0': '结束语1',
            '1': '结束语2',
            '2': '结束语3',
            '3': '结束语4',
            '4': '结束语5',
        }
    },
    methods: {
        
    },
    created: function(){

    },
    attached: function(){
        this.setData({
            randomIndex: Math.floor(Math.random()*5)
        })
    },
    ready: function(){

    },
    moved: function(){

    },
    detached: function(){

    },
});