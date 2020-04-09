"use strict";
Component({
    data: {
        shopAmounts: 0,
        clearPrices: 0,
        markData: {
            position: 'bottom'
        }
    },
    observers: {},
    properties: {
        shopCarData: {
            type: Object,
            value: {
                isShowShopSettle: false,
                shopList: [
                    {
                        counterData: {
                            currentNum: 1,
                            max: 10000,
                            min: 0,
                            onlyShowAdd: false,
                            price: 20,
                            step: 1,
                            totalPrice: 20
                        },
                        standards: '产品的标准1',
                        title: '产品的标题1'
                    },
                    {
                        counterData: {
                            currentNum: 1,
                            max: 10000,
                            min: 0,
                            onlyShowAdd: false,
                            price: 20,
                            step: 1,
                            totalPrice: 20
                        },
                        standards: '产品的标准2',
                        title: '产品的标题2'
                    }
                ]
            }
        }
    },
    lifetimes: {
        ready: function () {
            var shopList = [];
            try {
                shopList = wx.getStorageSync('shopList');
            }
            catch (e) {
                console.log('shop-car全局购物车缓存获取失败');
                shopList = this.data.shopCarData.shopList;
            }
            console.log('购物车组件在生命周期中重新加载', shopList);
            var shopInfo = this.getShopInfo(shopList);
            this.setData({
                shopAmounts: shopInfo.shopAmounts,
                clearPrices: shopInfo.clearPrices
            });
            this.shopAnimationControll('show');
        }
    },
    methods: {
        maskClick: function () {
            console.log('遮罩层被点击了');
            this.shopAnimationControll('hide');
            this.triggerEvent('shopCarHide', false);
        },
        showMarkBox: function () {
            this.shopAnimationControll('show');
        },
        shopBagClick: function () {
            this.showShopListAnimation();
        },
        shopAnimationControll: function (type) {
            var _this = this;
            if (type === 'hide') {
                var shopListHideAnimation = this.createAnimationobj(500);
                var settleBoxHideAnimation = this.createAnimationobj(500, 300);
                this.setData({
                    shopListAnimation: shopListHideAnimation.export(),
                    settleAnimation: settleBoxHideAnimation.export()
                });
                setTimeout(function () {
                    _this.setData({
                        'shopCarData.isShowShopSettle': false
                    });
                }, 600);
            }
            if (type === 'show') {
                this.setData({
                    'shopCarData.isShowShopSettle': true
                });
                var settleBoxShowAnimation = this.createAnimationobj(0);
                this.setData({
                    settleAnimation: settleBoxShowAnimation.export()
                });
            }
        },
        showShopListAnimation: function () {
            var shopListShowAnimation = this.createAnimationobj(0);
            this.setData({
                shopListAnimation: shopListShowAnimation.export()
            });
        },
        createAnimationobj: function (top, delay) {
            if (delay === void 0) { delay = 0; }
            var animation = wx.createAnimation({
                duration: 400,
                timingFunction: 'ease',
                delay: delay
            });
            animation.top(top).step();
            return animation;
        },
        shopboxClick: function () {
            console.log('点击了购物车列表了用于阻止事件冒泡');
        },
        onShopCounterClick: function ($event) {
            var shopList = [];
            try {
                shopList = wx.getStorageSync('shopList');
            }
            catch (e) {
                console.log('shop-car全局购物车缓存获取失败');
                shopList = this.data.shopCarData.shopList;
            }
            var shopCarData = this.data.shopCarData;
            var index = $event.currentTarget.dataset.index;
            var counterData = $event.detail.counterData;
            var shopAmounts = counterData.currentNum;
            shopList[index].counterData = counterData;
            console.log('更新产品计数器数据', index, shopList);
            if (!shopAmounts) {
                shopList.splice(index, 1);
            }
            var shopInfo = this.getShopInfo(shopList);
            this.setData({
                'shopCarData.shopList': shopList,
                shopAmounts: shopInfo.shopAmounts,
                clearPrices: shopInfo.clearPrices
            });
            this.triggerEvent('shopCarDataChange', { shopCarData: shopCarData });
            if (!this.data.shopAmounts) {
                this.shopAnimationControll('hide');
                this.triggerEvent('shopCarHide', false);
            }
            try {
                wx.setStorageSync('shopList', shopList);
            }
            catch (e) {
                console.log('shop-car全局购物车缓存设置失败');
            }
        },
        getShopInfo: function (shopList) {
            var shopAmounts = 0;
            var clearPrices = 0;
            shopList.forEach(function (item) {
                var counter = item.counterData;
                shopAmounts += counter.currentNum;
                clearPrices += counter.totalPrice;
            });
            var resultData = {
                shopAmounts: shopAmounts,
                clearPrices: clearPrices
            };
            return resultData;
        },
        clearShopCar: function () {
            var shopList = [];
            try {
                shopList = wx.getStorageSync('shopList');
            }
            catch (e) {
                console.log('shop-car全局购物车缓存获取失败');
                shopList = this.data.shopCarData.shopList;
            }
            var shopCarData = this.data.shopCarData;
            shopList.length = 0;
            console.log('清空购物车', shopList);
            try {
                wx.setStorageSync('shopList', shopList);
            }
            catch (e) {
                console.log('shop-car全局购物车缓存设置失败');
            }
            this.setData({
                'shopCarData.shopList': shopList,
                'shopCarData.isShowShopSettle': false
            });
            this.shopAnimationControll('hide');
            this.triggerEvent('shopCarHide', false);
            this.triggerEvent('shopCarDataChange', { shopCarData: shopCarData });
        },
        settleBtnClick: function () {
            console.log('点击了结算按钮');
            this.triggerEvent('settleBtnClick', true);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFFO1FBRUosV0FBVyxFQUFFLENBQUM7UUFFZCxXQUFXLEVBQUUsQ0FBQztRQUVkLFFBQVEsRUFBRTtZQUNSLFFBQVEsRUFBRSxRQUFRO1NBQ25CO0tBQ0Y7SUFFRCxTQUFTLEVBQUUsRUFLVjtJQUVELFVBQVUsRUFBRTtRQUNWLFdBQVcsRUFBRTtZQUNYLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFO2dCQUVMLGdCQUFnQixFQUFFLEtBQUs7Z0JBRXZCLFFBQVEsRUFBRTtvQkFDUjt3QkFFRSxXQUFXLEVBQUU7NEJBRVgsVUFBVSxFQUFFLENBQUM7NEJBRWIsR0FBRyxFQUFFLEtBQUs7NEJBRVYsR0FBRyxFQUFFLENBQUM7NEJBRU4sV0FBVyxFQUFFLEtBQUs7NEJBRWxCLEtBQUssRUFBRSxFQUFFOzRCQUVULElBQUksRUFBRSxDQUFDOzRCQUVQLFVBQVUsRUFBRSxFQUFFO3lCQUNmO3dCQUVELFNBQVMsRUFBRSxRQUFRO3dCQUVuQixLQUFLLEVBQUUsUUFBUTtxQkFDaEI7b0JBQ0Q7d0JBRUUsV0FBVyxFQUFFOzRCQUVYLFVBQVUsRUFBRSxDQUFDOzRCQUViLEdBQUcsRUFBRSxLQUFLOzRCQUVWLEdBQUcsRUFBRSxDQUFDOzRCQUVOLFdBQVcsRUFBRSxLQUFLOzRCQUVsQixLQUFLLEVBQUUsRUFBRTs0QkFFVCxJQUFJLEVBQUUsQ0FBQzs0QkFFUCxVQUFVLEVBQUUsRUFBRTt5QkFDZjt3QkFFRCxTQUFTLEVBQUUsUUFBUTt3QkFFbkIsS0FBSyxFQUFFLFFBQVE7cUJBQ2hCO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGO0lBR0QsU0FBUyxFQUFFO1FBQ1QsS0FBSztZQUNILElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUVsQixJQUFJO2dCQUNGLFFBQVEsR0FBRyxFQUFFLENBQUMs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Q0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDbkMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQzthQUMzQztZQUVELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3pDLFFBQWtCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUUvQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUUvQixJQUFJO2dCQUVGLEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3pDO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2FBQ3BDO1lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxzQkFBc0IsRUFBRSxRQUFRO2dCQUNoQyw4QkFBOEIsRUFBRSxLQUFLO2FBQ3RDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsV0FBVyxhQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQzFELENBQUM7UUFFRCxjQUFjO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgZGF0YToge1xyXG4gICAgLyoqIOi0reeJqei9puaVsOmHjyAgKi9cclxuICAgIHNob3BBbW91bnRzOiAwLFxyXG4gICAgLyoqIOe7k+eul+S7t+agvCAgKi9cclxuICAgIGNsZWFyUHJpY2VzOiAwLFxyXG4gICAgLyoqIOmBrue9qee7hOS7tuWFpeWPguebuOWFs+aVsOaNriAgKi9cclxuICAgIG1hcmtEYXRhOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9ic2VydmVyczoge1xyXG4gICAgLy8gc2hvcEFtb3VudHM6IGRhdGEgPT4ge1xyXG4gICAgLy8gICAvL+WNleS4quebkeWQrFxyXG4gICAgLy8gICBjb25zb2xlLmxvZygn5pWw6YeP5pS55Y+Y5LqGODg4JywgZGF0YSk7XHJcbiAgICAvLyB9XHJcbiAgfSxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgc2hvcENhckRhdGE6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICB2YWx1ZToge1xyXG4gICAgICAgIC8qKiDmmK/lkKblsZXnpLrotK3niannu5PnrpfmoI8gICovXHJcbiAgICAgICAgaXNTaG93U2hvcFNldHRsZTogZmFsc2UsXHJcbiAgICAgICAgLyoqIOi0reeJqei9pue7k+eul+WIl+ihqCAgKi9cclxuICAgICAgICBzaG9wTGlzdDogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAvKiog6K6h5pWw5Zmo5a+56LGhICAqL1xyXG4gICAgICAgICAgICBjb3VudGVyRGF0YToge1xyXG4gICAgICAgICAgICAgIC8qKiDlvZPliY3nmoTmlbDph48gICovXHJcbiAgICAgICAgICAgICAgY3VycmVudE51bTogMSxcclxuICAgICAgICAgICAgICAvKiog5pyA5aSn5pWw6YePICAqL1xyXG4gICAgICAgICAgICAgIG1heDogMTAwMDAsXHJcbiAgICAgICAgICAgICAgLyoqIOacgOWwj+aVsOmHjyAgKi9cclxuICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgLyoqIOaYr+WQpuWPquaYvuekuua3u+WKoOaMiemSriAgKi9cclxuICAgICAgICAgICAgICBvbmx5U2hvd0FkZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgLyoqIOWVhuWTgeWNleS7tyAgKi9cclxuICAgICAgICAgICAgICBwcmljZTogMjAsXHJcbiAgICAgICAgICAgICAgLyoqIOiuoeaVsOWZqOatpemVvyAgKi9cclxuICAgICAgICAgICAgICBzdGVwOiAxLFxyXG4gICAgICAgICAgICAgIC8qKiDllYblk4HmgLvku7fmoLwgICovXHJcbiAgICAgICAgICAgICAgdG90YWxQcmljZTogMjBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLyoqIOS6p+WTgeeahOagh+WHhiAgKi9cclxuICAgICAgICAgICAgc3RhbmRhcmRzOiAn5Lqn5ZOB55qE5qCH5YeGMScsXHJcbiAgICAgICAgICAgIC8qKiDkuqflk4HnmoTmoIfpopggICovXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5Lqn5ZOB55qE5qCH6aKYMSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC8qKiDorqHmlbDlmajlr7nosaEgICovXHJcbiAgICAgICAgICAgIGNvdW50ZXJEYXRhOiB7XHJcbiAgICAgICAgICAgICAgLyoqIOW9k+WJjeeahOaVsOmHjyAgKi9cclxuICAgICAgICAgICAgICBjdXJyZW50TnVtOiAxLFxyXG4gICAgICAgICAgICAgIC8qKiDmnIDlpKfmlbDph48gICovXHJcbiAgICAgICAgICAgICAgbWF4OiAxMDAwMCxcclxuICAgICAgICAgICAgICAvKiog5pyA5bCP5pWw6YePICAqL1xyXG4gICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAvKiog5piv5ZCm5Y+q5pi+56S65re75Yqg5oyJ6ZKuICAqL1xyXG4gICAgICAgICAgICAgIG9ubHlTaG93QWRkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAvKiog5ZWG5ZOB5Y2V5Lu3ICAqL1xyXG4gICAgICAgICAgICAgIHByaWNlOiAyMCxcclxuICAgICAgICAgICAgICAvKiog6K6h5pWw5Zmo5q2l6ZW/ICAqL1xyXG4gICAgICAgICAgICAgIHN0ZXA6IDEsXHJcbiAgICAgICAgICAgICAgLyoqIOWVhuWTgeaAu+S7t+agvCAgKi9cclxuICAgICAgICAgICAgICB0b3RhbFByaWNlOiAyMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvKiog5Lqn5ZOB55qE5qCH5YeGICAqL1xyXG4gICAgICAgICAgICBzdGFuZGFyZHM6ICfkuqflk4HnmoTmoIflh4YyJyxcclxuICAgICAgICAgICAgLyoqIOS6p+WTgeeahOagh+mimCAgKi9cclxuICAgICAgICAgICAgdGl0bGU6ICfkuqflk4HnmoTmoIfpopgyJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKiDnu4Tku7bnmoTnlJ/lkb3lkajmnJ8gICovXHJcbiAgbGlmZXRpbWVzOiB7XHJcbiAgICByZWFkeSgpIHtcclxuICAgICAgbGV0IHNob3BMaXN0ID0gW107XHJcbiAgICAgIC8vIOiOt+WPluWFqOWxgOi0reeJqei9pue8k+WtmOaVsOaNrlxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNob3BMaXN0ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Nob3BMaXN0Jyk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2hvcC1jYXLlhajlsYDotK3nianovabnvJPlrZjojrflj5blpLHotKUnKTtcclxuICAgICAgICBzaG9wTGlzdCA9IHRoaXMuZGF0YS5zaG9wQ2FyRGF0YS5zaG9wTGlzdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc29sZS5sb2coJ+i0reeJqei9pue7hOS7tuWcqOeUn+WRveWRqOacn+S4remHjeaWsOWKoOi9vScsIHNob3BMaXN0KTtcclxuICAgICAgY29uc3Qgc2hvcEluZm8gPSB0aGlzLmdldFNob3BJbmZvKHNob3BMaXN0KTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBzaG9wQW1vdW50czogc2hvcEluZm8uc2hvcEFtb3VudHMsXHJcbiAgICAgICAgY2xlYXJQcmljZXM6IHNob3BJbmZvLmNsZWFyUHJpY2VzXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNob3BBbmltYXRpb25Db250cm9sbCgnc2hvdycpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG1hc2tDbGljaygpIHtcclxuICAgICAgY29uc29sZS5sb2coJ+mBrue9qeWxguiiq+eCueWHu+S6hicpO1xyXG4gICAgICAvKiog6ZqQ6JeP6LSt54mp6L2m5Yqo55S7ICAqL1xyXG4gICAgICB0aGlzLnNob3BBbmltYXRpb25Db250cm9sbCgnaGlkZScpO1xyXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnc2hvcENhckhpZGUnLCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgLyoqIOWxleekuui0reeJqei9pumBrue9qSAgKi9cclxuICAgIHNob3dNYXJrQm94KCkge1xyXG4gICAgICB0aGlzLnNob3BBbmltYXRpb25Db250cm9sbCgnc2hvdycpO1xyXG4gICAgfSxcclxuICAgIC8qKiDngrnlh7vkuobotK3nianooovmjInpkq4gICovXHJcbiAgICBzaG9wQmFnQ2xpY2soKSB7XHJcbiAgICAgIHRoaXMuc2hvd1Nob3BMaXN0QW5pbWF0aW9uKCk7XHJcbiAgICB9LFxyXG4gICAgLyoqIOmakOiXj+WPiuWxleekuuWKqOeUuyAgKi9cclxuICAgIHNob3BBbmltYXRpb25Db250cm9sbCh0eXBlOiBzdHJpbmcpIHtcclxuICAgICAgLyoqIOmakOiXjyAgKi9cclxuICAgICAgaWYgKHR5cGUgPT09ICdoaWRlJykge1xyXG4gICAgICAgIGNvbnN0IHNob3BMaXN0SGlkZUFuaW1hdGlvbiA9IHRoaXMuY3JlYXRlQW5pbWF0aW9ub2JqKDUwMCk7XHJcbiAgICAgICAgY29uc3Qgc2V0dGxlQm94SGlkZUFuaW1hdGlvbiA9IHRoaXMuY3JlYXRlQW5pbWF0aW9ub2JqKDUwMCwgMzAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHNob3BMaXN0QW5pbWF0aW9uOiBzaG9wTGlzdEhpZGVBbmltYXRpb24uZXhwb3J0KCksXHJcbiAgICAgICAgICBzZXR0bGVBbmltYXRpb246IHNldHRsZUJveEhpZGVBbmltYXRpb24uZXhwb3J0KClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAnc2hvcENhckRhdGEuaXNTaG93U2hvcFNldHRsZSc6IGZhbHNlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LCA2MDApO1xyXG4gICAgICB9XHJcbiAgICAgIC8qKiDlsZXnpLogICovXHJcbiAgICAgIGlmICh0eXBlID09PSAnc2hvdycpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgJ3Nob3BDYXJEYXRhLmlzU2hvd1Nob3BTZXR0bGUnOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNldHRsZUJveFNob3dBbmltYXRpb24gPSB0aGlzLmNyZWF0ZUFuaW1hdGlvbm9iaigwKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHNldHRsZUFuaW1hdGlvbjogc2V0dGxlQm94U2hvd0FuaW1hdGlvbi5leHBvcnQoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKiDlsZXnpLpzaG9wTGlzdOWKqOeUuyAgKi9cclxuICAgIHNob3dTaG9wTGlzdEFuaW1hdGlvbigpIHtcclxuICAgICAgY29uc3Qgc2hvcExpc3RTaG93QW5pbWF0aW9uID0gdGhpcy5jcmVhdGVBbmltYXRpb25vYmooMCk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgc2hvcExpc3RBbmltYXRpb246IHNob3BMaXN0U2hvd0FuaW1hdGlvbi5leHBvcnQoKVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvKiog5Lqn55Sf5LiA5Liq5b6u5L+h5Yqo55S75a+56LGhICAqL1xyXG4gICAgY3JlYXRlQW5pbWF0aW9ub2JqKHRvcDogbnVtYmVyLCBkZWxheSA9IDApIHtcclxuICAgICAgY29uc3QgYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcclxuICAgICAgICBkdXJhdGlvbjogNDAwLFxyXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZScsXHJcbiAgICAgICAgZGVsYXlcclxuICAgICAgfSk7XHJcbiAgICAgIGFuaW1hdGlvbi50b3AodG9wKS5zdGVwKCk7XHJcbiAgICAgIHJldHVybiBhbmltYXRpb247XHJcbiAgICB9LFxyXG4gICAgc2hvcGJveENsaWNrKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygn54K55Ye75LqG6LSt54mp6L2m5YiX6KGo5LqG55So5LqO6Zi75q2i5LqL5Lu25YaS5rOhJyk7XHJcbiAgICB9LFxyXG4gICAgb25TaG9wQ291bnRlckNsaWNrKCRldmVudCkge1xyXG4gICAgICAvLyDmm7TmlrDkuqflk4HorqHmlbDlmajmlbDmja5cclxuICAgICAgbGV0IHNob3BMaXN0ID0gW107XHJcbiAgICAgIC8vIOiOt+WPluWFqOWxgOi0reeJqei9pue8k+WtmOaVsOaNrlxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNob3BMaXN0ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Nob3BMaXN0Jyk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2hvcC1jYXLlhajlsYDotK3nianovabnvJPlrZjojrflj5blpLHotKUnKTtcclxuICAgICAgICBzaG9wTGlzdCA9IHRoaXMuZGF0YS5zaG9wQ2FyRGF0YS5zaG9wTGlzdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc2hvcENhckRhdGEgPSB0aGlzLmRhdGEuc2hvcENhckRhdGE7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gJGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcclxuICAgICAgY29uc3QgY291bnRlckRhdGEgPSAkZXZlbnQuZGV0YWlsLmNvdW50ZXJEYXRhO1xyXG4gICAgICBjb25zdCBzaG9wQW1vdW50cyA9IGNvdW50ZXJEYXRhLmN1cnJlbnROdW07XHJcblxyXG4gICAgICBzaG9wTGlzdFtpbmRleF0uY291bnRlckRhdGEgPSBjb3VudGVyRGF0YTtcclxuICAgICAgY29uc29sZS5sb2coJ+abtOaWsOS6p+WTgeiuoeaVsOWZqOaVsOaNricsIGluZGV4LCBzaG9wTGlzdCk7XHJcblxyXG4gICAgICAvLyDlvZPmlbDph4/mmK8w55qE5pe25YCZ5LuO6LSt54mp6L2m5YiX6KGo5Lit5Yig6ZmkXHJcbiAgICAgIGlmICghc2hvcEFtb3VudHMpIHtcclxuICAgICAgICAoc2hvcExpc3QgYXMgYW55W10pLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHNob3BJbmZvID0gdGhpcy5nZXRTaG9wSW5mbyhzaG9wTGlzdCk7XHJcblxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICdzaG9wQ2FyRGF0YS5zaG9wTGlzdCc6IHNob3BMaXN0LFxyXG4gICAgICAgIHNob3BBbW91bnRzOiBzaG9wSW5mby5zaG9wQW1vdW50cyxcclxuICAgICAgICBjbGVhclByaWNlczogc2hvcEluZm8uY2xlYXJQcmljZXNcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyDpgJrnn6XniLbnu4Tku7bmm7TmlrDmnIDmlrDnmoTotK3nianovabnu4Tku7bmlbDmja5cclxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ3Nob3BDYXJEYXRhQ2hhbmdlJywgeyBzaG9wQ2FyRGF0YSB9KTtcclxuXHJcbiAgICAgIC8vIOWmguaenHNob3BMaXN05pWw6YeP5Li656m6LOatpOaXtumcgOimgemakOiXj+i0reeJqei9puWIl+ihqOe7hOS7tlxyXG4gICAgICBpZiAoIXRoaXMuZGF0YS5zaG9wQW1vdW50cykge1xyXG4gICAgICAgIHRoaXMuc2hvcEFuaW1hdGlvbkNvbnRyb2xsKCdoaWRlJyk7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ3Nob3BDYXJIaWRlJywgZmFsc2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIOWQjOatpeiuvue9ruWFqOWxgOi0reeJqei9pue8k+WtmFxyXG4gICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdzaG9wTGlzdCcsIHNob3BMaXN0KTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG9wLWNhcuWFqOWxgOi0reeJqei9pue8k+WtmOiuvue9ruWksei0pScpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLyoqIOmAmui/h+i0reeJqei9puWIl+ihqOabtOaWsOi0reeJqeiii+aVsOmHj+WPiue7k+eul+S7t+agvCAgKi9cclxuICAgIGdldFNob3BJbmZvKHNob3BMaXN0OiBhbnlbXSkge1xyXG4gICAgICAvLyDmm7TmlrDlhbbku5blsZXnpLrmlbDmja5cclxuICAgICAgbGV0IHNob3BBbW91bnRzID0gMDtcclxuICAgICAgbGV0IGNsZWFyUHJpY2VzID0gMDtcclxuXHJcbiAgICAgIHNob3BMaXN0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc3QgY291bnRlciA9IGl0ZW0uY291bnRlckRhdGE7XHJcbiAgICAgICAgc2hvcEFtb3VudHMgKz0gY291bnRlci5jdXJyZW50TnVtO1xyXG4gICAgICAgIGNsZWFyUHJpY2VzICs9IGNvdW50ZXIudG90YWxQcmljZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCByZXN1bHREYXRhID0ge1xyXG4gICAgICAgIHNob3BBbW91bnRzLFxyXG4gICAgICAgIGNsZWFyUHJpY2VzXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybiByZXN1bHREYXRhO1xyXG4gICAgfSxcclxuICAgIC8qKiDmuIXnqbrotK3nianovaYgICovXHJcbiAgICBjbGVhclNob3BDYXIoKSB7XHJcbiAgICAgIGxldCBzaG9wTGlzdCA9IFtdO1xyXG4gICAgICAvLyDojrflj5blhajlsYDotK3nianovabnvJPlrZjmlbDmja5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzaG9wTGlzdCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdzaG9wTGlzdCcpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Nob3AtY2Fy5YWo5bGA6LSt54mp6L2m57yT5a2Y6I635Y+W5aSx6LSlJyk7XHJcbiAgICAgICAgc2hvcExpc3QgPSB0aGlzLmRhdGEuc2hvcENhckRhdGEuc2hvcExpc3Q7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHNob3BDYXJEYXRhID0gdGhpcy5kYXRhLnNob3BDYXJEYXRhO1xyXG4gICAgICAoc2hvcExpc3QgYXMgYW55W10pLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygn5riF56m66LSt54mp6L2mJywgc2hvcExpc3QpO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyDlkIzmraXorr7nva7lhajlsYDotK3nianovabnvJPlrZhcclxuICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnc2hvcExpc3QnLCBzaG9wTGlzdCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2hvcC1jYXLlhajlsYDotK3nianovabnvJPlrZjorr7nva7lpLHotKUnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAnc2hvcENhckRhdGEuc2hvcExpc3QnOiBzaG9wTGlzdCxcclxuICAgICAgICAnc2hvcENhckRhdGEuaXNTaG93U2hvcFNldHRsZSc6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5zaG9wQW5pbWF0aW9uQ29udHJvbGwoJ2hpZGUnKTtcclxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ3Nob3BDYXJIaWRlJywgZmFsc2UpO1xyXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnc2hvcENhckRhdGFDaGFuZ2UnLCB7IHNob3BDYXJEYXRhIH0pO1xyXG4gICAgfSxcclxuICAgIC8qKiDngrnlh7vkuobnu5PnrpfmjInpkq4gICovXHJcbiAgICBzZXR0bGVCdG5DbGljaygpIHtcclxuICAgICAgY29uc29sZS5sb2coJ+eCueWHu+S6hue7k+eul+aMiemSricpO1xyXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnc2V0dGxlQnRuQ2xpY2snLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iXX0=