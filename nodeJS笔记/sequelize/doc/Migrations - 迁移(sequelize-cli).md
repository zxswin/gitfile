# Migrations - 迁移

## 安装 sequelize-cli
> npm install --save sequelize-cli

## 引导创建新项目
> node_modules\.bin\sequelize init

### 以下文件夹将会被创建
* config, 包含配置文件，它告诉CLI如何连接数据库
* models,包含您的项目的所有模型
* migrations, 包含所有迁移文件
* seeders, 包含所有种子文件

## 基本使用案例流程
``` bash
# 如果数据库不存在可以使用db:create命令创建数据库 window下的路径用 \ 分隔  linux 使用 /
node_modules\\.bin\\sequelize db:create
# 使用model:generate 命令创建  User 表模型
node_modules\\.bin\\sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
* 在 models 文件夹中创建了一个 user 模型文件 给 Sequelize 用的
* 在 migrations 文件夹中创建了一个名字像 XXXXXXXXXXXXXX-create-user.js 的迁移文件 给CLI 用的
# 运行 db:migrate 命令在数据库中创建表
node_modules\\.bin\\sequelize db:migrate
* 创建SequelizeMeta表。 此表用于记录在当前数据库上运行的迁移
* 可以通过检查 SequelizeMeta 表 开始寻找尚未运行的任何迁移文件。
* 创建一个名为 Users 的表，其中包含其迁移文件中指定的所有列。

#  db:migrate:undo命令 撤消迁移 这个命令将会恢复最近的迁移。
node_modules\\.bin\\sequelize db:migrate:undo
* 此命令并不会删除SequelizeMeta 表
* db:migrate:undo:all 命令撤消所有迁移，可以恢复到初始状态。
* 通过将其名称传递到 --to 选项中来恢复到特定的迁移。
node_modules\\.bin\\sequelize db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js

# 创建种子
node_modules\.bin\sequelize seed:generate --name demo-user
* 这个命令将会在 seeders 文件夹中创建一个种子文件。文件名看起来像是 XXXXXXXXXXXXXX-demo-user.js

```

### 编辑种子文件，将演示数据插入到指定的数据表中
``` js
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'demo@demo.com'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
```

### 运行种子文件
``` bash
# 运行种子文件插入数据
node_modules\\.bin\\sequelize db:seed:all
# 撤销种子 撤消最近的种子 该命令貌似无效
node_modules\\.bin\\sequelize db:seed:undo
# 撤销种子 撤消所有的种子 此命令生效
node_modules\\.bin\\sequelize db:seed:undo:all

```

## 高级专题

### 迁移框架
种子文件
* queryInterface 对象可以用来修改数据库。 
* Sequelize 对象存储可用的数据类型，如 STRING 或 INTEGER。 

``` js
module.exports = {
  up: (queryInterface, Sequelize) => {
    // 转变为新状态的逻辑
  },
 
  down: (queryInterface, Sequelize) => {
    // 恢复更改的逻辑
  }
}
```
* 函数 up 或 down 应该返回一个 Promise

``` js
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Person', {
        name: Sequelize.STRING,
        isBetaMember: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false
        }
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Person');
  }
}
```

### .sequelizerc 文件 进行自定义配置
* 在根目录中新建文件 .sequelizerc 并配置如下
* 使用 config/database.json 文件来配置设置
* 使用 db/models 作为模型文件夹
* 使用 db/seeders 作为种子文件夹
* 使用 db/migrations 作为迁移文件夹

``` js
const path = require('path');

module.exports = {
  'config': path.resolve('config', 'database.json'),
  'models-path': path.resolve('db', 'models'),
  'seeders-path': path.resolve('db', 'seeders'),
  'migrations-path': path.resolve('db', 'migrations')
}
```

## 动态配置
* .sequelizerc 文件 中设置使用js文件读取配置
``` js
const path = require('path');
module.exports = {
  'config': path.resolve('config', 'config.js')
}
```

* config/config.js 文件的例子
``` js
const fs = require('fs');

module.exports = {
  development: {
    username: 'database_dev',
    password: 'database_dev',
    database: 'database_dev',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
      }
    }
  }
};
```
## 存储

* sequelize : 将迁移和种子存储在 sequelize 数据库的表中
* json : 将迁移和种子存储在json文件上
* none : 不存储任何迁移/种子

``` js
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql",

    // 使用不同的存储类型. Default: sequelize
    "migrationStorage": "json",

    // 使用不同的文件名. Default: sequelize-meta.json
    "migrationStoragePath": "sequelizeMeta.json",

    // 使用不同的表名. Default: SequelizeMeta
    "migrationStorageTableName": "sequelize_meta"
  }
}
```
## 通过SSL连接
``` js
{
    "production": {
        "dialect":"postgres",
        "ssl": true,
        "dialectOptions": {
            "ssl": true
        }
    }
}
```

## 问题
### 快速运行
* 创建数据库
> node_modules\\.bin\\sequelize db:create 
* 创建表
> node_modules\\.bin\\sequelize db:migrate
* 添加数据
> node_modules\\.bin\\sequelize db:seed:all


## 实战案例


## 参考地址

``` bash
# sequelize 中文文档
https://github.com/demopark/sequelize-docs-Zh-CN
# sequelize-cli 文档
https://github.com/sequelize/cli
# queryInterface 使用文档
http://docs.sequelizejs.com/class/lib/query-interface.js~QueryInterface.html


```

## 单词
``` pug
migration 迁徙
seeder 播种机
associate 联合 使……联系
```



























