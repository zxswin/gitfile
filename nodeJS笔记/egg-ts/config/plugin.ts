import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  /** 开启 sequelize 插件 */
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },

  /** 开启 egg-view-nunjucks 插件 */
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },

  /** 开启验证插件  */
  validate: {
    enable: true,
    package: 'egg-validate',
  },

  /** 启用CORS处理跨域插件 */
  cors: {
    enable: true,
    package: 'egg-cors',
  },

  /** 开启Passport登录鉴权  */
  passport: {
    enable: true,
    package: 'egg-passport',
  },

  passportWeibo: {
    enable: true,
    package: 'egg-passport-weibo',
  },

  passportTwitter: {
    enable: true,
    package: 'egg-passport-twitter',
  },

  passportGithub: {
    enable: true,
    package: 'egg-passport-github',
  },

  passportBitbucket: {
    enable: true,
    package: 'egg-passport-bitbucket',
  },
};

export default plugin;
