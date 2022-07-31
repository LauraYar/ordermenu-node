// 统一给前端返回的body响应
class result {
  // 给前端的值：ctx，msg,code,data数据 额外给的值：extra
  constructor(ctx, msg = 'SUCCESS', code = 200, data = null, extra = null) {
    this.ctx = ctx;
    this.msg = msg;
    this.code = code;
    this.data = data;
    this.extra = extra;
  }
  // 统一返回的json格式  result类里面定义一个answer（）方法
  answer() {
    this.ctx.body = {
      msg: this.msg, //给前端的提示：成功or失败
      data: this.data, //返回的数据
      extra: this.extra, //额外的数据（不是必填）
    };
  }
}
// 导出
module.exports = result;
// 接下来去login.js引入// 引入统一给前端返回的body响应// const result = require('../../config/result');
