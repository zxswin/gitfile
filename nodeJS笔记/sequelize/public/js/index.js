$(function() {
  console.log("项目启动", $);
  $("#api-test").on("click", function() {
    console.log("点击了接口测试按钮");
    $.ajax({
      url: `/api/test`,
      dataType: "json",
      method: "GET",
      success: function(data) {
        console.log('测试接口请求成功' , data);
        
      },
      error: function(xhr) {
        console.log('测试接口请求失败' , xhr);
      }
    });
  });
});
