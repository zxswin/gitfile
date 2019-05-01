# RxJs 常用 API

## 创建可观察者对象(Observable)的 API

- create

```js
/** 普通的创建方法  */
var source = Rx.Observable.create(function(observer) {
  observer.next('Jerry');
  observer.next('Anna');
  observer.complete();
});

source.subscribe({
  next: function(value) {
    console.log(value);
  },
  complete: function() {
    console.log('complete!');
  },
  error: function(error) {
    console.log(error);
  }
});

// Jerry
// Anna
// complete!
```

- of

```js
/** 当我们想要同步的传递几个值时，就可以用 of 这个 operator 来简洁的表达!  */
var source = Rx.Observable.of('Jerry', 'Anna');

source.subscribe({
  next: function(value) {
    console.log(value);
  },
  complete: function() {
    console.log('complete!');
  },
  error: function(error) {
    console.log(error);
  }
});

// Jerry
// Anna
// complete!
```

- from 可接收一个数组作为参数传入

```js
/**
 * 可以用 from 来接收任何可列举的参数！比如数组等
 * Set, WeakSet, Iterator 等都可以当作参数！
 * */
var arr = ['Jerry', 'Anna', 2016, 2017, '30 days'];
var source = Rx.Observable.from(arr);

source.subscribe({
  next: function(value) {
    console.log(value);
  },
  complete: function() {
    console.log('complete!');
  },
  error: function(error) {
    console.log(error);
  }
});

// Jerry
// Anna
// 2016
// 2017
// 30 days
// complete!

/** 另外 from 还能接收字串(string)  */
var source = Rx.Observable.from('铁人赛');

source.subscribe({
  next: function(value) {
    console.log(value);
  },
  complete: function() {
    console.log('complete!');
  },
  error: function(error) {
    console.log(error);
  }
});
// 铁
// 人
// 赛
// complete!

/** 可以传入 Promise 物件  */
var source = Rx.Observable.from(
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello RxJS!');
    }, 3000);
  })
);

source.subscribe({
  next: function(value) {
    console.log(value);
  },
  complete: function() {
    console.log('complete!');
  },
  error: function(error) {
    console.log(error);
  }
});

// Hello RxJS!
// complete!
```

- fromEvent

```js
/**
 * 用 Event 建立 Observable，透过 fromEvent 的方法
 * 第一个参数要传入 DOM 物件，第二个参数传入要监听的事件名称。
 * 会针对 body 的 click 事件做监听，每当点击 body 就会印出 event。
 * 取得 DOM 物件的常用方法：
 * document.getElementById()
 * document.querySelector()
 * document.getElementsByTagName()
 * document.getElementsByClassName()
 */
var source = Rx.Observable.fromEvent(document.body, 'click');

source.subscribe({
  next: function(value) {
    console.log(value);
  },
  complete: function() {
    console.log('complete!');
  },
  error: function(error) {
    console.log(error);
  }
});

// MouseEvent {...}

/**
 * fromEventPattern，这个方法是给类事件使用
 * 所谓的类事件就是指其行为跟事件相像，同时具有注册监听及移除监听两种行为
 */
class Producer {
  constructor() {
    this.listeners = [];
  }
  addListener(listener) {
    if (typeof listener === 'function') {
      this.listeners.push(listener);
    } else {
      throw new Error('listener 必须是 function');
    }
  }
  removeListener(listener) {
    this.listeners.splice(this.listeners.indexOf(listener), 1);
  }
  notify(message) {
    this.listeners.forEach(listener => {
      listener(message);
    });
  }
}
// ------- 以上都是之前的程式码 -------- //

var egghead = new Producer();
// egghead 同时具有 注册监听者及移除监听者 两种方法

var source = Rx.Observable.fromEventPattern(
  handler => egghead.addListener(handler),
  handler => egghead.removeListener(handler)
);

source.subscribe({
  next: function(value) {
    console.log(value);
  },
  complete: function() {
    console.log('complete!');
  },
  error: function(error) {
    console.log(error);
  }
});

egghead.notify('Hello! Can you hear me?');
// Hello! Can you hear me?
```

- fromPromise 创建一个返回 Promise 对象的可观察者对象

- never 来建立无穷的 observable

```js
/**
 * never 会给我们一个无穷的 observable
 * 订阅后什麽事都不会发生
 * 可以把 never 想像成一个结束在无穷久以后的 observable，但你永远等不到那一天！
 */
var source = Rx.Observable.never();

source.subscribe({
  next: function(value) {
    console.log(value);
  },
  complete: function() {
    console.log('complete!');
  },
  error: function(error) {
    console.log(error);
  }
});
```

- empty 会给我们一个空的 observable

```js
/**
 * empty 会给我们一个空的 observable
 * 订阅这个 observable 它会立即送出 complete 的讯息！
 */
```

- throw 抛出一个错误

```js
/** 它也就只做一件事就是抛出错误。  */
var source = Rx.Observable.throw('Oop!');

source.subscribe({
  next: function(value) {
    console.log(value);
  },
  complete: function() {
    console.log('complete!');
  },
  error: function(error) {
    console.log('Throw Error: ' + error);
  }
});
// Throw Error: Oop!
```

- interval 每隔一段时间发出一个数值

```js
/** 会持续每隔一秒送出一个从零开始递增的数值！  */
var source = Rx.Observable.interval(1000);

source.subscribe({
  next: function(value) {
    console.log(value);
  },
  complete: function() {
    console.log('complete!');
  },
  error: function(error) {
    console.log('Throw Error: ' + error);
  }
});
// 0
// 1
// 2
// ...
```

- timer

```js
/**
 * 当 timer 有两个参数时，第一个参数代表要发出第一个值的等待时间(ms)，
 * 第二个参数代表第一次之后发送值的间隔时间
 * 这段程式码会先等一秒送出 1 之后每五秒送出 2, 3, 4, 5...。
 */
var source = Rx.Observable.timer(1000, 5000);

source.subscribe({
  next: function(value) {
    console.log(value);
  },
  complete: function() {
    console.log('complete!');
  },
  error: function(error) {
    console.log('Throw Error: ' + error);
  }
});
// 0
// 1
// 2 ...

/**
 * timer 也可以只接收一个参数
 * 会等一秒后送出 1 同时通知结束。
 */
var source = Rx.Observable.timer(1000);

source.subscribe({
  next: function(value) {
    console.log(value);
  },
  complete: function() {
    console.log('complete!');
  },
  error: function(error) {
    console.log('Throw Error: ' + error);
  }
});
// 0
// complete!
```

- Subscription 对象 用于取消订阅

```js
/**
 * 执行了 subscription.unsubscribe() 来停止订阅并释放资源
 * Events observable 尽量不要用 unsubscribe ，通常我们会使用 takeUntil，在某个事件发生后来完成 Event observable
 */
var source = Rx.Observable.timer(1000, 1000);

// 取得 subscription
var subscription = source.subscribe({
  next: function(value) {
    console.log(value);
  },
  complete: function() {
    console.log('complete!');
  },
  error: function(error) {
    console.log('Throw Error: ' + error);
  }
});

setTimeout(() => {
  subscription.unsubscribe(); // 停止订阅(退订)， RxJS 4.x 以前的版本用 dispose()
}, 5000);
// 0
// 1
// 2
// 3
// 4
```

## 操作符的实现原理

- 理论基础

```bash
每个 operator 是透过原来 observable 的 lift 方法来建立新的 observable，
这个方法会在新回传的 observable 物件内偷塞两个属性，
分别是 source 与 operator，记录原本的资料源跟当前使用的 operator。

其实 lift 方法还是用 new Observable(跟 create 一样)。至于为什麽要独立出这个方法，
除了更好的封装以外，主要的原因是为了让 RxJS 5 的使用者能更好的 debug。

实际上 Observable 跟 Array 的 operators(map, filter)，在行为上还是有极大的差异。
当我们的资料量很大时，Observable 的效能会好上非常多。
```

- 示例

```js
/**
 * 拿到原本的 observable 并回传一个新的 observable
 */
var people = Rx.Observable.of('Jerry', 'Anna');

function map(source, callback) {
  return Rx.Observable.create(observer => {
    return source.subscribe(
      value => {
        try {
          observer.next(callback(value));
        } catch (e) {
          observer.error(e);
        }
      },
      err => {
        observer.error(err);
      },
      () => {
        observer.complete();
      }
    );
  });
}

var helloPeople = map(people, item => item + ' Hello~');

helloPeople.subscribe(console.log);
// Jerry Hello~
// Anna Hello~

/**
 * 可以直接把 map 塞到 Observable.prototype
 * 可以透过 create 的方法建立各种 operator
 */
function map(callback) {
  return Rx.Observable.create(observer => {
    return this.subscribe(
      value => {
        try {
          observer.next(callback(value));
        } catch (e) {
          observer.error(e);
        }
      },
      err => {
        observer.error(err);
      },
      () => {
        observer.complete();
      }
    );
  });
}
Rx.Observable.prototype.map = map;
var people = Rx.Observable.of('Jerry', 'Anna');
var helloPeople = people.map(item => item + ' Hello~');

helloPeople.subscribe(console.log);
// Jerry Hello~
// Anna Hello~
```

## 转换(Transformation)

- map 操作符

```js
/**
 *
 * source: -----0-----1-----2-----3--...
            map(x => x + 1)
   newest: -----1-----2-----3-----4--...
 */
var source = Rx.Observable.interval(1000);
var newest = source.map(x => x + 2);

newest.subscribe(console.log);
// 2
// 3
// 4
// 5..
```

- mapTo 可以把传进来的值改成一个固定的值

```js
/**
 * source: -----0-----1-----2-----3--...
                mapTo(2)
   newest: -----2-----2-----2-----2--...
 */
var source = Rx.Observable.interval(1000);
var newest = source.mapTo(2);

newest.subscribe(console.log);
// 2
// 2
// 2
// 2..
```

## 过滤(Filter)

- filter

```js
/**
 * 传入一个 callback function，这个 function 会传入每个被送出的元素，
 * 并且回传一个 boolean 值，如果为 true 的话就会保留，如果为 false 就会被滤掉
 *  source: -----0-----1-----2-----3-----4-...
                filter(x => x % 2 === 0)
    newest: -----0-----------2-----------4-...
 */
var source = Rx.Observable.interval(1000);
var newest = source.filter(x => x % 2 === 0);

newest.subscribe(console.log);
// 0
// 2
// 4
// 6..
```

## 常用操作符

- take 是一个很简单的 operator，顾名思义就是取前几个元素后就结束

```js
/**
 * source : -----0-----1-----2-----3--..
                take(3)
   example: -----0-----1-----2|
 */
var source = Rx.Observable.interval(1000);
var example = source.take(3);

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// 0
// 1
// 2
// complete
```

- first 会取 observable 送出的第 1 个元素之后就直接结束，行为跟 take(1) 一致

```js
/**
 * source : -----0-----1-----2-----3--..
                    first()
    example: -----0|
 */
var source = Rx.Observable.interval(1000);
var example = source.first();

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});

// 0
// complete
```

- takeUntil 可以在某件事情发生时，让一个 observable 直送出 完成(complete)讯息，范例如下

```js
/**
 * source : -----0-----1-----2------3--
   click  : ----------------------c----
                    takeUntil(click)
   example: -----0-----1-----2----|
  */
var source = Rx.Observable.interval(1000);
var click = Rx.Observable.fromEvent(document.body, 'click');
var example = source.takeUntil(click);

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// 0
// 1
// 2
// 3
// complete (点击body了
```

- concatAll 后的行为永远都是先处理第一个 observable，等到当前处理的结束后才会再处理下一个。

```js
/**
 * Observable 送出的元素又是一个 observable
 * 每点击一次 body 就会立刻送出 1,2,3
 * concatAll 会处理 source 先发出来的 observable，必须等到这个 observable 结束，
 * 才会再处理下一个 source 发出来的 observable
 * 
 *  click  : ------c------------c--------

            map(e => Rx.Observable.of(1,2,3))

    source : ------o------------o--------
                    \            \
                    (123)|       (123)|

                      concatAll()

    example: ------(123)--------(123)------------
 */
var click = Rx.Observable.fromEvent(document.body, 'click');
var source = click.map(e => Rx.Observable.of(1, 2, 3));

var example = source.concatAll();
example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});

/**
 * ource 会送出 3 个 observable，但是 concatAll 后的行为永远都是先处理第一个 observable，
 * 等到当前处理的结束后才会再处理下一个。
 *  source : (o1                 o2      o3)|
              \                  \       \
                --0--1--2--3--4|   -0-1|   ----0|

                    concatAll()        

    example: --0--1--2--3--4-0-1----0|

 */
var obs1 = Rx.Observable.interval(1000).take(5);
var obs2 = Rx.Observable.interval(500).take(2);
var obs3 = Rx.Observable.interval(2000).take(1);

var source = Rx.Observable.of(obs1, obs2, obs3);

var example = source.concatAll();

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// 0
// 1
// 2
// 3
// 4
// 0
// 1
// 0
// complete
```

- 使用 rxjs 实现一个简易的拖动功能

```js
const dragDOM = document.getElementById('drag');
const body = document.body;

/** 鼠标在拖动元素上按下产生的流  */
const mouseDown = Rx.Observable.fromEvent(dragDOM, 'mousedown');

/* 鼠标弹起产生的流 */
const mouseUp = Rx.Observable.fromEvent(body, 'mouseup');

/** 鼠标移动产生的流  */
const mouseMove = Rx.Observable.fromEvent(body, 'mousemove');

/**
 * 当鼠标按下的时候产生一个 按下的流
 * 这个流通过map 转换为 一个鼠标移动直到鼠标弹起终止的流
 * 再通过concatAll 把所有的流摊平 只有前一个流执行完毕 才能执行下一个流
 * 如果 可观察者对象放回的是一个流的可观察者对象 基本都要使用concatAll
 */
mouseDown
  .map(event => mouseMove.takeUntil(mouseUp))
  .concatAll()
  .map(event => ({ x: event.clientX, y: event.clientY }))
  .subscribe(pos => {
    dragDOM.style.left = pos.x + 'px';
    dragDOM.style.top = pos.y + 'px';
  });
```

- skip 略过前几个送出元素

```js
/**
 * 原本从 0 开始的就会变成从 3 开始
 * 原本元素的等待时间仍然存在 第一个取得的元素需要等 4 秒
 *  source : ----0----1----2----3----4----5--....
                        skip(3)
    example: -------------------3----4----5--...
 */
var source = Rx.Observable.interval(1000);
var example = source.skip(3);

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// 3
// 4
// 5...
```

- takeLast 取最后几个元素

```js
/**
 *  takeLast 必须等到整个 observable 完成(complete)，才能知道最后的元素有哪些，并且同步送出
 *  source : ----0----1----2----3----4----5|
                    takeLast(2)
    example: ------------------------------(45)|
 */
var source = Rx.Observable.interval(1000).take(6);
var example = source.takeLast(2);

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// 4
// 5
// complete
```

- last 用来取得最后一个元素。

```js
/**
 *  source : ----0----1----2----3----4----5|
                        last()
    example: ------------------------------(5)|
  */
var source = Rx.Observable.interval(1000).take(6);
var example = source.last();

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// 5
// complete
```

- concat 可以把多个 observable 实例合并成一个

```js
/**
 * 跟 concatAll 一样，必须先等前一个 observable 完成(complete)，才会继续下一个
 *  source : ----0----1----2|
    source2: (3)|
    source3: (456)|
                concat()
    example: ----0----1----2(3456)|
  */
var source = Rx.Observable.interval(1000).take(3);
var source2 = Rx.Observable.of(3);
var source3 = Rx.Observable.of(4, 5, 6);
var example = source.concat(source2, source3);

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// complete

/** concat 还可以当作静态方法使用  */
var source = Rx.Observable.interval(1000).take(3);
var source2 = Rx.Observable.of(3);
var source3 = Rx.Observable.of(4, 5, 6);
var example = Rx.Observable.concat(source, source2, source3);

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
```

- startWith 可以在 observable 的一开始塞要发送的元素

```js
/**
 * 记得 startWith 的值是一开始就同步发出的，这个 operator 很常被用来保存程式的起始状态！
  source : ----0----1----2----3--...
                startWith(0)
  example: (0)----0----1----2----3--...
  */
var source = Rx.Observable.interval(1000);
var example = source.startWith(0);

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// 0
// 0
// 1
// 2
// 3...
```

- merge 把多个 observable 同时处理

```js
/**
 * 当两件事情同时发生时，会同步送出资料(被 merge 的在后面)，当两个 observable 都结束时才会真的结束。
  source : ----0----1----2|
  source2: --0--1--2--3--4--5|
              merge()
  example: --0-01--21-3--(24)--5|
  */
var source = Rx.Observable.interval(500).take(3);
var source2 = Rx.Observable.interval(300).take(6);
var example = source.merge(source2);

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// 0
// 0
// 1
// 2
// 1
// 3
// 2
// 4
// 5
// complete
```

- merge 同样可以当作静态方法用

```js
var source = Rx.Observable.interval(500).take(3);
var source2 = Rx.Observable.interval(300).take(6);
var example = Rx.Observable.merge(source, source2);

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});

/**
 * merge的使用场景举例
 * 例如一个影片播放器有两个按钮，一个是暂停(II)，另一个是结束播放(口)。
 * 这两个按钮都具有相同的行为就是影片会被停止
 * 它的逻辑就像是 OR(||)一样，当其中任合一个 observable 送出元素时，我们都做相同的处理。
 */
var stopVideo = Rx.Observable.merge(stopButton, endButton);

stopVideo.subscribe(() => {
  // 暂停播放影片
});
```

- combineLatest，它会取得各个 observable 最后送出的值，再输出成一个值

```js
/**
 * 首先 combineLatest 可以接收多个 observable，最后一个参数是 callback function
 * 这个 callback function 接收的参数数量跟合併的 observable 数量相同
 *  
    newest 送出了 0，但此时 source 并没有送出过任何值，所以不会执行 callback
    source 送出了 0，此时 newest 最后一次送出的值为 0，把这两个数传入 callback 得到 0。
    newest 送出了 1，此时 source 最后一次送出的值为 0，把这两个数传入 callback 得到 1。
    newest 送出了 2，此时 source 最后一次送出的值为 0，把这两个数传入 callback 得到 2。
    source 送出了 1，此时 newest 最后一次送出的值为 2，把这两个数传入 callback 得到 3。
    newest 送出了 3，此时 source 最后一次送出的值为 1，把这两个数传入 callback 得到 4。
    source 送出了 2，此时 newest 最后一次送出的值为 3，把这两个数传入 callback 得到 5。
    source 结束，但 newest 还没结束，所以 example 还不会结束。
    newest 送出了 4，此时 source 最后一次送出的值为 2，把这两个数传入 callback 得到 6。
    newest 送出了 5，此时 source 最后一次送出的值为 2，把这两个数传入 callback 得到 7。
    newest 结束，因为 source 也结束了，所以 example 结束。

  source : ----0----1----2|
  newest : --0--1--2--3--4--5|

    combineLatest(newest, (x, y) => x + y);

  example: ----01--23-4--(56)--7|
  */
var source = Rx.Observable.interval(500).take(3);
var newest = Rx.Observable.interval(300).take(6);

var example = source.combineLatest(newest, (x, y) => x + y);

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// complete

/**
 * 实际运用中的使用案例
 * combineLatest 很常用在运算多个因子的结果，例如最常见的 BMI 计算，
 * 我们身高变动时就拿上一次的体重计算新的 BMI，当体重变动时则拿上一次的身高计算 BMI，
 * 这就很适合用 combineLatest 来处理！
 */
```

- zip

```js
/**
 * zip 会取每个 observable 相同顺位的元素并传入 callback，
 * 也就是说每个 observable 的第 n 个元素会一起被传入 callback
 * zip 会等到 source 跟 newest 都送出了第一个元素，再传入 callback，
 * 下次则等到 source 跟 newest 都送出了第二个元素再一起传入 callback
    source : ----0----1----2|
    newest : --0--1--2--3--4--5|
        zip(newest, (x, y) => x + y)
    example: ----0----2----4|

 */
var source = Rx.Observable.interval(500).take(3);
var newest = Rx.Observable.interval(300).take(6);

var example = source.zip(newest, (x, y) => x + y);

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// 0
// 2
// 4
// complete

/**
 * 间隔 100ms 送出 'h', 'e', 'l', 'l', 'o'
    source : (hello)|
    source2: -0-1-2-3-4-...
            zip(source2, (x, y) => x)
    example: -h-e-l-l-o|
    建议大家平常没事不要乱用 zip，除非真的需要。因为 zip 必须 cache 住还没处理的元素，
    当我们两个 observable 一个很快一个很慢时，就会 cache 非常多的元素，等待比较慢的那个 observable。
    这很有可能造成记忆体相关的问题！
 */
var source = Rx.Observable.from('hello');
var source2 = Rx.Observable.interval(100);

var example = source.zip(source2, (x, y) => x);
```

- withLatestFrom 有主从关系 只有在主要的 observable 送出新的值时，才会执行 callback

```js
/**
 * withLatestFrom 会在 main 送出值的时候执行 callback，
 * 但请注意如果 main 送出值时 some 之前没有送出过任何值 callback 仍然不会执行！
    main   : ----h----e----l----l----o|
    some   : --0--1--0--0--0--1|
    withLatestFrom(some, (x, y) =>  y === 1 ? x.toUpperCase() : x);
    example: ----h----e----l----L----O|

    main 送出了 h，此时 some 上一次送出的值为 0，把这两个参数传入 callback 得到 h。
    main 送出了 e，此时 some 上一次送出的值为 0，把这两个参数传入 callback 得到 e。
    main 送出了 l，此时 some 上一次送出的值为 0，把这两个参数传入 callback 得到 l。
    main 送出了 l，此时 some 上一次送出的值为 1，把这两个参数传入 callback 得到 L。
    main 送出了 o，此时 some 上一次送出的值为 1，把这两个参数传入 callback 得到 O。

  */
var main = Rx.Observable.from('hello').zip(
  Rx.Observable.interval(500),
  (x, y) => x
);
var some = Rx.Observable.from([0, 1, 0, 0, 0, 1]).zip(
  Rx.Observable.interval(300),
  (x, y) => x
);

var example = main.withLatestFrom(some, (x, y) => {
  return y === 1 ? x.toUpperCase() : x;
});

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});

/**
 * 运用场景：打出来的字就都要变粗体，粗体就像是 some observable，而我们打字就是 main observable。
 */
```

- scan 实就是 Observable 版本的 reduce 只是命名不同

```js
/**
 * 原生的 JS Array 就有 reduce 的方法
 * reduce 方法需要传两个参数，第一个是 callback 第二个则是起始状态
 * 会传入两个参数一个是原本的状态，第二个是修改原本状态的参数
 * 最后回传一个新的状态，再继续执行。
  第一次执行 callback 起始状态是 0 所以 origin 传入 0，next 为 arr 的第一个元素 1，相加之后变成 1 回传并当作下一次的状态。
  第二次执行 callback，这时原本的状态(origin)就变成了 1，next 为 arr 的第二个元素 2，相加之后变成 3 回传并当作下一次的状态。
  第三次执行 callback，这时原本的状态(origin)就变成了 3，next 为 arr 的第三个元素 3，相加之后变成 6 回传并当作下一次的状态。
  第三次执行 callback，这时原本的状态(origin)就变成了 6，next 为 arr 的第四个元素 4，相加之后变成 10 回传并当作下一次的状态。
  这时 arr 的元素都已经遍历过了，所以不会直接把 10 回传。
 */
var arr = [1, 2, 3, 4];
var result = arr.reduce((origin, next) => {
  console.log(origin);
  return origin + next;
}, 0);

console.log(result);
// 0
// 1
// 3
// 6
// 10

/**
 * scan 整体的运作方式都跟 reduce 一样
 * scan 跟 reduce 最大的差别就在 scan 一定会回传一个 observable 实例
  source : ----h----e----l----l----o|
    scan((origin, next) => origin + next, '')
  example: ----h----(he)----(hel)----(hell)----(hello)|
 */
var source = Rx.Observable.from('hello').zip(
  Rx.Observable.interval(600),
  (x, y) => x
);

var example = source.scan((origin, next) => origin + next, '');

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// h
// he
// hel
// hell
// hello
// complete

/**
 * 使用scan处理加减发示例
 */
const addButton = document.getElementById('addButton');
const minusButton = document.getElementById('minusButton');
const state = document.getElementById('state');

/** 点击按钮发送1的流  */
const addClick = Rx.Observable.fromEvent(addButton, 'click').mapTo(1);
/** 点击按钮发送-1的流  */
const minusClick = Rx.Observable.fromEvent(minusButton, 'click').mapTo(-1);

/** 一个从0开始 合并两个流(同步 都停止了才会停止) orgin一直存储这最近一次的计算结果  */
const numberState = Rx.Observable.empty()
  .startWith(0)
  .merge(addClick, minusClick)
  .scan((origin, next) => origin + next, 0);

numberState.subscribe({
  next: value => {
    state.innerHTML = value;
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
```

- buffer

```js
/**
 * buffer 要传入一个 observable(source2)，它会把原本的 observable (source)送出的元素缓存在数组中
 * 等到传入的 observable(source2) 送出元素时，就会触发把缓存的元素送出。
  source : --0--1--2--3--4--5--6--7..
  source2: ---------0---------1--------...
              buffer(source2)
  example: ---------([0,1,2])---------([3,4,5])    
 */
var source = Rx.Observable.interval(300);
var source2 = Rx.Observable.interval(1000);
var example = source.buffer(source2);

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// [0,1,2]
// [3,4,5]
// [6,7,8]...
```

- bufferTime

```js
/**
 * 每一秒发送一个值
 */
var source = Rx.Observable.interval(300);
var example = source.bufferTime(1000);

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// [0,1,2]
// [3,4,5]
// [6,7,8]...
```

- bufferCount

```js
/**
 * 除了用时间来作缓存外，我们更常用数量来做缓存
 */
var source = Rx.Observable.interval(300);
var example = source.bufferCount(3);

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// [0,1,2]
// [3,4,5]
// [6,7,8]...

/**
 * 只有在 500 毫秒内鼠标双击，才能成功印出 'success'
 */
const button = document.getElementById('demo');
const click = Rx.Observable.fromEvent(button, 'click');
const example = click.bufferTime(500).filter(arr => arr.length >= 2);

example.subscribe({
  next: value => {
    console.log('success');
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
```

- bufferToggle
- bufferWhen

- delay 可以延迟 observable 一开始发送元素的时间点，范例如下

```js
/**
 * 延迟500毫秒发送
  source : --0--1--2--3--4|
          delay(500)
  example: -------0--1--2--3--4|

  */
var source = Rx.Observable.interval(300).take(5);

var example = source.delay(500);

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// 0
// 1
// 2
// 3
// 4

/**
 * delay 除了可以传入毫秒以外，也可以传入 Date 类型的参数
 * 到某个时间再执行
 */
var source = Rx.Observable.interval(300).take(5);

var example = source.delay(new Date(new Date().getTime() + 1000));

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
```

- delayWhen

```js
/**
 * delayWhen 的作用跟 delay 很像，最大的差别是 delayWhen 可以影响每个元素，而且需要传一个 callback 并回传一个 observable
 * 这裡传进来的 x 就是 source 送出的每个元素，这样我们就能对每一个做延迟。
  source : --0--1--2--3--4|
      .delayWhen(x => Rx.Observable.empty().delay(100 * x * x));
  example: --0---1----2-----3-----4|

 */
var source = Rx.Observable.interval(300).take(5);

var example = source.delayWhen(x => Rx.Observable.empty().delay(100 * x * x));

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});

/**
 * 这裡我们用 delay 来做一个小功能，这个功能很简单就是让多张照片跟著滑鼠跑，但每张照片不能跑一样快！
 */
var imgList = document.getElementsByTagName('img');
/** 创建一个鼠标移动的流  */
var movePos = Rx.Observable.fromEvent(document, 'mousemove').map(e => ({
  x: e.clientX,
  y: e.clientY
}));
/**
 * 处理多张图片延迟跟随鼠标移动
 * 每张图片对应一个鼠标移动的流 每个流执行的延迟事件不一样
 */
function followMouse(DOMArr) {
  const delayTime = 600;
  DOMArr.forEach((item, index) => {
    movePos
      .delay((delayTime * (Math.pow(0.65, index) + Math.cos(index / 4))) / 2)
      .subscribe(function(pos) {
        item.style.transform =
          'translate3d(' + pos.x + 'px, ' + pos.y + 'px, 0)';
      });
  });
}

followMouse(Array.from(imgList));
```

- debounce 跟 debounceTime 一个是传入 observable 另一个则是传入毫秒

```js
/**
 * debounce 运作的方式是每次收到元素，他会先把元素 cache 住并等待一段时间
 * 如果这段时间内已经没有收到任何元素，则把元素送出
 * 如果这段时间内又收到新的元素，则会把原本 cache 住的元素释放掉并重新计时，不断反覆。
  source : --0--1--2--3--4|
          debounceTime(1000)
  example: --------------4|     
 */
var source = Rx.Observable.interval(300).take(5);
var example = source.debounceTime(1000);

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// 4
// complete

/** 自动传送使用者打的字到后端 不用每打一个字就调用一次接口  */

const searchInput = document.getElementById('searchInput');
const theRequestValue = document.getElementById('theRequestValue');

Rx.Observable.fromEvent(searchInput, 'input')
  .debounceTime(300)
  .map(e => e.target.value)
  .subscribe(value => {
    theRequestValue.textContent = value;
    // 在这裡发 request
  });
```

- throttle 跟 throttleTime 两个方法

```js
/**
 * throttle 跟 throttleTime 两个方法，一个是传入 observable 另一个是传入毫秒，比较常用到的也是 throttleTime
 *  throttle 会先开放送出元素，等到有元素被送出就会沉默一段时间，等到时间过了又会开放发送元素。
 * throttle 更适合用在连续性行为，比如说 UI 动画的运算过程，因为 UI 动画是连续的，像我们之前在做拖拉时，
 * 就可以加上 throttleTime(12) 让 mousemove event 不要发送的太快，避免画面更新的速度跟不上样式的切换速度
 
 * 浏览器有一个 requestAnimationFrame API 是专门用来优化 UI 运算的，通常用这个的效果会比 throttle 好，
 * 但并不是绝对还是要看最终效果。
 */
var source = Rx.Observable.interval(300).take(5);
var example = source.throttleTime(1000);

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// 0
// 4
// complete
```

- distinct 用 distinct 后，只要有重複出现的值就会被过滤掉。

```js
/**
 * 简单用法
 * 当我们用 distinct 后，只要有重複出现的值就会被过滤掉
  source : --a--b--c--a--b|
              distinct()
  example: --a--b--c------|
 */
var source = Rx.Observable.from(['a', 'b', 'c', 'a', 'b']).zip(
  Rx.Observable.interval(300),
  (x, y) => x
);
var example = source.distinct();

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// a
// b
// c
// complete

/**
 * distinct 的参数使用回调
 * callback function 会传入一个接收到的元素，并回传我们真正希望比对的值
 */
var source = Rx.Observable.from([
  { value: 'a' },
  { value: 'b' },
  { value: 'c' },
  { value: 'a' },
  { value: 'c' }
]).zip(Rx.Observable.interval(300), (x, y) => x);
// 参数使用了回调函数
var example = source.distinct(x => {
  // 返回希望对比的值
  return x.value;
});

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// {value: "a"}
// {value: "b"}
// {value: "c"}
// complete

/**
 * 实际上 distinct() 会在背地裡建立一个 Set，当接收到元素时会先去判断 Set 内是否有相同的值，
 * 如果有就不送出，如果没有则存到 Set 并送出。 一个无限的 observable 裡，这样很可能会让 Set 越来越大
 * 传入第二个参数 flushes observable 用来清除暂存的资料

  source : --a--b--c--a--c|
  flushes: ------------0---...
          distinct(null, flushes);
  example: --a--b--c-----c|

 */
var source = Rx.Observable.from(['a', 'b', 'c', 'a', 'c']).zip(
  Rx.Observable.interval(300),
  (x, y) => x
);
var flushes = Rx.Observable.interval(1300);
// 1300毫秒后发送出c 并清空之前存储在set中的值
var example = source.distinct(null, flushes);

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// a
// b
// c
// c
// complete
```

- distinctUntilChanged

```js
/**
 * distinctUntilChanged 跟 distinct 一样会把相同的元素过滤掉，是一个比较常用的方法
 * 但 distinctUntilChanged 只会跟最后一次送出的元素比较，不会每个都比
 * distinctUntilChanged 只会暂存一个元素，并在收到元素时跟暂存的元素比对，
 * 如果一样就不送出，如果不一样就把暂存的元素换成刚接收到的新元素并送出。
  source : --a--b--c--c--b|
            distinctUntilChanged()
  example: --a--b--c-----b|
 */
var source = Rx.Observable.from(['a', 'b', 'c', 'c', 'b']).zip(
  Rx.Observable.interval(300),
  (x, y) => x
);
var example = source.distinctUntilChanged();

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// a
// b
// c
// b
// complete
```

## RxJs 运用场景

- 实现优酷视频滚动缩小拖动效果

```js
/**
 * 当我们在优酷看影片时往下滚动画面，影片会变成一个小视窗在右下角，这个视窗还能够拖拉移动位置。
 */

/** 实现滚动到指定位置视频悬浮效果  */

/** 视频层  */
const video = document.getElementById('video');

/** 锚地层  */
const anchor = document.getElementById('anchor');

/** 滚动事件流  */
const scroll = Rx.Observable.fromEvent(document, 'scroll');

/**
 * 只有当锚点层距离浏览器顶部的距离小于0 滚动流会发送true 否则发送false
 */
scroll
  .map(e => anchor.getBoundingClientRect().bottom < 0)
  .subscribe(bool => {
    if (bool) {
      video.classList.add('video-fixed');
    } else {
      video.classList.remove('video-fixed');
    }
  });

/** 实现视频拖动效果
 * 只有当视频层处于悬浮状态才会触发鼠标按下流
 * 鼠标按下流 转换为 鼠标移动（鼠标弹起则终止）的流
 * withLatestFrom 主流（鼠标移动）新值 和 次流（鼠标按下流）最后一个发送的值 作为参数传入回调
 * 返回视频层的具体位置
 */
mouseDown
  .filter(e => video.classList.contains('video-fixed'))
  .map(e => mouseMove.takeUntil(mouseUp))
  .concatAll()
  .withLatestFrom(mouseDown, (move, down) => {
    return {
      x: validValue(move.clientX - down.offsetX, window.innerWidth - 320, 0),
      y: validValue(move.clientY - down.offsetY, window.innerHeight - 180, 0)
    };
  })
  .subscribe(pos => {
    video.style.top = pos.y + 'px';
    video.style.left = pos.x + 'px';
  });
```

## 错误处理相关的操作符（非同步错误处理方法）

- catch 是很常见的非同步错误处理方法

```js
/**
 * 当错误发生后就会进到 catch 并重新处理一个新的 observable，
 * 触发错误后之前的流会被中断，给用catch中新的 observable
 * 我们可以利用这个新的 observable 来送出我们想送的值。
  source : ----a----b----c----d----2|
          map(x => x.toUpperCase())
          ----a----b----c----d----X|
          catch(error => Rx.Observable.of('h'))
  example: ----a----b----c----d----h|     
  */
var source = Rx.Observable.from(['a', 'b', 'c', 'd', 2]).zip(
  Rx.Observable.interval(500),
  (x, y) => x
);

var example = source
  .map(x => x.toUpperCase())
  .catch(error => Rx.Observable.of('h')); //  catch 可以回传一个 observable 来送出新的值

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
```

- retry 一个 observable 发生错误时，重新尝试就可以用 retry 这个方法

```js
/**
 * retry 不带参数 则表示无限次重新尝试直到成功
 * retry(1)可以带上一个数字 表示捕获错误的时候需要尝试的次数
  source : ----a----b----c----d----2|
          map(x => x.toUpperCase())
          ----a----b----c----d----X|
                  retry(1)
  example: ----a----b----c----d--------a----b----c----d----X|
 */
var source = Rx.Observable.from(['a', 'b', 'c', 'd', 2]).zip(
  Rx.Observable.interval(500),
  (x, y) => x
);

var example = source.map(x => x.toUpperCase()).retry(1);

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
// a
// b
// c
// d
// a
// b
// c
// d
// Error: TypeError: x.toUpperCase is not a function
```

- retryWhen

```js
/**
 * 示例：错误的 observable 送出错误延迟 1 秒 再从新订阅之前的observable
 *  retryWhen 的callback 有一个参数会传入一个 observable，这个 observable 不是原本的 observable(example)
 * 而是例外事件送出的错误所组成的一个 observable
 * 可以对这个由错误所组成的 observable 做操作，等到这次的处理完成后就会重新订阅我们原本的 observable。
 *  这个observalbe 预设是无限的，如果我们把它结束，原本的 observable 也会跟著结束。
  source : ----a----b----c----d----2|
          map(x => x.toUpperCase())
          ----a----b----c----d----X|
          retryWhen(errorObs => errorObs.delay(1000))
  example: ----a----b----c----d-------------------a----b----c----d----...
 */
var source = Rx.Observable.from(['a', 'b', 'c', 'd', 2]).zip(
  Rx.Observable.interval(500),
  (x, y) => x
);

var example = source
  .map(x => x.toUpperCase())
  .retryWhen(errorObs => errorObs.delay(1000)); // 并等到这个 observable 操作完后再重新订阅一次原本的 observable。

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
```

- repeat

```js
/**
 * repeat不给参数让他无限循环 则表示无限循环
 * epeat 的行为跟 retry 基本一致，只是 retry 只有在例外发生时才触发，画成 Marble Diagram 如下
  source : ----a----b----c|
              repeat(1)
  example: ----a----b----c----a----b----c|
 */
var source = Rx.Observable.from(['a', 'b', 'c']).zip(
  Rx.Observable.interval(500),
  (x, y) => x
);

var example = source.repeat(1);

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});

// a
// b
// c
// a
// b
// c
// complete

/** 可以用于处理轮询事务  */
const title = document.getElementById('title');

var source = Rx.Observable.from(['a', 'b', 'c', 'd', 2])
  .zip(Rx.Observable.interval(500), (x, y) => x)
  .map(x => x.toUpperCase());
// 通常 source 会是建立即时同步的连线，像是 web socket

// 第二个参数obs 表示原来的observable
var example = source.catch((error, obs) =>
  Rx.Observable.empty()
    .startWith('连线发生错误： 5秒后重连')
    .concat(obs.delay(5000))
);

example.subscribe({
  next: value => {
    title.innerText = value;
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
```

## 处理 Higher Order Observable

- Higher Order Observable 就是指一个 Observable 送出的元素还是一个 Observable

- concatAll()

```js
/**
 * concatAll 不管两个 observable 送出的时间多么相近，一定会先处理前一个 observable 再处理下一个。
click  : ---------c-c------------------c--.. 
        map(e => Rx.Observable.interval(1000))
source : ---------o-o------------------o--..
                   \ \                  \
                    \ ----0----1----2|   ----0----1----2|
                     ----0----1----2|
                     concatAll()
example: ----------------0----1----2----0----1----2--..
  */
var click = Rx.Observable.fromEvent(document.body, 'click');
var source = click.map(e => Rx.Observable.interval(1000).take(3));

var example = source.concatAll();
example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
```

- switch()

```js
/**
 * 每当有新的 observable 送出就会直接把旧的 observable 退订(unsubscribe)，永远只处理最新的 observable!
click  : ---------c-c------------------c--.. 
        map(e => Rx.Observable.interval(1000))
source : ---------o-o------------------o--..
                   \ \                  \----0----1--...
                    \ ----0----1----2----3----4--...
                     ----0----1----2----3----4--...
                     switch()
example: -----------------0----1----2--------0----1--...
 */
var click = Rx.Observable.fromEvent(document.body, 'click');
var source = click.map(e => Rx.Observable.interval(1000));

var example = source.switch();
example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
```

- mergeAll()

```js
/**
 * 把二维的 observable 转成一维的，并且能够同时处理所有的 observable
click  : ---------c-c------------------c--..
        map(e => Rx.Observable.interval(1000))
source : ---------o-o------------------o--..
                   \ \                  \----0----1--...
                    \ ----0----1----2----3----4--...
                     ----0----1----2----3----4--...
                     switch()
example: ----------------00---11---22---33---(04)4--...
 */
var click = Rx.Observable.fromEvent(document.body, 'click');
var source = click.map(e => Rx.Observable.interval(1000));

var example = source.mergeAll();
example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});

/**
 * mergeAll 可以传入一个数值，这个数值代表他可以同时处理的 observable 数量
 * 前面两个 observabel 可以被并行处理，但第三个 observable 必须等到第一个 observable 结束后，才会开始。
click  : ---------c-c----------o----------.. 
        map(e => Rx.Observable.interval(1000))
source : ---------o-o----------c----------..
                   \ \          \----0----1----2|     
                    \ ----0----1----2|  
                     ----0----1----2|
                     mergeAll(2)
example: ----------------00---11---22---0----1----2--..
 */
var click = Rx.Observable.fromEvent(document.body, 'click');
var source = click.map(e => Rx.Observable.interval(1000).take(3));

var example = source.mergeAll(2); // 利用这个参数来决定要同时处理几个 observable
example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
```

- concatMap()

```js
/**
 * concatMap 其实就是 map 加上 concatAll 的简化写法
 *  concatMap 也会先处理前一个送出的 observable 再处理下一个 observable
source : -----------c--c------------------...
        concatMap(c => Rx.Observable.interval(100).take(3))
example: -------------0-1-2-0-1-2---------...
 */
var source = Rx.Observable.fromEvent(document.body, 'click');

var example = source.concatMap(e => Rx.Observable.interval(100).take(3));

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});

/**
 * concatMap 还有第二个参数是一个 selector callback，这个 callback 会传入四个参数，分别是
 * 外部 observable 送出的元素
 * 内部 observable 送出的元素
 * 外部 observable 送出元素的 index
 * 内部 observable 送出元素的 index
 */
function getPostData() {
  return fetch('https://jsonplaceholder.typicode.com/posts/1').then(res =>
    res.json()
  );
}
var source = Rx.Observable.fromEvent(document.body, 'click');

var example = source.concatMap(
  e => Rx.Observable.from(getPostData()),
  (e, res, eIndex, resIndex) => res.title
);

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
```

- switchMap 其实就是 map 加上 switch 简化的写法

```js
/**
 * 每次都只处理最新发送出来的observable 并取消订阅之前的
 * switchMap 跟 concatMap 一样有第二个参数 selector callback 可用来回传我们要的值，这部分的行为跟 concatMap 是一样的
source : -----------c--c-----------------...
        concatMap(c => Rx.Observable.interval(100).take(3))
example: -------------0--0-1-2-----------...
 */
var source = Rx.Observable.fromEvent(document.body, 'click');

var example = source.switchMap(e => Rx.Observable.interval(100).take(3));

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
```

- mergeMap 其实就是 map 加上 mergeAll 简化的写法

```js
/**
 * 平行处理每次发送出来的observable
source : -----------c-c------------------...
        concatMap(c => Rx.Observable.interval(100).take(3))
example: -------------0-(10)-(21)-2----------...
  */
var source = Rx.Observable.fromEvent(document.body, 'click');

var example = source.mergeMap(e => Rx.Observable.interval(100).take(3));

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});

/**
 * mergeMap 也能传入第二个参数 selector callback，这个 selector callback 跟 concatMap 第二个参数也是完全一样的，
 * 但 mergeMap 的重点是我们可以传入第三个参数，来限制并行处理的数量
 */
function getPostData() {
  return fetch('https://jsonplaceholder.typicode.com/posts/1').then(res =>
    res.json()
  );
}
var source = Rx.Observable.fromEvent(document.body, 'click');

var example = source.mergeMap(
  e => Rx.Observable.from(getPostData()),
  (e, res, eIndex, resIndex) => res.title,
  3
);

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
```

- switchMap, mergeMap, concatMap 的特点

```js
/**
 * 这三个 operators 可以把第一个参数所回传的 promise 物件直接转成 observable，
 * 这样我们就不用再用 Rx.Observable.from 转一次
 * concatMap 适合少数要一次一次完成到底的的 UI 动画或特别的 HTTP request 行为。
 * switchMap 用在只要最后一次行为的结果，适合绝大多数的使用情境。
 * mergeMap 用在并行处理多个 observable，适合需要并行处理的行为，像是多个 I/O 的并行处理。
 * 建议初学者不确定选哪一个时，使用 switchMap
 */
function getPersonData() {
  return fetch('https://jsonplaceholder.typicode.com/posts/1').then(res =>
    res.json()
  );
}
var source = Rx.Observable.fromEvent(document.body, 'click');

var example = source.concatMap(e => getPersonData());
//直接回传 promise 物件

example.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log('Error: ' + err);
  },
  complete: () => {
    console.log('complete');
  }
});
```

## 把一般的 Observable 转成 Higher Order Observable 的 operators。

- window

```js
/**
 * 计算一秒钟内触发了几次 click 事件
source : ---------0---------1---------2--...
click  : --cc---cc----c-c----------------...
                    window(source)
example: o--------o---------o---------o--..
         \        \         \         \
          -cc---cc|---c-c---|---------|--..
                    count()
       : o--------o---------o---------o--
         \        \         \         \
          -------4|--------2|--------0|--..
                    switch()
       : ---------4---------2---------0--... 
 */
var click = Rx.Observable.fromEvent(document, 'click');
var source = Rx.Observable.interval(1000);
var example = click.window(source); // 每次点击都还输出一个source流

example
  .map(innerObservable => innerObservable.count())
  .switch() // 值执行最后一个流
  .subscribe(console.log);
```

- windowCount
- windowTime
- windowToggle

```js
/**
 * windowToggle 不像 window 只能控制内部 observable 的结束，windowToggle 可以传入两个参数，
 * 第一个是开始的 observable，第二个是一个 callback 可以回传一个结束的 observable
source   : ----0----1----2----3----4----5--...

mouseDown: -------D------------------------...
mouseUp  : ---------------------------U----...

        windowToggle(mouseDown, () => mouseUp)

         : -------o-------------------------...
                  \
                   -1----2----3----4--|
                   switch()
example  : ---------1----2----3----4---------...                                     

 */
var source = Rx.Observable.interval(1000);
var mouseDown = Rx.Observable.fromEvent(document, 'mousedown');
var mouseUp = Rx.Observable.fromEvent(document, 'mouseup');

var example = source.windowToggle(mouseDown, () => mouseUp).switch();

example.subscribe(console.log);
```

- windowWhen

* groupBy 它可以帮我们把相同条件的元素拆分成一个 Observable

```js
/**
 * 传入了一个 callback function 并回传 groupBy 的条件，就能区分每个元素到不同的 Observable 中

source : ---0---1---2---3---4|
             groupBy(x => x % 2)
example: ---o---o------------|
            \   \
            \   1-------3----|
            0-------2-------4|

 */
var source = Rx.Observable.interval(300).take(5);

var example = source.groupBy(x => x % 2);

example.subscribe(console.log);

// GroupObservable { key: 0, ...}
// GroupObservable { key: 1, ...}

/**
 * 将每个人的分数作加总再送出
source : --o--o--o--o--o--o|

groupBy(person => person.name)

      : --i--------i------|
          \        \
          \         o--o--o|
          o--o--o--|

      map(group => group.reduce(...))

      : --i---------i------|
          \         \
          o|        o|

            mergeAll()
example: --o---------o------|           
 */
var people = [
  { name: 'Anna', score: 100, subject: 'English' },
  { name: 'Anna', score: 90, subject: 'Math' },
  { name: 'Anna', score: 96, subject: 'Chinese' },
  { name: 'Jerry', score: 80, subject: 'English' },
  { name: 'Jerry', score: 100, subject: 'Math' },
  { name: 'Jerry', score: 90, subject: 'Chinese' }
];
var source = Rx.Observable.from(people).zip(
  Rx.Observable.interval(300),
  (x, y) => x
);

var example = source
  .groupBy(person => person.name)
  .map(group =>
    group.reduce((acc, curr) => ({
      name: curr.name,
      score: curr.score + acc.score
    }))
  )
  .mergeAll();

example.subscribe(console.log);
// { name: "Anna", score: 286 }
// { name: 'Jerry', score: 270 }
```

## subject 相关

- multicast

```js
/**
 * multicast 可以用来挂载 subject 并回传一个可连结(connectable)的 observable
 */

var source = Rx.Observable.interval(1000)
  .take(3)
  .multicast(new Rx.Subject()); // 订阅其实都是订阅到 subject 上

var observerA = {
  next: value => console.log('A next: ' + value),
  error: error => console.log('A error: ' + error),
  complete: () => console.log('A complete!')
};

var observerB = {
  next: value => console.log('B next: ' + value),
  error: error => console.log('B error: ' + error),
  complete: () => console.log('B complete!')
};

source.subscribe(observerA); // subject.subscribe(observerA)

source.connect(); // source.subscribe(subject) 执行 connect() 后才会真的用 subject 订阅 sourc

setTimeout(() => {
  source.subscribe(observerB); // subject.subscribe(observerB)
}, 1000);

/**
 * 要把 connect() 回传的 subscription 退订才会真正停止 observable 的执行
 */
var source = Rx.Observable.interval(1000)
  .do(x => console.log('send: ' + x))
  .multicast(new Rx.Subject()); // 无限的 observable

var observerA = {
  next: value => console.log('A next: ' + value),
  error: error => console.log('A error: ' + error),
  complete: () => console.log('A complete!')
};

var observerB = {
  next: value => console.log('B next: ' + value),
  error: error => console.log('B error: ' + error),
  complete: () => console.log('B complete!')
};

var subscriptionA = source.subscribe(observerA);

var realSubscription = source.connect();

var subscriptionB;
setTimeout(() => {
  subscriptionB = source.subscribe(observerB);
}, 1000);

setTimeout(() => {
  subscriptionA.unsubscribe();
  subscriptionB.unsubscribe();
  // 这裡虽然 A 跟 B 都退订了，但 source 还会继续送元素
}, 5000);

setTimeout(() => {
  realSubscription.unsubscribe();
  // 这裡 source 才会真正停止送元素
}, 7000);
```

- refCount

```js
/**
 * refCount 必须搭配 multicast 一起使用，他可以建立一个只要有订阅就会自动 connect 的 observable
 * 当 source 一被 observerA 订阅时(订阅数从 0 变成 1)，就会立即执行并发送元素，我们就不需要再额外执行 connect。
 */

var source = Rx.Observable.interval(1000)
  .do(x => console.log('send: ' + x))
  .multicast(new Rx.Subject())
  .refCount();

var observerA = {
  next: value => console.log('A next: ' + value),
  error: error => console.log('A error: ' + error),
  complete: () => console.log('A complete!')
};

var observerB = {
  next: value => console.log('B next: ' + value),
  error: error => console.log('B error: ' + error),
  complete: () => console.log('B complete!')
};

var subscriptionA = source.subscribe(observerA);
// 订阅数 0 => 1

var subscriptionB;
setTimeout(() => {
  subscriptionB = source.subscribe(observerB);
  // 订阅数 0 => 2
}, 1000);

/**
 * 退订时只要订阅数变成 0 就会自动停止发送
 */
var source = Rx.Observable.interval(1000)
  .do(x => console.log('send: ' + x))
  .multicast(new Rx.Subject())
  .refCount();

var observerA = {
  next: value => console.log('A next: ' + value),
  error: error => console.log('A error: ' + error),
  complete: () => console.log('A complete!')
};

var observerB = {
  next: value => console.log('B next: ' + value),
  error: error => console.log('B error: ' + error),
  complete: () => console.log('B complete!')
};

var subscriptionA = source.subscribe(observerA);
// 订阅数 0 => 1

var subscriptionB;
setTimeout(() => {
  subscriptionB = source.subscribe(observerB);
  // 订阅数 0 => 2
}, 1000);

setTimeout(() => {
  subscriptionA.unsubscribe(); // 订阅数 2 => 1
  subscriptionB.unsubscribe(); // 订阅数 1 => 0，source 停止发送元素
}, 5000);
```

- publish

```js
/**
 * multicast(new Rx.Subject()) 很常用到，我们有一个简化的写法那就是 publish
 * 下面两段代码是等价的
 */
var source = Rx.Observable.interval(1000)
  .publish()
  .refCount();

var source = Rx.Observable.interval(1000)
  .multicast(new Rx.Subject())
  .refCount();

/**
 * 加上 Subject 的三种变形 publishReplay
 */
var source = Rx.Observable.interval(1000)
  .publishReplay(1)
  .refCount();

var source = Rx.Observable.interval(1000)
  .multicast(new Rx.ReplaySubject(1))
  .refCount();

/**
 * 加上 Subject 的三种变形 publishBehavior
 */
var source = Rx.Observable.interval(1000)
  .publishBehavior(0)
  .refCount();

var source = Rx.Observable.interval(1000)
  .multicast(new Rx.BehaviorSubject(0))
  .refCount();

/**
 * 加上 Subject 的三种变形 publishLast
 */
var source = Rx.Observable.interval(1000)
  .publishLast()
  .refCount();

var source = Rx.Observable.interval(1000)
  .multicast(new Rx.AsyncSubject(1))
  .refCount();
```

- share

```js
/**
 *  publish + refCount 可以在简写成 share
 */
var source = Rx.Observable.interval(1000).share();

var source = Rx.Observable.interval(1000)
  .publish()
  .refCount();

var source = Rx.Observable.interval(1000)
  .multicast(new Rx.Subject())
  .refCount();
```

## rxjs 处理事务示例

- 自动完成 (Auto Complete)

```js
/**
 * 需求分析
 * 准备 input#search 以及 ul#suggest-list 的 HTML 与 CSS
 * 在 input#search 输入文字时，等待 100 毫秒再无输入，就发送 HTTP Request
 * 当 Response 还没回来时，使用者又输入了下一个文字就捨弃前一次的并再发送一次新的 Request
 * 接受到 Response 之后显示建议选项
 * 滑鼠点击后取代 input#search 的文字
 */

/** 第一步，取得需要的 DOM 物件  */
const searchInput = document.getElementById('search');
const suggestList = document.getElementById('suggest-list');

/** 第二步，建立所需的 Observable  */
const keyword = Rx.Observable.fromEvent(searchInput, 'input');
const selectItem = Rx.Observable.fromEvent(suggestList, 'click');

/** 渲染ul选择列表  */
const render = (suggestArr = []) => {
  suggestList.innerHTML = suggestArr
    .map(item => '<li>' + item + '</li>')
    .join('');
};

/**调用接口 */
function getSuggestList(value) {
  return fetch('https://jsonplaceholder.typicode.com/posts/1', {
    value: value
  }).then(res => res.json());
}

/** ul列表的点击事件 */
selectItem
  .filter(e => e.target.matches('li'))
  .map(e => e.target.innerText)
  .subscribe(text => {
    searchInput.value = text;
    render();
  });

/** 关键词搜索  */
keyword
  .filter(e => e.target.value.length > 2) // 两个关键字以上才会去调用接口
  .debounceTime(100) // 停止输入后延迟100ms发送
  .switchMap(
    // 只执行最新的observable 并 取消订阅之前的
    e => Rx.Observable.from(getSuggestList(e.target.value)).retry(3), // 如果接口不通则重新试3次
    (e, res) => res[1] // 要回传的值
  )
  .subscribe(list => render(list));
```
