
/** 建立连接  */
const Sequelize = require('sequelize');
/** 引入OP对象  */
const Op = Sequelize.Op;
const sequelize = new Sequelize('tsequelize', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+08:00', // 设置时间为东八区时间
});


(async () => {

/** 外键必须是唯一索引 且 类型要和关联字段类型一致  字段长度不能定义太长*/
const User = sequelize.define('user', {
  userId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
  },
});
const Comp = sequelize.define('compa', {
  compId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(24),
    unique:true,
  }
});




/** 会新建 worker_tasks 表 并添加外键字段  compId 和 userId*/
Comp.belongsToMany(User, { as: 'Tasks', through: 'worker_tasks', foreignKey: 'compId' });
User.belongsToMany(Comp, { as: 'Workers', through: 'worker_tasks', foreignKey: 'userId' });

/** 强制创建表  */
await sequelize.sync({ force: true });

})()










