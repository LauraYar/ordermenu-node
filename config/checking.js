// 公用参数校验:校验账户名，密码等
class checking {
  // 1.checking类的构造函数传入两个参数（login处的ctx，传来的一些校验的值（不固定有几个。比如account, password）。用展开运算符接收所有传过来的值，然后转换成数组字符串
  constructor(ctx, ...obj) {
    this.ctx = ctx;
    this.obj = obj; //接收一个数组字符串
    console.log(obj);
  }

  // 2.校验前端传来的值为undefined。即开发者把key值写错了。定义一个方法Errunder()
  Errunder() {
    let bvc = this.obj.indexOf(undefined);
    if (bvc !== 1) {
      throw new result('参数填写错误', 400);
    }
  }

  // 3.校验手机号码：正则表达式mobile即抛出的错误提示
  Phone(num) {
    // let phone = /^1[3456789]\d{9}$/;
    // if (!phone.test(this.obj[num])) {
    //   throw new result('错误', 202); //202后端接收请求但不通过
    // }
  }
}

// 注册校验
class regcheck extends checking {
  start() {
    //  new checking(ctx, account, password).Errunder();0，13为数组下标
    super.Errunder();
    super.Phone('请填写正确的手机号', 0);
    super.Password(
      '密码至少8-16个字符，至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符',
      1
    );
  }
}

module.exports = { regcheck }; //导出类为对象
