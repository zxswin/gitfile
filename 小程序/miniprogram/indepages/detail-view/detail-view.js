"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
Component({
    data: {},
    methods: {
        onLoad: function (option) {
            console.log('detail-view页面获取到的参数', option);
            console.log('DetailData', config_1.DetailData);
            this.setData({
                detailData: config_1.DetailData
            });
            var barTitle = option ? option.barTitle : config_1.DetailData.describe.title;
            wx.setNavigationBarTitle({
                title: "\u6F6E\u5473\u751F\u9C9C" + barTitle + "\u8BE6\u60C5\u5C55\u793A"
            });
        },
        toShop: function () {
            console.log('点击按钮进入商城购买');
            wx.switchTab({
                url: '/pages/index/index',
                success: function () {
                    console.log('成功后的回调');
                },
                fail: function (e) {
                    console.log('失败后的回调', e);
                },
                complete: function () {
                    console.log('结束后的回调(成功，失败都会执行)');
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhaWwtdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFzQztBQUV0QyxTQUFTLENBQUM7SUFDUixJQUFJLEVBQUUsRUFBRTtJQUVSLE9BQU8sRUFBRTtRQUNQLE1BQU0sWUFBQyxNQUFNO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxtQkFBVSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxVQUFVLEVBQUUsbUJBQVU7YUFDdkIsQ0FBQyxDQUFDO1lBQ0gsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxtQkFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdEUsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUN2QixLQUFLLEVBQUUsNkJBQU8sUUFBUSw2QkFBTTthQUM3QixDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsTUFBTTtZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxHQUFHLEVBQUUsb0JBQW9CO2dCQUN6QixPQUFPLEVBQUU7b0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEIsQ0FBQztnQkFDRCxJQUFJLEVBQUUsVUFBUyxDQUFDO29CQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixDQUFDO2dCQUNELFFBQVEsRUFBRTtvQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQ25DLENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXRhaWxEYXRhIH0gZnJvbSAnLi9jb25maWcnO1xyXG5cclxuQ29tcG9uZW50KHtcclxuICBkYXRhOiB7fSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25Mb2FkKG9wdGlvbikge1xyXG4gICAgICBjb25zb2xlLmxvZygnZGV0YWlsLXZpZXfpobXpnaLojrflj5bliLDnmoTlj4LmlbAnLCBvcHRpb24pO1xyXG4gICAgICBjb25zb2xlLmxvZygnRGV0YWlsRGF0YScsIERldGFpbERhdGEpO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGRldGFpbERhdGE6IERldGFpbERhdGFcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGJhclRpdGxlID0gb3B0aW9uID8gb3B0aW9uLmJhclRpdGxlIDogRGV0YWlsRGF0YS5kZXNjcmliZS50aXRsZTtcclxuICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuICAgICAgICB0aXRsZTogYOa9ruWRs+eUn+mynCR7YmFyVGl0bGV96K+m5oOF5bGV56S6YFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvKiog54K55Ye76L+b5YWl5ZWG5Z+O6LSt5LmwICAqL1xyXG4gICAgdG9TaG9wKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygn54K55Ye75oyJ6ZKu6L+b5YWl5ZWG5Z+O6LSt5LmwJyk7XHJcbiAgICAgIHd4LnN3aXRjaFRhYih7XHJcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4JyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfmiJDlip/lkI7nmoTlm57osIMnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCflpLHotKXlkI7nmoTlm57osIMnLCBlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfnu5PmnZ/lkI7nmoTlm57osIMo5oiQ5Yqf77yM5aSx6LSl6YO95Lya5omn6KGMKScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIl19