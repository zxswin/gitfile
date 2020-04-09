"use strict";
Component({
    data: {
        markData: {
            position: 'center'
        },
        clientInfo: {
            name: '卓杏森',
            phoneNum: '13535265073',
            regionList: ['广东省', '广州市', '天河区'],
            region: '广东省广州市天河区',
            address: '花城大道677号美林工业大厦18楼601室',
            postcode: '510000',
            remark: '生鲜订单备注信息'
        },
        isSubmitClick: false
    },
    observers: {},
    properties: {},
    lifetimes: {
        attached: function () { }
    },
    methods: {
        regionChange: function ($event) {
            console.log('省市区组件发生改变', $event);
            var clientInfo = this.data.clientInfo;
            var postcode = $event.detail.postcode;
            var regionList = $event.detail.value;
            var region = regionList.join('');
            clientInfo.regionList = regionList;
            clientInfo.region = region;
            clientInfo.postcode = postcode;
            this.setData({ clientInfo: clientInfo });
        },
        submitClick: function () {
            var mustFillList = ['name', 'phoneNum', 'region', 'address'];
            var clientInfo = this.data.clientInfo;
            console.log('提交的数据', clientInfo);
            this.setData({
                isSubmitClick: true
            });
            for (var _i = 0, mustFillList_1 = mustFillList; _i < mustFillList_1.length; _i++) {
                var key = mustFillList_1[_i];
                if (!clientInfo[key])
                    return;
                if (key === 'phoneNum' && clientInfo[key]) {
                    var pattern = /0?(13|14|15|18|17)[0-9]{9}/;
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
                clientInfo: clientInfo
            });
        },
        inputBlur: function ($event) {
            var clientInfo = this.data.clientInfo;
            var key = $event.currentTarget.dataset.inputkey;
            var inputValue = $event.detail.value;
            clientInfo[key] = inputValue;
            this.setData({
                clientInfo: this.data.clientInfo
            });
        },
        closeMask: function () {
            console.log('遮罩层被点击了');
            this.triggerEvent('close', { close: true });
        },
        contentClick: function () {
            console.log('阻止点击主内容取事件冒泡');
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFFO1FBRUosUUFBUSxFQUFFO1lBQ1IsUUFBUSxFQUFFLFFBQVE7U0FDbkI7UUFFRCxVQUFVLEVBQUU7WUFFVixJQUFJLEVBQUUsS0FBSztZQUVYLFFBQVEsRUFBRSxhQUFhO1lBRXZCLFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ2pDLE1BQU0sRUFBRSxXQUFXO1lBRW5CLE9BQU8sRUFBRSx1QkFBdUI7WUFFaEMsUUFBUSxFQUFFLFFBQVE7WUFFbEIsTUFBTSxFQUFFLFVBQVU7U0FDbkI7UUFFRCxhQUFhLEVBQUUsS0FBSztLQUNyQjtJQUVELFNBQVMsRUFBRSxFQUFFO0lBRWIsVUFBVSxFQUFFLEVBQUU7SUFHZCxTQUFTLEVBQUU7UUFDVCxRQUFRLEVBQUUsY0FBWSxDQUFDO0tBQ3hCO0lBRUQsT0FBTyxFQUFFO1FBRVAsWUFBWSxZQUFDLE1BQU07WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDakMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDeEMsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDeEMsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdkMsSUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVuQyxVQUFVLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUNuQyxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUMzQixVQUFVLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUUvQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsVUFBVSxZQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFFRCxXQUFXO1lBRVQsSUFBTSxZQUFZLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUUvRCxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztZQUVqQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGFBQWEsRUFBRSxJQUFJO2FBQ3BCLENBQUMsQ0FBQztZQUVILEtBQWtCLFVBQVksRUFBWiw2QkFBWSxFQUFaLDBCQUFZLEVBQVosSUFBWSxFQUFFO2dCQUEzQixJQUFNLEdBQUcscUJBQUE7Z0JBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7b0JBQUUsT0FBTztnQkFFN0IsSUFBSSxHQUFHLEtBQUssVUFBVSxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDekMsSUFBTSxPQUFPLEdBQUcsNEJBQTRCLENBQUM7b0JBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUNsQyxFQUFFLENBQUMsU0FBUyxDQUFDOzRCQUNYLEtBQUssRUFBRSxXQUFXOzRCQUNsQixJQUFJLEVBQUUsTUFBTTs0QkFDWixRQUFRLEVBQUUsSUFBSTt5QkFDZixDQUFDLENBQUM7d0JBQ0gsT0FBTztxQkFDUjtpQkFDRjthQUNGO1lBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRTtnQkFDakMsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsVUFBVSxZQUFBO2FBQ1gsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELFNBQVMsWUFBQyxNQUFNO1lBQ2QsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDeEMsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ2xELElBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUM7WUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO2FBQ2pDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxTQUFTO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV2QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFFRCxZQUFZO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM5QixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xyXG4gIGRhdGE6IHtcclxuICAgIC8qKiDpga7nvannu4Tku7blhaXlj4Lnm7jlhbPmlbDmja4gICovXHJcbiAgICBtYXJrRGF0YToge1xyXG4gICAgICBwb3NpdGlvbjogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICAvKiogIOWuouaIt+S/oeaBryAgKi9cclxuICAgIGNsaWVudEluZm86IHtcclxuICAgICAgLyoqICDlrqLmiLflp5PlkI0gICovXHJcbiAgICAgIG5hbWU6ICfljZPmnY/mo64nLFxyXG4gICAgICAvKiogIOaJi+acuuWPt+eggSAgKi9cclxuICAgICAgcGhvbmVOdW06ICcxMzUzNTI2NTA3MycsXHJcbiAgICAgIC8qKiDnnIHluILljLogICovXHJcbiAgICAgIHJlZ2lvbkxpc3Q6IFsn5bm/5Lic55yBJywgJ+W5v+W3nuW4gicsICflpKnmsrPljLonXSxcclxuICAgICAgcmVnaW9uOiAn5bm/5Lic55yB5bm/5bee5biC5aSp5rKz5Yy6JyxcclxuICAgICAgLyoqIOihl+mBk+WcsOWdgCAgKi9cclxuICAgICAgYWRkcmVzczogJ+iKseWfjuWkp+mBkzY3N+WPt+e+juael+W3peS4muWkp+WOpjE45qW8NjAx5a6kJyxcclxuICAgICAgLyoqIOmCrue8liAgKi9cclxuICAgICAgcG9zdGNvZGU6ICc1MTAwMDAnLFxyXG4gICAgICAvKiog6K6i5Y2V5aSH5rOoICAqL1xyXG4gICAgICByZW1hcms6ICfnlJ/pspzorqLljZXlpIfms6jkv6Hmga8nXHJcbiAgICB9LFxyXG4gICAgLyoqIOaYr+WQpueCueWHu+S6huaPkOS6pOaMiemSriAgKi9cclxuICAgIGlzU3VibWl0Q2xpY2s6IGZhbHNlXHJcbiAgfSxcclxuXHJcbiAgb2JzZXJ2ZXJzOiB7fSxcclxuXHJcbiAgcHJvcGVydGllczoge30sXHJcblxyXG4gIC8qKiDnu4Tku7bnmoTnlJ/lkb3lkajmnJ8gICovXHJcbiAgbGlmZXRpbWVzOiB7XHJcbiAgICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7fVxyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC8qKiDnnIHluILljLrpgInmi6nnu4Tku7blj5HnlJ/kuobmlLnlj5jnmoTml7blgJnop6blj5EgICovXHJcbiAgICByZWdpb25DaGFuZ2UoJGV2ZW50KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfnnIHluILljLrnu4Tku7blj5HnlJ/mlLnlj5gnLCAkZXZlbnQpO1xyXG4gICAgICBjb25zdCBjbGllbnRJbmZvID0gdGhpcy5kYXRhLmNsaWVudEluZm87XHJcbiAgICAgIGNvbnN0IHBvc3Rjb2RlID0gJGV2ZW50LmRldGFpbC5wb3N0Y29kZTtcclxuICAgICAgY29uc3QgcmVnaW9uTGlzdCA9ICRldmVudC5kZXRhaWwudmFsdWU7XHJcbiAgICAgIGNvbnN0IHJlZ2lvbiA9IHJlZ2lvbkxpc3Quam9pbignJyk7XHJcblxyXG4gICAgICBjbGllbnRJbmZvLnJlZ2lvbkxpc3QgPSByZWdpb25MaXN0O1xyXG4gICAgICBjbGllbnRJbmZvLnJlZ2lvbiA9IHJlZ2lvbjtcclxuICAgICAgY2xpZW50SW5mby5wb3N0Y29kZSA9IHBvc3Rjb2RlO1xyXG5cclxuICAgICAgdGhpcy5zZXREYXRhKHsgY2xpZW50SW5mbyB9KTtcclxuICAgIH0sXHJcbiAgICAvKiog54K55Ye75LqG56Gu6K6k5o+Q5Lqk5oyJ6ZKuICAqL1xyXG4gICAgc3VibWl0Q2xpY2soKSB7XHJcbiAgICAgIC8vIOW/heWhq+Wtl+autVxyXG4gICAgICBjb25zdCBtdXN0RmlsbExpc3QgPSBbJ25hbWUnLCAncGhvbmVOdW0nLCAncmVnaW9uJywgJ2FkZHJlc3MnXTtcclxuXHJcbiAgICAgIGNvbnN0IGNsaWVudEluZm8gPSB0aGlzLmRhdGEuY2xpZW50SW5mbztcclxuICAgICAgY29uc29sZS5sb2coJ+aPkOS6pOeahOaVsOaNricsIGNsaWVudEluZm8pO1xyXG5cclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBpc1N1Ym1pdENsaWNrOiB0cnVlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZm9yIChjb25zdCBrZXkgb2YgbXVzdEZpbGxMaXN0KSB7XHJcbiAgICAgICAgaWYgKCFjbGllbnRJbmZvW2tleV0pIHJldHVybjtcclxuICAgICAgICAvLyDmiYvmnLrlj7fnoIHmoKHpqoxcclxuICAgICAgICBpZiAoa2V5ID09PSAncGhvbmVOdW0nICYmIGNsaWVudEluZm9ba2V5XSkge1xyXG4gICAgICAgICAgY29uc3QgcGF0dGVybiA9IC8wPygxM3wxNHwxNXwxOHwxNylbMC05XXs5fS87XHJcbiAgICAgICAgICBpZiAoIXBhdHRlcm4udGVzdChjbGllbnRJbmZvW2tleV0pKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfmiYvmnLrlj7fnoIHmoLzlvI/kuI3mraPnoa4nLFxyXG4gICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc29sZS5sb2coJ+Wtl+auteagoemqjOmAu+i+kemAmui/h+S6hicpO1xyXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnZ2V0Q2xpZW50SW5mbycsIHtcclxuICAgICAgICBjbG9zZTogdHJ1ZSxcclxuICAgICAgICBjbGllbnRJbmZvXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIC8qKiDlvZPovpPlhaXmjqfku7blpLHljrvnhKbngrnnmoTml7blgJkgICovXHJcbiAgICBpbnB1dEJsdXIoJGV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IGNsaWVudEluZm8gPSB0aGlzLmRhdGEuY2xpZW50SW5mbztcclxuICAgICAgY29uc3Qga2V5ID0gJGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbnB1dGtleTtcclxuICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9ICRldmVudC5kZXRhaWwudmFsdWU7XHJcbiAgICAgIGNsaWVudEluZm9ba2V5XSA9IGlucHV0VmFsdWU7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY2xpZW50SW5mbzogdGhpcy5kYXRhLmNsaWVudEluZm9cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLyog6YGu572p5bGC6KKr54K55Ye75LqGICovXHJcbiAgICBjbG9zZU1hc2soKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfpga7nvanlsYLooqvngrnlh7vkuoYnKTtcclxuICAgICAgLy8g5Y+R6YCB5YWz6Zet5LqL5Lu25Yiw54i257uE5Lu2XHJcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjbG9zZScsIHsgY2xvc2U6IHRydWUgfSk7XHJcbiAgICB9LFxyXG4gICAgLyoqIOmYu+atoueCueWHu+S4u+WGheWuueWPluS6i+S7tuWGkuazoSAgKi9cclxuICAgIGNvbnRlbnRDbGljaygpIHtcclxuICAgICAgY29uc29sZS5sb2coJ+mYu+atoueCueWHu+S4u+WGheWuueWPluS6i+S7tuWGkuazoScpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiJdfQ==