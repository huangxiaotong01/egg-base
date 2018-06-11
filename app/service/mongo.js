'use strict';

const Service = require("egg").Service;

class MongoService extends Service {
    async mongoTest() {
        // 不能和sequeize同时使用
        const ctx = this.ctx;
        const rs = await ctx.model.userinfo.find({});
        return rs;
    }
}

module.exports = MongoService;
