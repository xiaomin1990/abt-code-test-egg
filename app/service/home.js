'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async find() {
    return 'hello';
  }
  /**
     *
     * @param {*} id blockHash
     * @param {*} isUpdateCahch 是否强制更新数据如果为true则不会从缓存中获取数据而是通过接口请求新数据
     * @return
     *
     */
  async show(blockHash, isUpdateCahch = false) {
    // 判断该blockHash是否存在缓存中，如果存在直接从缓存中读取数据，否则请求接口获取新数据并保存到缓存中。
    if (this.app.cache.has(blockHash) && !isUpdateCahch) {
      console.log('has cahch');
      return this.app.cache.get(blockHash);
    }
    console.log('no cahch');
    const _path = `https://blockchain.info/rawblock/${blockHash}`;
    const _headers = {
      authority: 'blockchain.info',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'zh-CN,zh;q=0.9',
      'cache-control': 'max-age=0',
      referer: 'https://mail.qq.com/',
      'sec-ch-ua': 'Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
      'sec-ch-ua-mobile': '0',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'cross-site',
      'sec-fetch-user': '1',
      'upgrade-insecure-requests': 1,
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
    };
    const res = await this.ctx.curl(_path, {
      method: 'get',
      headers: _headers,
      timeout: 60000 * 5,
      dataType: 'json',

    });
    if (res.data && !res.data.error) {
      this.ctx.app.cache.set(blockHash, res.data);
    }
    return res.data;

  }
}

module.exports = HomeService;
