/** 建立连接  */
const Sequelize = require("sequelize");
/** 引入OP对象  */
const Op = Sequelize.Op;
const sequelize = new Sequelize("tsequelize", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: "+08:00" // 设置时间为东八区时间
});

(async () => {
  /** 外键必须是唯一索引 且 类型要和关联字段类型一致  字段长度不能定义太长*/
  const User = sequelize.define("user", {
    name: {
      type: Sequelize.STRING
    }
  });
  const Comp = sequelize.define("compa", {
    comPname: {
      type: Sequelize.STRING(24)
    }
  });

  const UserProjects = sequelize.define("userProjects", {});

  User.belongsToMany(Comp, { through: UserProjects }, { foreignKey: "userId" });
  Comp.belongsToMany(User, { through: UserProjects }, { foreignKey: "compId" });


  /** 强制创建表  */
  await sequelize.sync({ force: true });

  await User.bulkCreate([{ name: "1" }, { name: "2" }, { name: "3" }]);
  await Comp.bulkCreate([
    { comPname: "4" },
    { comPname: "5" },
    { comPname: "6" }
  ]);

  await UserProjects.bulkCreate([
    { userId: 1, compaId: 1 },
    { userId: 1, compaId: 2 },
    { userId: 1, compaId: 3 },
    { userId: 2, compaId: 1 },
    { userId: 3, compaId: 2 },
    { userId: 3, compaId: 3 }
  ]);


  await User.findAll({
    raw: true, // 只会打印出值得部分
    include: [{
      model: Comp,
      attributes: ['id','comPname'],
      through: {
        attributes: ['userId','compaId'],
      }
    }]
  }).then(result => {
    console.log(result); // 返回 查找到的所有条目的数组
  });

  // const User = sequelize.define("user", {
  //   name: {
  //     type: Sequelize.STRING
  //   }
  // });
  // const Comp = sequelize.define("compa", {
  //   comPname: {
  //     type: Sequelize.STRING(24)
  //   }
  // });

  // User.hasMany(Comp, { foreignKey: "userId" });

  // const Test = sequelize.define("test", {
  //   title: {
  //     type: Sequelize.STRING
  //   },
  //   tag: {
  //     type: Sequelize.STRING(40),
  //   }
  // },{
  //   indexes: [
  //     {
  //       name: 't_title', // 设置索引名
  //       fields: ['title'], // 索引对应的栏位
  //       // method: 'BTREE', // 使用的索引方法
  //     },
  //   ]
  // });

  // await Test.bulkCreate([
  //   { title: "title1",tag:"tag1"},
  //   { title: "title1",tag:"tag2"},
  //   { title: "title2",tag:"tag3"},
  //   { title: "title1",tag:"tag4"},
  //   { title: "title2",tag:"tag5"},
  //   { title: "title1",tag:"tag6"},
  // ]);
  // User.create({ name: "666666", })

  // await User.bulkCreate([
  //   { name: "1"},
  //   { name: "11"},
  //   { name: "111"},
  //   { name: "1"},
  //   { name: "11"},
  //   { name: "111"},
  // ]);
  // await Comp.bulkCreate([
  //   { comPname: "3" , userId: 1},
  //   { comPname: "33", userId: 2},
  //   { comPname: "333" , userId: 1},
  //   { comPname: "3" , userId: 1},
  //   { comPname: "33", userId: 2},
  //   { comPname: "333" , userId: 1},
  // ]);

  // await User.findAll({
  //   raw: true, // 只会打印出值得部分
  //   include: [ Comp ],
  // }).then(result => {
  //   console.log(result); // 返回 查找到的所有条目的数组
  // });

  // await User.findOne({
  //   raw: true, // 只会打印出值得部分
  // }).then(result => {
  //   console.log(result); // 包含 count rows属性的对象
  // });

  // let user = await User.findById(1);
  // user.destroy();

  // await User.update(
  //   {
  //     name: "666"
  //   },
  //   {
  //     where: {
  //       name: "11"
  //     }
  //   }
  // );

  // /** 第一种修改值的方法  */
  // user.get('name');
  // user.set('name' , '1000000');
  // user.save();

  // /** 第二种修改值的方法  */
  // user.name = '8888';
  // user.save();

  // /** 第三中修改值的方法  */
  // user.update({
  //   name: '999999'
  // });
})();


