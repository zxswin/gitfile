/* eslint-disable no-param-reassign */
// agent.js
const RegistryClient = require('./registry_client');

module.exports = agent => {
  // 在这里写你的初始化逻辑

  // 也可以通过 messenger 对象发送消息给 App Worker
  // 但需要等待 App Worker 启动成功后才能发送，不然很可能丢失
  agent.messenger.on('egg-ready', () => {
    const data = { a: 1 };
    agent.messenger.sendToApp('action1', data);
  });

  // 对 RegistryClient 进行封装和实例化
  agent.registryClient = agent
    .cluster(RegistryClient)
    // create 方法的参数就是 RegistryClient 构造函数的参数
    .create({});

  agent.beforeStart(async () => {
    await agent.registryClient.ready();
    agent.coreLogger.info('registry client is ready================================================');
  });
};
