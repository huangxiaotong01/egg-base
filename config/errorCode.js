"use strict";

/**
 * 错误码为5位数字
 * 1开头为系统级错误
 * 2开头为服务级错误
 */

exports.errorCode = {
    /* 登陆判断 */

    "CLENT-NOLOGIN": {
        error: 20000,
        msg: "用户没有登录"
    },
    /* 参数错误 */
    "CLIENT-PARAM": {
        error: 20001,
        msg: "参数错误，请参考API文档"
    },
    /* 数据库错误 */
    "DB-FAIL": {
        error: 10001,
        msg: "数据库操作失败"
    }
};
