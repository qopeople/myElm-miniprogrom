const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    selectType: ["生活周", "首单立减", "津贴优惠", "满减优惠"],
    currentData: "",
    currentAddress: "",
    imgUrls: [
      [
        ["icon01", "iconshiwuqimin", "iconshiwuqimin1", "iconshiwuqimin2"],
        [
          "iconshiwuqimin3",
          "iconshuiguo",
          "iconfont_561027_l7dn0zqynl8fr",
          "iconbaozi"
        ]
      ],
      [
        ["iconfood", "iconjingguanji", "iconfood-icon", "iconfood-strawberry"],
        [
          "iconfood1",
          "iconGroup",
          "iconico-foods",
          "iconbeifen-xiaotubiao_food-shutiao"
        ]
      ]
    ]
  },
  handleScoll(e) {
    console.log(e.detail.scrollHeight, e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 1. 获取数据库引用
    const db = wx.cloud.database();
    const that = this;
    // 2. 构造查询语句
    // collection 方法获取一个集合的引用
    // where 方法传入一个对象，数据库返回集合中字段等于指定值的 JSON 文档。API 也支持高级的查询条件（比如大于、小于、in 等），具体见文档查看支持列表
    // get 方法会触发网络请求，往数据库取数据
    // db.collection('booktest').where({})
    // .get().then(res=>{
    //   console.log(res.data)
    //  this.setData({
    //    requestData:res.data
    //  })
    // })
    //获取当前地址并且进行标记
    app.globalData.myAmapFun.getRegeo({
      success: function(res) {
        // const address = res[0].regeocodeData.addressComponent;
        // console.log()
        that.setData({
          currentAddress: res[0].name
        });
      },
      fail: function(info) {
        //失败回调
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    if (typeof this.getTabBar === "function" && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      });
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
