# Scopes - 作用域
* 作用域允许你定义常用查询，以便以后轻松使用。

## 定义及使用
``` js
(async () => {
  /** 建立模型  */
  const User = sequelize.define(
    "user",
    {
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      deleted: {
        type: Sequelize.BOOLEAN
      },
      someNumber: {
        type: Sequelize.INTEGER
      },
      accessLevel: {
        type: Sequelize.INTEGER
      }
    },
    {
      defaultScope: {
        where: {
          active: true
        }
      },
      scopes: {
        deleted: {
          where: {
            deleted: true
          }
        },
        random: function () {
          return {
            where: {
              someNumber: {
                [Op.gte]: 30
              }
            }
          }
        },
        accessLevel: function (value) {
          return {
            where: {
              accessLevel: {
                [Op.gte]: value
              }
            }
          }
        }
      }
    }
  );

  /** 强制创建表 */
  await sequelize.sync({ force: true });

  /** 添加数据  */
  await User.bulkCreate([ 
    { firstName: "a", lastName: "1", active: false , deleted: true , someNumber: 10 , accessLevel: 30},
    { firstName: "b", lastName: "2", active: true , deleted: false , someNumber: 30 , accessLevel: 30},
    { firstName: "c", lastName: "3", active: true , deleted: true , someNumber: 50 , accessLevel: 30},
    { firstName: "d", lastName: "4", active: false , deleted: false , someNumber: 60 , accessLevel: 30},
    { firstName: "e", lastName: "5", active: false , deleted: true , someNumber: 80 , accessLevel: 30},
    { firstName: "f", lastName: "6", active: true , deleted: false , someNumber: 100 , accessLevel: 30}
  ]);

  /* findAll 会默认使用defaultScope设置的条件进行查询数据 */
  await User.findAll().then(user => {
    console.log("defaultScope===================");
    console.log(JSON.parse(JSON.stringify(user)));
  });

  /** 会查询删除默认作用域  */
  await User.scope('deleted').findAll().then(user => {
    console.log("deleted===================");
    console.log(JSON.parse(JSON.stringify(user)));
  });

  /**
   * 调用作为函数的作用域
   * SELECT * FROM projects WHERE someNumber = 42 AND accessLevel >= 19
    */

   await User.scope('random', { method: ['accessLevel', 19]}).findAll().then(user => {
    console.log("random===================");
    console.log(JSON.parse(JSON.stringify(user)));
  });
   

})();


```

## 合并
*  通过将作用域数组传递到 .scope 或通过将作用域作为连续参数传递，可以同时应用多个作用域。
* 当调用多个作用域时，后续作用域的键将覆盖以前的作用域
``` js
// 这两个是等价的
Project.scope('deleted', 'activeUsers').findAll();
Project.scope(['deleted', 'activeUsers']).findAll();

SELECT * FROM projects
INNER JOIN users ON projects.userId = users.id
AND users.active = true

```
## 关联



## 单词
``` bash
scopes 作用域
bulk 大量的
```
