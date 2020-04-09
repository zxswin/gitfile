"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
Component({
    data: {
        shopCarData: {
            isShowShopSettle: false,
            shopList: []
        },
        counterData: {
            index: 0,
            onlyShowAdd: false,
            currentNum: 1,
            price: 0,
            totalPrice: 0,
            min: 1,
            max: 10000,
            step: 1
        },
        type: 'fish',
        listAnchorId: 'fish1',
        menuConfig: config_1.MenuConfig,
        isShowDetail: false,
        isShowSettle: false,
        isShowGetClient: false
    },
    methods: {
        onShareAppMessage: function (res) {
            console.log('自定义转发内容', res);
            if (res.from === 'menu') {
                console.log('res.target', res.target);
            }
            return {
                title: '潮味生鲜在线选购商城',
                path: '/pages/index/index',
                imageUrl: '../../src/img/sqrcode.jpg'
            };
        },
        onShow: function () {
            console.log('index页面重新展示了');
            var shopList = [];
            try {
                shopList = wx.getStorageSync('shopList');
                console.log('index.ts全局购物车缓存数据', shopList);
            }
            catch (e) {
                console.log('index.ts全局购物车缓存获取失败');
                shopList = this.data.shopCarData.shopList;
            }
            this.setData({ 'shopCarData.shopList': shopList });
        },
        onLoad: function () {
            var _this = this;
            console.log('menuConfig', config_1.MenuConfig);
            wx.showShareMenu({
                withShareTicket: true
            });
            var produceLists = [];
            this.data.typeLastItemDomIdList = [];
            config_1.MenuConfig.forEach(function (item) {
                var itemList = item.list;
                var itemListLast = itemList[itemList.length - 1];
                var itemLastDomId = itemListLast.type + itemListLast.id;
                var json = {
                    lastDomId: itemLastDomId,
                    type: itemListLast.type,
                    id: itemListLast.id
                };
                _this.data.typeLastItemDomIdList.push(json);
                produceLists.push.apply(produceLists, itemList);
            });
            produceLists.forEach(function (item) {
                item.typeId = item.type + item.id;
                item.detail = {
                    swiper: [
                        {
                            src: '../../../src/lists/fish/01/swiper01.jpg',
                            title: '轮播图1',
                            id: 1
                        },
                        {
                            src: '../../../src/lists/fish/01/swiper01.jpg',
                            title: '轮播图2',
                            id: 2
                        },
                        {
                            src: '../../../src/lists/fish/01/swiper01.jpg',
                            title: '轮播图3',
                            id: 3
                        }
                    ],
                    describe: {
                        unique: item.id + item.type,
                        title: item.title,
                        subTitle: '副标题',
                        detailInfo: '产品详情描述信息',
                        price: item.price,
                        standards: '一斤三条，每条约3.3两'
                    }
                };
            });
            var shopList = [];
            try {
                shopList = wx.getStorageSync('shopList');
                console.log('index.ts全局购物车缓存数据', shopList);
            }
            catch (e) {
                console.log('index.ts全局购物车缓存获取失败');
                shopList = this.data.shopCarData.shopList;
            }
            this.setData({
                produceLists: produceLists,
                'shopCarData.shopList': shopList
            });
            this.data.typeLastItemDomIdList.forEach(function (lastItemDom) {
                wx.createSelectorQuery()
                    .select("#" + lastItemDom.lastDomId)
                    .boundingClientRect(function (rect) {
                    console.log("#" + lastItemDom.lastDomId, rect.top);
                    lastItemDom.top = rect.top;
                })
                    .exec();
            });
        },
        menuTap: function (item) {
            console.log('点击的菜单', item.currentTarget.dataset.type);
            var type = item.currentTarget.dataset.type;
            this.setData({
                type: type,
                listAnchorId: type + '1'
            });
        },
        choose: function ($event) {
            console.log('点击了选购按钮', $event);
            var chooseItem = $event.currentTarget.dataset.item;
            var stock = chooseItem.stock;
            if (!stock) {
                wx.showToast({
                    title: '该商品已经售罄',
                    icon: 'none',
                    duration: 2000
                });
                return;
            }
            var index = $event.currentTarget.dataset.index;
            var price = chooseItem.price;
            var counterData = this.data.counterData;
            counterData.currentNum = 1;
            counterData.price = price;
            counterData.totalPrice = price * counterData.currentNum;
            counterData.index = index;
            this.setData({
                counterData: counterData,
                isShowDetail: true,
                currentDetail: chooseItem.detail
            });
        },
        closeMask: function () {
            this.setData({
                isShowDetail: false
            });
        },
        menuScroll: function ($event) {
            console.log('菜单栏滚动了', $event);
        },
        produceListScroll: function ($event) {
            var typeLastItemDomIdList = this.data.typeLastItemDomIdList;
            var lastItem = typeLastItemDomIdList[typeLastItemDomIdList.length - 1];
            for (var i = 0; i < typeLastItemDomIdList.length; i++) {
                if ($event.detail.scrollTop >
                    typeLastItemDomIdList[typeLastItemDomIdList.length - 2].top - 180) {
                    this.setData({
                        type: lastItem.type
                    });
                    return;
                }
                var item = typeLastItemDomIdList[i];
                var preOffsetTop = i > 0 ? typeLastItemDomIdList[i - 1].top : 0;
                if (this.data.type !== item.type &&
                    $event.detail.scrollTop > preOffsetTop &&
                    $event.detail.scrollTop <= item.top - 50) {
                    this.setData({
                        type: item.type
                    });
                    return;
                }
            }
            return;
        },
        scrolltolower: function () {
            var typeLastItemDomIdList = this.data.typeLastItemDomIdList;
            var lastItem = typeLastItemDomIdList[typeLastItemDomIdList.length - 1];
            this.setData({
                type: lastItem.type
            });
        },
        addShopCar: function ($event) {
            console.log('点击了详情里的购物车', $event);
            var shopList = [];
            try {
                shopList = wx.getStorageSync('shopList');
                console.log('获取缓存的shopList', shopList);
            }
            catch (e) {
                console.log('index.ts全局购物车缓存获取失败');
                shopList = this.data.shopCarData.shopList;
            }
            var productItem = $event.detail.item.describe;
            var counterData = $event.detail.counter;
            counterData.min = 0;
            var currentNum = counterData.currentNum;
            var findItem = shopList.find(function (item) { return productItem.unique === item.unique; });
            if (findItem) {
                shopList.forEach(function (item) {
                    if (item.unique === productItem.unique) {
                        item.counterData.currentNum += currentNum;
                        item.counterData.totalPrice =
                            item.counterData.price * item.counterData.currentNum;
                    }
                });
            }
            if (!findItem) {
                var shopItem = {
                    counterData: counterData,
                    standards: productItem.standards,
                    title: productItem.title,
                    unique: productItem.unique
                };
                shopList.push(shopItem);
            }
            try {
                wx.setStorageSync('shopList', shopList);
                console.log('设置缓存的shopList', shopList);
            }
            catch (e) {
                console.log('index.ts全局购物车缓存设置失败');
            }
            this.setData({
                'shopCarData.shopList': shopList,
                'shopCarData.isShowShopSettle': true,
                isShowDetail: false
            });
        },
        closeDetailView: function ($event) {
            var closeFlag = $event.detail.close;
            this.setData({
                isShowDetail: !closeFlag,
                isShowSettle: !closeFlag,
                isShowGetClient: !closeFlag
            });
        },
        getClientInfo: function ($event) {
            var closeFlag = $event.detail.close;
            var clientInfo = $event.detail.clientInfo;
            console.log('客户信息获取', clientInfo);
            this.setData({
                isShowGetClient: !closeFlag,
                isShowSettle: closeFlag,
                clientInfo: clientInfo
            });
        },
        shopCarDataChange: function ($event) {
            console.log('购物车组件数据发生变化父组件需同步更新', $event);
            var shopCarData = $event.detail.shopCarData;
            this.setData({
                shopCarData: shopCarData
            });
        },
        shopCarHide: function () {
            console.log('触发隐藏购物车');
            this.setData({
                'shopCarData.isShowShopSettle': false
            });
        },
        settleBtnClick: function () {
            console.log('父组件接收点击结算按钮事件');
            this.setData({
                isShowGetClient: true,
                'shopCarData.isShowShopSettle': false
            });
        },
        showShopCarMarkBox: function () {
            console.log('展示购物车组件');
            var shopList = wx.getStorageSync('shopList');
            if (!shopList || !Array.isArray(shopList) || !shopList.length) {
                wx.showToast({
                    title: '当前购物车没有任何商品，请选购！',
                    icon: 'none',
                    duration: 2000
                });
                return;
            }
            this.setData({
                'shopCarData.isShowShopSettle': true
            });
        },
        navigateToDetail: function ($event) {
            console.log('准备跳转独立的详情界面');
            console.log('$event', $event);
            var item = $event.currentTarget.dataset.item;
            if (!item.stock) {
                wx.showToast({
                    title: '该商品已经售罄',
                    icon: 'none',
                    duration: 2000
                });
                return;
            }
            var barTitle = item.title;
            wx.navigateTo({
                url: "../../indepages/detail-view/detail-view?barTitle=" + barTitle,
                success: function () {
                    console.log('成功后的回调');
                },
                fail: function () {
                    console.log('失败后的回调');
                },
                complete: function () {
                    console.log('结束后的回调(成功，失败都会执行)');
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFzQztBQUN0QyxTQUFTLENBQUM7SUFDUixJQUFJLEVBQUU7UUFFSixXQUFXLEVBQUU7WUFFWCxnQkFBZ0IsRUFBRSxLQUFLO1lBRXZCLFFBQVEsRUFBRSxFQUFFO1NBQ2I7UUFHRCxXQUFXLEVBQUU7WUFFWCxLQUFLLEVBQUUsQ0FBQztZQUVSLFdBQVcsRUFBRSxLQUFLO1lBRWxCLFVBQVUsRUFBRSxDQUFDO1lBRWIsS0FBSyxFQUFFLENBQUM7WUFFUixVQUFVLEVBQUUsQ0FBQztZQUViLEdBQUcsRUFBRSxDQUFDO1lBRU4sR0FBRyxFQUFFLEtBQUs7WUFFVixJQUFJLEVBQUUsQ0FBQztTQUNSO1FBR0QsSUFBSSxFQUFFLE1BQU07UUFFWixZQUFZLEVBQUUsT0FBTztRQUVyQixVQUFVLEVBQUUsbUJBQVU7UUFFdEIsWUFBWSxFQUFFLEtBQUs7UUFFbkIsWUFBWSxFQUFFLEtBQUs7UUFFbkIsZUFBZSxFQUFFLEtBQUs7S0FDdkI7SUFFRCxPQUFPLEVBQUU7UUFFUCxpQkFBaUIsWUFBQyxHQUFHO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBRXZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN2QztZQUNELE9BQU87Z0JBQ0wsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLFFBQVEsRUFBRSwyQkFBMkI7YUFDdEMsQ0FBQztRQUNKLENBQUM7UUFDRCxNQUFNO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM1QixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFFbEIsSUFB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QUM7UUFDTCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZW51Q29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuQ29tcG9uZW50KHtcbiAgZGF0YToge1xuICAgIC8qKiDkuI7otK3nianovabnm7jlhbPnmoTmlbDmja4gICovXG4gICAgc2hvcENhckRhdGE6IHtcbiAgICAgIC8qKiDmmK/lkKblsZXnpLrotK3niannu5PnrpfmoI8gICovXG4gICAgICBpc1Nob3dTaG9wU2V0dGxlOiBmYWxzZSxcbiAgICAgIC8qKiDotK3nianovabnu5PnrpfliJfooaggICovXG4gICAgICBzaG9wTGlzdDogW11cbiAgICB9LFxuXG4gICAgLyoqIOiuoeaVsOWZqOWIneWni+WMluaVsOaNriAgKi9cbiAgICBjb3VudGVyRGF0YToge1xuICAgICAgLyoqIOW9k+WJjeWcqOWIl+ihqOS4remAiei0reWVhuWTgeeahOe0ouW8lSAgKi9cbiAgICAgIGluZGV4OiAwLFxuICAgICAgLyoqIOaYr+WQpuS7heaYvuekuuWKoOWPt+aMiemSriAgKi9cbiAgICAgIG9ubHlTaG93QWRkOiBmYWxzZSxcbiAgICAgIC8qKiDlvZPliY3lsZXnpLrnmoTorqHnrpflgLwgICovXG4gICAgICBjdXJyZW50TnVtOiAxLFxuICAgICAgLyoqIOWNleS7tyAgKi9cbiAgICAgIHByaWNlOiAwLFxuICAgICAgLyoqIOaAu+S7t+agvCAgKi9cbiAgICAgIHRvdGFsUHJpY2U6IDAsXG4gICAgICAvKiog5pyA5bCP6K6h566X5YC8ICAqL1xuICAgICAgbWluOiAxLFxuICAgICAgLyoqIOacgOWkp+iuoeeul+WAvCAgKi9cbiAgICAgIG1heDogMTAwMDAsXG4gICAgICAvKiog6K6h566X5q2l6ZW/ICAqL1xuICAgICAgc3RlcDogMVxuICAgIH0sXG5cbiAgICAvKiog5b2T5YmN5bGV56S65Lqn5ZOB57G75Z6LICovXG4gICAgdHlwZTogJ2Zpc2gnLFxuICAgIC8qKiDlvZPliY3kuqflk4HliJfooajnmoTlrprkvY1pZCAgKi9cbiAgICBsaXN0QW5jaG9ySWQ6ICdmaXNoMScsXG4gICAgLyoqIOiPnOWNlemFjee9rumhuSAqL1xuICAgIG1lbnVDb25maWc6IE1lbnVDb25maWcsXG4gICAgLyoqIOaYr+WQpuWxleekuuS6p+WTgeivpuaDhSAqL1xuICAgIGlzU2hvd0RldGFpbDogZmFsc2UsXG4gICAgLyoqIOaYr+WQpuWxleekuue7k+eul+W8ueWHuuWxgiAgKi9cbiAgICBpc1Nob3dTZXR0bGU6IGZhbHNlLFxuICAgIC8qKiDlsZXnpLrnlKjmiLfmlLbpm4bkv6Hmga/pnaLmnb8gKi9cbiAgICBpc1Nob3dHZXRDbGllbnQ6IGZhbHNlXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIC8vIOiHquWumuS5ieWIhuS6q+WGheWuuVxuICAgIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xuICAgICAgY29uc29sZS5sb2coJ+iHquWumuS5iei9rOWPkeWGheWuuScsIHJlcyk7XG4gICAgICBpZiAocmVzLmZyb20gPT09ICdtZW51Jykge1xuICAgICAgICAvLyDmnaXoh6rkuLvoj5zljZXnmoTovazlj5HmjInpkq5cbiAgICAgICAgY29uc29sZS5sb2coJ3Jlcy50YXJnZXQnLCByZXMudGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiAn5r2u5ZGz55Sf6bKc5Zyo57q/6YCJ6LSt5ZWG5Z+OJyxcbiAgICAgICAgcGF0aDogJy9wYWdlcy9pbmRleC9pbmRleCcsXG4gICAgICAgIGltYWdlVXJsOiAnLi4vLi4vc3JjL2ltZy9zcXJjb2RlLmpwZydcbiAgICAgIH07XG4gICAgfSxcbiAgICBvblNob3coKSB7XG4gICAgICBjb25zb2xlLmxvZygnaW5kZXjpobXpnaLph43mlrDlsZXnpLrkuoYnKTtcbiAgICAgIGxldCBzaG9wTGlzdCA9IFtdO1xuICAgICAgLy8g6I635Y+W5YWo5bGA6LSt54mp6L2m57yT5a2Y5pWw5o2uXG4gICAgICB0cnkge1xuICAgICAgICBzaG9wTGlzdCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdzaG9wTGlzdCcpO1xuICAgICAgICBjb25zb2xlLmxvZygnaW5kZXgudHPlhajlsYDotK3nianovabnvJPlrZjmlbDmja4nLCBzaG9wTGlzdCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbmRleC50c+WFqOWxgOi0reeJqei9pue8k+WtmOiOt+WPluWksei0pScpO1xuICAgICAgICBzaG9wTGlzdCA9IHRoaXMuZGF0YS5zaG9wQ2FyRGF0YS5zaG9wTGlzdDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXREYXRhKHsgJ3Nob3BDYXJEYXRhLnNob3BMaXN0Jzogc2hvcExpc3QgfSk7XG4gICAgfSxcbiAgICBvbkxvYWQoKSB7XG4gICAgICBjb25zb2xlLmxvZygnbWVudUNvbmZpZycsIE1lbnVDb25maWcpO1xuICAgICAgd3guc2hvd1NoYXJlTWVudSh7XG4gICAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxuICAgICAgfSk7XG4gICAgICAvKiog5YWo6YOo55qE5Lqn5ZOB5YiX6KGoICovXG4gICAgICBjb25zdCBwcm9kdWNlTGlzdHM6IGFueVtdID0gW107XG4gICAgICAvKiog5Liq5ZOB57G755qE5pyA5ZCO5LiA5LiqZG9tIElkIOWIl+ihqCAqL1xuICAgICAgdGhpcy5kYXRhLnR5cGVMYXN0SXRlbURvbUlkTGlzdCA9IFtdO1xuICAgICAgLyoqIOWQhOenjeexu+eahOacgOWlveS4gOS4quS6p+WTgWRvbSBpZOagh+ivhiAqL1xuICAgICAgTWVudUNvbmZpZy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBpdGVtTGlzdCA9IGl0ZW0ubGlzdDtcbiAgICAgICAgY29uc3QgaXRlbUxpc3RMYXN0ID0gaXRlbUxpc3RbaXRlbUxpc3QubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IGl0ZW1MYXN0RG9tSWQgPSBpdGVtTGlzdExhc3QudHlwZSArIGl0ZW1MaXN0TGFzdC5pZDtcblxuICAgICAgICBjb25zdCBqc29uID0ge1xuICAgICAgICAgIGxhc3REb21JZDogaXRlbUxhc3REb21JZCxcbiAgICAgICAgICB0eXBlOiBpdGVtTGlzdExhc3QudHlwZSxcbiAgICAgICAgICBpZDogaXRlbUxpc3RMYXN0LmlkXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5kYXRhLnR5cGVMYXN0SXRlbURvbUlkTGlzdC5wdXNoKGpzb24pO1xuXG4gICAgICAgIHByb2R1Y2VMaXN0cy5wdXNoKC4uLml0ZW1MaXN0KTtcbiAgICAgIH0pO1xuXG4gICAgICBwcm9kdWNlTGlzdHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS50eXBlSWQgPSBpdGVtLnR5cGUgKyBpdGVtLmlkO1xuICAgICAgICBpdGVtLmRldGFpbCA9IHtcbiAgICAgICAgICBzd2lwZXI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3JjOiAnLi4vLi4vLi4vc3JjL2xpc3RzL2Zpc2gvMDEvc3dpcGVyMDEuanBnJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICfova7mkq3lm74xJyxcbiAgICAgICAgICAgICAgaWQ6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNyYzogJy4uLy4uLy4uL3NyYy9saXN0cy9maXNoLzAxL3N3aXBlcjAxLmpwZycsXG4gICAgICAgICAgICAgIHRpdGxlOiAn6L2u5pKt5Zu+MicsXG4gICAgICAgICAgICAgIGlkOiAyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzcmM6ICcuLi8uLi8uLi9zcmMvbGlzdHMvZmlzaC8wMS9zd2lwZXIwMS5qcGcnLFxuICAgICAgICAgICAgICB0aXRsZTogJ+i9ruaSreWbvjMnLFxuICAgICAgICAgICAgICBpZDogM1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGVzY3JpYmU6IHtcbiAgICAgICAgICAgIHVuaXF1ZTogaXRlbS5pZCArIGl0ZW0udHlwZSxcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgc3ViVGl0bGU6ICflia/moIfpopgnLFxuICAgICAgICAgICAgZGV0YWlsSW5mbzogJ+S6p+WTgeivpuaDheaPj+i/sOS/oeaBrycsXG4gICAgICAgICAgICBwcmljZTogaXRlbS5wcmljZSxcbiAgICAgICAgICAgIHN0YW5kYXJkczogJ+S4gOaWpOS4ieadoe+8jOavj+adoee6pjMuM+S4pCdcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgICAgbGV0IHNob3BMaXN0ID0gW107XG4gICAgICAvLyDojrflj5blhajlsYDotK3nianovabnvJPlrZjmlbDmja5cbiAgICAgIHRyeSB7XG4gICAgICAgIHNob3BMaXN0ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Nob3BMaXN0Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbmRleC50c+WFqOWxgOi0reeJqei9pue8k+WtmOaVsOaNricsIHNob3BMaXN0KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luZGV4LnRz5YWo5bGA6LSt54mp6L2m57yT5a2Y6I635Y+W5aSx6LSlJyk7XG4gICAgICAgIHNob3BMaXN0ID0gdGhpcy5kYXRhLnNob3BDYXJEYXRhLnNob3BMaXN0O1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBwcm9kdWNlTGlzdHM6IHByb2R1Y2VMaXN0cyxcbiAgICAgICAgJ3Nob3BDYXJEYXRhLnNob3BMaXN0Jzogc2hvcExpc3RcbiAgICAgIH0pO1xuXG4gICAgICAvLyDojrflj5bmiYDmnInplJrngrnot53nprvpobbpg6jnmoTot53nprtcbiAgICAgIHRoaXMuZGF0YS50eXBlTGFzdEl0ZW1Eb21JZExpc3QuZm9yRWFjaChsYXN0SXRlbURvbSA9PiB7XG4gICAgICAgIHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxuICAgICAgICAgIC5zZWxlY3QoYCMke2xhc3RJdGVtRG9tLmxhc3REb21JZH1gKVxuICAgICAgICAgIC5ib3VuZGluZ0NsaWVudFJlY3QoZnVuY3Rpb24ocmVjdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCMke2xhc3RJdGVtRG9tLmxhc3REb21JZH1gLCByZWN0LnRvcCk7XG4gICAgICAgICAgICBsYXN0SXRlbURvbS50b3AgPSByZWN0LnRvcDtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5leGVjKCk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqIOeCueWHu+S6huiPnOWNlSAgKi9cbiAgICBtZW51VGFwKGl0ZW0pIHtcbiAgICAgIGNvbnNvbGUubG9nKCfngrnlh7vnmoToj5zljZUnLCBpdGVtLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50eXBlKTtcbiAgICAgIGNvbnN0IHR5cGUgPSBpdGVtLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50eXBlO1xuXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBsaXN0QW5jaG9ySWQ6IHR5cGUgKyAnMSdcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqIOeCueWHu+S6humAiei0reaMiemSriAgKi9cbiAgICBjaG9vc2UoJGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmxvZygn54K55Ye75LqG6YCJ6LSt5oyJ6ZKuJywgJGV2ZW50KTtcbiAgICAgIGNvbnN0IGNob29zZUl0ZW0gPSAkZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0Lml0ZW07XG4gICAgICAvKiog5piv5ZCm5pyJ5bqT5a2YICAqL1xuICAgICAgY29uc3Qgc3RvY2sgPSBjaG9vc2VJdGVtLnN0b2NrO1xuICAgICAgaWYgKCFzdG9jaykge1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+l5ZWG5ZOB5bey57uP5ZSu572EJyxcbiAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGluZGV4ID0gJGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgIGNvbnN0IHByaWNlID0gY2hvb3NlSXRlbS5wcmljZTtcbiAgICAgIGNvbnN0IGNvdW50ZXJEYXRhID0gdGhpcy5kYXRhLmNvdW50ZXJEYXRhO1xuXG4gICAgICBjb3VudGVyRGF0YS5jdXJyZW50TnVtID0gMTtcbiAgICAgIGNvdW50ZXJEYXRhLnByaWNlID0gcHJpY2U7XG4gICAgICBjb3VudGVyRGF0YS50b3RhbFByaWNlID0gcHJpY2UgKiBjb3VudGVyRGF0YS5jdXJyZW50TnVtO1xuICAgICAgY291bnRlckRhdGEuaW5kZXggPSBpbmRleDtcblxuICAgICAgLy8g6K6+572u6K6h5pWw5Zmo5pWw5o2u5bm25by55Ye66YGu572p5bGCXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBjb3VudGVyRGF0YTogY291bnRlckRhdGEsXG4gICAgICAgIGlzU2hvd0RldGFpbDogdHJ1ZSxcbiAgICAgICAgY3VycmVudERldGFpbDogY2hvb3NlSXRlbS5kZXRhaWxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqIOeCueWHu+WFs+mXreW8ueWxgiAgKi9cbiAgICBjbG9zZU1hc2soKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpc1Nob3dEZXRhaWw6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqIOiPnOWNleagj+a7muWKqOS6i+S7tiAgKi9cbiAgICBtZW51U2Nyb2xsKCRldmVudCkge1xuICAgICAgY29uc29sZS5sb2coJ+iPnOWNleagj+a7muWKqOS6hicsICRldmVudCk7XG4gICAgfSxcblxuICAgIC8qKiDkuqflk4HliJfooajmu5rliqjkuovku7YgICAqL1xuICAgIHByb2R1Y2VMaXN0U2Nyb2xsKCRldmVudCkge1xuICAgICAgLyoqIOagueaNruS6p+WTgeWIl+ihqOa7muWKqOW9k+WJjemcgOimgeWumuS9jeWIsOeahOiPnOWNlSAgKi9cbiAgICAgIGNvbnN0IHR5cGVMYXN0SXRlbURvbUlkTGlzdCA9IHRoaXMuZGF0YS50eXBlTGFzdEl0ZW1Eb21JZExpc3Q7XG4gICAgICBjb25zdCBsYXN0SXRlbSA9IHR5cGVMYXN0SXRlbURvbUlkTGlzdFt0eXBlTGFzdEl0ZW1Eb21JZExpc3QubGVuZ3RoIC0gMV07XG5cbiAgICAgIC8qKiDoj5zljZXmu5rliqjphY3nva4gICovXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHR5cGVMYXN0SXRlbURvbUlkTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyDorr7nva7mu5rliqjliLDmnIDlkI5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICRldmVudC5kZXRhaWwuc2Nyb2xsVG9wID5cbiAgICAgICAgICB0eXBlTGFzdEl0ZW1Eb21JZExpc3RbdHlwZUxhc3RJdGVtRG9tSWRMaXN0Lmxlbmd0aCAtIDJdLnRvcCAtIDE4MFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgdHlwZTogbGFzdEl0ZW0udHlwZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWFtuS7luiPnOWNlea7muWKqOmFjee9rlxuICAgICAgICBjb25zdCBpdGVtID0gdHlwZUxhc3RJdGVtRG9tSWRMaXN0W2ldO1xuXG4gICAgICAgIGNvbnN0IHByZU9mZnNldFRvcCA9IGkgPiAwID8gdHlwZUxhc3RJdGVtRG9tSWRMaXN0W2kgLSAxXS50b3AgOiAwO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5kYXRhLnR5cGUgIT09IGl0ZW0udHlwZSAmJlxuICAgICAgICAgICRldmVudC5kZXRhaWwuc2Nyb2xsVG9wID4gcHJlT2Zmc2V0VG9wICYmXG4gICAgICAgICAgJGV2ZW50LmRldGFpbC5zY3JvbGxUb3AgPD0gaXRlbS50b3AgLSA1MFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgdHlwZTogaXRlbS50eXBlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9LFxuXG4gICAgLyoqIOa7muWKqOWIsOW6lemDqCAgKi9cbiAgICBzY3JvbGx0b2xvd2VyKCkge1xuICAgICAgY29uc3QgdHlwZUxhc3RJdGVtRG9tSWRMaXN0ID0gdGhpcy5kYXRhLnR5cGVMYXN0SXRlbURvbUlkTGlzdDtcbiAgICAgIGNvbnN0IGxhc3RJdGVtID0gdHlwZUxhc3RJdGVtRG9tSWRMaXN0W3R5cGVMYXN0SXRlbURvbUlkTGlzdC5sZW5ndGggLSAxXTtcbiAgICAgIC8vIOiuvue9rua7muWKqOWIsOacgOWQjlxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgdHlwZTogbGFzdEl0ZW0udHlwZVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKiDngrnlh7vkuobotK3nianovabmjInpkq4gICovXG4gICAgYWRkU2hvcENhcigkZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCfngrnlh7vkuobor6bmg4Xph4znmoTotK3nianovaYnLCAkZXZlbnQpO1xuICAgICAgbGV0IHNob3BMaXN0ID0gW107XG4gICAgICAvLyDojrflj5blhajlsYDotK3nianovabnvJPlrZjmlbDmja5cbiAgICAgIHRyeSB7XG4gICAgICAgIHNob3BMaXN0ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Nob3BMaXN0Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCfojrflj5bnvJPlrZjnmoRzaG9wTGlzdCcsIHNob3BMaXN0KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luZGV4LnRz5YWo5bGA6LSt54mp6L2m57yT5a2Y6I635Y+W5aSx6LSlJyk7XG4gICAgICAgIHNob3BMaXN0ID0gdGhpcy5kYXRhLnNob3BDYXJEYXRhLnNob3BMaXN0O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9kdWN0SXRlbSA9ICRldmVudC5kZXRhaWwuaXRlbS5kZXNjcmliZTtcbiAgICAgIGNvbnN0IGNvdW50ZXJEYXRhID0gJGV2ZW50LmRldGFpbC5jb3VudGVyO1xuICAgICAgY291bnRlckRhdGEubWluID0gMDtcbiAgICAgIGNvbnN0IGN1cnJlbnROdW0gPSBjb3VudGVyRGF0YS5jdXJyZW50TnVtO1xuXG4gICAgICAvLyDlpoLmnpzmlrDmt7vliqDnmoTllYblk4HlnKjotK3nianovabliJfooajkuK3lt7Lnu4/lrZjlnKjliJnlnKjljp/mnInmlbDph4/nmoTln7rnoYDkuIrov5vooYzntK/liqDlpITnkIZcbiAgICAgIGNvbnN0IGZpbmRJdGVtID0gKHNob3BMaXN0IGFzIGFueVtdKS5maW5kKFxuICAgICAgICBpdGVtID0+IHByb2R1Y3RJdGVtLnVuaXF1ZSA9PT0gaXRlbS51bmlxdWVcbiAgICAgICk7XG5cbiAgICAgIC8vIOWmguaenOmAiei0reeahOWVhuWTgeWGjei0reeJqei9puWIl+ihqOS4reW3sue7j+WtmOWcqOWImee0r+WKoOaVsOmHj1xuXG4gICAgICBpZiAoZmluZEl0ZW0pIHtcbiAgICAgICAgKHNob3BMaXN0IGFzIGFueVtdKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGlmIChpdGVtLnVuaXF1ZSA9PT0gcHJvZHVjdEl0ZW0udW5pcXVlKSB7XG4gICAgICAgICAgICBpdGVtLmNvdW50ZXJEYXRhLmN1cnJlbnROdW0gKz0gY3VycmVudE51bTtcbiAgICAgICAgICAgIGl0ZW0uY291bnRlckRhdGEudG90YWxQcmljZSA9XG4gICAgICAgICAgICAgIGl0ZW0uY291bnRlckRhdGEucHJpY2UgKiBpdGVtLmNvdW50ZXJEYXRhLmN1cnJlbnROdW07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8g5aaC5p6c6YCJ6LSt55qE5ZWG5ZOB5Zyo6LSt54mp6L2m5YiX6KGo5Lit5bm25LiN5a2Y5Zyo5YiZ5b6A6LSt54mp6L2m5YiX6KGo5Lit5re75Yqg6K+l5Lqn5ZOBXG4gICAgICBpZiAoIWZpbmRJdGVtKSB7XG4gICAgICAgIGNvbnN0IHNob3BJdGVtID0ge1xuICAgICAgICAgIGNvdW50ZXJEYXRhOiBjb3VudGVyRGF0YSxcbiAgICAgICAgICBzdGFuZGFyZHM6IHByb2R1Y3RJdGVtLnN0YW5kYXJkcyxcbiAgICAgICAgICB0aXRsZTogcHJvZHVjdEl0ZW0udGl0bGUsXG4gICAgICAgICAgdW5pcXVlOiBwcm9kdWN0SXRlbS51bmlxdWVcbiAgICAgICAgfTtcblxuICAgICAgICBzaG9wTGlzdC5wdXNoKHNob3BJdGVtKTtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8g5ZCM5q2l6K6+572u5YWo5bGA6LSt54mp6L2m57yT5a2YXG4gICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdzaG9wTGlzdCcsIHNob3BMaXN0KTtcbiAgICAgICAgY29uc29sZS5sb2coJ+iuvue9rue8k+WtmOeahHNob3BMaXN0Jywgc2hvcExpc3QpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW5kZXgudHPlhajlsYDotK3nianovabnvJPlrZjorr7nva7lpLHotKUnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgJ3Nob3BDYXJEYXRhLnNob3BMaXN0Jzogc2hvcExpc3QsXG4gICAgICAgICdzaG9wQ2FyRGF0YS5pc1Nob3dTaG9wU2V0dGxlJzogdHJ1ZSxcbiAgICAgICAgaXNTaG93RGV0YWlsOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKiDlhbPpl63or6bmg4XlvLnlh7rlsYIgICovXG4gICAgY2xvc2VEZXRhaWxWaWV3KCRldmVudCkge1xuICAgICAgY29uc3QgY2xvc2VGbGFnID0gJGV2ZW50LmRldGFpbC5jbG9zZTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGlzU2hvd0RldGFpbDogIWNsb3NlRmxhZyxcbiAgICAgICAgaXNTaG93U2V0dGxlOiAhY2xvc2VGbGFnLFxuICAgICAgICBpc1Nob3dHZXRDbGllbnQ6ICFjbG9zZUZsYWdcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqIOeUqOaIt+aUtumbhuS/oeaBr+aPkOS6pCAgKi9cbiAgICBnZXRDbGllbnRJbmZvKCRldmVudCkge1xuICAgICAgY29uc3QgY2xvc2VGbGFnID0gJGV2ZW50LmRldGFpbC5jbG9zZTtcbiAgICAgIGNvbnN0IGNsaWVudEluZm8gPSAkZXZlbnQuZGV0YWlsLmNsaWVudEluZm87XG4gICAgICBjb25zb2xlLmxvZygn5a6i5oi35L+h5oGv6I635Y+WJywgY2xpZW50SW5mbyk7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpc1Nob3dHZXRDbGllbnQ6ICFjbG9zZUZsYWcsXG4gICAgICAgIGlzU2hvd1NldHRsZTogY2xvc2VGbGFnLFxuICAgICAgICBjbGllbnRJbmZvXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKiDotK3nianovabnu4Tku7bmlbDmja7lj5HnlJ/lj5jljJbniLbnu4Tku7bpnIDlkIzmraXmm7TmlrAgICovXG4gICAgc2hvcENhckRhdGFDaGFuZ2UoJGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmxvZygn6LSt54mp6L2m57uE5Lu25pWw5o2u5Y+R55Sf5Y+Y5YyW54i257uE5Lu26ZyA5ZCM5q2l5pu05pawJywgJGV2ZW50KTtcbiAgICAgIGNvbnN0IHNob3BDYXJEYXRhID0gJGV2ZW50LmRldGFpbC5zaG9wQ2FyRGF0YTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHNob3BDYXJEYXRhXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKiDotK3nianovabooqvpmpDol4/nmoTml7blgJnop6blj5EgICovXG4gICAgc2hvcENhckhpZGUoKSB7XG4gICAgICBjb25zb2xlLmxvZygn6Kem5Y+R6ZqQ6JeP6LSt54mp6L2mJyk7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAnc2hvcENhckRhdGEuaXNTaG93U2hvcFNldHRsZSc6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKiDngrnlh7vkuobnu5PnrpfmjInpkq4gICovXG4gICAgc2V0dGxlQnRuQ2xpY2soKSB7XG4gICAgICBjb25zb2xlLmxvZygn54i257uE5Lu25o6l5pS254K55Ye757uT566X5oyJ6ZKu5LqL5Lu2Jyk7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpc1Nob3dHZXRDbGllbnQ6IHRydWUsXG4gICAgICAgICdzaG9wQ2FyRGF0YS5pc1Nob3dTaG9wU2V0dGxlJzogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqIOWxleekuui0reeJqei9pue7hOS7tiAgKi9cbiAgICBzaG93U2hvcENhck1hcmtCb3goKSB7XG4gICAgICBjb25zb2xlLmxvZygn5bGV56S66LSt54mp6L2m57uE5Lu2Jyk7XG4gICAgICAvLyDlpoLmnpzotK3nianovabliJfooajkuLrnqbpcbiAgICAgIGNvbnN0IHNob3BMaXN0ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Nob3BMaXN0Jyk7XG4gICAgICBpZiAoIXNob3BMaXN0IHx8ICFBcnJheS5pc0FycmF5KHNob3BMaXN0KSB8fCAhc2hvcExpc3QubGVuZ3RoKSB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICflvZPliY3otK3nianovabmsqHmnInku7vkvZXllYblk4HvvIzor7fpgInotK3vvIEnLFxuICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAnc2hvcENhckRhdGEuaXNTaG93U2hvcFNldHRsZSc6IHRydWVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqIOi3s+i9rOWIsOeLrOeri+eahOivpuaDheeVjOmdoiAgKi9cbiAgICBuYXZpZ2F0ZVRvRGV0YWlsKCRldmVudCkge1xuICAgICAgY29uc29sZS5sb2coJ+WHhuWkh+i3s+i9rOeLrOeri+eahOivpuaDheeVjOmdoicpO1xuXG4gICAgICBjb25zb2xlLmxvZygnJGV2ZW50JywgJGV2ZW50KTtcblxuICAgICAgY29uc3QgaXRlbSA9ICRldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaXRlbTtcblxuICAgICAgLy8g5bey57uP5ZSu572EXG4gICAgICBpZiAoIWl0ZW0uc3RvY2spIHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+ivpeWVhuWTgeW3sue7j+WUrue9hCcsXG4gICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJhclRpdGxlID0gaXRlbS50aXRsZTtcblxuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4uLy4uL2luZGVwYWdlcy9kZXRhaWwtdmlldy9kZXRhaWwtdmlldz9iYXJUaXRsZT0ke2JhclRpdGxlfWAsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCfmiJDlip/lkI7nmoTlm57osIMnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ+Wksei0peWQjueahOWbnuiwgycpO1xuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ+e7k+adn+WQjueahOWbnuiwgyjmiJDlip/vvIzlpLHotKXpg73kvJrmiafooYwpJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSk7XG4iXX0=