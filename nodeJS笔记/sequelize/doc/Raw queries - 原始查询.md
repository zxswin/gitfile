# Raw queries - 原始查询
##  sequelize.query 函数 的使用

### 一般用法
``` js
sequelize.query("UPDATE users SET y = 42 WHERE x = 12").spread((results, metadata) => {
  // 结果将是一个空数组，元数据将包含受影响的行数。
})
```

### 在不需要访问元数据的情况下，您可以传递一个查询类型来告诉后续如何格式化结果。
``` js
sequelize.query("SELECT * FROM `users`", { type: sequelize.QueryTypes.SELECT})
.then(users => {
  // 我们不需要在这里延伸，因为只有结果将返回给选择查询
})
```

### 传递模型，返回的数据将是该模型的实例。

``` js
// Callee 是模型定义。 这样您就可以轻松地将查询映射到预定义的模型
sequelize
.query('SELECT * FROM projects', {
  model: Projects,
  mapToModel: true // 如果您有任何映射字段，则在此处传递true
})
.then(projects => {
  // 每个记录现在将是Project的一个实例
})
```

