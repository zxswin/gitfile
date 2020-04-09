"use strict";
Component({
    data: {
        markData: {
            position: 'center'
        },
        totalPrice: 0,
        clearPrice: 0,
        fearList: [
            {
                fearType: '包装费用',
                fearRemark: '纸箱*1、泡沫箱*1、保温袋*1、冰袋*2',
                fearValue: 10
            },
            {
                fearType: '顺丰快递',
                fearRemark: '寄往广州首重13/公斤,续重2元/公斤,商品重量3公斤',
                fearValue: 24
            }
        ],
        couponList: [
            {
                couponType: '首单减免',
                couponRemark: '凡第一次购买的用户享受折扣',
                couponValue: 10
            }
        ],
        isShowScreenshot: false
    },
    observers: {},
    properties: {
        clientInfo: {
            type: Object,
            value: {
                name: '',
                phoneNum: '',
                regionList: [],
                region: '',
                address: '',
                postcode: '',
                remark: ''
            }
        },
        shopList: {
            type: Object,
            value: []
        }
    },
    lifetimes: {
        attached: function () {
            console.log('组件获取到的', this.data.clientInfo);
            console.log('购物车中的商品列表', this.data.shopList);
            var orderList = [];
            var shopList = this.data.shopList;
            var totalPrice = 0;
            shopList.forEach(function (item) {
                var counterData = item.counterData;
                var json = {
                    name: item.title,
                    standards: item.standards,
                    amount: counterData.currentNum,
                    price: counterData.price,
                    totalPrice: counterData.totalPrice
                };
                orderList.push(json);
                totalPrice += counterData.totalPrice;
            });
            console.log('orderList', orderList);
            var fearPrice = 0;
            var fearList = this.data.fearList;
            fearList.forEach(function (item) {
                fearPrice += item.fearValue;
            });
            var couponPrice = 0;
            var couponList = this.data.couponList;
            couponList.forEach(function (item) {
                couponPrice += item.couponValue;
            });
            var clearPrice = totalPrice + fearPrice - couponPrice;
            console.log('clearPrice', clearPrice);
            var screenshotData = {
                orderList: orderList,
                totalPrice: totalPrice,
                clearPrice: clearPrice,
                clientInfo: this.data.clientInfo,
                fearList: this.data.fearList,
                couponList: this.data.couponList
            };
            this.setData({
                orderList: orderList,
                totalPrice: totalPrice,
                clearPrice: clearPrice,
                screenshotData: screenshotData
            });
        }
    },
    methods: {
        closeMask: function () {
            this.triggerEvent('close', { close: true });
        },
        showScreenshot: function () {
            this.setData({
                isShowScreenshot: true
            });
        },
        closeCanvasView: function () {
            this.setData({
                isShowScreenshot: false
            });
        },
        contentClick: function () {
            console.log('阻止点击主内容取事件冒泡');
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFFO1FBRUosUUFBUSxFQUFFO1lBQ1IsUUFBUSxFQUFFLFFBQVE7U0FDbkI7UUFFRCxVQUFVLEVBQUUsQ0FBQztRQUViLFVBQVUsRUFBRSxDQUFDO1FBRWIsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFVBQVUsRUFBRSx1QkFBdUI7Z0JBQ25DLFNBQVMsRUFBRSxFQUFFO2FBQ2Q7WUFDRDtnQkFDRSxRQUFRLEVBQUUsTUFBTTtnQkFDaEIsVUFBVSxFQUFFLDZCQUE2QjtnQkFDekMsU0FBUyxFQUFFLEVBQUU7YUFDZDtTQUNGO1FBRUQsVUFBVSxFQUFFO1lBQ1Y7Z0JBQ0UsVUFBVSxFQUFFLE1BQU07Z0JBQ2xCLFlBQVksRUFBRSxlQUFlO2dCQUM3QixXQUFXLEVBQUUsRUFBRTthQUNoQjtTQUNGO1FBRUQsZ0JBQWdCLEVBQUUsS0FBSztLQUN4QjtJQUVELFNBQVMsRUFBRSxFQUFFO0lBRWIsVUFBVSxFQUFFO1FBRVYsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUU7Z0JBRUwsSUFBSSxFQUFFLEVBQUU7Z0JBRVIsUUFBUSxFQUFFLEVBQUU7Z0JBRVosVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsTUFBTSxFQUFFLEVBQUU7Z0JBRVYsT0FBTyxFQUFFLEVBQUU7Z0JBRVgsUUFBUSxFQUFFLEVBQUU7Z0JBRVosTUFBTSxFQUFFLEVBQUU7YUFDWDtTQUNGO1FBRUQsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtTQUNWO0tBQ0Y7SUFHRCxTQUFTLEVBQUU7UUFDVCxRQUFRLEVBQUU7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUs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Kiog6YGu572p57uE5Lu25YWl5Y+C55u45YWz5pWw5o2uICAqL1xyXG4gICAgbWFya0RhdGE6IHtcclxuICAgICAgcG9zaXRpb246ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgLyoqIOWVhuWTgeaAu+S7t+agvCAgKi9cclxuICAgIHRvdGFsUHJpY2U6IDAsXHJcbiAgICAvKiog57uT566X5Lu35qC8ICAqL1xyXG4gICAgY2xlYXJQcmljZTogMCxcclxuICAgIC8qKiDotLnnlKjliJfooaggICovXHJcbiAgICBmZWFyTGlzdDogW1xyXG4gICAgICB7XHJcbiAgICAgICAgZmVhclR5cGU6ICfljIXoo4XotLnnlKgnLFxyXG4gICAgICAgIGZlYXJSZW1hcms6ICfnurjnrrEqMeOAgeazoeayq+eusSox44CB5L+d5rip6KKLKjHjgIHlhrDooosqMicsXHJcbiAgICAgICAgZmVhclZhbHVlOiAxMFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZmVhclR5cGU6ICfpobrkuLDlv6vpgJInLFxyXG4gICAgICAgIGZlYXJSZW1hcms6ICflr4TlvoDlub/lt57pppbph40xMy/lhazmlqQs57ut6YeNMuWFgy/lhazmlqQs5ZWG5ZOB6YeN6YePM+WFrOaWpCcsXHJcbiAgICAgICAgZmVhclZhbHVlOiAyNFxyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgLyoqIOS8mOaDoOWIuOWIl+ihqCAgKi9cclxuICAgIGNvdXBvbkxpc3Q6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNvdXBvblR5cGU6ICfpppbljZXlh4/lhY0nLFxyXG4gICAgICAgIGNvdXBvblJlbWFyazogJ+WHoeesrOS4gOasoei0reS5sOeahOeUqOaIt+S6q+WPl+aKmOaJoycsXHJcbiAgICAgICAgY291cG9uVmFsdWU6IDEwXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICAvKiog5piv5ZCm5bGV56S65oiq5Zu+55WM6Z2iICAqL1xyXG4gICAgaXNTaG93U2NyZWVuc2hvdDogZmFsc2VcclxuICB9LFxyXG5cclxuICBvYnNlcnZlcnM6IHt9LFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAvKiogIOWuouaIt+S/oeaBryAgKi9cclxuICAgIGNsaWVudEluZm86IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICB2YWx1ZToge1xyXG4gICAgICAgIC8qKiAg5a6i5oi35aeT5ZCNICAqL1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIC8qKiAg5omL5py65Y+356CBICAqL1xyXG4gICAgICAgIHBob25lTnVtOiAnJyxcclxuICAgICAgICAvKiog55yB5biC5Yy6ICAqL1xyXG4gICAgICAgIHJlZ2lvbkxpc3Q6IFtdLFxyXG4gICAgICAgIHJlZ2lvbjogJycsXHJcbiAgICAgICAgLyoqIOihl+mBk+WcsOWdgCAgKi9cclxuICAgICAgICBhZGRyZXNzOiAnJyxcclxuICAgICAgICAvKiog6YKu57yWICAqL1xyXG4gICAgICAgIHBvc3Rjb2RlOiAnJyxcclxuICAgICAgICAvKiog6K6i5Y2V5aSH5rOoICAqL1xyXG4gICAgICAgIHJlbWFyazogJydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8qKiDorqLljZXkv6Hmga8gICovXHJcbiAgICBzaG9wTGlzdDoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIHZhbHVlOiBbXVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKiDnu4Tku7bnmoTnlJ/lkb3lkajmnJ8gICovXHJcbiAgbGlmZXRpbWVzOiB7XHJcbiAgICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfnu4Tku7bojrflj5bliLDnmoQnLCB0aGlzLmRhdGEuY2xpZW50SW5mbyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfotK3nianovabkuK3nmoTllYblk4HliJfooagnLCB0aGlzLmRhdGEuc2hvcExpc3QpO1xyXG4gICAgICAvLyDnlJ/miJDorqLljZXmmI7nu4bliJfooajmlbDmja5cclxuICAgICAgY29uc3Qgb3JkZXJMaXN0ID0gW107XHJcbiAgICAgIGNvbnN0IHNob3BMaXN0ID0gdGhpcy5kYXRhLnNob3BMaXN0O1xyXG4gICAgICBsZXQgdG90YWxQcmljZSA9IDA7XHJcbiAgICAgIHNob3BMaXN0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc3QgY291bnRlckRhdGEgPSBpdGVtLmNvdW50ZXJEYXRhO1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSB7XHJcbiAgICAgICAgICBuYW1lOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgICAgc3RhbmRhcmRzOiBpdGVtLnN0YW5kYXJkcyxcclxuICAgICAgICAgIGFtb3VudDogY291bnRlckRhdGEuY3VycmVudE51bSxcclxuICAgICAgICAgIHByaWNlOiBjb3VudGVyRGF0YS5wcmljZSxcclxuICAgICAgICAgIHRvdGFsUHJpY2U6IGNvdW50ZXJEYXRhLnRvdGFsUHJpY2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9yZGVyTGlzdC5wdXNoKGpzb24pO1xyXG4gICAgICAgIHRvdGFsUHJpY2UgKz0gY291bnRlckRhdGEudG90YWxQcmljZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnb3JkZXJMaXN0Jywgb3JkZXJMaXN0KTtcclxuXHJcbiAgICAgIC8vIOiuoeeul+e7k+eul+S7t+agvFxyXG4gICAgICAvKiog6LS555SoICAqL1xyXG4gICAgICBsZXQgZmVhclByaWNlID0gMDtcclxuICAgICAgY29uc3QgZmVhckxpc3QgPSB0aGlzLmRhdGEuZmVhckxpc3Q7XHJcbiAgICAgIGZlYXJMaXN0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgZmVhclByaWNlICs9IGl0ZW0uZmVhclZhbHVlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8qKiDkvJjmg6DotLnnlKggICovXHJcbiAgICAgIGxldCBjb3Vwb25QcmljZSA9IDA7XHJcbiAgICAgIGNvbnN0IGNvdXBvbkxpc3QgPSB0aGlzLmRhdGEuY291cG9uTGlzdDtcclxuICAgICAgY291cG9uTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvdXBvblByaWNlICs9IGl0ZW0uY291cG9uVmFsdWU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgY2xlYXJQcmljZSA9IHRvdGFsUHJpY2UgKyBmZWFyUHJpY2UgLSBjb3Vwb25QcmljZTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdjbGVhclByaWNlJywgY2xlYXJQcmljZSk7XHJcblxyXG4gICAgICAvLyDliJvlu7rnlJ/miJDmiKrlm77miYDpnIDopoHnmoTmlbDmja5cclxuICAgICAgY29uc3Qgc2NyZWVuc2hvdERhdGEgPSB7XHJcbiAgICAgICAgb3JkZXJMaXN0LFxyXG4gICAgICAgIHRvdGFsUHJpY2UsXHJcbiAgICAgICAgY2xlYXJQcmljZSxcclxuICAgICAgICBjbGllbnRJbmZvOiB0aGlzLmRhdGEuY2xpZW50SW5mbyxcclxuICAgICAgICBmZWFyTGlzdDogdGhpcy5kYXRhLmZlYXJMaXN0LFxyXG4gICAgICAgIGNvdXBvbkxpc3Q6IHRoaXMuZGF0YS5jb3Vwb25MaXN0XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIG9yZGVyTGlzdCxcclxuICAgICAgICB0b3RhbFByaWNlLFxyXG4gICAgICAgIGNsZWFyUHJpY2UsXHJcbiAgICAgICAgc2NyZWVuc2hvdERhdGFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLyoqIOeCueWHu+S6huWFs+mXreaMiemSriAgKi9cclxuICAgIGNsb3NlTWFzaygpIHtcclxuICAgICAgLy8g5Y+R6YCB5YWz6Zet5LqL5Lu25Yiw54i257uE5Lu2XHJcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjbG9zZScsIHsgY2xvc2U6IHRydWUgfSk7XHJcbiAgICB9LFxyXG4gICAgLyoqIOaYvuekuuaIquWbvueVjOmdoiAgKi9cclxuICAgIHNob3dTY3JlZW5zaG90KCkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGlzU2hvd1NjcmVlbnNob3Q6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLyoqIOWFs+mXreeUu+W4g+e7hOS7tiAgKi9cclxuICAgIGNsb3NlQ2FudmFzVmlldygpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBpc1Nob3dTY3JlZW5zaG90OiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvKiog6Zi75q2i54K55Ye75Li75YaF5a655Y+W5LqL5Lu25YaS5rOhICAqL1xyXG4gICAgY29udGVudENsaWNrKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygn6Zi75q2i54K55Ye75Li75YaF5a655Y+W5LqL5Lu25YaS5rOhJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIl19