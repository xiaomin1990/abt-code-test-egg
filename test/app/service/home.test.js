'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/service/home.test.js', () => {

  it('show', async () => {
    const ctx = app.mockContext();
    const res = await ctx.service.home.show('00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa');
    assert(res);
    assert(res.hash === '00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa');
  });
});
