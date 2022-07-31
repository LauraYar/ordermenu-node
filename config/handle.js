class result extends Error {
  // msg返回给前端的信息msg 状态码code
  constructor(msg, code) {
    super(); //调用父类的构造函数获得父类的this指向
    this.msg = msg;
    this.code = code;
  }
}

module.exports = result;
