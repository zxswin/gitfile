Component({
  data: {
    /** 遮罩组件入参相关数据  */
    markData: {
      position: 'center'
    },
    canvasParam: {
      width: '320px',
      height: '100%'
    }
  },

  observers: {},

  properties: {
    /** 生成截图所需要的数据  */
    screenshotData: {
      type: Object,
      value: {
        /** 订单列表  */
        orderList: [],
        /** 商品总价  */
        totalPrice: 0,
        /** 结算价格  */
        clearPrice: 0,
        /** 客户信息  */
        clientInfo: {}
      }
    }
  },

  /** 组件的生命周期  */
  lifetimes: {
    ready: function() {
      this.createCanvas(this.data.screenshotData);
    }
  },

  methods: {
    /** 创建画布  */
    createCanvas(screenshotData) {
      console.log('开始创建画布', screenshotData);

      /** 订单列表  */
      const orderList = screenshotData.orderList;
      /** 客户信息  */
      const clientInfo = screenshotData.clientInfo;
      /** 商品总价  */
      const totalPrice = screenshotData.totalPrice;
      /**  结算价格  */
      const clearPrice = screenshotData.clearPrice;
      /** 费用列表  */
      const fearList = screenshotData.fearList;
      /** 优惠券列表  */
      const couponList = screenshotData.couponList;

      // 根据订单数据重置画布的高度
      let canvasHeight = 0;

      // 姓名及收货地址部分的高度计算
      canvasHeight += 150;

      // 订单部分的高度计算
      canvasHeight += orderList.length * 40;

      // 商品价格计算部分的高度计算
      canvasHeight += (fearList.length + couponList.length) * 40;

      // 二维码部分高度计算
      canvasHeight += 280;

      this.setData({
        'canvasParam.height': canvasHeight + 'px'
      });

      const ctx = wx.createCanvasContext('contentCanvas', this);

      const fontSize = 14;
      const lineHeight = 30;
      let startWidth = 10;
      let startHeight = 30;
      ctx.setFontSize(fontSize);

      ctx.setFillStyle('#fff');

      ctx.fillRect(0, 0, 320, canvasHeight);

      ctx.setFillStyle('#000');

      // 收货信息
      const packageInfoTitle = '收货信息';
      // 字体加粗
      ctx.fillText(packageInfoTitle, startWidth, startHeight);
      ctx.fillText(packageInfoTitle, startWidth, startHeight);
      ctx.fillText(packageInfoTitle, startWidth, startHeight);

      // 绘制下划线
      ctx.beginPath();
      ctx.setLineWidth(2);
      ctx.setStrokeStyle('#000');
      ctx.setLineDash([10, 0], 0); // 虚线绘制

      ctx.moveTo(startWidth, startHeight + 15);
      ctx.lineTo(300, startHeight + 15);
      ctx.stroke();
      ctx.closePath();

      startHeight += lineHeight + 5;

      // 姓名
      ctx.fillText(`姓名：${clientInfo.name}`, startWidth, startHeight);
      startHeight += 25;
      ctx.fillText('收件地址：', startWidth, startHeight);
      startHeight += 25;

      // 收货地址如果太长了需要进行拆分
      const address = clientInfo.region + clientInfo.address;
      // 每一行最多展示的字体个数
      const maxAddress = 17;
      const addressLength = address.length;

      if (addressLength > maxAddress) {
        const firstAddress = address.substring(0, maxAddress + 1);
        ctx.fillText(firstAddress, startWidth, startHeight);
        startHeight += 25;

        const secondAddress = address.substring(maxAddress + 1);
        ctx.fillText(secondAddress, startWidth, startHeight);
        startHeight += 30;
      } else {
        ctx.fillText(address, startWidth, startHeight);
        startHeight += 30;
      }

      // 订单列表
      const orderListTitle = '订单列表：';
      // 字体加粗
      ctx.fillText(orderListTitle, startWidth, startHeight);
      ctx.fillText(orderListTitle, startWidth, startHeight);
      ctx.fillText(orderListTitle, startWidth, startHeight);

      // 绘制下划线
      ctx.beginPath();
      ctx.setLineWidth(2);
      ctx.setStrokeStyle('#000');
      ctx.setLineDash([10, 0], 0);

      ctx.moveTo(startWidth, startHeight + 15);
      ctx.lineTo(300, startHeight + 15);
      ctx.stroke();
      ctx.closePath();

      startHeight += lineHeight + 15;

      orderList.forEach(item => {
        // 产品及规格
        const text = `${item.name}(${item.standards})`;
        ctx.fillText(text, startWidth, startHeight);

        // 价格及数量
        const priceText = `${item.price}元 x ${item.amount} `;
        ctx.fillText(priceText, 240, startHeight);

        startHeight += lineHeight;
      });

      // 绘制下划线
      ctx.beginPath();
      ctx.setLineWidth(2);
      ctx.setStrokeStyle('#000');
      ctx.setLineDash([10, 0], 0); // 绘制虚线
      ctx.moveTo(startWidth, startHeight - 10);
      ctx.lineTo(300, startHeight - 10);
      ctx.stroke();
      ctx.closePath();

      startHeight += 15;
      // 计算出总价格
      ctx.fillText('商品总计', startWidth, startHeight);
      const totalPrictText = `+ ${totalPrice}元`;
      ctx.fillText(totalPrictText, 240, startHeight);
      ctx.fillText(totalPrictText, 240, startHeight);
      ctx.fillText(totalPrictText, 240, startHeight);

      startHeight += 25;

      fearList.forEach(item => {
        const fearType = item.fearType;
        const fearValue = `+ ${item.fearValue} 元`;
        ctx.fillText(fearType, startWidth, startHeight);
        ctx.fillText(fearValue, 240, startHeight);
        ctx.fillText(fearValue, 240, startHeight);
        ctx.fillText(fearValue, 240, startHeight);

        startHeight += 25;
      });

      // 优惠减免
      let couponPrice = 0;
      couponList.forEach(item => {
        couponPrice += item.couponValue;
      });
      ctx.fillText('优惠减免', startWidth, startHeight);
      const deductionText = `- ${couponPrice}元`;
      ctx.fillStyle = 'red'; // 设置字体颜色
      ctx.fillText(deductionText, 240, startHeight);
      ctx.fillText(deductionText, 240, startHeight);
      ctx.fillText(deductionText, 240, startHeight);

      startHeight += 25;

      // 绘制实线
      ctx.beginPath();
      ctx.setLineWidth(2);
      ctx.setStrokeStyle('#000');
      ctx.setLineDash([10, 0], 0); // 绘制虚线
      ctx.moveTo(startWidth, startHeight - 10);
      ctx.lineTo(300, startHeight - 10);
      ctx.stroke();
      ctx.closePath();

      startHeight += 15;

      // 结算价格
      ctx.fillStyle = '#000';
      ctx.fillText('结算价格', startWidth, startHeight);
      ctx.fillText('结算价格', startWidth, startHeight);
      ctx.fillText('结算价格', startWidth, startHeight);

      const clearPrictText = `  ${clearPrice}元`;
      ctx.fillText(clearPrictText, 240, startHeight);
      ctx.fillText(clearPrictText, 240, startHeight);
      ctx.fillText(clearPrictText, 240, startHeight);

      startHeight += 25;

      // 订单备注信息
      ctx.fillText('订单备注', startWidth, startHeight);
      const remarkText = `${clientInfo.remark}`;
      ctx.fillText(remarkText, 90, startHeight);
      startHeight += 25;

      // 保存订单截图并扫描图片中的二维码添加我为好友并把订单截图发生给我吧
      const tipText = '保存截图扫描图片中的二维码添加我吧';
      ctx.fillText(tipText, startWidth, startHeight);
      startHeight += 10;

      // 绘制二维码图片(绘制图像到画布)
      const imageResource = '../../../src/img/sqrcode.jpg';
      ctx.drawImage(imageResource, 0, startHeight, 100, 100);

      ctx.draw(false, res => {
        console.log('drawing', res);

        setTimeout(() => {
          console.log('延迟200毫秒执行');
          wx.canvasToTempFilePath(
            {
              canvasId: 'contentCanvas',
              quality: 1,
              fileType: 'jpg',
              canvas: '',
              success: res => {
                const tempFilePath = res.tempFilePath;
                console.log('tempFilePath', tempFilePath, this);
                this.setData({
                  tempFilePath
                });
              },
              fail: res => {
                console.log('fail', res);
              }
            },
            this
          );
        }, 200);
      });
    },
    /** 点击了保存图片按钮  */
    saveImage() {
      console.log('tempFilePathimg', this.data.tempFilePath);

      const filePath = this.data.tempFilePath;

      wx.showModal({
        title: '提示',
        content: '把订单明细图片保存到手机相册',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定');
            wx.saveImageToPhotosAlbum({
              filePath,
              success(res) {
                console.log('图片保存成功', res);
                wx.setClipboardData({
                  data: 'Moriseafood',
                  success(res) {
                    console.log(res); // data
                    const tip =
                      '订单图片已保存,微信号Moriseafood已经复制快去添加我吧!';
                    wx.showToast({
                      title: tip,
                      icon: 'none',
                      duration: 5000
                    });
                  }
                });
              }
            });

            // 清空购物车
            let shopList = [];
            // 获取全局购物车缓存数据
            try {
              shopList = wx.getStorageSync('shopList');
            } catch (e) {
              console.log('shop-car全局购物车缓存获取失败');
              shopList = this.data.shopCarData.shopList;
            }

            (shopList as any[]).length = 0;

            console.log('清空购物车', shopList);

            try {
              // 同步设置全局购物车缓存
              wx.setStorageSync('shopList', shopList);
            } catch (e) {
              console.log('shop-car全局购物车缓存设置失败');
            }
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
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
