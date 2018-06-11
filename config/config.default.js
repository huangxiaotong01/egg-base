"use strict";

module.exports = appInfo => {
    const config = (exports = {});

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + "_1528528395747_3385";

    // add your config here
    config.middleware = [];

    // view
    // exports.view = {
    //   defaultViewEngine: 'ejs',
    //   mapping: {
    //     '.ejs': 'ejs',
    //   },
    // };

    config.view = {
        defaultViewEngine: "nunjucks",
        mapping: {
            ".tpl": "nunjucks"
        }
    };

    // 数据库sequelize
    config.sequelize = {
        dialect: "mysql",
        database: "zhusen",
        host: "127.0.0.1",
        port: "3306",
        username: "root",
        password: "adminzhusen"
    };

    // mysql单例模式
    config.mysql = {
        client: {
            host: "localhost",
            port: "3306",
            user: "root",
            password: "adminzhusen",
            database: "zhusen"
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false
    };

    // mongoDB
    // config.mongoose = {
    //     client: {
    //         url: "mongodb://127.0.0.1/local",
    //         options: {}
    //     }
    // };

    config.middleware = [ 'errorHandler' ];

    return config;
};
