# 环境搭建
## 安装sequelize
npm install --save sequelize
## 安装mysql模块
npm install --save mysql2

## 新建一个测试数据库
支持四个字节字符 utf8mb4
字符集支持区分大小写 utf8mb4 -- UTF-8 Unicode  
排序规则不区分大小写 utf8mb4_general_ci

## 使用 Sequelize 连接数据库 简单的起步案例

/** 建立连接  */
const Sequelize = require('sequelize');
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

/** 测试连接  */
sequelize
  .authenticate()
  .then(() => {
    console.log('数据库连接成功');
  })
  .catch(err => {
    console.error('数据库连接失败', err);
  });

/** 建立模型  */
const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

(async () => {
  // force: true 如果表已经存在，将会丢弃表
  await User.sync({force: true}).then(() => {
    // 表已创建 添加数据
    console.log('添加数据');
    return User.create({
      firstName: 'John',
      lastName: 'Hancock'
    });
  });

  /** 建立查询  */
  await User.findAll().then(users => {
    console.log('查询数据');
    console.log(users);
  })

})();

## 设置时区
1.mysql设置时区
set global time_zone = '+8:00'; ##修改mysql全局时区为北京时间，即我们所在的东8区
set time_zone = '+8:00'; ##修改当前会话时区
flush privileges; #立即生效

3.sequelize设置时区
配置设置字段
timezone: '+08:00', // 设置时间为东八区时间

## 应用全局的模型参数
const sequelize = new Sequelize('connectionUri', {
  define: {
    timestamps: false // 默认为 true
  }
});

const User = sequelize.define('user', {}); // 时间戳默认为 false
const Post = sequelize.define('post', {}, {
  timestamps: true // 时间戳此时为 true
});


# 模型定义
## 定义模型
要定义模型和表之间的映射，请使用define方法。 随后Sequelize将自动添加createdAt和updatedAt属性。

## 使用Getters & setters 设置值 和 获取值
const Employee = sequelize.define('employee', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    /** 改装get()方法返回的值  */
    get() {
      const title = this.getDataValue('title');
      // 'this' 允许你访问实例的属性
      return this.getDataValue('name') + ' (' + title + ')';
    },
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    /** 设置值转为大写  */
    set(val) {
      this.setDataValue('title', val.toUpperCase());
    }
  }
});

Employee.sync({ force: true }).then(() => {

  return Employee
    .create({ name: 'John Doe', title: 'senior engineer' })
    .then(employee => {
      /* 这里的get(字段)的方法 返回特定字段的值 */
      console.log(employee.get('name')); // John Doe (SENIOR ENGINEER)
      console.log(employee.get('title')); // SENIOR ENGINEER
    })
})


## 验证
验证会自动运行在 create ， update 和 save 上。 你也可以调用 validate() 手动验证一个实例。
验证由 validator.js 实现。

### 验证类型
is: ["^[a-z]+$",'i'],     // 只允许字母
is: /^[a-z]+$/i,          // 与上一个示例相同,使用了真正的正则表达式
not: ["[a-z]",'i'],       // 不允许字母
isEmail: true,            // 检查邮件格式 (foo@bar.com)
isUrl: true,              // 检查连接格式 (http://foo.com)
isIP: true,               // 检查 IPv4 (129.89.23.1) 或 IPv6 格式
isIPv4: true,             // 检查 IPv4 (129.89.23.1) 格式
isIPv6: true,             // 检查 IPv6 格式
isAlpha: true,            // 只允许字母
isAlphanumeric: true,     // 只允许使用字母数字
isNumeric: true,          // 只允许数字
isInt: true,              // 检查是否为有效整数
isFloat: true,            // 检查是否为有效浮点数
isDecimal: true,          // 检查是否为任意数字
isLowercase: true,        // 检查是否为小写
isUppercase: true,        // 检查是否为大写
notNull: true,            // 不允许为空
isNull: true,             // 只允许为空
notEmpty: true,           // 不允许空字符串
equals: 'specific value', // 只允许一个特定值
contains: 'foo',          // 检查是否包含特定的子字符串
notIn: [['foo', 'bar']],  // 检查是否值不是其中之一
isIn: [['foo', 'bar']],   // 检查是否值是其中之一
notContains: 'bar',       // 不允许包含特定的子字符串
len: [2,10],              // 只允许长度在2到10之间的值
isUUID: 4,                // 只允许uuids
isDate: true,             // 只允许日期字符串
isAfter: "2011-11-05",    // 只允许在特定日期之后的日期字符串
isBefore: "2011-11-05",   // 只允许在特定日期之前的日期字符串
max: 23,                  // 只允许值 <= 23
min: 23,                  // 只允许值 >= 23
isCreditCard: true,       // 检查有效的信用卡号码

### 代码示例
const Employee = sequelize.define('employee', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    /**设置校验规则  */
    validate: {
      is: ["^[a-z]+$",'i'],     // 只允许字母
    },
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

Employee.sync({ force: true }).then(() => {

  return Employee
    .create({ name: 'JohnDoe', title: 'senior engineer' })
    .then(employee => {
      console.log('执行成功')
    })
})

### 自定义验证写法
validate: {
  /** 自定义校验函数  */
  isEven(value) {
    if (parseInt(value) % 2 != 0) {
      throw new Error('Only even values are allowed!')
    }
  }
},

### 验证器 与 allowNull
如果模型的特定字段设置为允许null（使用allowNull：true）

### 模型验证(不能有一个字段为空一个字段有值)
const Employee = sequelize.define('employee', {
  name: {
    type: Sequelize.STRING,
    allowNull: true,
    /**设置校验规则  */
    validate: {
      is: ["^[a-z]+$", 'i'],     // 只允许字母
    },
  },
  title: {
    type: Sequelize.STRING,
    allowNull: true,
  }
}, {
    /** 设置校验规则  */
    validate: {
      /** 这个方法名可以随便设置而不影响效果  */
      bothCoordsOrNone() {
        if ((this.name === null) !== (this.title === null)) {
          throw new Error('不能有一个字段为空一个字段有值');
        }
      }
    }
  });

Employee.sync({ force: true }).then(() => {
  return Employee
    .create({ name: 'aaa', title: 'title' })
    .then(employee => {
      console.log('执行成功')
    })
})


## 配置
timestamps: false, // 不添加时间戳属性 (updatedAt, updatedAt)
paranoid: true, // 不删除数据库条目，但将新添加的属性deletedAt设置为当前日期（删除完成时）。 
                // paranoid 只有在启用时间戳时才能工作
underscored: true,
                // 将自动设置所有属性的字段选项为下划线命名方式。
                // 不会覆盖已经定义的字段选项(经测试只有updatedAt,updatedAt 为下划线显示)
freezeTableName: true, // 禁用修改表名; 默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数。 如果你不想这样，请设置以下内容

tableName: 'my_very_custom_table_name', // 定义表的名称

version: true
            // 启用乐观锁定。 启用时，sequelize将向模型添加版本计数属性，
            // 并在保存过时的实例时引发OptimisticLockingError错误。
            // 设置为true或具有要用于启用的属性名称的字符串。

### 处理默认时间戳字段
const Foo = sequelize.define('foo',  { /* bla */ }, {
  // 不要忘记启用时间戳！
  timestamps: true,

  // 我不想要 createdAt
  createdAt: false,

  // 我想 updateAt 实际上被称为 updateTimestamp
  updatedAt: 'updateTimestamp',

  // 并且希望 deletedAt被称为 destroyTime（请记住启用paranoid以使其工作）
  deletedAt: 'destroyTime',
  paranoid: true
})

### 更改数据库引擎
const Person = sequelize.define('person', { /* attributes */ }, {
  engine: 'MYISAM'
})

// 或全局的
const sequelize = new Sequelize(db, user, pw, {
  define: { engine: 'MYISAM' }
})

### MySQL和PG中的表指定注释
const Person = sequelize.define('person', { /* attributes */ }, {
  comment: "I'm a table comment!"
})

## 数据类型
Sequelize.STRING                      // VARCHAR(255)
Sequelize.STRING(1234)                // VARCHAR(1234)
Sequelize.STRING.BINARY               // VARCHAR BINARY
Sequelize.TEXT                        // TEXT
Sequelize.TEXT('tiny')                // TINYTEXT

Sequelize.INTEGER                     // INTEGER
Sequelize.BIGINT                      // BIGINT
Sequelize.BIGINT(11)                  // BIGINT(11)

Sequelize.FLOAT                       // FLOAT
Sequelize.FLOAT(11)                   // FLOAT(11)
Sequelize.FLOAT(11, 12)               // FLOAT(11,12)

Sequelize.DOUBLE                      // DOUBLE
Sequelize.DOUBLE(11)                  // DOUBLE(11)
Sequelize.DOUBLE(11, 12)              // DOUBLE(11,12)

Sequelize.DECIMAL                     // DECIMAL
Sequelize.DECIMAL(10, 2)              // DECIMAL(10,2)

Sequelize.DATE                        // DATETIME 针对 mysql / sqlite, TIMESTAMP WITH TIME ZONE 针对 postgres
Sequelize.DATE(6)                     // DATETIME(6) 针对 mysql 5.6.4+. 小数秒支持多达6位精度
Sequelize.DATEONLY                    // DATE 不带时间.
Sequelize.BOOLEAN                     // TINYINT(1)

Sequelize.ENUM('value 1', 'value 2')  // 一个允许具有 “value 1” 和 “value 2” 的 ENUM

Sequelize.GEOMETRY                    // 空间列.  仅限于 PostgreSQL (具有 PostGIS) 或 MySQL.
Sequelize.GEOMETRY('POINT')           // 具有几何类型的空间列.  仅限于 PostgreSQL (具有 PostGIS) 或 MySQL.
Sequelize.GEOMETRY('POINT', 4326)     // 具有几何类型和SRID的空间列.  仅限于 PostgreSQL (具有 PostGIS) 或 MySQL.


## 导入
// 在你的服务器文件中 - 例如 app.js
const Project = sequelize.import(__dirname + "/path/to/models/project")

### import方法也可以接受回调作为参数。
sequelize.import('project', (sequelize, DataTypes) => {
  return sequelize.define("project", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  })
})

## 数据库同步
// 创建表:
Project.sync()
Task.sync()

// 强制创建!
Project.sync({force: true}) // 这将先丢弃表，然后重新创建它

// 删除表:
Project.drop()
Task.drop()

// 事件处理:
Project.[sync|drop]().then(() => {
  // 好吧...一切都很好！
}).catch(error => {
  // oooh，你输入了错误的数据库凭据？
})

### 创建或 删除所有表
// 同步所有尚未在数据库中的模型
sequelize.sync()

// 强制同步所有模型
sequelize.sync({force: true})

// 删除所有表
sequelize.drop()

// 广播处理:
sequelize.[sync|drop]().then(() => {
  // woot woot
}).catch(error => {
  // whooops
})

### .sync({ force: true })是具有破坏性的操作
// 只有当数据库名称以'_test'结尾时，才会运行.sync（）
sequelize.sync({ force: true, match: /_test$/ });

### 删除所有在模型中定义过的数据库
const Employee = sequelize.define('employee', {
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: true,
  }
});

/** 删除所有在模型中定义过的数据库  */
sequelize.sync({ force: true }).then(() => {
  return sequelize.drop().then(()=>{
    console.log('删除成功');
  });
})

## MySQL 的两个特殊属性 unsigned与 zerofill
1.unsigned 就是将数字类型无符号化
2.zerofill 自动补零啊，比如你的类型是INT(4),你插入了3，数据库里保存的是0003

## 模型使用
### find - 搜索数据库中的一个特定元素

#### findById
/** 获取表中存为 id = 1 的条目内容 没有为null  */
await Employee.findById(1).then((project) => { 
  console.log('project===========================');
  console.log(project);
})

#### findOne
/** 获取表中存为 title = 'title' 的第一个个条目内容 没有为null  */
await Employee.findOne({ where: {title: 'title'} }).then((project) => { 
  console.log('project===========================');
  console.log(project);
})

#### attributes 返回指定属性内容
/** 获取表中存为 title = 'title' 的第一个个条目内容 没有为null  */
await Employee.findOne({
  where: { title: 'title' },
  attributes: ['id', 'name'], // 返回的数据仅包含了 id 和 name两个字段内容 不设置为全部返回
}).then((project) => {
  console.log('project===========================');
  console.log(project);
})

#### findOrCreate - 搜索特定元素或创建它（如果不可用）
findOrCreate  返回的是一个数字 .spread() 把它拓展为2部分 并作为参数传递给回调函数
await Employee.findOrCreate({ where: { name: 'sdepold' }, defaults: { title: 'Technical Lead JavaScript' } })
.spread((user, created) => {
  /**
    * 所以“user”将是返回数组的索引0的对象，并且 "created" 将等于 "true" 或 "false"。 
    * user.get() 获取条目的值
    * */
  console.log(user.get({plain: true}))
  console.log(created); // 创建一个新对象将为true，否则为false
})

#### findAndCountAll - 在数据库中搜索多个元素，返回数据和总计数
await Employee.findAndCountAll({
  where: {name: 'foosdepold'}, // 查找条件
  offset: 0, // 从索引为0的记录开始查找
  limit: 2 // 最多查找2条记录
}).then(result => {
  console.log(result); // 包含 count rows属性的对象
  console.log(result.count); // 匹配记录条目的总记录数
  console.log(result.rows); // 包含匹配记录条目的数组
});

#### findAll - 搜索数据库中的多个元素
/** 引入OP对象  */
const Op = Sequelize.Op;  

await Employee.findAll({ 
  where: { 
    id: [1,2,3,4,5,6] , // 设置查找条件 设置查找范围
    name: {
      [Op.like]: '%name',         // 包含 '%name'
    }
  },
}).then(result => {
  console.log(result); // 返回 查找到的所有条目的数组
});

##### OP对象
[Op.and]: {a: 5},           // 且 (a = 5)
[Op.or]: [{a: 5}, {a: 6}],  // (a = 5 或 a = 6)
[Op.gt]: 6,                // id > 6
[Op.gte]: 6,               // id >= 6
[Op.lt]: 10,               // id < 10
[Op.lte]: 10,              // id <= 10
[Op.ne]: 20,               // id != 20
[Op.between]: [6, 10],     // 在 6 和 10 之间
[Op.notBetween]: [11, 15], // 不在 11 和 15 之间
[Op.in]: [1, 2],           // 在 [1, 2] 之中
[Op.notIn]: [1, 2],        // 不在 [1, 2] 之中
[Op.like]: '%hat',         // 包含 '%hat'
[Op.notLike]: '%hat',       // 不包含 '%hat'
[Op.iLike]: '%hat',         // 包含 '%hat' (不区分大小写)  (仅限 PG)
[Op.notILike]: '%hat',      // 不包含 '%hat'  (仅限 PG)
[Op.overlap]: [1, 2],       // && [1, 2] (PG数组重叠运算符)
[Op.contains]: [1, 2],      // @> [1, 2] (PG数组包含运算符)
[Op.contained]: [1, 2],     // <@ [1, 2] (PG数组包含于运算符)
[Op.any]: [2,3],            // 任何数组[2, 3]::INTEGER (仅限 PG)
[Op.not]: false,           // status 不为 FALSE

#### 复合过滤 / OR / NOT 查询
##### OR
await Employee.findAll({ 
  where: { 
    [Op.or]: [
      { id: [1,2,3] },
      { id: { [Op.gt]: 4 } }
    ]
  },
}).then(result => {
  console.log(result); // 返回 查找到的所有条目的数组
});

##### NOT
await Employee.findAll({ 
  where: { 
    [Op.not]: [
      { id: [1,2,3] },
    ]
  },
}).then(result => {
  console.log(result); // 返回 查找到的所有条目的数组
});

#### 用限制，偏移，顺序和分组操作数据集

##### 限制，偏移
// 限制查询的结果
Project.findAll({ limit: 10 })

// 跳过前10个元素
Project.findAll({ offset: 10 })

// 跳过前10个元素，并获取2个
Project.findAll({ offset: 10, limit: 2 })

##### 排序
await Employee.findAll({ 
  order: [
    ['id', 'ASC'], // 升序
    // ['id', 'DESC'], // 降序
  ]
}).then(result => {
  console.log(result); // 返回 查找到的所有条目的数组
});

##### 分组
SELECT class_id, COUNT(*) num FROM students GROUP BY class_id;
await Employee.findAll({ 
  group: 'title'
}).then(result => {
  console.log(result); // 返回 查找到的所有条目的数组
});

##### 转义列名
Sequelize.fn 和 Sequelize.col 返回函数和引用的列名
something.findOne({
  order: [
    // 将返回 `name`
    ['name'],
    // 将返回 `username` DESC
    ['username', 'DESC'],
    // 将返回 max(`age`)
    sequelize.fn('max', sequelize.col('age')),
    // 将返回 max(`age`) DESC
    [sequelize.fn('max', sequelize.col('age')), 'DESC'],
    // 将返回 otherfunction(`col1`, 12, 'lalala') DESC
    [sequelize.fn('otherfunction', sequelize.col('col1'), 12, 'lalala'), 'DESC'],
    // 将返回 otherfunction(awesomefunction(`col`)) DESC，这个嵌套是可以无限的！
    [sequelize.fn('otherfunction', sequelize.fn('awesomefunction', sequelize.col('col'))), 'DESC']
  ]
})

#### 原始查询
await Employee.findAll({ 
  where: { name:'name'},
  raw: true, // 只会打印出值得部分
}).then(result => {
  console.log(result); // 返回 查找到的所有条目的数组
});


#### count - 计算数据库中元素的出现次数
await Employee.count({ 
  where: { name:'name'},
}).then(c => {
  console.log(c); // 返回符号条件的查询条目出现的次数
});

#### max - 获取特定表中特定属性的最大值
await Employee.max('id',{ 
  where: { name:'name'},
}).then(max  => {
  console.log(max ); // 返回符号条件的最大id
});

#### min - 获取特定表中特定属性的最小值
await Employee.min('id',{ 
  where: { name:'name'},
}).then(min  => {
  console.log(min ); // 返回符号条件的最大id
});

#### sum - 特定属性的值求和
await Employee.sum('id',{ 
  where: { name:'name'},
}).then(sum  => {
  console.log(sum ); // 返回符号条件的最大id
});


#### 预加载
当你从数据库检索数据时，也想同时获得与之相关联的查询，这被称为预加载。

##### belongsTo 一对一关系
Model.belongsTo() － 属于
Model.belongsTo(target, [options])
创建当前模型（源）到目标模型之间的关系，外键会被添加到源模型中。

##### hasMany 一对多关系
Model.hasMany() － 拥有多个
Model.hasMany(target, [options])
创建当前模型（源）到目标模型之间的 1:m 的关系，外键会被添加到目标模型中。

##### include 用一对一的关联加载数据！或  用一对多的关联加载数据！
(async () => {

  const User = sequelize.define('user', { name: Sequelize.STRING })
  const Task = sequelize.define('task', { name: Sequelize.STRING })
  const Tool = sequelize.define('tool', { name: Sequelize.STRING })

  /** 外键会被添加到源模型 Task 中 一个任务对于一个用户  */
  await Task.belongsTo(User)

  /** 外键会被添加到目标模型 Task 中 一个用户可以有多个任务 */
  await User.hasMany(Task)

  /** 外键会被添加到目标模型 Tool 中 一个用户可以有多个工具 */
  await User.hasMany(Tool, { as: 'Instruments' })

  /** 强制创建表  */
  await sequelize.sync({ force: true });

  await User.create({ name: 'a'});
  await User.create({ name: 'b'});
  await User.create({ name: 'c'});
  await User.create({ name: 'd'});
  await User.create({ name: 'e'});

  await Task.create({ name: 'task1', userId: '1' });
  await Task.create({ name: 'task2', userId: '1' });
  await Task.create({ name: 'task3', userId: '3' });
  await Task.create({ name: 'task4', userId: '1' });
  await Task.create({ name: 'task5', userId: '5' });


  /** include 用一对一的关联加载数据！ 返回的字段中 user 字段是单数形式 */
  await Task.findAll({ include: [ User ] }).then(tasks => {
    console.log(JSON.stringify(tasks))
  
    /*
      [{
        "name": "A Task",
        "id": 1,
        "createdAt": "2013-03-20T20:31:40.000Z",
        "updatedAt": "2013-03-20T20:31:40.000Z",
        "userId": 1,
        "user": {
          "name": "John Doe",
          "id": 1,
          "createdAt": "2013-03-20T20:31:45.000Z",
          "updatedAt": "2013-03-20T20:31:45.000Z"
        }
      }]
    */
  })

  /* include 用一对多的关联加载数据！ 返回的字段中tasks 属性是复数形式*/
  await User.findAll({ include: [ Task ] }).then(users => {
    console.log(JSON.stringify(users))
  
    /*
      [{
        "name": "John Doe",
        "id": 1,
        "createdAt": "2013-03-20T20:31:45.000Z",
        "updatedAt": "2013-03-20T20:31:45.000Z",
        "tasks": [{
          "name": "A Task",
          "id": 1,
          "createdAt": "2013-03-20T20:31:40.000Z",
          "updatedAt": "2013-03-20T20:31:40.000Z",
          "userId": 1
        }]
      }]
    */
  })
})()

##### 如果关联是别名的（使用 as 参数），则在包含模型时必须指定此别名。
/** 使用别名 as: 'Instruments'   */
await User.findAll({ include: [{ model: Tool, as: 'Instruments' }] }).then(users => {
  console.log(JSON.stringify(users))

  /*
    [{
      "name": "John Doe",
      "id": 1,
      "createdAt": "2013-03-20T20:31:45.000Z",
      "updatedAt": "2013-03-20T20:31:45.000Z",
      "Instruments": [{
        "name": "Toothpick",
        "id": 1,
        "createdAt": null,
        "updatedAt": null,
        "userId": 1
      }]
    }]
  */
})

##### 当预加载时，我们也可以使用 where 过滤关联的模型。
include.where 过滤一个预加载的模型时，include.required 被隐式设置为 true。

await User.findAll({
  include: [{
      model: Tool,
      as: 'Instruments',
      where: { name: { [Op.like]: '%a%' } }
  }]
}).then(users => {
  console.log(JSON.stringify(users))

  /*
    [{
      "name": "John Doe",
      "id": 1,
      "createdAt": "2013-03-20T20:31:45.000Z",
      "updatedAt": "2013-03-20T20:31:45.000Z",
      "Instruments": [{
        "name": "Toothpick",
        "id": 1,
        "createdAt": null,
        "updatedAt": null,
        "userId": 1
      }]
    }],

    [{
      "name": "John Smith",
      "id": 2,
      "createdAt": "2013-03-20T20:31:45.000Z",
      "updatedAt": "2013-03-20T20:31:45.000Z",
      "Instruments": [{
        "name": "Toothpick",
        "id": 1,
        "createdAt": null,
        "updatedAt": null,
        "userId": 1
      }]
    }],
  */
})

#### 使用预加载模型的顶层 WHERE 经过试验 会报错

#### 要包含所有属性，您可以使用 all：true 传递单个对象：

/** 会把所有关联的字段均价进去  */
await User.findAll({ include: [{ all: true }]}).then(v=>{
  console.log('values',v)
});

#### 包括软删除的记录
如果想要加载软删除的记录，可以通过将 include.paranoid 设置为 false 来实现

User.findAll({
    include: [{
        model: Tool,
        where: { name: { [Op.like]: '%ooth%' } },
        paranoid: false 
    }]
});

#### 排序预加载关联
##### 在一对多关系的情况下。
Company.findAll({ include: [ Division ], order: [ [ Division, 'name' ] ] });
Company.findAll({ include: [ Division ], order: [ [ Division, 'name', 'DESC' ] ] });
Company.findAll({
  include: [ { model: Division, as: 'Div' } ],
  order: [ [ { model: Division, as: 'Div' }, 'name' ] ]
});
Company.findAll({
  include: [ { model: Division, as: 'Div' } ],
  order: [ [ { model: Division, as: 'Div' }, 'name', 'DESC' ] ]
});
Company.findAll({
  include: [ { model: Division, include: [ Department ] } ],
  order: [ [ Division, Department, 'name' ] ]
});

##### 在多对多关系的情况下，您还可以通过表中的属性进行排序。
Company.findAll({
  include: [ { model: Division, include: [ Department ] } ],
  order: [ [ Division, DepartmentDivision, 'name' ] ]
});

#### 嵌套预加载
##### 您可以使用嵌套的预加载来加载相关模型的所有相关模型：
User.findAll({
  include: [
    {model: Tool, as: 'Instruments', include: [
      {model: Teacher, include: [ /* etc */]}
    ]}
  ]
}).then(users => {
  console.log(JSON.stringify(users))

  /*
    [{
      "name": "John Doe",
      "id": 1,
      "createdAt": "2013-03-20T20:31:45.000Z",
      "updatedAt": "2013-03-20T20:31:45.000Z",
      "Instruments": [{ // 1:M and N:M association
        "name": "Toothpick",
        "id": 1,
        "createdAt": null,
        "updatedAt": null,
        "userId": 1,
        "Teacher": { // 1:1 association
          "name": "Jimi Hendrix"
        }
      }]
    }]
  */
})


##### 要返回所有父实例，您应该添加 required: false。

User.findAll({
  include: [{
    model: Tool,
    as: 'Instruments',
    include: [{
      model: Teacher,
      where: {
        school: "Woodstock Music School"
      },
      required: false
    }]
  }]
}).then(users => {
  /* ... */
})

## Querying - 查询

### 属性
#### 想要只选择某些属性，可以使用 attributes 选项。
Model.findAll({
  attributes: ['foo', 'bar']
});
SELECT foo, bar ...

#### 属性可以使用嵌套数组来重命名：
Model.findAll({
  attributes: ['foo', ['bar', 'baz']]
});
SELECT foo, bar AS baz ...

#### 也可以使用 sequelize.fn 来进行聚合：
Model.findAll({
  attributes: [[sequelize.fn('COUNT', sequelize.col('hats')), 'no_hats']]
});
SELECT COUNT(hats) AS no_hats ...

#### 使用聚合功能时，必须给它一个别名，以便能够从模型中访问它。
使用 instance.get('no_hats') 获得帽子数量。

#### 添加聚合 而不用列出模型中的所有属性
Model.findAll({
  attributes: { include: [[sequelize.fn('COUNT', sequelize.col('hats')), 'no_hats']] }
});
SELECT id, foo, bar, baz, quz, COUNT(hats) AS no_hats ...

#### 排除一些指定的表字段
Model.findAll({
  attributes: { exclude: ['baz'] }
});
SELECT id, foo, bar, quz ...

### Where
#### 基础
const Op = Sequelize.Op;

Post.findAll({
  where: {
    authorId: 2
  }
});
// SELECT * FROM post WHERE authorId = 2

Post.findAll({
  where: {
    authorId: 12,
    status: 'active'
  }
});
// SELECT * FROM post WHERE authorId = 12 AND status = 'active';

Post.findAll({
  where: {
    [Op.or]: [{authorId: 12}, {authorId: 13}]
  }
});
// SELECT * FROM post WHERE authorId = 12 OR authorId = 13;

Post.findAll({
  where: {
    authorId: {
      [Op.or]: [12, 13]
    }
  }
});
// SELECT * FROM post WHERE authorId = 12 OR authorId = 13;

Post.destroy({
  where: {
    status: 'inactive'
  }
});
// DELETE FROM post WHERE status = 'inactive';

Post.update({
  updatedAt: null,
}, {
  where: {
    deletedAt: {
      [Op.ne]: null
    }
  }
});
// UPDATE post SET updatedAt = null WHERE deletedAt NOT NULL;

Post.findAll({
  where: sequelize.where(sequelize.fn('char_length', sequelize.col('status')), 6)
});
// SELECT * FROM post WHERE char_length(status) = 6;

#### 操作符 组合
{
  rank: {
    [Op.or]: {
      [Op.lt]: 1000,
      [Op.eq]: null
    }
  }
}
// rank < 1000 OR rank IS NULL

{
  createdAt: {
    [Op.lt]: new Date(),
    [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)
  }
}
// createdAt < [timestamp] AND createdAt > [timestamp]

{
  [Op.or]: [
    {
      title: {
        [Op.like]: 'Boat%'
      }
    },
    {
      description: {
        [Op.like]: '%boat%'
      }
    }
  ]
}
// title LIKE 'Boat%' OR description LIKE '%boat%'

#### 运算符别名
const Op = Sequelize.Op;
const operatorsAliases = {
  $gt: Op.gt
}
const connection = new Sequelize(db, user, pass, { operatorsAliases })

[Op.gt]: 6 // > 6
$gt: 6 // 等同于使用 Op.gt (> 6)

##### 不用任何操作符别名使用 sequelize 
const Op = Sequelize.Op;
const connection = new Sequelize(db, user, pass, { operatorsAliases: false });

##### 只用 $and => Op.and 操作符别名使用 sequelize 
const connection2 = new Sequelize(db, user, pass, { operatorsAliases: { $and: Op.and } });


####  关系 / 关联
// 找到所有具有至少一个 task 的  project，其中 task.state === project.state
Project.findAll({
    include: [{
        model: Task,
        where: { state: Sequelize.col('project.state') }
    }]
})

#### 分页 / 限制
// 获取10个实例/行
Project.findAll({ limit: 10 })

// 跳过8个实例/行
Project.findAll({ offset: 8 })

// 跳过5个实例，然后取5个
Project.findAll({ offset: 5, limit: 5 })

#### 排序
Subtask.findAll({
  order: [
    // 将转义标题，并根据有效的方向参数列表验证DESC
    ['title', 'DESC'],

    // 将按最大值排序(age)
    sequelize.fn('max', sequelize.col('age')),

    // 将按最大顺序(age) DESC
    [sequelize.fn('max', sequelize.col('age')), 'DESC'],

    // 将按 otherfunction 排序(`col1`, 12, 'lalala') DESC
    [sequelize.fn('otherfunction', sequelize.col('col1'), 12, 'lalala'), 'DESC'],

    // 将使用模型名称作为关联的名称排序关联模型的 created_at。
    [Task, 'createdAt', 'DESC'],

    // Will order through an associated model's created_at using the model names as the associations' names.
    [Task, Project, 'createdAt', 'DESC'],

    // 将使用关联的名称由关联模型的created_at排序。
    ['Task', 'createdAt', 'DESC'],

    // Will order by a nested associated model's created_at using the names of the associations.
    ['Task', 'Project', 'createdAt', 'DESC'],

    // Will order by an associated model's created_at using an association object. (优选方法)
    [Subtask.associations.Task, 'createdAt', 'DESC'],

    // Will order by a nested associated model's created_at using association objects. (优选方法)
    [Subtask.associations.Task, Task.associations.Project, 'createdAt', 'DESC'],

    // Will order by an associated model's created_at using a simple association object.
    [{model: Task, as: 'Task'}, 'createdAt', 'DESC'],

    // 嵌套关联模型的 created_at 简单关联对象排序
    [{model: Task, as: 'Task'}, {model: Project, as: 'Project'}, 'createdAt', 'DESC']
  ]
  
  // 将按年龄最大值降序排列
  order: sequelize.literal('max(age) DESC')

  // 按最年龄大值升序排列，当省略排序条件时默认是升序排列
  order: sequelize.fn('max', sequelize.col('age'))

  // 按升序排列是省略排序条件的默认顺序
  order: sequelize.col('age')
  
  // 将根据方言随机排序 (而不是 fn('RAND') 或 fn('RANDOM'))
  order: sequelize.random()
})

## Instances - 实例

### 构建非持久性实例

// 首先定义模型
const Task = sequelize.define('task', {
  title: Sequelize.STRING,
  rating: { type: Sequelize.STRING, defaultValue: 3 }
})

/** 强制创建表  */
await sequelize.sync({ force: true });


// 必须要先创建表格 要不然会报错
// 现在实例化一个对象
// 还可以使用链式构建来保存和访问对象：
await Task
  .build({ title: 'foo'}) // 能自动获取默认值
  .save()
  .then(anotherTask => {
    // 您现在可以使用变量 anotherTask 访问当前保存的任务
    console.log('anotherTask' , anotherTask);
  })
  .catch(error => {
    // Ooops，做一些错误处理
    console.log('error' , error);
  })


### 创建持久性实例

#### .create() 一旦调用就自动存储实例的数据
Task.create({ title: 'foo', description: 'bar', deadline: new Date() }).then(task => {
  // 你现在可以通过变量 task 来访问新创建的 task
})

#### create 方法可以限制那些属性可以设置
User.create({ username: 'barfooz', isAdmin: true }, { fields: [ 'username' ] }).then(user => {
  // 我们假设 isAdmin 的默认值为 false：
  console.log(user.get({
    plain: true
  })) // => { username: 'barfooz', isAdmin: false }
})

### 更新 / 保存 / 持久化一个实例

#### 更新值的两种方式
// 方法 1
task.title = 'a very different title now'
task.save().then(() => {})
 
// 方法 2
task.update({
  title: 'a very different title now'
}).then(() => {})

#### 也可以限制某些字段值的更新
task.title = 'foooo'
task.description = 'baaaaaar'
task.save({fields: ['title']}).then(() => {
 // title 现在将是 “foooo”，而 description 与以前一样
})
 
// 使用等效的 update 调用如下所示:
task.update({ title: 'foooo', description: 'baaaaaar'}, {fields: ['title']}).then(() => {
 //  title 现在将是 “foooo”，而 description 与以前一样
})

### 销毁 / 删除持久性实例

#### 创建对象并获得对象的引用后，可以从数据库中删除它。 相关的方法是 destroy：
Task.create({ title: 'a task' }).then(task => {
  // 获取到 task 对象...
  return task.destroy();
}).then(() => {
 // task 对象已被销毁
})

#### 强制删除
如果 paranoid 选项为 true，则不会删除该对象，而将 deletedAt 列设置为当前时间戳。 要强制删除，可以将 force: true 传递给 destroy 调用：
task.destroy({ force: true })

### 批量操作（一次创建，更新和销毁多行）

#### bulkCreate 一次更新多行
User.bulkCreate([
  { username: 'barfooz', isAdmin: true },
  { username: 'foo', isAdmin: true },
  { username: 'bar', isAdmin: false }
]).then(() => { // 注意: 这里没有凭据, 然而现在你需要...
  return User.findAll();
}).then(users => {
  console.log(users) // ... 以获取 user 对象的数组
})

#### 一次更新几行:

Task.bulkCreate([
  {subject: 'programming', status: 'executing'},
  {subject: 'reading', status: 'executing'},
  {subject: 'programming', status: 'finished'}
]).then(() => {
  return Task.update(
    { status: 'inactive' }, /* 设置属性的值 */
    { where: { subject: 'programming' }} /* where 规则 */
  );
}).spread((affectedCount, affectedRows) => {
  // .update 在数组中返回两个值，因此我们使用 .spread
  // 请注意，affectedRows 只支持以 returning: true 的方式进行定义
  
  // affectedCount 将会是 2
  return Task.findAll();
}).then(tasks => {
  console.log(tasks) // “programming” 任务都将处于 “inactive” 状态
})

####  然后删除它们: 删除多条

Task.bulkCreate([
  {subject: 'programming', status: 'executing'},
  {subject: 'reading', status: 'executing'},
  {subject: 'programming', status: 'finished'}
]).then(() => {
  return Task.destroy({
    where: {
      subject: 'programming'
    },
    truncate: true /* 这将忽 where 并用 truncate table 替代  */
  });
}).then(affectedRows => {
  // affectedRows 将会是 2
  return Task.findAll();
}).then(tasks => {
  console.log(tasks) // 显示 tasks 内容
})

#### 明确构建那些字段
User.bulkCreate([
  { username: 'foo' },
  { username: 'bar', admin: true}
], { fields: ['username'] }).then(() => {
  // admin 将不会被构建
})

#### 插入多行同时进行验证
validate: true 属性来实现。
const Tasks = sequelize.define('task', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notNull: { args: true, msg: 'name cannot be null' }
    }
  },
  code: {
    type: Sequelize.STRING,
    validate: {
      len: [3, 10]
    }
  }
})
 
Tasks.bulkCreate([
  {name: 'foo', code: '123'},
  {code: '1234'},
  {name: 'bar', code: '1'}
], { validate: true }).catch(errors => {

  /* console.log(errors) 看起来像这样:
  [
    { record:
    ...
    name: 'SequelizeBulkRecordError',
    message: 'Validation error',
    errors:
      { name: 'SequelizeValidationError',
        message: 'Validation error',
        errors: [Object] } },
    { record:
      ...
      name: 'SequelizeBulkRecordError',
      message: 'Validation error',
      errors:
        { name: 'SequelizeValidationError',
        message: 'Validation error',
        errors: [Object] } }
  ]
  */
  
})

#### 可以使用 get 属性。 使用选项 plain: true 调用它将只返回一个实例的值。
用 JSON.stringify(instance) 将一个实例转换为 JSON。 基本上与 values 返回的相同。
Person.create({
  name: 'Rambow',
  firstname: 'John'
}).then(john => {
  console.log(john.get({
    plain: true
  }))
})
 
// 结果:
 
// { name: 'Rambow',
//   firstname: 'John',
//   id: 1,
//   createdAt: Tue, 01 May 2012 19:12:16 GMT,
//   updatedAt: Tue, 01 May 2012 19:12:16 GMT
// }

### 重载实例
Person.findOne({ where: { name: 'john' } }).then(person => {
  person.name = 'jane'
  console.log(person.name) // 'jane'
 
  person.reload().then(() => {
    console.log(person.name) // 'john'
  })
})

### 递增
为了增加实例的值而不发生并发问题，您可以使用 increment。
然后，你可以定义多个字段和要添加到其中的值。

User.findById(1).then(user => {
  return user.increment([ 'my-integer-field', 'my-very-other-field' ], {by: 2})
}).then(/* ... */)


#### 最后，你可以定义一个包含字段及其递增值的对象。

User.findById(1).then(user => {
  return user.increment({
    'my-integer-field':    2,
    'my-very-other-field': 3
  })
}).then(/* ... */)

### 递减
为了减少一个实例的值而不遇到并发问题，你可以使用 decrement。
然后，你可以定义多个字段和要添加到其中的值。

User.findById(1).then(user => {
  return user.decrement([ 'my-integer-field', 'my-very-other-field' ], {by: 2})
}).then(/* ... */)
最后， 你可以定义一个包含字段及其递减值的对象。

User.findById(1).then(user => {
  return user.decrement({
    'my-integer-field':    2,
    'my-very-other-field': 3
  })
}).then(/* ... */)

## Associations - 关联
###  BelongsTo  外键

#### 一对一关联是通过单个外键连接的两个模型之间的关联。 BelongsTo 主表上会保存一个外键
一个简单的例子是 Player 通过 player 的外键作为 Team 的一部分。
/** 会先去创建 player 表 再创建 team表 */
const Player = sequelize.define('player', {/* attributes */});
const Team  =  sequelize.define('team', {/* attributes */});
Player.belongsTo(Team); // 将向 Player 添加一个 teamId 属性以保存 Team 的主键值
/** 强制创建表  */
await sequelize.sync({ force: true });

``` sql
CREATE TABLE IF NOT EXISTS `teams` (`id` INTEGER NOT NULL auto_increment , `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `players` (`id` INTEGER NOT NULL auto_increment , `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `teamId` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`teamId`) REFERENCES `teams` (`id`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB;

```

#### 默认的样式是 camelCase，但是如果源模型配置为 underscored: true ，那么将使用字段 snake_case 创建 foreignKey。
/** 使用  underscored: true User表的字段名都是下划线了  */
const User = sequelize.define('user', {/* attributes */ }, { underscored: true })
const Company = sequelize.define('company', {
  uuid: {
    type: Sequelize.UUID,
    primaryKey: true
  }
});

User.belongsTo(Company); // 将 company_uuid 添加到 user

/** 强制创建表  */
await sequelize.sync({ force: true });


#### 在已定义 as 的情况下，将使用它代替目标模型名称。

const User = sequelize.define('user', {/* attributes */ })
const UserRole = sequelize.define('userRole', {/* attributes */ });
User.belongsTo(UserRole, { as: 'role' }); // 将 role 添加到 user 而不是 userRole 此时外键为roleId

/** 强制创建表  */
await sequelize.sync({ force: true });

#### 自定义外键名

### BelongsTo 目标键
目标键是源模型上的外键列指向的目标模型上的列。 默认情况下，belongsTo 关系的目标键将是目标模型的主键。 要定义自定义列，请使用 targetKey 选项。

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
  title: {
    type: Sequelize.STRING,
    allowNull: true,
  }
});
const Comp = sequelize.define('compa', {
  comId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(24),
    unique:true,
  }
});

User.belongsTo(Comp, { foreignKey: {
  field:'fk_companyname',
  type: Sequelize.STRING(24),
}, targetKey: 'name'}); // 添加 fk_companyname 到 User


/** 强制创建表  */
await sequelize.sync({ force: true });

/** 设置外键关联的sql */
CREATE TABLE IF NOT EXISTS `compas` (`comId` INTEGER auto_increment , `name` VARCHAR(24) UNIQUE, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`comId`)) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `users` (`userId` INTEGER auto_increment , `name` VARCHAR(255), `title` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `fk_companyname` VARCHAR(24), PRIMARY KEY (`userId`), FOREIGN KEY (`fk_companyname`) REFERENCES `compas` (`name`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB;


### HasOne 关联
HasOne 在 target 模型中插入关联键，而 BelongsTo 将关联键插入到 source 模型中。
当关于关联的信息存在于 source 模型中时，我们可以使用 belongsTo。
当关于关联的信息存在于 target 模型中时，我们可以使用 hasOne。

### 一对多关联 (hasMany)
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
  title: {
    type: Sequelize.STRING,
    allowNull: true,
  }
});
const Comp = sequelize.define('compa', {
  comId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(24),
    unique:true,
  }
});


/**  hasMany 一对多关联 外键字段fk_companyname 会被写到 User表中 */
Comp.hasMany(User, { foreignKey: {
  field:'fk_companyname',
  type: Sequelize.STRING(24),
}, sourceKey: 'name'}); // 添加 fk_companyname 到 User

/** 强制创建表  */
await sequelize.sync({ force: true });

### 多对多关联
#### 简单的多表关联
const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
  },
});
const Comp = sequelize.define('compa', {
  name: {
    type: Sequelize.STRING(24),
    unique:true,
  }
});


/** 会新建一个UserProject的表 并添加 compaId 和 userId字段  */
Comp.belongsToMany(User, {through: 'UserProject'});

/** 强制创建表  */
await sequelize.sync({ force: true });

#### 可以使用别名
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

#### foreignKey 将允许你在 through 关系中设置 source model 键。
#### otherKey 将允许你在 through 关系中设置 target model 键。
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


/* 会新建worker_tasks 表 有两个主键 其中  userId1 对应 User表的userId字段 compId1 对应 Comp表的compId字段 */
User.belongsToMany(Comp, { as: 'Tasks', through: 'worker_tasks', foreignKey: 'userId1', otherKey: 'compId1'})

/** 强制创建表  */
await sequelize.sync({ force: true });

#### 当然你也可以使用 belongsToMany 定义自我引用：
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

/** 这将创建存储对象的 ID 的表 PersonChildren。  */
User.belongsToMany(User, { as: 'Children', through: 'PersonChildren' })

/** 强制创建表  */
await sequelize.sync({ force: true });


#### 义关联之前为连接表定义一个模型，然后再说明它应该使用该模型进行连接，而不是创建一个新的关联：

const User = sequelize.define('user', {})
const Project = sequelize.define('project', {})
const UserProjects = sequelize.define('userProjects', {
  status: Sequelize.STRING
})

User.belongsToMany(Project, { through: UserProjects })
Project.belongsToMany(User, { through: UserProjects })

/** 强制创建表  */
await sequelize.sync({ force: true });

#### 当通过模型不存在主键时，Belongs-To-Many会创建唯一键。 可以使用 uniqueKey 选项覆盖此唯一键名。
Project.belongsToMany(User, { through: UserProjects, uniqueKey: 'my_custom_unique' })


### 作用域
#### 在一对多的关系模型中




sequelize 后遗症 拍连续剧
dialect 方言
operator 操作员
aliases 别名
pool 水池
acquire 获得
idle 空闲的 虚度
authenticate 认证 使生效
general 一般的
spread 传播
plain 平原
required 必须的
distinct 明显的 不同的
association 协会 联系
paranoid 偏执狂
nested 嵌套的
attributes 属性
tiresome 厌烦
instances 实例
association 协会
underscored 下划线 强调


















