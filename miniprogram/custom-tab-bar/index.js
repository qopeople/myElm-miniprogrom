// components/TarBar/TarBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "rgb(18, 150, 219)",
    tarbar: [
      {
        name: "外卖",
        iconPath: "iconeliaomo2",
        pagePath: "/pages/index/index",
        selectedIconPath: "iconeliaomo1"
      },
      {
        name: "订单",
        iconPath: "iconorder",
        pagePath: "/pages/myOrder/myOrder",
        selectedIconPath: "iconorder-sel"
      },
      {
        name: "我的",
        iconPath: "iconwode",
        pagePath: "/pages/myCenter/myCenter",
        selectedIconPath: "iconwodedangxuan-copy"
      }
    ]
  },

  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      wx.switchTab({ url });
      this.setData({
        selected: data.index
      });
    }
  }
});
