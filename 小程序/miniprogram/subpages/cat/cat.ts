Page({
  onLoad(option) {
    console.log("cat页面获取到的参数", option);
    console.log("当前的页面", getCurrentPages());
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.emit("acceptDataFromOpenedPage", {
      data: "acceptDataFromOpenedPagetest"
    });
    eventChannel.emit("someEvent", { data: "someEventtest" });
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on("acceptDataFromOpenerPage", function(data) {
      console.log("目标页面监听acceptDataFromOpenerPage事件", data);
    });
  }
});
