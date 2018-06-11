"use strict";

const Service = require("egg").Service;

class NewsService extends Service {
    async list(page = 1) {
        const dataList = {
            list: [
                { id: 1, title: "this is news 1", url: "/news/1" },
                { id: 2, title: "this is news 2", url: "/news/2" }
            ]
        };
        return { dataList };
    }
}

module.exports = NewsService;
