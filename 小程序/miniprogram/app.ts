// app.ts
App({
  // 生命周期回调——监听小程序初始化
  onLaunch(options: any) {
    console.log('onLaunch', options);
    try {
      // 同步设置全局购物车缓存
      wx.setStorageSync('shopList', []);
    } catch (e) {
      console.log('app.ts同步设置全局购物车缓存设置失效');
    }
  },
  onShow(options: any) {
    console.log('onShow', options);
  },
  onHide() {
    console.log('onHide');
  },
  onError(msg: any) {
    console.log(msg);
  },
  onPageNotFound(res: any) {
    // 如果是 tabbar 页面，请使用 wx.switchTab
    console.log('res', res);
    wx.redirectTo({
      url: 'pages/lists/lists'
    });
  },
  globalData: 'I am global data'
});
