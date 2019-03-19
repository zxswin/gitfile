
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

// /** 测试连接  */
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('数据库连接成功');
//   })
//   .catch(err => {
//     console.error('数据库连接失败', err);
//   });

// /** 建立模型  */
// const User = sequelize.define('user', {
//   firstName: {
//     type: Sequelize.STRING
//   },
//   lastName: {
//     type: Sequelize.STRING
//   }
// }, {
//     underscored: true,
//   });

// (async () => {
//   // force: true 如果表已经存在，将会丢弃表
//   await User.sync({ force: true }).then(() => {
//     // 表已创建 添加数据
//     console.log('添加数据');
//     return User.create({
//       firstName: 'John',
//       lastName: 'Hancock'
//     });
//   });

//   /** 建立查询  */
//   await User.findAll().then(users => {
//     console.log('查询数据');
//     console.log(users);
//   })

// })();



// const User = sequelize.define('user', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   },
//   title: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   }
// });

// const Employee = sequelize.define('employee', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   },
//   title: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   }
// });


(async () => {


  // const User = sequelize.define('user', { name: Sequelize.STRING })
  // const Task = sequelize.define('task', { name: Sequelize.STRING })
  // const Tool = sequelize.define('tool', { name: Sequelize.STRING })

  /** 外键会被添加到源模型 Task 中 一个任务对于一个用户  */
  // await Task.belongsTo(User)

  /** 外键会被添加到目标模型 Task 中 一个用户可以有多个任务 */
  // await User.hasMany(Task)

  /** 外键会被添加到目标模型 Tool 中 一个用户可以有多个工具 */
  // await User.hasMany(Tool, { as: 'Instruments' })

  /** 强制创建表  */
  // await sequelize.sync({ force: true });

  // await User.create({ name: 'a' });
  // await User.create({ name: 'ab' });
  // await User.create({ name: 'c' });
  // await User.create({ name: 'd' });
  // await User.create({ name: 'e' });

  // await Task.create({ name: 'aa', userId: '1' });
  // await Task.create({ name: 'aa', userId: '1' });
  // await Task.create({ name: 'task3', userId: '3' });
  // await Task.create({ name: 'task4', userId: '1' });
  // await Task.create({ name: 'task5', userId: '5' });

  // await Tool.create({ name: 'aa', userId: '1' });
  // await Tool.create({ name: 'aa', userId: '1' });
  // await Tool.create({ name: 'tool3', userId: '3' });
  // await Tool.create({ name: 'tool4', userId: '1' });
  // await Tool.create({ name: 'tool5', userId: '5' });



  // User.findAll({ include: [ Task ], order: [ [ Task, 'name' ,'DESC'] ] }).then(v=>{
  //   console.log('v',v);
  // });


  // User.findAll({
  //   attributes: ['name']
  // }).then(v=>{
  //     console.log('v',v);
  //   });



  // // 首先定义模型
  // const Task = sequelize.define('task', {
  //   title: Sequelize.STRING,
  //   rating: { type: Sequelize.STRING, defaultValue: 3 }
  // })

  // /** 强制创建表  */
  // await sequelize.sync({ force: true });


  // // 必须要先创建表格 要不然会报错
  // // 现在实例化一个对象
  // // 还可以使用链式构建来保存和访问对象：
  // await Task
  //   .build({ title: 'foo' , rating: '111r'})
  //   .save()
  //   .then(anotherTask => {
  //     // 您现在可以使用变量 anotherTask 访问当前保存的任务
  //     console.log('anotherTask' , anotherTask);
  //   })
  //   .catch(error => {
  //     // Ooops，做一些错误处理
  //     console.log('error' , error);
  //   })


  // /** 使用  underscored: true User表的字段名都是下划线了  */
  // const User = sequelize.define('user', {/* attributes */ }, { underscored: true })
  // const Company = sequelize.define('company', {
  //   uuid: {
  //     type: Sequelize.UUID,
  //     primaryKey: true
  //   }
  // });

  // User.belongsTo(Company); // 将 company_uuid 添加到 user

  // /** 强制创建表  */
  // await sequelize.sync({ force: true });


  // const User = sequelize.define('user', {/* attributes */ })
  // const UserRole = sequelize.define('userRole', {/* attributes */ });

  // User.belongsTo(UserRole, { as: 'role' }); // 将 role 添加到 user 而不是 userRole 此时外键为roleId




  // const User = sequelize.define('user', {/* attributes */})
  // const Company  = sequelize.define('company', {/* attributes */});

  // User.belongsTo(Company, {foreignKey: 'fk_company'}); // 将 fk_company 添加到 User


  // /** 主表上的外键将指向name字段 而不是指向id  */
  // const User = sequelize.define('user')
  // const Company = sequelize.define('company', {
  //   frendId : {
  //     type: Sequelize.STRING,
  //     allowNull: false,
  //   }
  // });

  // User.belongsTo(Company, { foreignKey: 'fk_companyname', targetKey: 'frendId' }); // 添加 fk_companyname 到 User


  /** 外键必须是唯一索引 且 类型要和关联字段类型一致  字段长度不能定义太长*/
  // const User = sequelize.define('user', {
  //   userId: {
  //     type: Sequelize.INTEGER,
  //     autoIncrement: true,
  //     primaryKey: true
  //   },
  //   name: {
  //     type: Sequelize.STRING,
  //   },
  // });
  // const Comp = sequelize.define('compa', {
  //   compId: {
  //     type: Sequelize.INTEGER,
  //     autoIncrement: true,
  //     primaryKey: true
  //   },
  //   name: {
  //     type: Sequelize.STRING(24),
  //     unique:true,
  //   }
  // });




  // /** 这将创建存储对象的 ID 的表 PersonChildren。  */
  // User.belongsToMany(User, { as: 'Children', through: 'PersonChildren' })





  /** 义关联之前为连接表定义一个模型，然后再说明它应该使用该模型进行连接，而不是创建一个新的关联：  */

  // const User = sequelize.define('user', {})
  // const Project = sequelize.define('project', {})
  // const UserProjects = sequelize.define('userProjects', {
  //   status: Sequelize.STRING
  // })

  // Project.belongsToMany(User, { through: UserProjects, uniqueKey: 'my_custom_unique' })


  const Post = sequelize.define('post');
  const Image = sequelize.define('image');

  const Comment = sequelize.define('comment', {
    title: Sequelize.STRING,
    commentable: Sequelize.STRING,
    commentable_id: Sequelize.INTEGER
  });
  
  // Comment.prototype.getItem = function(options) {
  //   console.log('options==================' , options)
  //   return this['get' + this.get('commentable').substr(0, 1).toUpperCase() + this.get('commentable').substr(1)](options);
  // };
  
  Post.hasMany(Comment, {
    foreignKey: 'commentable_id',
    constraints: false,
    scope: {
      commentable: 'post'
    }
  });
  Comment.belongsTo(Post, {
    foreignKey: 'commentable_id',
    constraints: false,
    as: 'post'
  });
  
  Image.hasMany(Comment, {
    foreignKey: 'commentable_id',
    constraints: false,
    scope: {
      commentable: 'image'
    }
  });
  Comment.belongsTo(Image, {
    foreignKey: 'commentable_id',
    constraints: false,
    as: 'image'
  });



  /** 强制创建表  */
  await sequelize.sync({ force: true });


  /* 会新建worker_tasks 表 有两个主键 其中  userId1 对应 User表的userId字段 compId1 对应 Comp表的compId字段 */
  // User.belongsToMany(Comp, { as: 'Tasks', through: 'worker_tasks', foreignKey: 'userId1', otherKey: 'compId1'})

  // User.belongsTo(Comp, { foreignKey: {
  //   field:'fk_companyname',
  //   type: Sequelize.STRING(24),
  // }, targetKey: 'name'}); // 添加 fk_companyname 到 User


})()










