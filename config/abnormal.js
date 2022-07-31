// 自定义的全局异常处理
const result = require('./handle.js');
const abnormal = async (ctx, next) => {
  try {
    await next(); //等待下一步
  } catch (err) {
    const isresult = err instanceof result;
    if (isresult) {
      // 已知错误
      ctx.body = {
        msg: err.msg,
      };
      ctx.status = err.code;
    } else {
      ctx.body = {
        // 未知错误
        msg: '服务器发生错误',
      };
      ctx.status = 500;
    }
  }
};

module.exports = abnormal;
