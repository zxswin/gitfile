"use strict";
Component({
    data: {},
    observers: {},
    properties: {
        detailData: {
            type: Object,
            value: {
                swiper: [],
                describe: {
                    title: '',
                    subTitle: '',
                    detailInfo: '',
                    price: 0,
                    standards: ''
                }
            }
        },
        counterData: {
            type: Object,
            value: {
                index: 0,
                onlyShowAdd: false,
                currentNum: 1,
                price: 0,
                totalPrice: 0,
                min: 1,
                max: 10000,
                step: 1
            }
        }
    },
    lifetimes: {
        attached: function () {
            console.log('商品详情数据detailData', this.data.detailData);
        }
    },
    methods: {
        closeMask: function () {
            this.triggerEvent('close', { close: true });
        },
        onCounter: function ($event) {
            console.log('$event.detail.counterData', $event.detail.counterData);
            var counterData = $event.detail.counterData;
            this.setData({
                counterData: counterData
            });
        },
        addShopCar: function () {
            var counterData = this.data.counterData;
            this.data.detailData.counterData = counterData;
            var detailData = this.data.detailData;
            this.triggerEvent('addShopCar', {
                item: detailData,
                counter: counterData
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFFLEVBQUU7SUFFUixTQUFTLEVBQUUsRUFBRTtJQUViLFVBQVUsRUFBRTtRQUVWLFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFO2dCQUVMLE1BQU0sRUFBRSxFQUFFO2dCQUVWLFFBQVEsRUFBRTtvQkFFUixLQUFLLEVBQUUsRUFBRTtvQkFFVCxRQUFRLEVBQUUsRUFBRTtvQkFFWixVQUFVLEVBQUUsRUFBRTtvQkFFZCxLQUFLLEVBQUUsQ0FBQztvQkFFUixTQUFTLEVBQUUsRUFBRTtpQkFDZDthQUNGO1NBQ0Y7UUFHRCxXQUFXLEVBQUU7WUFDWCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRTtnQkFFTCxLQUFLLEVBQUUsQ0FBQztnQkFFUixXQUFXLEVBQUUsS0FBSztnQkFFbEIsVUFBVSxFQUFFLENBQUM7Z0JBRWIsS0FBSyxFQUFFLENBQUM7Z0JBRVIsVUFBVSxFQUFFLENBQUM7Z0JBRWIsR0FBRyxFQUFFLENBQUM7Z0JBRU4sR0FBRyxFQUFFLEtBQUs7Z0JBRVYsSUFBSSxFQUFFLENBQUM7YUFDUjtTQUNGO0tBQ0Y7SUFHRCxTQUFTLEVBQUU7UUFDVCxRQUFRLEVBQUU7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEQsQ0FBQztLQUNGO0lBRUQsT0FBTyxFQUFFO1FBRVAsU0FBUztZQUVQLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUVELFNBQVMsWUFBQyxNQUFNO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BFLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBQzlDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsV0FBVyxFQUFFLFdBQVc7YUFDekIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELFVBQVU7WUFDUixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQy9DLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBRXhDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFO2dCQUM5QixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsT0FBTyxFQUFFLFdBQVc7YUFDckIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICBkYXRhOiB7fSxcclxuXHJcbiAgb2JzZXJ2ZXJzOiB7fSxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgLyoqIOWVhuWTgeivpuaDheaVsOaNruWFpeWPgiAgKi9cclxuICAgIGRldGFpbERhdGE6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICB2YWx1ZToge1xyXG4gICAgICAgIC8qKiDova7mkq3lm74gICovXHJcbiAgICAgICAgc3dpcGVyOiBbXSxcclxuICAgICAgICAvKiog5ZWG5ZOB6K+m5oOF5o+P6L+wICAqL1xyXG4gICAgICAgIGRlc2NyaWJlOiB7XHJcbiAgICAgICAgICAvKiog5Li75qCH6aKYICAqL1xyXG4gICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgLyoqIOWtkOagh+mimCAqL1xyXG4gICAgICAgICAgc3ViVGl0bGU6ICcnLFxyXG4gICAgICAgICAgLyoqIOaPj+i/sOS/oeaBryAqL1xyXG4gICAgICAgICAgZGV0YWlsSW5mbzogJycsXHJcbiAgICAgICAgICAvKiog5ZWG5ZOB5Lu35qC8ICovXHJcbiAgICAgICAgICBwcmljZTogMCxcclxuICAgICAgICAgIC8qKiDllYblk4HmoIflh4YgKi9cclxuICAgICAgICAgIHN0YW5kYXJkczogJydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqIOiuoeaVsOWZqOWFpeWPgiAgKi9cclxuICAgIGNvdW50ZXJEYXRhOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgdmFsdWU6IHtcclxuICAgICAgICAvKiog5b2T5YmN5Zyo5YiX6KGo5Lit6YCJ6LSt5ZWG5ZOB55qE57Si5byVICAqL1xyXG4gICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgIC8qKiDmmK/lkKbku4XmmL7npLrliqDlj7fmjInpkq4gICovXHJcbiAgICAgICAgb25seVNob3dBZGQ6IGZhbHNlLFxyXG4gICAgICAgIC8qKiDlvZPliY3lsZXnpLrnmoTorqHnrpflgLwgICovXHJcbiAgICAgICAgY3VycmVudE51bTogMSxcclxuICAgICAgICAvKiog5Y2V5Lu3ICAqL1xyXG4gICAgICAgIHByaWNlOiAwLFxyXG4gICAgICAgIC8qKiDmgLvku7fmoLwgICovXHJcbiAgICAgICAgdG90YWxQcmljZTogMCxcclxuICAgICAgICAvKiog5pyA5bCP6K6h566X5YC8ICAqL1xyXG4gICAgICAgIG1pbjogMSxcclxuICAgICAgICAvKiog5pyA5aSn6K6h566X5YC8ICAqL1xyXG4gICAgICAgIG1heDogMTAwMDAsXHJcbiAgICAgICAgLyoqIOiuoeeul+atpemVvyAgKi9cclxuICAgICAgICBzdGVwOiAxXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKiog57uE5Lu255qE55Sf5ZG95ZGo5pyfICAqL1xyXG4gIGxpZmV0aW1lczoge1xyXG4gICAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygn5ZWG5ZOB6K+m5oOF5pWw5o2uZGV0YWlsRGF0YScsIHRoaXMuZGF0YS5kZXRhaWxEYXRhKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICAvKiog54K55Ye75LqG5YWz6Zet5oyJ6ZKuICAqL1xyXG4gICAgY2xvc2VNYXNrKCkge1xyXG4gICAgICAvLyDlj5HpgIHlhbPpl63kuovku7bliLDniLbnu4Tku7ZcclxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2Nsb3NlJywgeyBjbG9zZTogdHJ1ZSB9KTtcclxuICAgIH0sXHJcbiAgICAvKiog54K55Ye76K6h5pWw5Zmo6Kem5Y+R6K6h5pWwICAqL1xyXG4gICAgb25Db3VudGVyKCRldmVudCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnJGV2ZW50LmRldGFpbC5jb3VudGVyRGF0YScsICRldmVudC5kZXRhaWwuY291bnRlckRhdGEpO1xyXG4gICAgICBjb25zdCBjb3VudGVyRGF0YSA9ICRldmVudC5kZXRhaWwuY291bnRlckRhdGE7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY291bnRlckRhdGE6IGNvdW50ZXJEYXRhXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIC8qKiDngrnlh7vkuobliqDlhaXotK3nianovabmjInpkq4gICovXHJcbiAgICBhZGRTaG9wQ2FyKCkge1xyXG4gICAgICBjb25zdCBjb3VudGVyRGF0YSA9IHRoaXMuZGF0YS5jb3VudGVyRGF0YTtcclxuICAgICAgdGhpcy5kYXRhLmRldGFpbERhdGEuY291bnRlckRhdGEgPSBjb3VudGVyRGF0YTtcclxuICAgICAgY29uc3QgZGV0YWlsRGF0YSA9IHRoaXMuZGF0YS5kZXRhaWxEYXRhO1xyXG4gICAgICAvLyDlj5HpgIHliLDniLbnu4Tku7ZcclxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2FkZFNob3BDYXInLCB7XHJcbiAgICAgICAgaXRlbTogZGV0YWlsRGF0YSxcclxuICAgICAgICBjb3VudGVyOiBjb3VudGVyRGF0YVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iXX0=