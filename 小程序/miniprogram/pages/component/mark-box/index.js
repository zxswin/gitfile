"use strict";
Component({
    data: {},
    options: {
        multipleSlots: true
    },
    observers: {},
    properties: {
        markData: {
            type: Object,
            value: {
                position: 'center',
                top: '0rpx'
            }
        }
    },
    lifetimes: {},
    methods: {
        markClick: function () {
            this.triggerEvent('maskClick', true);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFFLEVBQUU7SUFDUixPQUFPLEVBQUU7UUFDUCxhQUFhLEVBQUUsSUFBSTtLQUNwQjtJQUVELFNBQVMsRUFBRSxFQUFFO0lBRWIsVUFBVSxFQUFFO1FBRVYsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUU7Z0JBRUwsUUFBUSxFQUFFLFFBQVE7Z0JBRWxCLEdBQUcsRUFBRSxNQUFNO2FBQ1o7U0FDRjtLQUNGO0lBR0QsU0FBUyxFQUFFLEVBQUU7SUFFYixPQUFPLEVBQUU7UUFFUCxTQUFTO1lBRVAsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICBkYXRhOiB7fSxcclxuICBvcHRpb25zOiB7XHJcbiAgICBtdWx0aXBsZVNsb3RzOiB0cnVlIC8vIOWcqOe7hOS7tuWumuS5ieaXtueahOmAiemhueS4reWQr+eUqOWkmnNsb3TmlK/mjIFcclxuICB9LFxyXG5cclxuICBvYnNlcnZlcnM6IHt9LFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAvKiog6YGu572p55qE5Yid5aeL5YyW5YWl5Y+CICAqL1xyXG4gICAgbWFya0RhdGE6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICB2YWx1ZToge1xyXG4gICAgICAgIC8qKiDpga7nvankuK3kuLvopoHlhoXlrrnnmoTlsZXnpLrkvY3nva4gICovXHJcbiAgICAgICAgcG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgIC8qKiDpga7nvankuK3nmoTlhoXlrrnot53nprvpobbpg6jnmoTkvY3nva4gICovXHJcbiAgICAgICAgdG9wOiAnMHJweCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKiDnu4Tku7bnmoTnlJ/lkb3lkajmnJ8gICovXHJcbiAgbGlmZXRpbWVzOiB7fSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLyoqIOeCueWHu+S6humBrue9qeWxgiAgKi9cclxuICAgIG1hcmtDbGljaygpIHtcclxuICAgICAgLy8g5Y+R6YCB5pyA57uI6K6h5pWw5Zmo5pWw5o2u5Yiw54i257uE5Lu2XHJcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdtYXNrQ2xpY2snLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iXX0=