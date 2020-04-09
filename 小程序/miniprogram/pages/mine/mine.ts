Component({
  data: {
    /** 用户信息  */
    userInfo: {
      /** 用户头像  */
      avatarUrl: '',
      /** 用户昵称  */
      nickName: ''
    },
    /** 展示用户收集信息面板 */
    isShowGetClient: false,
    /** 展示结算信息面板  */
    isShowSettle: false,
    /** 与购物车相关的数据  */
    shopCarData: {
      /** 是否展示购物结算栏  */
      isShowShopSettle: false,
      /** 购物车结算列表  */
      shopList: []
    }
  },

  methods: {
    onShow() {
      console.log('mine页面重新展示了');
      this.shopListInit();
    },
    onLoad() {
      console.log('加载了');
      this.shopListInit();
    },
    /** 获取并初始化购物车相关数据  */
    shopListInit() {
      console.log('执行了shopListInit');
      let shopList = [];
      // 获取全局购物车缓存数据
      try {
        shopList = wx.getStorageSync('shopList');
        console.log('preferential获取到的全局购物车缓存数据', shopList);
      } catch (e) {
        console.log('preferential全局购物车缓存获取失败');
        shopList = this.data.shopCarData.shopList;
      }

      this.setData({ 'shopCarData.shopList': shopList });
    },
    /** 购物车组件数据发生变化父组件需同步更新  */
    shopCarDataChange($event) {
      console.log('购物车组件数据发生变化父组件需同步更新', $event);
      const shopCarData = $event.detail.shopCarData;
      this.setData({
        shopCarData
      });
    },
    /** 购物车被隐藏的时候触发  */
    shopCarHide() {
      console.log('触发隐藏购物车');
      this.setData({
        'shopCarData.isShowShopSettle': false
      });
    },
    /** 点击了结算按钮  */
    settleBtnClick() {
      console.log('父组件接收点击结算按钮事件');
      this.setData({
        isShowGetClient: true,
        'shopCarData.isShowShopSettle': false
      });
    },
    /** 展示购物车组件  */
    showShopCarMarkBox() {
      console.log('展示购物车组件');
      this.setData({
        'shopCarData.isShowShopSettle': true
      });
    },
    /** 关闭弹出层  */
    closePopup() {
      this.setData({
        isShowGetClient: false,
        isShowSettle: false
      });
    },
    /** 用户收集信息提交  */
    getClientInfo($event) {
      const clientInfo = $event.detail.clientInfo;
      console.log('用户收集信息提交', clientInfo);

      this.setData({
        isShowGetClient: false,
        isShowSettle: true,
        clientInfo
      });
    }
  }
});
