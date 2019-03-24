/** 引入了所有的数据库model模型  */
const Models = require("../models");

const login = async (ctx, next) => {
  let username = ctx.request.body.username;
    let password = ctx.request.body.password;

    let user = await Models.Users.findOne({
        where: {
            username
        }
    });

    if (user === null) {
        return ctx.body = {
            code: 1,
            data: '不存在该用户'
        }
    }

    if (user.get('password') !== md5(password)) {
        return ctx.body = {
            code: 1,
            data: '密码错误'
        }
    }

    
    // ctx.cookies.set('uid', user.get('id'), {
    //     httpOnly: false
    // });

    // 服务端发送一个约定好的cookie，来表示当前是登录
    // ctx.cookies.set('uid', user.get('id'), {
    //     // httpOnly，表示当前的cookie是否允许客户端进行操作（js），如果为true，那么就表示这个cookie是能用户http协议的数据传输
    //     httpOnly: true,
    //     signed: true
    // });
    ctx.cookies.set('username', user.get('username'), {
        httpOnly: false
    });

    ctx.session.uid = 1;

    ctx.body = {
        code: 0,
        data: {
            id: user.get('id'),
            username: user.get('username')
        }
    }
};

module.exports = {
  "POST /api/login": login //暴露出对于的url及方法
};
