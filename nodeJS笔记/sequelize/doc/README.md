
## 表关联




### 建立一对多关联 (hasMany) 并插入数据
#### 一般用法
``` js
/** 定义Product表模型  */
const Product = sequelize.define("product", {
  title: Sequelize.STRING
});

/** 定义Tag表模型  */
const Tag = sequelize.define("tag", {
  name: Sequelize.STRING
});

/** 创建多对多关联 会在 Tag 表上添加 productId 的外键 */
Product.hasMany(Tag);

/** 强制创建表 */
await sequelize.sync({ force: true });

/**  向表中插入关联数据1  */
await Product.create(
  {
    id: 1,
    title: "Chair",
    tags: [{ name: "Alpha1" }, { name: "Beta1" }]
  },
  {
    include: [Tag]
  }
);

/**  向表中插入关联数据2  */
await Product.create(
  {
    id: 2,
    title: "Chair",
    tags: [{ name: "Alpha2" }, { name: "Beta2" }]
  },
  {
    include: [Tag]
  }
);
```
#### 使用别名
``` js


```





## 单词
``` bash
inflection 拐点 转调
invoice 发票
cascade 串联
constraint 约束
series 系列
```