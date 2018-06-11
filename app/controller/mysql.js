"use strict";

const Controller = require("egg").Controller;

class MysqlController extends Controller {
    async index() {
        const ctx = this.ctx;
        // const mysqlrs = await ctx.service.mysql.mysqlTest();
        const mysqlrs = await ctx.service.mysql.modelTest();
        console.log("mysqlrs>>>>>>>", mysqlrs);
        ctx.body = mysqlrs;
    }
}

module.exports = MysqlController;