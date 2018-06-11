"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get("/", controller.home.index);
    router.get("/news", controller.news.list); // service测试
    router.get("/http", controller.httpClient.httpTest); // http测试
    router.get("/mysql", controller.mysql.index); // mysql测试
    router.get("/mongo", controller.mongo.index); // mongo测试
};
