"use strict";
App({
    onLaunch: function (options) {
        console.log('onLaunch', options);
        try {
            wx.setStorageSync('shopList', []);
        }
        catch (e) {
            console.log('app.ts同步设置全局购物车缓存设置失效');
        }
    },
    onShow: function (options) {
        console.log('onShow', options);
    },
    onHide: function () {
        console.log('onHide');
    },
    onError: function (msg) {
        console.log(msg);
    },
    onPageNotFound: function (res) {
        console.log('res', res);
        wx.redirectTo({
            url: 'pages/lists/lists'
        });
    },
    globalData: 'I am global data'
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLENBQUM7SUFFRixRQUFRLEVBQVIsVUFBUyxPQUFZO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLElBQUk7WUFFRixFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNuQztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUNELE1BQU0sRUFBTixVQUFPLE9BQVk7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNELE1BQU07UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxPQUFPLEVBQVAsVUFBUSxHQUFRO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ0QsY0FBYyxFQUFkLFVBQWUsR0FBUTtRQUVyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN4QixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLG1CQUFtQjtTQUN6QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsVUFBVSxFQUFFLGtCQUFrQjtDQUMvQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAudHNcbkFwcCh7XG4gIC8vIOeUn+WRveWRqOacn+Wbnuiwg+KAlOKAlOebkeWQrOWwj+eoi+W6j+WIneWni+WMllxuICBvbkxhdW5jaChvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnb25MYXVuY2gnLCBvcHRpb25zKTtcbiAgICB0cnkge1xuICAgICAgLy8g5ZCM5q2l6K6+572u5YWo5bGA6LSt54mp6L2m57yT5a2YXG4gICAgICB3eC5zZXRTdG9yYWdlU3luYygnc2hvcExpc3QnLCBbXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coJ2FwcC50c+WQjOatpeiuvue9ruWFqOWxgOi0reeJqei9pue8k+WtmOiuvue9ruWkseaViCcpO1xuICAgIH1cbiAgfSxcbiAgb25TaG93KG9wdGlvbnM6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdvblNob3cnLCBvcHRpb25zKTtcbiAgfSxcbiAgb25IaWRlKCkge1xuICAgIGNvbnNvbGUubG9nKCdvbkhpZGUnKTtcbiAgfSxcbiAgb25FcnJvcihtc2c6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gIH0sXG4gIG9uUGFnZU5vdEZvdW5kKHJlczogYW55KSB7XG4gICAgLy8g5aaC5p6c5pivIHRhYmJhciDpobXpnaLvvIzor7fkvb/nlKggd3guc3dpdGNoVGFiXG4gICAgY29uc29sZS5sb2coJ3JlcycsIHJlcyk7XG4gICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICB1cmw6ICdwYWdlcy9saXN0cy9saXN0cydcbiAgICB9KTtcbiAgfSxcbiAgZ2xvYmFsRGF0YTogJ0kgYW0gZ2xvYmFsIGRhdGEnXG59KTtcbiJdfQ==