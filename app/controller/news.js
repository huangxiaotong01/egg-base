"use strict";

const Controller = require("egg").Controller;

class NewsController extends Controller {
    async list() {
        const ctx = this.ctx;
        const data = await ctx.service.news.list();
        await ctx.render("news/list.tpl", data.dataList);
    }
}

module.exports = NewsController;
