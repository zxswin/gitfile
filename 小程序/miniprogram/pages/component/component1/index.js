"use strict";
var myBehavior = require("../behavior");
Component({
    behaviors: [myBehavior],
    data: {
        text: 0,
        sum: 0,
        numberA: 1,
        numberB: 2
    },
    observers: {
        "numberA, numberB": function (numberA, numberB) {
            this.setData({
                sum: numberA + numberB
            });
        }
    },
    properties: {
        innerText: {
            type: String,
            value: "default value888999"
        }
    },
    methods: {
        customMethod: function () {
            this.setData({
                numberA: 10,
                numberB: 2
            });
            var preson = {
                name: "name",
                age: 1
            };
            this.setData({
                text: preson.name
            });
        },
        onTap: function () {
            var myEventDetail = {
                a: 1
            };
            this.triggerEvent("myevent", myEventDetail);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRTFDLFNBQVMsQ0FBQztJQUNSLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztJQUV2QixJQUFJLEVBQUU7UUFFSixJQUFJLEVBQUUsQ0FBQztRQUNQLEdBQUcsRUFBRSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUM7UUFDVixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQsU0FBUyxFQUFFO1FBQ1Qsa0JBQWtCLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTztZQUUzQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEdBQUcsRUFBRSxPQUFPLEdBQUcsT0FBTzthQUN2QixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7SUFFRCxVQUFVLEVBQUU7UUFFVixTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxxQkFBcUI7U0FDN0I7S0FDRjtJQUVELE9BQU8sRUFBRTtRQUVQLFlBQVksRUFBRTtZQUNaLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLENBQUM7YUFDWCxDQUFDLENBQUM7WUFDSCxJQUFNLE1BQU0sR0FBUTtnQkFDbEIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osR0FBRyxFQUFFLENBQUM7YUFDUCxDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7YUFDbEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNELEtBQUssRUFBRTtZQUNMLElBQU0sYUFBYSxHQUFHO2dCQUNwQixDQUFDLEVBQUUsQ0FBQzthQUNMLENBQUM7WUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM5QyxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBteUJlaGF2aW9yID0gcmVxdWlyZShcIi4uL2JlaGF2aW9yXCIpO1xyXG5cclxuQ29tcG9uZW50KHtcclxuICBiZWhhdmlvcnM6IFtteUJlaGF2aW9yXSxcclxuXHJcbiAgZGF0YToge1xyXG4gICAgLy8g6L+Z6YeM5piv5LiA5Lqb57uE5Lu25YaF6YOo5pWw5o2uXHJcbiAgICB0ZXh0OiAwLFxyXG4gICAgc3VtOiAwLFxyXG4gICAgbnVtYmVyQTogMSxcclxuICAgIG51bWJlckI6IDJcclxuICB9LFxyXG5cclxuICBvYnNlcnZlcnM6IHtcclxuICAgIFwibnVtYmVyQSwgbnVtYmVyQlwiOiBmdW5jdGlvbihudW1iZXJBLCBudW1iZXJCKSB7XHJcbiAgICAgIC8vIOWcqCBudW1iZXJBIOaIluiAhSBudW1iZXJCIOiiq+iuvue9ruaXtu+8jOaJp+ihjOi/meS4quWHveaVsFxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHN1bTogbnVtYmVyQSArIG51bWJlckJcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgLy8g6L+Z6YeM5a6a5LmJ5LqGaW5uZXJUZXh05bGe5oCn77yM5bGe5oCn5YC85Y+v5Lul5Zyo57uE5Lu25L2/55So5pe25oyH5a6aXHJcbiAgICBpbm5lclRleHQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogXCJkZWZhdWx0IHZhbHVlODg4OTk5XCJcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICAvLyDov5nph4zmmK/kuIDkuKroh6rlrprkuYnmlrnms5VcclxuICAgIGN1c3RvbU1ldGhvZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgbnVtYmVyQTogMTAsXHJcbiAgICAgICAgbnVtYmVyQjogMlxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcHJlc29uOiBPYmogPSB7XHJcbiAgICAgICAgbmFtZTogXCJuYW1lXCIsXHJcbiAgICAgICAgYWdlOiAxXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdGV4dDogcHJlc29uLm5hbWVcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25UYXA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zdCBteUV2ZW50RGV0YWlsID0ge1xyXG4gICAgICAgIGE6IDFcclxuICAgICAgfTsgLy8gZGV0YWls5a+56LGh77yM5o+Q5L6b57uZ5LqL5Lu255uR5ZCs5Ye95pWwXHJcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KFwibXlldmVudFwiLCBteUV2ZW50RGV0YWlsKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iXX0=