// 统一放请求地址 安装运用axios
//获取云开发调用凭证：access_token
const axios = require('axios');
// qs基础课程node自带拼接字符串
const qs = require('querystring');
// const result = require('./handle.js');
// 拼接token url地址
let param = qs.stringify({
  grant_type: 'client_credential',
  appid: 'wxec196dcdb7ef91f2',
  secret: '13ad4aefef121fa21e4b478a44fdab65',
});
// 获取token地址：必须要得到token才有权限操作云开发数据库
let url = 'https://api.weixin.qq.com/cgi-bin/token?' + param;
// 云环境ID
let env = 'ordermenu-9gayr7is2afa1ed9';
// 数据库插入记录url
let Addurl = 'https://api.weixin.qq.com/tcb/databaseadd?access_token=';

// 测试获取token
class getToken {
  constructor() {}
  // 获取token
  async gettoken() {
    try {
      let token = await axios.get(url);
      console.log(token);
      if (token.status == 200) {
        return token.data.access_token;
      } else {
        // 出现throw这个关键字就会进入到catch里面，并且throw给的值会在catch参数里
        throw '获取token错误';
      }
    } catch (e) {
      // console.log(e);
      throw new result(e, 500);
    }
  }

  // 调用云开发http api接口。(接口地址dataurl:增删改查都不一样
  //  数据库参数query)面向对象类里面方法与方法之间没有逗号
  async posteve(dataurl, query) {
    try {
      let token = await this.gettoken(); //用this调用token
      let data = await axios.post(dataurl + token, { env, query });
      console.log(data);
      if (data.data.errcode == 0) {
        return data.data;
      } else {
        throw '请求出错';
      }
    } catch (e) {
      throw new result(e, 500);
    }
  }
}
module.exports = { getToken, Addurl };
