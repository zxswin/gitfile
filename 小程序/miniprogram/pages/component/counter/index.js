"use strict";
Component({
    data: {},
    observers: {},
    properties: {
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
    lifetimes: {},
    methods: {
        minusTap: function () {
            var counterData = this.data.counterData;
            var price = counterData.price;
            var min = counterData.min;
            var step = counterData.step;
            if (counterData.currentNum - 1 < min)
                return;
            counterData.currentNum -= step;
            counterData.totalPrice = counterData.currentNum * price;
            this.setData({ counterData: counterData });
            this.triggerEvent('counterdata', { counterData: counterData });
        },
        addTap: function () {
            var counterData = this.data.counterData;
            var price = counterData.price;
            var max = counterData.max;
            var step = counterData.step;
            if (counterData.currentNum + 1 > max)
                return;
            counterData.currentNum += step;
            counterData.totalPrice = counterData.currentNum * price;
            this.setData({ counterData: counterData });
            this.triggerEvent('counterdata', { counterData: counterData });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFFLEVBQUU7SUFFUixTQUFTLEVBQUUsRUFBRTtJQUViLFVBQVUsRUFBRTtRQUVWLFdBQVcsRUFBRTtZQUNYLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFO2dCQUVMLEtBQUssRUFBRSxDQUFDO2dCQUVSLFdBQVcsRUFBRSxLQUFLO2dCQUVsQixVQUFVLEVBQUUsQ0FBQztnQkFFYixLQUFLLEVBQUUsQ0FBQztnQkFFUixVQUFVLEVBQUUsQ0FBQztnQkFFYixHQUFHLEVBQUUsQ0FBQztnQkFFTixHQUFHLEVBQUUsS0FBSztnQkFFVixJQUFJLEVBQUUsQ0FBQzthQUNSO1NBQ0Y7S0FDRjtJQUdELFNBQVMsRUFBRSxFQUtWO0lBRUQsT0FBTyxFQUFFO1FBRVAsUUFBUTtZQUVOLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzFDLElBQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDaEMsSUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQztZQUM1QixJQUFNLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQzlCLElBQUksV0FBVyxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsR0FBRztnQkFBRSxPQUFPO1lBRTdDLFdBQVcsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDO1lBRy9CLFdBQVcsQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFFeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFdBQVcsYUFBQSxFQUFFLENBQUMsQ0FBQztZQUU5QixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxFQUFFLFdBQVcsYUFBQSxFQUFFLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBRUQsTUFBTTtZQUVKLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzFDLElBQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDaEMsSUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQztZQUM1QixJQUFNLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRTlCLElBQUksV0FBVyxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsR0FBRztnQkFBRSxPQUFPO1lBRTdDLFdBQVcsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDO1lBRy9CLFdBQVcsQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFFeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFdBQVcsYUFBQSxFQUFFLENBQUMsQ0FBQztZQUc5QixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxFQUFFLFdBQVcsYUFBQSxFQUFFLENBQUMsQ0FBQztRQUNwRCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xyXG4gIGRhdGE6IHt9LFxyXG5cclxuICBvYnNlcnZlcnM6IHt9LFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAvKiog57uE5Lu25YWl5Y+CICAqL1xyXG4gICAgY291bnRlckRhdGE6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICB2YWx1ZToge1xyXG4gICAgICAgIC8qKiDlvZPliY3lnKjliJfooajkuK3pgInotK3llYblk4HnmoTntKLlvJUgICovXHJcbiAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgLyoqIOaYr+WQpuS7heaYvuekuuWKoOWPt+aMiemSriAgKi9cclxuICAgICAgICBvbmx5U2hvd0FkZDogZmFsc2UsXHJcbiAgICAgICAgLyoqIOW9k+WJjeWxleekuueahOiuoeeul+WAvCAgKi9cclxuICAgICAgICBjdXJyZW50TnVtOiAxLFxyXG4gICAgICAgIC8qKiDljZXku7cgICovXHJcbiAgICAgICAgcHJpY2U6IDAsXHJcbiAgICAgICAgLyoqIOaAu+S7t+agvCAgKi9cclxuICAgICAgICB0b3RhbFByaWNlOiAwLFxyXG4gICAgICAgIC8qKiDmnIDlsI/orqHnrpflgLwgICovXHJcbiAgICAgICAgbWluOiAxLFxyXG4gICAgICAgIC8qKiDmnIDlpKforqHnrpflgLwgICovXHJcbiAgICAgICAgbWF4OiAxMDAwMCxcclxuICAgICAgICAvKiog6K6h566X5q2l6ZW/ICAqL1xyXG4gICAgICAgIHN0ZXA6IDFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKiDnu4Tku7bnmoTnlJ/lkb3lkajmnJ8gICovXHJcbiAgbGlmZXRpbWVzOiB7XHJcbiAgICAvLyBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgIGNvbnN0IGNvdW50ZXJEYXRhID0gdGhpcy5kYXRhLmNvdW50ZXJEYXRhO1xyXG4gICAgLy8gICB0aGlzLnNldERhdGEoeyBjb3VudGVyRGF0YSB9KTtcclxuICAgIC8vIH1cclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICAvKiog54K55Ye75LqG5YeP5Y+3ICAqL1xyXG4gICAgbWludXNUYXAoKSB7XHJcbiAgICAgIC8qKiDlvZPliY3orqHnrpfnmoTmlbDph48gICovXHJcbiAgICAgIGNvbnN0IGNvdW50ZXJEYXRhID0gdGhpcy5kYXRhLmNvdW50ZXJEYXRhO1xyXG4gICAgICBjb25zdCBwcmljZSA9IGNvdW50ZXJEYXRhLnByaWNlO1xyXG4gICAgICBjb25zdCBtaW4gPSBjb3VudGVyRGF0YS5taW47XHJcbiAgICAgIGNvbnN0IHN0ZXAgPSBjb3VudGVyRGF0YS5zdGVwO1xyXG4gICAgICBpZiAoY291bnRlckRhdGEuY3VycmVudE51bSAtIDEgPCBtaW4pIHJldHVybjtcclxuXHJcbiAgICAgIGNvdW50ZXJEYXRhLmN1cnJlbnROdW0gLT0gc3RlcDtcclxuXHJcbiAgICAgIC8qKiDlvZPliY3orqHnrpfnmoTmgLvku7cgICovXHJcbiAgICAgIGNvdW50ZXJEYXRhLnRvdGFsUHJpY2UgPSBjb3VudGVyRGF0YS5jdXJyZW50TnVtICogcHJpY2U7XHJcblxyXG4gICAgICB0aGlzLnNldERhdGEoeyBjb3VudGVyRGF0YSB9KTtcclxuICAgICAgLy8g5Y+R6YCB5pyA57uI6K6h5pWw5Zmo5pWw5o2u5Yiw54i257uE5Lu2XHJcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjb3VudGVyZGF0YScsIHsgY291bnRlckRhdGEgfSk7XHJcbiAgICB9LFxyXG4gICAgLyoqIOeCueWHu+S6huWKoOWPtyAgKi9cclxuICAgIGFkZFRhcCgpIHtcclxuICAgICAgLyoqIOW9k+WJjeiuoeeul+eahOaVsOmHjyAgKi9cclxuICAgICAgY29uc3QgY291bnRlckRhdGEgPSB0aGlzLmRhdGEuY291bnRlckRhdGE7XHJcbiAgICAgIGNvbnN0IHByaWNlID0gY291bnRlckRhdGEucHJpY2U7XHJcbiAgICAgIGNvbnN0IG1heCA9IGNvdW50ZXJEYXRhLm1heDtcclxuICAgICAgY29uc3Qgc3RlcCA9IGNvdW50ZXJEYXRhLnN0ZXA7XHJcblxyXG4gICAgICBpZiAoY291bnRlckRhdGEuY3VycmVudE51bSArIDEgPiBtYXgpIHJldHVybjtcclxuXHJcbiAgICAgIGNvdW50ZXJEYXRhLmN1cnJlbnROdW0gKz0gc3RlcDtcclxuXHJcbiAgICAgIC8qKiDlvZPliY3orqHnrpfnmoTmgLvku7cgICovXHJcbiAgICAgIGNvdW50ZXJEYXRhLnRvdGFsUHJpY2UgPSBjb3VudGVyRGF0YS5jdXJyZW50TnVtICogcHJpY2U7XHJcblxyXG4gICAgICB0aGlzLnNldERhdGEoeyBjb3VudGVyRGF0YSB9KTtcclxuXHJcbiAgICAgIC8vIOWPkemAgeacgOe7iOiuoeaVsOWZqOaVsOaNruWIsOeItue7hOS7tlxyXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY291bnRlcmRhdGEnLCB7IGNvdW50ZXJEYXRhIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiJdfQ==