"use strict";
Component({
    data: {
        isShowGetClient: false,
        isShowSettle: false,
        shopCarData: {
            isShowShopSettle: false,
            shopList: []
        },
        preferList: [
            {
                type: 'prefer',
                id: 0,
                imageSrc: '../../src/img/preferential-01.jpg',
                daysLeft: 5,
                mainLabel: '限量版',
                isCoupon: true,
                title: '套餐产品主标题1',
                subTitle: '套餐产品副标题1',
                standards: '套餐产品的标准1',
                finallPrice: 188,
                discount: 1.2,
                detail: {
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
                        unique: 'prefer0',
                        title: '套餐产品主标题1',
                        subTitle: '套餐产品副标题1',
                        detailInfo: '产品详情描述信息1',
                        price: 188,
                        standards: '套餐产品的标准1'
                    }
                },
                counterData: {
                    currentNum: 1,
                    max: 10000,
                    min: 0,
                    onlyShowAdd: false,
                    price: 188,
                    step: 1,
                    totalPrice: 188
                }
            },
            {
                type: 'prefer',
                id: 1,
                imageSrc: '../../src/img/preferential-01.jpg',
                daysLeft: 3,
                mainLabel: '至尊版',
                isCoupon: false,
                title: '套餐产品主标题2',
                subTitle: '套餐产品副标题2',
                standards: '套餐产品的标准2',
                finallPrice: 166,
                discount: 1.6,
                detail: {
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
                        unique: 'prefer1',
                        title: '套餐产品主标题2',
                        subTitle: '套餐产品副标题2',
                        detailInfo: '产品详情描述信息2',
                        price: 188,
                        standards: '套餐产品的标准2'
                    }
                },
                counterData: {
                    currentNum: 1,
                    max: 10000,
                    min: 0,
                    onlyShowAdd: false,
                    price: 166,
                    step: 1,
                    totalPrice: 166
                }
            },
            {
                type: 'prefer',
                id: 2,
                imageSrc: '../../src/img/preferential-01.jpg',
                daysLeft: 4,
                mainLabel: '白金版',
                isCoupon: true,
                title: '套餐产品主标题3',
                subTitle: '套餐产品副标题3',
                standards: '套餐产品的标准3',
                finallPrice: 199,
                discount: 1.5,
                detail: {
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
                        unique: 'prefer2',
                        title: '套餐产品主标题3',
                        subTitle: '套餐产品副标题3',
                        detailInfo: '产品详情描述信息3',
                        price: 199,
                        standards: '套餐产品的标准3'
                    }
                },
                counterData: {
                    currentNum: 1,
                    max: 10000,
                    min: 0,
                    onlyShowAdd: false,
                    price: 199,
                    step: 1,
                    totalPrice: 199
                }
            }
        ],
        isShowDetail: false,
        currentDetail: {},
        counterData: {
            index: 0,
            onlyShowAdd: false,
            currentNum: 1,
            price: 0,
            totalPrice: 0,
            min: 1,
            max: 10000,
            step: 1
        }
    },
    methods: {
        onShow: function () {
            console.log('preferential页面重新展示了');
            this.shopListInit();
        },
        onLoad: function () {
            console.log('加载了');
            var preferList = this.data.preferList;
            preferList.forEach(function (item) {
                item.unique = item.type + item.id;
            });
            this.setData({ preferList: preferList });
            this.shopListInit();
        },
        shopListInit: function () {
            console.log('执行了shopListInit');
            var shopList = [];
            try {
                shopList = wx.getStorageSync('shopList');
                console.log('preferential获取到的全局购物车缓存数据', shopList);
            }
            catch (e) {
                console.log('preferential全局购物车缓存获取失败');
                shopList = this.data.shopCarData.shopList;
            }
            this.setData({ 'shopCarData.shopList': shopList });
        },
        addShopCar: function ($event) {
            var shopList = [];
            try {
                shopList = wx.getStorageSync('shopList');
            }
            catch (e) {
                console.log('preferential全局购物车缓存获取失败');
                shopList = this.data.shopCarData.shopList;
            }
            console.log('$event', $event);
            console.log('$event.detail.counter', $event.detail.counter);
            var productItem = $event.currentTarget.dataset.item;
            var counterData;
            if ($event.detail.counter) {
                counterData = $event.detail.counter;
            }
            else {
                counterData = productItem.counterData;
            }
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
            console.log('productItem', productItem);
            if (!findItem) {
                var shopItem = {
                    counterData: counterData,
                    standards: productItem.standards,
                    title: productItem.title,
                    unique: productItem.type + productItem.id
                };
                shopList.push(shopItem);
            }
            try {
                wx.setStorageSync('shopList', shopList);
            }
            catch (e) {
                console.log('preferential全局购物车缓存设置失败');
            }
            this.setData({
                'shopCarData.shopList': shopList,
                'shopCarData.isShowShopSettle': true,
                isShowDetail: false
            });
        },
        shopCarHide: function () {
            console.log('触发隐藏购物车');
            this.setData({
                'shopCarData.isShowShopSettle': false
            });
        },
        shopCarDataChange: function ($event) {
            console.log('购物车组件数据发生变化父组件需同步更新', $event);
            var shopCarData = $event.detail.shopCarData;
            this.setData({
                shopCarData: shopCarData
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
        settleBtnClick: function () {
            console.log('父组件接收点击结算按钮事件');
            this.setData({
                isShowGetClient: true,
                'shopCarData.isShowShopSettle': false
            });
        },
        closePopup: function () {
            this.setData({
                isShowGetClient: false,
                isShowSettle: false
            });
        },
        closeDetailView: function ($event) {
            this.setData({
                isShowDetail: false
            });
        },
        productItemClick: function ($event) {
            var productItem = $event.currentTarget.dataset.proditem;
            var currentDetail = productItem.detail;
            var index = $event.currentTarget.dataset.index;
            var price = currentDetail.describe.price;
            var counterData = this.data.counterData;
            counterData.currentNum = 1;
            counterData.price = price;
            counterData.totalPrice = price * counterData.currentNum;
            counterData.index = index;
            console.log('counterData110', counterData);
            this.setData({
                counterData: counterData,
                currentDetail: currentDetail,
                isShowDetail: true,
                currentProductItem: productItem
            });
            console.log('productItem', productItem);
            console.log('counterData', counterData);
        },
        getClientInfo: function ($event) {
            var clientInfo = $event.detail.clientInfo;
            console.log('用户收集信息提交', clientInfo);
            this.setData({
                isShowGetClient: false,
                isShowSettle: true,
                clientInfo: clientInfo
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZW50aWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJlZmVyZW50aWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxTQUFTLENBQUM7SUFDUixJQUFJLEVBQUU7UUFFSixlQUFlLEVBQUUsS0FBSztRQUV0QixZQUFZLEVBQUUsS0FBSztRQUVuQixXQUFXLEVBQUU7WUFFWCxnQkFBZ0IsRUFBRSxLQUFLO1lBRXZCLFFBQVEsRUFBRSxFQUFFO1NBQ2I7UUFFRCxVQUFVLEVBQUU7WUFDVjtnQkFFRSxJQUFJLEVBQUUsUUFBUTtnQkFFZCxFQUFFLEVBQUUsQ0FBQztnQkFFTCxRQUFRLEVBQUUsbUNBQW1DO2dCQUU3QyxRQUFRLEVBQUUsQ0FBQztnQkFFWCxTQUFTLEVBQUUsS0FBSztnQkFFaEIsUUFBUSxFQUFFLElBQUk7Z0JBRWQsS0FBSyxFQUFFLFVBQVU7Z0JBRWpCLFFBQVEsRUFBRSxVQUFVO2dCQUVwQixTQUFTLEVBQUUsVUFBVTtnQkFFckIsV0FBVyxFQUFFLEdBQUc7Z0JBRWhCLFFBQVEsRUFBRSxHQUFHO2dCQUViLE1BQU0sRUFBRTtvQkFDTixNQUFNLEVBQUU7d0JBQ047NEJBQ0UsR0FBRyxFQUFFLHlDQUF5Qzs0QkFDOUMsS0FBSyxFQUFFLE1BQU07NEJBQ2IsRUFBRSxFQUFFLENBQUM7eUJBQ047d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLHlDQUF5Qzs0QkFDOUMsS0FBSyxFQUFFLE1BQU07NEJBQ2IsRUFBRSxFQUFFLENBQUM7eUJBQ047d0JBQ0Q7NEJBQ0UsR0FBRyxFQUFFLHlDQUF5Qzs0QkFDOUMsS0FBSyxFQUFFLE1BQU07NEJBQ2IsRUFBRSxFQUFFLENBQUM7eUJBQ047cUJBQ0Y7b0JBQ0QsUUFBUSxFQUFFO3dCQUNSLE1BQU0sRUFBRSxTQUFTO3dCQUNqQixLQUFLLEVBQUUsVUFBVTt3QkFDakIsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCLFVBQVUsRUFBRSxXQUFXO3dCQUN2QixLQUFLLEVBQUUsR0FBRzt3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Q0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFRCxhQUFhLFlBQUMsTUFBTTtZQUNsQixJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUVwQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGVBQWUsRUFBRSxLQUFLO2dCQUN0QixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsVUFBVSxZQUFBO2FBQ1gsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgZGF0YToge1xuICAgIC8qKiDlsZXnpLrnlKjmiLfmlLbpm4bkv6Hmga/pnaLmnb8gKi9cbiAgICBpc1Nob3dHZXRDbGllbnQ6IGZhbHNlLFxuICAgIC8qKiDlsZXnpLrnu5Pnrpfkv6Hmga/pnaLmnb8gICovXG4gICAgaXNTaG93U2V0dGxlOiBmYWxzZSxcbiAgICAvKiog5LiO6LSt54mp6L2m55u45YWz55qE5pWw5o2uICAqL1xuICAgIHNob3BDYXJEYXRhOiB7XG4gICAgICAvKiog5piv5ZCm5bGV56S66LSt54mp57uT566X5qCPICAqL1xuICAgICAgaXNTaG93U2hvcFNldHRsZTogZmFsc2UsXG4gICAgICAvKiog6LSt54mp6L2m57uT566X5YiX6KGoICAqL1xuICAgICAgc2hvcExpc3Q6IFtdXG4gICAgfSxcblxuICAgIHByZWZlckxpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgLyoqIOexu+WeiyAgKi9cbiAgICAgICAgdHlwZTogJ3ByZWZlcicsXG4gICAgICAgIC8qKiDkuqflk4FpZCAgKi9cbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIC8qKiDlm77niYflnLDlnYAgICovXG4gICAgICAgIGltYWdlU3JjOiAnLi4vLi4vc3JjL2ltZy9wcmVmZXJlbnRpYWwtMDEuanBnJyxcbiAgICAgICAgLyoqIOWJqeS9meWkqeaVsCAgKi9cbiAgICAgICAgZGF5c0xlZnQ6IDUsXG4gICAgICAgIC8qKiDkuLvmoIfnrb4gICovXG4gICAgICAgIG1haW5MYWJlbDogJ+mZkOmHj+eJiCcsXG4gICAgICAgIC8qKiDmmK/lkKbog73kvb/nlKjkvJjmg6DliLggICovXG4gICAgICAgIGlzQ291cG9uOiB0cnVlLFxuICAgICAgICAvKiogIOWVhuWTgeS4u+agh+mimCAgKi9cbiAgICAgICAgdGl0bGU6ICflpZfppJDkuqflk4HkuLvmoIfpopgxJyxcbiAgICAgICAgLyoqIOWVhuWTgeWJr+agh+mimCAgKi9cbiAgICAgICAgc3ViVGl0bGU6ICflpZfppJDkuqflk4Hlia/moIfpopgxJyxcbiAgICAgICAgLyoqIOS6p+WTgeeahOagh+WHhiAgKi9cbiAgICAgICAgc3RhbmRhcmRzOiAn5aWX6aSQ5Lqn5ZOB55qE5qCH5YeGMScsXG4gICAgICAgIC8qKiDllYblk4HmnIDnu4jku7fmoLwgICovXG4gICAgICAgIGZpbmFsbFByaWNlOiAxODgsXG4gICAgICAgIC8qKiDllYblk4HmipjmiaMgICovXG4gICAgICAgIGRpc2NvdW50OiAxLjIsXG4gICAgICAgIC8qKiDor6bmg4Xlr7nosaEgICovXG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgIHN3aXBlcjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzcmM6ICcuLi8uLi8uLi9zcmMvbGlzdHMvZmlzaC8wMS9zd2lwZXIwMS5qcGcnLFxuICAgICAgICAgICAgICB0aXRsZTogJ+i9ruaSreWbvjEnLFxuICAgICAgICAgICAgICBpZDogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3JjOiAnLi4vLi4vLi4vc3JjL2xpc3RzL2Zpc2gvMDEvc3dpcGVyMDEuanBnJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICfova7mkq3lm74yJyxcbiAgICAgICAgICAgICAgaWQ6IDJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNyYzogJy4uLy4uLy4uL3NyYy9saXN0cy9maXNoLzAxL3N3aXBlcjAxLmpwZycsXG4gICAgICAgICAgICAgIHRpdGxlOiAn6L2u5pKt5Zu+MycsXG4gICAgICAgICAgICAgIGlkOiAzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBkZXNjcmliZToge1xuICAgICAgICAgICAgdW5pcXVlOiAncHJlZmVyMCcsXG4gICAgICAgICAgICB0aXRsZTogJ+Wll+mkkOS6p+WTgeS4u+agh+mimDEnLFxuICAgICAgICAgICAgc3ViVGl0bGU6ICflpZfppJDkuqflk4Hlia/moIfpopgxJyxcbiAgICAgICAgICAgIGRldGFpbEluZm86ICfkuqflk4Hor6bmg4Xmj4/ov7Dkv6Hmga8xJyxcbiAgICAgICAgICAgIHByaWNlOiAxODgsXG4gICAgICAgICAgICBzdGFuZGFyZHM6ICflpZfppJDkuqflk4HnmoTmoIflh4YxJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqIOiuoeaVsOWZqOWvueixoSAgKi9cbiAgICAgICAgY291bnRlckRhdGE6IHtcbiAgICAgICAgICAvKiog5b2T5YmN55qE5pWw6YePICAqL1xuICAgICAgICAgIGN1cnJlbnROdW06IDEsXG4gICAgICAgICAgLyoqIOacgOWkp+aVsOmHjyAgKi9cbiAgICAgICAgICBtYXg6IDEwMDAwLFxuICAgICAgICAgIC8qKiDmnIDlsI/mlbDph48gICovXG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIC8qKiDmmK/lkKblj6rmmL7npLrmt7vliqDmjInpkq4gICovXG4gICAgICAgICAgb25seVNob3dBZGQ6IGZhbHNlLFxuICAgICAgICAgIC8qKiDllYblk4HljZXku7cgICovXG4gICAgICAgICAgcHJpY2U6IDE4OCxcbiAgICAgICAgICAvKiog6K6h5pWw5Zmo5q2l6ZW/ICAqL1xuICAgICAgICAgIHN0ZXA6IDEsXG4gICAgICAgICAgLyoqIOWVhuWTgeaAu+S7t+agvCAgKi9cbiAgICAgICAgICB0b3RhbFByaWNlOiAxODhcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLyoqIOexu+WeiyAgKi9cbiAgICAgICAgdHlwZTogJ3ByZWZlcicsXG4gICAgICAgIC8qKiDkuqflk4FpZCAgKi9cbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIC8qKiDlm77niYflnLDlnYAgICovXG4gICAgICAgIGltYWdlU3JjOiAnLi4vLi4vc3JjL2ltZy9wcmVmZXJlbnRpYWwtMDEuanBnJyxcbiAgICAgICAgLyoqIOWJqeS9meWkqeaVsCAgKi9cbiAgICAgICAgZGF5c0xlZnQ6IDMsXG4gICAgICAgIC8qKiDkuLvmoIfnrb4gICovXG4gICAgICAgIG1haW5MYWJlbDogJ+iHs+WwiueJiCcsXG4gICAgICAgIC8qKiDmmK/lkKbog73kvb/nlKjkvJjmg6DliLggICovXG4gICAgICAgIGlzQ291cG9uOiBmYWxzZSxcbiAgICAgICAgLyoqICDllYblk4HkuLvmoIfpopggICovXG4gICAgICAgIHRpdGxlOiAn5aWX6aSQ5Lqn5ZOB5Li75qCH6aKYMicsXG4gICAgICAgIC8qKiDllYblk4Hlia/moIfpopggICovXG4gICAgICAgIHN1YlRpdGxlOiAn5aWX6aSQ5Lqn5ZOB5Ymv5qCH6aKYMicsXG4gICAgICAgIC8qKiDkuqflk4HnmoTmoIflh4YgICovXG4gICAgICAgIHN0YW5kYXJkczogJ+Wll+mkkOS6p+WTgeeahOagh+WHhjInLFxuICAgICAgICAvKiog5ZWG5ZOB5pyA57uI5Lu35qC8ICAqL1xuICAgICAgICBmaW5hbGxQcmljZTogMTY2LFxuICAgICAgICAvKiog5ZWG5ZOB5oqY5omjICAqL1xuICAgICAgICBkaXNjb3VudDogMS42LFxuICAgICAgICAvKiog6K+m5oOF5a+56LGhICAqL1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBzd2lwZXI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3JjOiAnLi4vLi4vLi4vc3JjL2xpc3RzL2Zpc2gvMDEvc3dpcGVyMDEuanBnJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICfova7mkq3lm74xJyxcbiAgICAgICAgICAgICAgaWQ6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNyYzogJy4uLy4uLy4uL3NyYy9saXN0cy9maXNoLzAxL3N3aXBlcjAxLmpwZycsXG4gICAgICAgICAgICAgIHRpdGxlOiAn6L2u5pKt5Zu+MicsXG4gICAgICAgICAgICAgIGlkOiAyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzcmM6ICcuLi8uLi8uLi9zcmMvbGlzdHMvZmlzaC8wMS9zd2lwZXIwMS5qcGcnLFxuICAgICAgICAgICAgICB0aXRsZTogJ+i9ruaSreWbvjMnLFxuICAgICAgICAgICAgICBpZDogM1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGVzY3JpYmU6IHtcbiAgICAgICAgICAgIHVuaXF1ZTogJ3ByZWZlcjEnLFxuICAgICAgICAgICAgdGl0bGU6ICflpZfppJDkuqflk4HkuLvmoIfpopgyJyxcbiAgICAgICAgICAgIHN1YlRpdGxlOiAn5aWX6aSQ5Lqn5ZOB5Ymv5qCH6aKYMicsXG4gICAgICAgICAgICBkZXRhaWxJbmZvOiAn5Lqn5ZOB6K+m5oOF5o+P6L+w5L+h5oGvMicsXG4gICAgICAgICAgICBwcmljZTogMTg4LFxuICAgICAgICAgICAgc3RhbmRhcmRzOiAn5aWX6aSQ5Lqn5ZOB55qE5qCH5YeGMidcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKiDorqHmlbDlmajlr7nosaEgICovXG4gICAgICAgIGNvdW50ZXJEYXRhOiB7XG4gICAgICAgICAgLyoqIOW9k+WJjeeahOaVsOmHjyAgKi9cbiAgICAgICAgICBjdXJyZW50TnVtOiAxLFxuICAgICAgICAgIC8qKiDmnIDlpKfmlbDph48gICovXG4gICAgICAgICAgbWF4OiAxMDAwMCxcbiAgICAgICAgICAvKiog5pyA5bCP5pWw6YePICAqL1xuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAvKiog5piv5ZCm5Y+q5pi+56S65re75Yqg5oyJ6ZKuICAqL1xuICAgICAgICAgIG9ubHlTaG93QWRkOiBmYWxzZSxcbiAgICAgICAgICAvKiog5ZWG5ZOB5Y2V5Lu3ICAqL1xuICAgICAgICAgIHByaWNlOiAxNjYsXG4gICAgICAgICAgLyoqIOiuoeaVsOWZqOatpemVvyAgKi9cbiAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgIC8qKiDllYblk4HmgLvku7fmoLwgICovXG4gICAgICAgICAgdG90YWxQcmljZTogMTY2XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8qKiDnsbvlnosgICovXG4gICAgICAgIHR5cGU6ICdwcmVmZXInLFxuICAgICAgICAvKiog5Lqn5ZOBaWQgICovXG4gICAgICAgIGlkOiAyLFxuICAgICAgICAvKiog5Zu+54mH5Zyw5Z2AICAqL1xuICAgICAgICBpbWFnZVNyYzogJy4uLy4uL3NyYy9pbWcvcHJlZmVyZW50aWFsLTAxLmpwZycsXG4gICAgICAgIC8qKiDliankvZnlpKnmlbAgICovXG4gICAgICAgIGRheXNMZWZ0OiA0LFxuICAgICAgICAvKiog5Li75qCH562+ICAqL1xuICAgICAgICBtYWluTGFiZWw6ICfnmb3ph5HniYgnLFxuICAgICAgICAvKiog5piv5ZCm6IO95L2/55So5LyY5oOg5Yi4ICAqL1xuICAgICAgICBpc0NvdXBvbjogdHJ1ZSxcbiAgICAgICAgLyoqICDllYblk4HkuLvmoIfpopggICovXG4gICAgICAgIHRpdGxlOiAn5aWX6aSQ5Lqn5ZOB5Li75qCH6aKYMycsXG4gICAgICAgIC8qKiDllYblk4Hlia/moIfpopggICovXG4gICAgICAgIHN1YlRpdGxlOiAn5aWX6aSQ5Lqn5ZOB5Ymv5qCH6aKYMycsXG4gICAgICAgIC8qKiDkuqflk4HnmoTmoIflh4YgICovXG4gICAgICAgIHN0YW5kYXJkczogJ+Wll+mkkOS6p+WTgeeahOagh+WHhjMnLFxuICAgICAgICAvKiog5ZWG5ZOB5pyA57uI5Lu35qC8ICAqL1xuICAgICAgICBmaW5hbGxQcmljZTogMTk5LFxuICAgICAgICAvKiog5ZWG5ZOB5oqY5omjICAqL1xuICAgICAgICBkaXNjb3VudDogMS41LFxuICAgICAgICAvKiog6K+m5oOF5a+56LGhICAqL1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBzd2lwZXI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3JjOiAnLi4vLi4vLi4vc3JjL2xpc3RzL2Zpc2gvMDEvc3dpcGVyMDEuanBnJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICfova7mkq3lm74xJyxcbiAgICAgICAgICAgICAgaWQ6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNyYzogJy4uLy4uLy4uL3NyYy9saXN0cy9maXNoLzAxL3N3aXBlcjAxLmpwZycsXG4gICAgICAgICAgICAgIHRpdGxlOiAn6L2u5pKt5Zu+MicsXG4gICAgICAgICAgICAgIGlkOiAyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzcmM6ICcuLi8uLi8uLi9zcmMvbGlzdHMvZmlzaC8wMS9zd2lwZXIwMS5qcGcnLFxuICAgICAgICAgICAgICB0aXRsZTogJ+i9ruaSreWbvjMnLFxuICAgICAgICAgICAgICBpZDogM1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGVzY3JpYmU6IHtcbiAgICAgICAgICAgIHVuaXF1ZTogJ3ByZWZlcjInLFxuICAgICAgICAgICAgdGl0bGU6ICflpZfppJDkuqflk4HkuLvmoIfpopgzJyxcbiAgICAgICAgICAgIHN1YlRpdGxlOiAn5aWX6aSQ5Lqn5ZOB5Ymv5qCH6aKYMycsXG4gICAgICAgICAgICBkZXRhaWxJbmZvOiAn5Lqn5ZOB6K+m5oOF5o+P6L+w5L+h5oGvMycsXG4gICAgICAgICAgICBwcmljZTogMTk5LFxuICAgICAgICAgICAgc3RhbmRhcmRzOiAn5aWX6aSQ5Lqn5ZOB55qE5qCH5YeGMydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKiDorqHmlbDlmajlr7nosaEgICovXG4gICAgICAgIGNvdW50ZXJEYXRhOiB7XG4gICAgICAgICAgLyoqIOW9k+WJjeeahOaVsOmHjyAgKi9cbiAgICAgICAgICBjdXJyZW50TnVtOiAxLFxuICAgICAgICAgIC8qKiDmnIDlpKfmlbDph48gICovXG4gICAgICAgICAgbWF4OiAxMDAwMCxcbiAgICAgICAgICAvKiog5pyA5bCP5pWw6YePICAqL1xuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAvKiog5piv5ZCm5Y+q5pi+56S65re75Yqg5oyJ6ZKuICAqL1xuICAgICAgICAgIG9ubHlTaG93QWRkOiBmYWxzZSxcbiAgICAgICAgICAvKiog5ZWG5ZOB5Y2V5Lu3ICAqL1xuICAgICAgICAgIHByaWNlOiAxOTksXG4gICAgICAgICAgLyoqIOiuoeaVsOWZqOatpemVvyAgKi9cbiAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgIC8qKiDllYblk4HmgLvku7fmoLwgICovXG4gICAgICAgICAgdG90YWxQcmljZTogMTk5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLFxuICAgIC8qKiDmmK/lkKblsZXnpLror6bmg4XlvLnlh7rlsYIgICovXG4gICAgaXNTaG93RGV0YWlsOiBmYWxzZSxcbiAgICAvKiog5b2T5YmN55qE6K+m5oOF5L+h5oGvICAqL1xuICAgIGN1cnJlbnREZXRhaWw6IHt9LFxuICAgIC8qKiDorqHmlbDlmajliJ3lp4vljJbmlbDmja4gICovXG4gICAgY291bnRlckRhdGE6IHtcbiAgICAgIC8qKiDlvZPliY3lnKjliJfooajkuK3pgInotK3llYblk4HnmoTntKLlvJUgICovXG4gICAgICBpbmRleDogMCxcbiAgICAgIC8qKiDmmK/lkKbku4XmmL7npLrliqDlj7fmjInpkq4gICovXG4gICAgICBvbmx5U2hvd0FkZDogZmFsc2UsXG4gICAgICAvKiog5b2T5YmN5bGV56S655qE6K6h566X5YC8ICAqL1xuICAgICAgY3VycmVudE51bTogMSxcbiAgICAgIC8qKiDljZXku7cgICovXG4gICAgICBwcmljZTogMCxcbiAgICAgIC8qKiDmgLvku7fmoLwgICovXG4gICAgICB0b3RhbFByaWNlOiAwLFxuICAgICAgLyoqIOacgOWwj+iuoeeul+WAvCAgKi9cbiAgICAgIG1pbjogMSxcbiAgICAgIC8qKiDmnIDlpKforqHnrpflgLwgICovXG4gICAgICBtYXg6IDEwMDAwLFxuICAgICAgLyoqIOiuoeeul+atpemVvyAgKi9cbiAgICAgIHN0ZXA6IDFcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG9uU2hvdygpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdwcmVmZXJlbnRpYWzpobXpnaLph43mlrDlsZXnpLrkuoYnKTtcbiAgICAgIHRoaXMuc2hvcExpc3RJbml0KCk7XG4gICAgfSxcbiAgICBvbkxvYWQoKSB7XG4gICAgICBjb25zb2xlLmxvZygn5Yqg6L295LqGJyk7XG4gICAgICBjb25zdCBwcmVmZXJMaXN0ID0gdGhpcy5kYXRhLnByZWZlckxpc3Q7XG4gICAgICAocHJlZmVyTGlzdCBhcyBhbnlbXSkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS51bmlxdWUgPSBpdGVtLnR5cGUgKyBpdGVtLmlkO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0RGF0YSh7IHByZWZlckxpc3QgfSk7XG4gICAgICB0aGlzLnNob3BMaXN0SW5pdCgpO1xuICAgIH0sXG4gICAgLyoqIOiOt+WPluW5tuWIneWni+WMlui0reeJqei9puebuOWFs+aVsOaNriAgKi9cbiAgICBzaG9wTGlzdEluaXQoKSB7XG4gICAgICBjb25zb2xlLmxvZygn5omn6KGM5LqGc2hvcExpc3RJbml0Jyk7XG4gICAgICBsZXQgc2hvcExpc3QgPSBbXTtcbiAgICAgIC8vIOiOt+WPluWFqOWxgOi0reeJqei9pue8k+WtmOaVsOaNrlxuICAgICAgdHJ5IHtcbiAgICAgICAgc2hvcExpc3QgPSB3eC5nZXRTdG9yYWdlU3luYygnc2hvcExpc3QnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3ByZWZlcmVudGlhbOiOt+WPluWIsOeahOWFqOWxgOi0reeJqei9pue8k+WtmOaVsOaNricsIHNob3BMaXN0KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ByZWZlcmVudGlhbOWFqOWxgOi0reeJqei9pue8k+WtmOiOt+WPluWksei0pScpO1xuICAgICAgICBzaG9wTGlzdCA9IHRoaXMuZGF0YS5zaG9wQ2FyRGF0YS5zaG9wTGlzdDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXREYXRhKHsgJ3Nob3BDYXJEYXRhLnNob3BMaXN0Jzogc2hvcExpc3QgfSk7XG4gICAgfSxcbiAgICAvKiog54K55Ye75LqG6LSt54mp6L2m5oyJ6ZKuICAqL1xuICAgIGFkZFNob3BDYXIoJGV2ZW50KSB7XG4gICAgICBsZXQgc2hvcExpc3QgPSBbXTtcbiAgICAgIC8vIOiOt+WPluWFqOWxgOi0reeJqei9pue8k+WtmOaVsOaNrlxuICAgICAgdHJ5IHtcbiAgICAgICAgc2hvcExpc3QgPSB3eC5nZXRTdG9yYWdlU3luYygnc2hvcExpc3QnKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ByZWZlcmVudGlhbOWFqOWxgOi0reeJqei9pue8k+WtmOiOt+WPluWksei0pScpO1xuICAgICAgICBzaG9wTGlzdCA9IHRoaXMuZGF0YS5zaG9wQ2FyRGF0YS5zaG9wTGlzdDtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coJyRldmVudCcsICRldmVudCk7XG4gICAgICBjb25zb2xlLmxvZygnJGV2ZW50LmRldGFpbC5jb3VudGVyJywgJGV2ZW50LmRldGFpbC5jb3VudGVyKTtcbiAgICAgIGNvbnN0IHByb2R1Y3RJdGVtID0gJGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pdGVtO1xuXG4gICAgICBsZXQgY291bnRlckRhdGE7XG4gICAgICBpZiAoJGV2ZW50LmRldGFpbC5jb3VudGVyKSB7XG4gICAgICAgIGNvdW50ZXJEYXRhID0gJGV2ZW50LmRldGFpbC5jb3VudGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY291bnRlckRhdGEgPSBwcm9kdWN0SXRlbS5jb3VudGVyRGF0YTtcbiAgICAgIH1cblxuICAgICAgY291bnRlckRhdGEubWluID0gMDtcbiAgICAgIGNvbnN0IGN1cnJlbnROdW0gPSBjb3VudGVyRGF0YS5jdXJyZW50TnVtO1xuXG4gICAgICAvLyDlpoLmnpzmlrDmt7vliqDnmoTllYblk4HlnKjotK3nianovabliJfooajkuK3lt7Lnu4/lrZjlnKjliJnlnKjljp/mnInmlbDph4/nmoTln7rnoYDkuIrov5vooYzntK/liqDlpITnkIZcbiAgICAgIGNvbnN0IGZpbmRJdGVtID0gKHNob3BMaXN0IGFzIGFueVtdKS5maW5kKFxuICAgICAgICBpdGVtID0+IHByb2R1Y3RJdGVtLnVuaXF1ZSA9PT0gaXRlbS51bmlxdWVcbiAgICAgICk7XG5cbiAgICAgIC8vIOWmguaenOmAiei0reeahOWVhuWTgeWGjei0reeJqei9puWIl+ihqOS4reW3sue7j+WtmOWcqOWImee0r+WKoOaVsOmHj1xuXG4gICAgICBpZiAoZmluZEl0ZW0pIHtcbiAgICAgICAgKHNob3BMaXN0IGFzIGFueVtdKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGlmIChpdGVtLnVuaXF1ZSA9PT0gcHJvZHVjdEl0ZW0udW5pcXVlKSB7XG4gICAgICAgICAgICBpdGVtLmNvdW50ZXJEYXRhLmN1cnJlbnROdW0gKz0gY3VycmVudE51bTtcbiAgICAgICAgICAgIGl0ZW0uY291bnRlckRhdGEudG90YWxQcmljZSA9XG4gICAgICAgICAgICAgIGl0ZW0uY291bnRlckRhdGEucHJpY2UgKiBpdGVtLmNvdW50ZXJEYXRhLmN1cnJlbnROdW07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8g5aaC5p6c6YCJ6LSt55qE5ZWG5ZOB5Zyo6LSt54mp6L2m5YiX6KGo5Lit5bm25LiN5a2Y5Zyo5YiZ5b6A6LSt54mp6L2m5YiX6KGo5Lit5re75Yqg6K+l5Lqn5ZOBXG5cbiAgICAgIGNvbnNvbGUubG9nKCdwcm9kdWN0SXRlbScsIHByb2R1Y3RJdGVtKTtcbiAgICAgIGlmICghZmluZEl0ZW0pIHtcbiAgICAgICAgY29uc3Qgc2hvcEl0ZW0gPSB7XG4gICAgICAgICAgY291bnRlckRhdGE6IGNvdW50ZXJEYXRhLFxuICAgICAgICAgIHN0YW5kYXJkczogcHJvZHVjdEl0ZW0uc3RhbmRhcmRzLFxuICAgICAgICAgIHRpdGxlOiBwcm9kdWN0SXRlbS50aXRsZSxcbiAgICAgICAgICB1bmlxdWU6IHByb2R1Y3RJdGVtLnR5cGUgKyBwcm9kdWN0SXRlbS5pZFxuICAgICAgICB9O1xuXG4gICAgICAgIHNob3BMaXN0LnB1c2goc2hvcEl0ZW0pO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICAvLyDlkIzmraXorr7nva7lhajlsYDotK3nianovabnvJPlrZhcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3Nob3BMaXN0Jywgc2hvcExpc3QpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygncHJlZmVyZW50aWFs5YWo5bGA6LSt54mp6L2m57yT5a2Y6K6+572u5aSx6LSlJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICdzaG9wQ2FyRGF0YS5zaG9wTGlzdCc6IHNob3BMaXN0LFxuICAgICAgICAnc2hvcENhckRhdGEuaXNTaG93U2hvcFNldHRsZSc6IHRydWUsXG4gICAgICAgIGlzU2hvd0RldGFpbDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqIOi0reeJqei9puiiq+makOiXj+eahOaXtuWAmeinpuWPkSAgKi9cbiAgICBzaG9wQ2FySGlkZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCfop6blj5HpmpDol4/otK3nianovaYnKTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICdzaG9wQ2FyRGF0YS5pc1Nob3dTaG9wU2V0dGxlJzogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqIOi0reeJqei9pue7hOS7tuaVsOaNruWPkeeUn+WPmOWMlueItue7hOS7tumcgOWQjOatpeabtOaWsCAgKi9cbiAgICBzaG9wQ2FyRGF0YUNoYW5nZSgkZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCfotK3nianovabnu4Tku7bmlbDmja7lj5HnlJ/lj5jljJbniLbnu4Tku7bpnIDlkIzmraXmm7TmlrAnLCAkZXZlbnQpO1xuICAgICAgY29uc3Qgc2hvcENhckRhdGEgPSAkZXZlbnQuZGV0YWlsLnNob3BDYXJEYXRhO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgc2hvcENhckRhdGFcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqIOWxleekuui0reeJqei9pue7hOS7tiAgKi9cbiAgICBzaG93U2hvcENhck1hcmtCb3goKSB7XG4gICAgICBjb25zb2xlLmxvZygn5bGV56S66LSt54mp6L2m57uE5Lu2Jyk7XG4gICAgICAvLyDlpoLmnpzotK3nianovabliJfooajkuLrnqbpcbiAgICAgIGNvbnN0IHNob3BMaXN0ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Nob3BMaXN0Jyk7XG4gICAgICBpZiAoIXNob3BMaXN0IHx8ICFBcnJheS5pc0FycmF5KHNob3BMaXN0KSB8fCAhc2hvcExpc3QubGVuZ3RoKSB7XG4gICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICflvZPliY3otK3nianovabmsqHmnInku7vkvZXllYblk4HvvIzor7fpgInotK3vvIEnLFxuICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAnc2hvcENhckRhdGEuaXNTaG93U2hvcFNldHRsZSc6IHRydWVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqIOeCueWHu+S6hue7k+eul+aMiemSriAgKi9cbiAgICBzZXR0bGVCdG5DbGljaygpIHtcbiAgICAgIGNvbnNvbGUubG9nKCfniLbnu4Tku7bmjqXmlLbngrnlh7vnu5PnrpfmjInpkq7kuovku7YnKTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGlzU2hvd0dldENsaWVudDogdHJ1ZSxcbiAgICAgICAgJ3Nob3BDYXJEYXRhLmlzU2hvd1Nob3BTZXR0bGUnOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKiog5YWz6Zet5by55Ye65bGCICAqL1xuICAgIGNsb3NlUG9wdXAoKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBpc1Nob3dHZXRDbGllbnQ6IGZhbHNlLFxuICAgICAgICBpc1Nob3dTZXR0bGU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKiDlhbPpl63or6bmg4XlvLnlh7rlsYIgICovXG4gICAgY2xvc2VEZXRhaWxWaWV3KCRldmVudCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaXNTaG93RGV0YWlsOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKiog54K55Ye75LqG5Lqn5ZOB5YiX6KGoICAqL1xuICAgIHByb2R1Y3RJdGVtQ2xpY2soJGV2ZW50KSB7XG4gICAgICBjb25zdCBwcm9kdWN0SXRlbSA9ICRldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucHJvZGl0ZW07XG4gICAgICBjb25zdCBjdXJyZW50RGV0YWlsID0gcHJvZHVjdEl0ZW0uZGV0YWlsO1xuXG4gICAgICBjb25zdCBpbmRleCA9ICRldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICBjb25zdCBwcmljZSA9IGN1cnJlbnREZXRhaWwuZGVzY3JpYmUucHJpY2U7XG4gICAgICBjb25zdCBjb3VudGVyRGF0YSA9IHRoaXMuZGF0YS5jb3VudGVyRGF0YTtcblxuICAgICAgY291bnRlckRhdGEuY3VycmVudE51bSA9IDE7XG4gICAgICBjb3VudGVyRGF0YS5wcmljZSA9IHByaWNlO1xuICAgICAgY291bnRlckRhdGEudG90YWxQcmljZSA9IHByaWNlICogY291bnRlckRhdGEuY3VycmVudE51bTtcbiAgICAgIGNvdW50ZXJEYXRhLmluZGV4ID0gaW5kZXg7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdjb3VudGVyRGF0YTExMCcsIGNvdW50ZXJEYXRhKTtcblxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgY291bnRlckRhdGE6IGNvdW50ZXJEYXRhLFxuICAgICAgICBjdXJyZW50RGV0YWlsLFxuICAgICAgICBpc1Nob3dEZXRhaWw6IHRydWUsXG4gICAgICAgIGN1cnJlbnRQcm9kdWN0SXRlbTogcHJvZHVjdEl0ZW1cbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ3Byb2R1Y3RJdGVtJywgcHJvZHVjdEl0ZW0pO1xuICAgICAgY29uc29sZS5sb2coJ2NvdW50ZXJEYXRhJywgY291bnRlckRhdGEpO1xuICAgIH0sXG4gICAgLyoqIOeUqOaIt+aUtumbhuS/oeaBr+aPkOS6pCAgKi9cbiAgICBnZXRDbGllbnRJbmZvKCRldmVudCkge1xuICAgICAgY29uc3QgY2xpZW50SW5mbyA9ICRldmVudC5kZXRhaWwuY2xpZW50SW5mbztcbiAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfmlLbpm4bkv6Hmga/mj5DkuqQnLCBjbGllbnRJbmZvKTtcblxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaXNTaG93R2V0Q2xpZW50OiBmYWxzZSxcbiAgICAgICAgaXNTaG93U2V0dGxlOiB0cnVlLFxuICAgICAgICBjbGllbnRJbmZvXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pO1xuIl19