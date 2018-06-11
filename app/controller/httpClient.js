'use strict';

const Controller = require('egg').Controller;

class httpController extends Controller {
  async httpTest() {
    const ctx = this.ctx;
    const result = await ctx.service.http.httpClient();

    ctx.body = result;
  }
}

module.exports = httpController;
