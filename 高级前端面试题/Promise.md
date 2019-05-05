# Promise

## 以下概念

```bash
Promise 对象用于表示一个异步操作的最终状态（完成或失败），以及该异步操作的结果值。
Promise.prototype.then 和  Promise.prototype.catch 方法返回promise 对象 可以被链式调用
## 属性
Promise.length
length属性，其值总是为 1 (构造器参数的数目).
Promise.prototype
表示 Promise 构造器的原型.

## 方法
Promise.all(iterable)
Promise.race(iterable)
Promise.reject(reason)
Promise.resolve(value)
## Promise 原型
属性
Promise.prototype.constructor
方法
Promise.prototype.catch(onRejected)
Promise.prototype.then(onFulfilled, onRejected)
Promise.prototype.finally(onFinally)
```

## 一个简单的 Promise 实例

```js
/**
 * 创建一个Promise 实例 Promise是异步操作
 * 一个 Promise有以下几种状态:
 * pending: 初始状态，既不是成功，也不是失败状态。
 * fulfilled: 意味着操作成功完成
 * rejected: 意味着操作失败。
 */
/** 创建一个Promise实例  */
var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    if (false) {
      /** 成功的时候执行  */
      resolve('成功了');
    } else {
      /** 失败的时候执行  */
      reject('失败了');
    }
  }, 300);
});

/** 返回的是一个Promise对象  */
promise1
  .then(resolve => {
    console.log(resolve);
    /** then里面的参数 也可以是 成功执行() ， 失败执行()  */
  })
  .catch(reject => {
    /** 捕获错误 或者失败的时候执行  */
    console.log('reject', reject);
  });
```

## Promise.all(iterable) 的使用案例

```js
/**
 * 处理多个promise对象的状态集合
 * iterable参数对象里所有的promise对象都成功的时候才会触发成功
 * 任何一个iterable里面的promise对象失败则立即触发该promise对象的失败
 * 触发成功状态以后，会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值
 * 失败状态时它会把iterable里第一个触发失败的promise对象的错误信息作为它的失败错误信息
 */
/** 创建一个Promise实例  */
var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    if (true) {
      /** 成功的时候执行  */
      resolve('成功了1');
    } else {
      /** 失败的时候执行  */
      reject('失败了1');
    }
  }, 300);
});

/** 创建一个Promise实例  */
var promise2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    if (false) {
      /** 成功的时候执行  */
      resolve('成功了2');
    } else {
      /** 失败的时候执行  */
      reject('失败了2');
    }
  }, 300);
});

Promise.all([promise1, promise2])
  .then(v => {
    console.log('value', v);
  })
  .catch(e => {
    console.log(e);
  });
```

## Promise.race(iterable)

```js
/**
 * 当iterable参数里的任意一个子promise被成功或失败后，
 * 父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象。
 */
/** 创建一个Promise实例  */
var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    if (true) {
      /** 成功的时候执行  */
      resolve('成功了1');
    } else {
      /** 失败的时候执行  */
      reject('失败了1');
    }
  }, 300);
});

/** 创建一个Promise实例  */
var promise2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    if (true) {
      /** 成功的时候执行  */
      resolve('成功了2');
    } else {
      /** 失败的时候执行  */
      reject('失败了2');
    }
  }, 300);
});

Promise.race([promise1, promise2])
  .then(v => {
    console.log('value', v);
  })
  .catch(e => {
    console.log(e);
  });
```

## Promise.reject(reason)

```js
/**
 * 返回一个状态为失败的Promise对象，并将给定的失败信息传递给对应的处理方法
 */
let promise1 = Promise.reject('1');

promise1.catch(v => {
  console.log(v);
});
```

## Promise.resolve(value)

```js
/**
 * 返回一个状态由给定value决定的Promise对象。
 * 返回的Promise对象的最终状态由then方法执行决定
 */
let promise1 = Promise.resolve('1');

promise1.then(v => {
  console.log(v);
});
```

## 面试相关

```js
// promise 状态一旦改变则不能再变。
// 因为返回任意一个非 promise 的值都会被包裹成 promise 对象
// .then 或 .catch 返回的值不能是 promise 本身，否则会造成死循环。
// .then 或者 .catch 的参数期望是函数，传入非函数则会发生值穿透。

/* promise 每次调用 .then 或者 .catch 都会返回一个新的 promise，从而实现了链式调用。 */
Promise.resolve(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res);
  });

// 1
// 2

/**
 * promise 的 .then 或者 .catch 可以被调用多次，但这里 Promise 构造函数只执行一次。
 */
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('once');
    resolve('success');
  }, 1000);
});

const start = Date.now();
promise.then(res => {
  console.log(res, Date.now() - start);
});
promise.then(res => {
  console.log(res, Date.now() - start);
});
// once
// success 1005
// success 1007

/**
 * .then 或者 .catch 中 return 一个 error 对象并不会抛出错误，所以不会被后续的 .catch 捕获，需要改成其中一种：
    return Promise.reject(new Error('error!!!'))
    throw new Error('error!!!')
  */
Promise.resolve()
  .then(() => {
    return new Error('error!!!');
  })
  .then(res => {
    console.log('then: ', res);
  })
  .catch(err => {
    console.log('catch: ', err);
  });

/**
 * .catch 是 .then 第二个参数的简便写法，但是它们用法上有一点需要注意：
 * .then 的第二个处理错误的函数捕获不了第一个处理成功的函数抛出的错误，
 * 而后续的 .catch 可以捕获之前的错误
 */

Promise.resolve()
  .then(
    function success(res) {
      throw new Error('error');
    },
    function fail1(e) {
      console.error('fail1: ', e);
    }
  )
  .catch(function fail2(e) {
    console.error('fail2: ', e);
  });

// fail2: Error: error
// at success(...)
// at ...
```
