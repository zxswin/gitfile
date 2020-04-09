"use strict";
module.exports = Behavior({
    lifetimes: {
        attached: function () {
            console.log("在组件实例进入页面节点树时执行111");
        },
        detached: function () {
            console.log("在组件实例被从页面节点树移除时执行111");
        }
    },
    behaviors: [],
    properties: {
        myBehaviorProperty: {
            type: String
        }
    },
    data: {
        myBehaviorData: {}
    },
    attached: function () { },
    methods: {
        myBehaviorMethod: function () { }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVoYXZpb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7SUFDeEIsU0FBUyxFQUFFO1FBQ1QsUUFBUSxFQUFFO1lBRVIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFDRCxRQUFRLEVBQUU7WUFFUixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDdEMsQ0FBQztLQUNGO0lBQ0QsU0FBUyxFQUFFLEVBQUU7SUFDYixVQUFVLEVBQUU7UUFDVixrQkFBa0IsRUFBRTtZQUNsQixJQUFJLEVBQUUsTUFBTTtTQUNiO0tBQ0Y7SUFDRCxJQUFJLEVBQUU7UUFDSixjQUFjLEVBQUUsRUFBRTtLQUNuQjtJQUNELFFBQVEsRUFBRSxjQUFZLENBQUM7SUFDdkIsT0FBTyxFQUFFO1FBQ1AsZ0JBQWdCLEVBQUUsY0FBWSxDQUFDO0tBQ2hDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBCZWhhdmlvcih7XHJcbiAgbGlmZXRpbWVzOiB7XHJcbiAgICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIOWcqOe7hOS7tuWunuS+i+i/m+WFpemhtemdouiKgueCueagkeaXtuaJp+ihjFxyXG4gICAgICBjb25zb2xlLmxvZyhcIuWcqOe7hOS7tuWunuS+i+i/m+WFpemhtemdouiKgueCueagkeaXtuaJp+ihjDExMVwiKTtcclxuICAgIH0sXHJcbiAgICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIOWcqOe7hOS7tuWunuS+i+iiq+S7jumhtemdouiKgueCueagkeenu+mZpOaXtuaJp+ihjFxyXG4gICAgICBjb25zb2xlLmxvZyhcIuWcqOe7hOS7tuWunuS+i+iiq+S7jumhtemdouiKgueCueagkeenu+mZpOaXtuaJp+ihjDExMVwiKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGJlaGF2aW9yczogW10sXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgbXlCZWhhdmlvclByb3BlcnR5OiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgbXlCZWhhdmlvckRhdGE6IHt9XHJcbiAgfSxcclxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7fSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBteUJlaGF2aW9yTWV0aG9kOiBmdW5jdGlvbigpIHt9XHJcbiAgfVxyXG59KTtcclxuIl19