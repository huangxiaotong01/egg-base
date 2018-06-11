
'use strict';

const errorCode = require('../../config/errorCode').errorCode;

module.exports = () => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      // 所有的异常都在 app 上触发一个 error 事件
      ctx.app.emit('error', err, ctx);

      const status = err.status || 500;
      const error = errorCode[err.message];

      ctx.body = error;
      ctx.status = 200;
    }
  };
};
