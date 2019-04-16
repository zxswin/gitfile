module.exports = {
  parseInt(string) {
    if (typeof string === 'number') return string;
    if (!string) return string;
    return parseInt(string, 0) || 0;
  },
  /** 框架扩展用于封装数据格式  */
  parseMsg(action, payload = {}, metadata = {}) {
    const meta = Object.assign(
      {},
      {
        timestamp: Date.now(),
      },
      metadata,
    );

    return {
      meta,
      data: {
        action,
        payload,
      },
    };
  },
};
