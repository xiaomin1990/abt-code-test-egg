'use strict';

const Subscription = require('egg').Subscription;

/**
 * 自动更新blockHash的数据
 */
class UpdateBlockData extends Subscription {
  // 设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      interval: '1m', // 10 分钟间隔
      type: 'all', // 指定所有的 worker 都需要执行
    };
  }

  /**
     * 从cahch中获取所查询过的blockHash，更新最新值。
     */
  async subscribe() {
    console.log('定时任务启');
    for (const hash of this.ctx.app.cache.keys()) {
      console.log('定时任务:blockHash:', hash);
      const isUpdateCahch = true;
      await this.ctx.service.home.show(hash, isUpdateCahch);
    }
  }
}

module.exports = UpdateBlockData;
