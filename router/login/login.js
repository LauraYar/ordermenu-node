// 注册登录接口
const router = require('koa-router')(); //1.实例化new路由

// 引入统一给前端返回的body响应
const result = require('../../config/result');

//获取云开发调用凭证：access_token   操作数据库的接口
const { getToken } = require('../../config/databasicApi');
// 校验
const { regcheck } = require('../../config/checking');

// 注册接口
router.post('/register', async (ctx) => {
  // post提交的值在ctx.request.body
  let { account, password } = ctx.request.body;
  // 校验前端传来的值是否合法:如果开发者account或password字写错了，或者用户没填则抛出错误
  new regcheck(ctx, account, password).start();
  // console.log('123');
});

module.exports = router.routes();
