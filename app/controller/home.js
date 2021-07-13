'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.home.find();
  }
  async show() {
    const { ctx } = this;
    const blockHash = ctx.params.blockhash ? ctx.params.blockhash : '00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa';
    ctx.body = await ctx.service.home.show(blockHash);
  }
}

module.exports = HomeController;
