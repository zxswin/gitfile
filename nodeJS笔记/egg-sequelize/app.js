/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
// app.js
const RegistryClient = require('./registry_client');

class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  configWillLoad() {
    // 此时 config 文件已经被读取并合并，但是还并未生效
    // 这是应用层修改配置的最后时机
    // 注意：此函数只支持同步调用
  }

  async didLoad() {
    // 所有的配置已经加载完毕
    // 可以用来加载应用自定义的文件，启动自定义的服务
    // console.log('所有的配置已经加载完毕=====================', this.app);
  }

  async willReady() {
    // 所有的插件都已启动完毕，但是应用整体还未 ready
    // 可以做一些数据初始化等操作，这些操作成功才会启动应用
    this.app.registryClient = this.app.cluster(RegistryClient).create({});
    await this.app.registryClient.ready();
    this.app.coreLogger.info('registry client is ready');

    // 调用 subscribe 进行订阅
    this.app.registryClient.subscribe(
      {
        dataId: 'demo.DemoService',
      },
      val => {
        // ...
      },
    );

    // 调用 publish 发布数据
    this.app.registryClient.publish({
      dataId: 'demo.DemoService',
      publishData: 'xxx999999',
    });

    // 调用 getConfig 接口
    const res = await this.app.registryClient.getConfig('demo.DemoService');
    console.log(res);
  }

  async didReady() {
    // 应用已经启动完毕
  }

  async serverDidReady() {
    // http / https server 已启动，开始接受外部请求
    // 此时可以从 app.server 拿到 server 的实例
    this.app.messenger.on('action1', data => {
      console.log('子进程已经接收到agent进程发送来的信息=======', data);
    });
  }
}

module.exports = AppBootHook;
