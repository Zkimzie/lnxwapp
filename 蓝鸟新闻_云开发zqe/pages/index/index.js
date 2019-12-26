//1，引入本地json数据，这里引入的就是第一步定义的json数据
var jsonData = require('../../json/json.js');
Page({
  data: {
    shiyelist:[],
    chengxianlist:[],
    tejilist: [],
    tongzhilist: [],
    datalist: [
      {
        link: 'xinwen',
        title: '新闻'
      },
      {
        link: 'shiye',
        title: '视野'
      },
      {
        link: 'chengxian',
        title: '呈现'
      },
      {
        link: 'teji',
        title: '特辑'
      },
      {
        link: 'tongzhi',
        title: '通知'
  //    },
  //    {
  //      link: 'lishi',
   //     title: '历史'
   //   },
   //   {
  //      link: 'tiyu',
  //      title: '体育'
      }
    ],
    boolean: true,
    boolean0: false,
    boolean1: false,
    boolean2: false,
    boolean3: false,
    boolean4: false
  },


  onLoad: function() {
    let that = this
    wx.cloud.database().collection("fh").where({
      type: "呈现"
    }).get({
      success(res) {
        console.log("请求成功", res.data)
        that.setData({
          chengxianList: res.data
        })
      },
      fail(res) {
        console.log("请求失败", res)
      }
    })
    
    wx.cloud.database().collection("fh").where({
      type: "通知"
    }).get({
      success(res) {
        console.log("请求成功", res.data)
        that.setData({
          tongzhiList: res.data
        })
      },
      fail(res) {
        console.log("请求失败", res)
      }
    })


    
    wx.cloud.database().collection("fh").where({
      type: "特辑"
    }).get({
      success(res) {
        console.log("请求成功", res.data)
        that.setData({
          tejiList: res.data
        })
      },
      fail(res) {
        console.log("请求失败", res)
      }
    })
    

//    wx.cloud.database().collection("fh").where({
 //     type: "历史"
//    }).get({
//      success(res) {
  //      console.log("请求成功", res.data)
 //       that.setData({
 //         lishiList: res.data
  //      })
  //    },
  //    fail(res) {
  //      console.log("请求失败", res)
 //     }
 //   })

    
 //   wx.cloud.database().collection("fh").where({
 //     type: "体育"
 //   }).get({
  //    success(res) {
  //      console.log("请求成功", res.data)
  //      that.setData({
  //        tiyuList: res.data
 //       })
 //     },
  //    fail(res) {
  //      console.log("请求失败", res)
  //    }
 //   })


    wx.cloud.database().collection("fh").where({
      type: "新闻"
    }).get({
      success(res) {
        console.log("请求成功", res.data)
        that.setData({
          dataList: res.data
        })
      },
      fail(res) {
        console.log("请求失败", res)
      }
    })


    wx.cloud.database().collection("fh").where({
      type: "视野"
    }).get({
      success(res) {
        console.log("请求成功", res.data)
        that.setData({
          shiyelist: res.data
        })
      },
      fail(res) {
        console.log("请求失败", res)
      }
    })
  },

  go(event) {
    console.log(event);
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail'
    })

  },
  // onShow() {
  //   console.log("onShow")
  //   let that = this
  //   wx.cloud.database().collection("fh").get({
  //     success(res) {
  //       console.log("请求成功", res.data)
  //       that.setData({
  //         dataList: res.data
  //       })
  //     },
  //     fail(res) {
  //       console.log("请求失败", res)
  //     }

  //   })
  // },
  // onShow() {
  //   console.log("onShow")
  //   let that = this
  //   wx.cloud.database().collection("fh").where({
  //     type: "娱乐"
  //   }).get({
  //     success(res) {
  //       console.log("请求成功", res.data)
  //       that.setData({
  //         yuleList: res.data
  //       })
  //     },
  //     fail(res) {
  //       console.log("请求失败", res)
  //     }

  //   })
  // },
  // onLoad: function() {
  //   this.setData({
  //     //2，jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
  //     dataList: jsonData.dataList
  //   });
  // },

  // 导航栏按钮组
  xinwen: function () {
    var bol = this.data.boolean;
    this.setData({
      boolean: !bol,
      boolean0: false,
      boolean1: false,
      boolean2: false,
      boolean3: false,
      boolean4: false,
      boolean5: false,
    })
  },

  shiye: function () {
    var bol = this.data.boolean0;
    this.setData({
      boolean0: !bol,
      boolean1: false,
      boolean2: false,
      boolean: false,
      boolean3: false,
      boolean4: false,
      boolean5: false,
    })
  },
  chengxian: function () {
    var bol = this.data.boolean1;
    this.setData({
      boolean1: !bol,
      boolean: false,
      boolean2: false,
      boolean0: false,
      boolean3: false,
      boolean4: false,
      boolean5: false,
    })
  },
  tongzhi: function () {
    var bol = this.data.boolean2;
    this.setData({
      boolean2: !bol,
      boolean: false,
      boolean1: false,
      boolean0: false,
      boolean3: false,
      boolean4: false,
      boolean5: false,
    })
  },
  //tiyu: function () {
   // var bol = this.data.boolean3;
   // this.setData({
  //    boolean3: !bol,
  //    boolean: false,
   //   boolean1: false,
  //    boolean2: false,
   //   boolean0: false,
   //   boolean4: false,
   //   boolean5: false,
   // })
 // },
  teji: function () {
    var bol = this.data.boolean4;
    this.setData({
      boolean4: !bol,
      boolean: false,
      boolean1: false,
      boolean2: false,
      boolean0: false,
      boolean3: false,
      boolean5: false,
    })
  },
 // lishi: function () {
  //  var bol = this.data.boolean5;
 //   this.setData({
 //     boolean5: !bol,
 //     boolean: false,
 //     boolean1: false,
  //    boolean2: false,
 //     boolean0: false,
 //     boolean3: false,
 //    boolean4: false,
 //   })
 // },
})