const Koa = require('koa');
const app = new Koa();
const json = require('koa-json');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')(); //实例化new路由
const cors = require('koa2-cors');
const abnormal = require('./config/abnormal');

app.use(json());
app.use(bodyParser());
app.use(cors());
app.use(abnormal);

// 注册登录的接口
const login = require('./router/login/login');
// 配置路由接口 router.use('/path路径',方法 login);
router.use('/api', login); //一定要加斜杠

// 启动路由
app.use(router.routes()).use(router.allowedMethods());
// 自定义启动端口8000:不能跟其他程序造成端口冲突
app.listen(8000);
console.log('成功');
