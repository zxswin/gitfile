"use strict";
Component({
    data: {
        userInfo: {
            avatarUrl: '',
            nickName: ''
        },
        isShowGetClient: false,
        isShowSettle: false,
        shopCarData: {
            isShowShopSettle: false,
            shopList: []
        }
    },
    methods: {
        onShow: function () {
            console.log('mine页面重新展示了');
            this.shopListInit();
        },
        onLoad: function () {
            console.log('加载了');
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
            this.setData({
                'shopCarData.isShowShopSettle': true
            });
        },
        closePopup: function () {
            this.setData({
                isShowGetClient: false,
                isShowSettle: false
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1pbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsQ0FBQztJQUNSLElBQUksRUFBRTtRQUVKLFFBQVEsRUFBRTtZQUVSLFNBQVMsRUFBRSxFQUFFO1lBRWIsUUFBUSxFQUFFLEVBQUU7U0FDYjtRQUVELGVBQWUsRUFBRSxLQUFLO1FBRXRCLFlBQVksRUFBRSxLQUFLO1FBRW5CLFdBQVcsRUFBRTtZQUVYLGdCQUFnQixFQUFFLEtBQUs7WUFFdkIsUUFBUSxFQUFFLEVBQUU7U0FDYjtLQUNGO0lBRUQsT0FBTyxFQUFFO1FBQ1AsTUFBTTtZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUM7UUFDRCxNQUFNO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsQ0FBQztRQUVELFlBQVk7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDL0IsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBRWxCLElBQUk7Z0JBQ0YsUUFBUSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDcEQ7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7Z0JBQ3ZDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7YUFDM0M7WUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBRUQsaUJBQWlCLFlBQUMsTUFBTTtZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzNDLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBQzlDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsV0FBVyxhQUFBO2FBQ1osQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELFdBQVc7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsOEJBQThCLEVBQUUsS0FBSzthQUN0QyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsY0FBYztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxlQUFlLEVBQUUsSUFBSTtnQkFDckIsOEJBQThCLEVBQUUsS0FBSzthQUN0QyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsa0JBQWtCO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCw4QkFBOEIsRUFBRSxJQUFJO2FBQ3JDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxVQUFVO1lBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxlQUFlLEVBQUUsS0FBSztnQkFDdEIsWUFBWSxFQUFFLEtBQUs7YUFDcEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELGFBQWEsWUFBQyxNQUFNO1lBQ2xCLElBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBRXBDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsZUFBZSxFQUFFLEtBQUs7Z0JBQ3RCLFlBQVksRUFBRSxJQUFJO2dCQUNsQixVQUFVLFlBQUE7YUFDWCxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xuICBkYXRhOiB7XG4gICAgLyoqIOeUqOaIt+S/oeaBryAgKi9cbiAgICB1c2VySW5mbzoge1xuICAgICAgLyoqIOeUqOaIt+WktOWDjyAgKi9cbiAgICAgIGF2YXRhclVybDogJycsXG4gICAgICAvKiog55So5oi35pi156ewICAqL1xuICAgICAgbmlja05hbWU6ICcnXG4gICAgfSxcbiAgICAvKiog5bGV56S655So5oi35pS26ZuG5L+h5oGv6Z2i5p2/ICovXG4gICAgaXNTaG93R2V0Q2xpZW50OiBmYWxzZSxcbiAgICAvKiog5bGV56S657uT566X5L+h5oGv6Z2i5p2/ICAqL1xuICAgIGlzU2hvd1NldHRsZTogZmFsc2UsXG4gICAgLyoqIOS4jui0reeJqei9puebuOWFs+eahOaVsOaNriAgKi9cbiAgICBzaG9wQ2FyRGF0YToge1xuICAgICAgLyoqIOaYr+WQpuWxleekuui0reeJqee7k+eul+agjyAgKi9cbiAgICAgIGlzU2hvd1Nob3BTZXR0bGU6IGZhbHNlLFxuICAgICAgLyoqIOi0reeJqei9pue7k+eul+WIl+ihqCAgKi9cbiAgICAgIHNob3BMaXN0OiBbXVxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgb25TaG93KCkge1xuICAgICAgY29uc29sZS5sb2coJ21pbmXpobXpnaLph43mlrDlsZXnpLrkuoYnKTtcbiAgICAgIHRoaXMuc2hvcExpc3RJbml0KCk7XG4gICAgfSxcbiAgICBvbkxvYWQoKSB7XG4gICAgICBjb25zb2xlLmxvZygn5Yqg6L295LqGJyk7XG4gICAgICB0aGlzLnNob3BMaXN0SW5pdCgpO1xuICAgIH0sXG4gICAgLyoqIOiOt+WPluW5tuWIneWni+WMlui0reeJqei9puebuOWFs+aVsOaNriAgKi9cbiAgICBzaG9wTGlzdEluaXQoKSB7XG4gICAgICBjb25zb2xlLmxvZygn5omn6KGM5LqGc2hvcExpc3RJbml0Jyk7XG4gICAgICBsZXQgc2hvcExpc3QgPSBbXTtcbiAgICAgIC8vIOiOt+WPluWFqOWxgOi0reeJqei9pue8k+WtmOaVsOaNrlxuICAgICAgdHJ5IHtcbiAgICAgICAgc2hvcExpc3QgPSB3eC5nZXRTdG9yYWdlU3luYygnc2hvcExpc3QnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3ByZWZlcmVudGlhbOiOt+WPluWIsOeahOWFqOWxgOi0reeJqei9pue8k+WtmOaVsOaNricsIHNob3BMaXN0KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ByZWZlcmVudGlhbOWFqOWxgOi0reeJqei9pue8k+WtmOiOt+WPluWksei0pScpO1xuICAgICAgICBzaG9wTGlzdCA9IHRoaXMuZGF0YS5zaG9wQ2FyRGF0YS5zaG9wTGlzdDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXREYXRhKHsgJ3Nob3BDYXJEYXRhLnNob3BMaXN0Jzogc2hvcExpc3QgfSk7XG4gICAgfSxcbiAgICAvKiog6LSt54mp6L2m57uE5Lu25pWw5o2u5Y+R55Sf5Y+Y5YyW54i257uE5Lu26ZyA5ZCM5q2l5pu05pawICAqL1xuICAgIHNob3BDYXJEYXRhQ2hhbmdlKCRldmVudCkge1xuICAgICAgY29uc29sZS5sb2coJ+i0reeJqei9pue7hOS7tuaVsOaNruWPkeeUn+WPmOWMlueItue7hOS7tumcgOWQjOatpeabtOaWsCcsICRldmVudCk7XG4gICAgICBjb25zdCBzaG9wQ2FyRGF0YSA9ICRldmVudC5kZXRhaWwuc2hvcENhckRhdGE7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzaG9wQ2FyRGF0YVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKiog6LSt54mp6L2m6KKr6ZqQ6JeP55qE5pe25YCZ6Kem5Y+RICAqL1xuICAgIHNob3BDYXJIaWRlKCkge1xuICAgICAgY29uc29sZS5sb2coJ+inpuWPkemakOiXj+i0reeJqei9picpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgJ3Nob3BDYXJEYXRhLmlzU2hvd1Nob3BTZXR0bGUnOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKiog54K55Ye75LqG57uT566X5oyJ6ZKuICAqL1xuICAgIHNldHRsZUJ0bkNsaWNrKCkge1xuICAgICAgY29uc29sZS5sb2coJ+eItue7hOS7tuaOpeaUtueCueWHu+e7k+eul+aMiemSruS6i+S7ticpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaXNTaG93R2V0Q2xpZW50OiB0cnVlLFxuICAgICAgICAnc2hvcENhckRhdGEuaXNTaG93U2hvcFNldHRsZSc6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKiDlsZXnpLrotK3nianovabnu4Tku7YgICovXG4gICAgc2hvd1Nob3BDYXJNYXJrQm94KCkge1xuICAgICAgY29uc29sZS5sb2coJ+Wxleekuui0reeJqei9pue7hOS7ticpO1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgJ3Nob3BDYXJEYXRhLmlzU2hvd1Nob3BTZXR0bGUnOiB0cnVlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKiDlhbPpl63lvLnlh7rlsYIgICovXG4gICAgY2xvc2VQb3B1cCgpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGlzU2hvd0dldENsaWVudDogZmFsc2UsXG4gICAgICAgIGlzU2hvd1NldHRsZTogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqIOeUqOaIt+aUtumbhuS/oeaBr+aPkOS6pCAgKi9cbiAgICBnZXRDbGllbnRJbmZvKCRldmVudCkge1xuICAgICAgY29uc3QgY2xpZW50SW5mbyA9ICRldmVudC5kZXRhaWwuY2xpZW50SW5mbztcbiAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfmlLbpm4bkv6Hmga/mj5DkuqQnLCBjbGllbnRJbmZvKTtcblxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgaXNTaG93R2V0Q2xpZW50OiBmYWxzZSxcbiAgICAgICAgaXNTaG93U2V0dGxlOiB0cnVlLFxuICAgICAgICBjbGllbnRJbmZvXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pO1xuIl19