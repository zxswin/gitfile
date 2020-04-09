import { DetailData } from './config';

Component({
  data: {},

  methods: {
    onLoad(option) {
      console.log('detail-view页面获取到的参数', option);
      console.log('DetailData', DetailData);
      this.setData({
        detailData: DetailData
      });
      const barTitle = option ? option.barTitle : DetailData.describe.title;
      wx.setNavigationBarTitle({
        title: `潮味生鲜${barTitle}详情展示`
      });
    },
    /** 点击进入商城购买  */
    toShop() {
      console.log('点击按钮进入商城购买');
      wx.switchTab({
        url: '/pages/index/index',
        success: function() {
          console.log('成功后的回调');
        },
        fail: function(e) {
          console.log('失败后的回调', e);
        },
        complete: function() {
          console.log('结束后的回调(成功，失败都会执行)');
        }
      });
    }
  }
});
