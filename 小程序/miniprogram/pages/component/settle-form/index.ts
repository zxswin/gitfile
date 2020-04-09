Component({
  data: {
    /** 遮罩组件入参相关数据  */
    markData: {
      position: 'center'
    },
    /**  客户信息  */
    clientInfo: {
      /**  客户姓名  */
      name: '卓杏森',
      /**  手机号码  */
      phoneNum: '13535265073',
      /** 省市区  */
      regionList: ['广东省', '广州市', '天河区'],
      region: '广东省广州市天河区',
      /** 街道地址  */
      address: '花城大道677号美林工业大厦18楼601室',
      /** 邮编  */
      postcode: '510000',
      /** 订单备注  */
      remark: '生鲜订单备注信息'
    },
    /** 是否点击了提交按钮  */
    isSubmitClick: false
  },

  observers: {},

  properties: {},

  /** 组件的生命周期  */
  lifetimes: {
    attached: function() {}
  },

  methods: {
    /** 省市区选择组件发生了改变的时候触发  */
    regionChange($event) {
      console.log('省市区组件发生改变', $event);
      const clientInfo = this.data.clientInfo;
      const postcode = $event.detail.postcode;
      const regionList = $event.detail.value;
      const region = regionList.join('');

      clientInfo.regionList = regionList;
      clientInfo.region = region;
      clientInfo.postcode = postcode;

      this.setData({ clientInfo });
    },
    /** 点击了确认提交按钮  */
    submitClick() {
      // 必填字段
      const mustFillList = ['name', 'phoneNum', 'region', 'address'];

      const clientInfo = this.data.clientInfo;
      console.log('提交的数据', clientInfo);

      this.setData({
        isSubmitClick: true
      });

      for (const key of mustFillList) {
        if (!clientInfo[key]) return;
        // 手机号码校验
        if (key === 'phoneNum' && clientInfo[key]) {
          const pattern = /0?(13|14|15|18|17)[0-9]{9}/;
          if (!pattern.test(clientInfo[key])) {
            wx.showToast({
              title: '手机号码格式不正确',
              icon: 'none',
              duration: 2000
            });
            return;
          }
        }
      }

      console.log('字段校验逻辑通过了');
      this.triggerEvent('getClientInfo', {
        close: true,
        clientInfo
      });
    },
    /** 当输入控件失去焦点的时候  */
    inputBlur($event) {
      const clientInfo = this.data.clientInfo;
      const key = $event.currentTarget.dataset.inputkey;
      const inputValue = $event.detail.value;
      clientInfo[key] = inputValue;
      this.setData({
        clientInfo: this.data.clientInfo
      });
    },
    /* 遮罩层被点击了 */
    closeMask() {
      console.log('遮罩层被点击了');
      // 发送关闭事件到父组件
      this.triggerEvent('close', { close: true });
    },
    /** 阻止点击主内容取事件冒泡  */
    contentClick() {
      console.log('阻止点击主内容取事件冒泡');
    }
  }
});
