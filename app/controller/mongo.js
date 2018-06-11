"use strict";

const Controller = require("egg").Controller;

class MongoController extends Controller {
    async index() {
        const ctx = this.ctx;
        // const rs = await ctx.service.mongo.mongoTest();
        throw Error('DB-FAIL');
        // ctx.body = rs;
    }
}

module.exports = MongoController;