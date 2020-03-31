const amapFile = require('./utils/amap-wx.js');
const myAmapFun = new amapFile.AMapWX({ key: '574a6604ba9f0cf31d641c5c243bb31b' });
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env:"qpcloudx30pj",
        traceUser: true,
      })
    }

    this.globalData = {
      myAmapFun: myAmapFun,
    }
  }
})
