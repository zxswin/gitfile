# Hooks - 钩子

## 声明钩子

### 声明钩子方法一 （define的时候就声明钩子）
``` js
(async () => {
  /** 建立模型  */
  // 方法1 通过 .define()  声明钩子方法
  const User = sequelize.define('user', {
    username: Sequelize.STRING,
    mood: {
      type: Sequelize.ENUM,
      values: ['happy', 'sad', 'neutral']
    }
  }, {
    hooks: {
      /** 在数据创建之前触发  */
      beforeBulkCreate: (instances, options) => {
        console.log('beforeBulkCreate');
      },
      /** 在数据创建之后触发  */
      afterBulkCreate: (instances, options) => {
        console.log('afterBulkCreate');
      }
    }
  });

  /** 强制创建表 */
  await sequelize.sync({ force: true });

  /** 添加数据  */
  await User.bulkCreate([ 
    { username: "a", mood: "sad"},
    { username: "b", mood: "2"},
    { username: "c", mood: "neutral"},
  ]);

  /* findAll 查询所有数据 */
  await User.findAll().then(user => {
    console.log("===================");
    console.log(JSON.parse(JSON.stringify(user)));
  });

})();

```
### 声明钩子方法二 （hook() 方法 或 addHook（） 方法）
``` js
(async () => {
  /** 建立模型  */
  const User = sequelize.define('user', {
    username: Sequelize.STRING,
    mood: {
      type: Sequelize.ENUM,
      values: ['happy', 'sad', 'neutral']
    }
  });

  /** hook() 方法 不推荐使用  */
  User.hook('beforeBulkCreate', (instances, options) => {
    console.log('beforeBulkCreate');
  });

  /** 推荐使用 addHook 方法  */
  User.addHook('afterBulkCreate', 'someCustomName', (user, options) => {
    console.log('afterBulkCreate');
  });

  /** 强制创建表 */
  await sequelize.sync({ force: true });

  /** 添加数据  */
  await User.bulkCreate([ 
    { username: "a", mood: "happy"},
    { username: "b", mood: "happy"},
    { username: "c", mood: "3"},
  ]);

  /* findAll 查询所有数据 */
  await User.findAll().then(user => {
    console.log("===================");
    console.log(JSON.parse(JSON.stringify(user)));
  });

})();

```
### 声明钩子方法三（通过模型实例直接调用方法）
``` js
(async () => {
  /** 建立模型  */
  const User = sequelize.define('user', {
    username: Sequelize.STRING,
    mood: {
      type: Sequelize.ENUM,
      values: ['happy', 'sad', 'neutral']
    }
  });

  /** 通过模型示例直接调用方法  */
  User.beforeBulkCreate((instances, options) => {
    console.log('beforeBulkCreate');
  });

  User.afterBulkCreate((instances, options) => {
    console.log('afterBulkCreate');
  });

  /** 强制创建表 */
  await sequelize.sync({ force: true });

  /** 添加数据  */
  await User.bulkCreate([ 
    { username: "a", mood: "happy"},
    { username: "b", mood: "happy"},
    { username: "c", mood: "3"},
  ]);

  /* findAll 查询所有数据 */
  await User.findAll().then(user => {
    console.log("===================");
    console.log(JSON.parse(JSON.stringify(user)));
  });

})();
```
## 移除 Hook
* 只能删除有名称参数的 hook。
``` js
const Book = sequelize.define('book', {
  title: DataTypes.STRING
});

Book.addHook('afterCreate', 'notifyUsers', (book, options) => {
  // ...
});

Book.removeHook('afterCreate', 'notifyUsers');

```

## 全局 / 通用 Hook
* 全局 hook 是所有模型的 hook。
* 如果模型没有定义自己的 beforeCreate hook，那么它将运行。

### 方法一 Sequelize.options.define (默认 hook)
``` js
const sequelize = new Sequelize(..., {
    define: {
        hooks: {
            beforeCreate: () => {
                // 做些什么
            }
        }
    }
});

```
### 方法二 Sequelize.addHook (常驻 hook)
``` js
sequelize.addHook('beforeCreate', () => {
    // 做些什么
});
```

## 使用 updatesOnDuplicate 选项批量更新现有用户

``` js
(async () => {
  /** 建立模型  */
  const User = sequelize.define('user', {
    isMember: Sequelize.BOOLEAN,
    memberSince:Sequelize.DATE
  });

  /** 强制创建表 */
  await sequelize.sync({ force: true });

  /** 创建前的hooks  */
  await User.beforeBulkCreate((users, options) => {
    console.log('user +++++++++++++++++++ ');
    for (const user of users) {
      console.log('user +++++++++++++++++++ ');
      console.log(user);
      if (user.isMember) {
        user.memberSince = new Date();
      }
    }
    // 添加 memberSince 到 updatesOnDuplicate 否则 memberSince 期将不会被保存到数据库
    options.updatesOnDuplicate.push('memberSince');
  });

  /** 添加数据  
   * 使用 updatesOnDuplicate 选项批量更新现有用户
  */
  await User.bulkCreate([
    { id: 1, isMember: true },
    { id: 2, isMember: false }
  ], {
    updatesOnDuplicate: ['isMember']
  });


  /* findAll 查询所有数据 */
  await User.findAll().then(user => {
    console.log("===================");
    console.log(JSON.parse(JSON.stringify(user)));
  });

})();

```

## 关联

``` js
(async () => {
  /** 建立模型  */

  const Projects = sequelize.define('projects', {
    title: Sequelize.STRING
  });
  
  const Tasks = sequelize.define('tasks', {
    title: Sequelize.STRING
  });
  
  Projects.hasMany(Tasks, { onDelete: 'cascade', hooks: true });
  Tasks.belongsTo(Projects);

  /** 强制创建表 */
  await sequelize.sync({ force: true });


})();
```

## 事务的注意事项
* 在原始调用中 指定 了一个事务，它将出现在传递给 hook 函数的 options 参数中
* 如果我们在上述代码中的 User.update 调用中未包含事务选项，则不会发生任何更改，因为在已提交挂起的事务之前，我们新创建的用户不存在于数据库中。

``` js
// 这里我们使用异步 hook 的 promise 风格，而不是回调。
User.hook('afterCreate', (user, options) => {
  // 'transaction' 将在 options.transaction 中可用

  // 此操作将成为与原始 User.create 调用相同的事务的一部分。
  return User.update({
    mood: 'sad'
  }, {
    where: {
      id: user.id
    },
    transaction: options.transaction
  });
});


sequelize.transaction(transaction => {
  User.create({
    username: 'someguy',
    mood: 'happy',
    transaction
  });
});

```

## 钩子操作清单
``` bash
#(1)
  beforeBulkCreate(instances, options)
  beforeBulkDestroy(options)
  beforeBulkUpdate(options)
#(2)
  beforeValidate(instance, options)
#(-)
  validate
#(3)
  afterValidate(instance, options)
  - or -
  validationFailed(instance, options, error)
#(4)
  beforeCreate(instance, options)
  beforeDestroy(instance, options)
  beforeUpdate(instance, options)
  beforeSave(instance, options)
  beforeUpsert(values, options)
#(-)
  create
  destroy
  update
#(5)
  afterCreate(instance, options)
  afterDestroy(instance, options)
  afterUpdate(instance, options)
  afterSave(instance, options)
  afterUpsert(created, options)
#(6)
  afterBulkCreate(instances, options)
  afterBulkDestroy(options)
  afterBulkUpdate(options)
```

## 单词

``` pug
bulk 大量的
upsert 更新插入
deprecate 不赞成
personal 个人的
```





