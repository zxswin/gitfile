class LinkedList {
  /**  链表的头部  */
  head = null;
  /** 链表的长度  */
  length = 0;

  /**
   * 根据传进来的数据创建节点
   * @param {any} data 要创建节点的数据
   */
  createNode(data) {
    return {
      data,
      next: null,
    };
  }

  /**
   * 添加方法
   * @param {any} 要添加到链表中的数据
   */
  append(data) {
    // 1.创建新的节点
    let newNode = this.createNode(data);

    // 2.判断是否添加的是第一个节点
    if (this.length === 0) {
      this.head = newNode;
    } else {
      // 找到最后一个节点
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      // 最后节点的next指向新的节点
      current.next = newNode;
    }

    // 改变长度
    this.length += 1;
  }

  /**
   * insert插入数据方法
   * @param {number} position 插入数据的位置
   * @param {any} data 插入的数据
   * @returns {boolean}
   */

  insert(position, data) {
    // 1.对position进行越界判断
    if (position < 0 || position > this.length) return false;
    // 2.根据data创建newNode
    let newNode = this.createNode(data);

    // 3.判断插入为是否是第一个
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let index = 0;
      let current = this.head;
      let previous = null;

      while (index++ < position) {
        previous = current;
        current = current.next;
      }

      newNode.next = current;
      previous.next = newNode;
    }

    // 4.插入成功改变长度
    this.length += 1;
    return true;
  }

  /**
   * get方法 获取指定位置的数据
   * @param {number} position 想要获取的数据位置
   */

  get(position) {
    // 1.越界判断
    if (position < 0 || position >= this.length) return null;

    // 获取对应的data
    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next;
    }

    return current.data;
  }

  /**
   * indexOf方法 根据传入数据找到对应的索引
   * @param {any} data
   */
  indexOf(data) {
    // 1.定义变量
    let current = this.head;
    var index = 0;

    // 开始查找
    while (current) {
      if (current.data == data) {
        return index;
      }
      current = current.next;
      index += 1;
    }

    // 3.找到最后没有找到 返回-1
    return -1;
  }

  /**
   * update方法
   * @param {number} position 要修改的数据位置
   * @param {any} newData 修改后的新数据
   */

  update(position, newData) {
    // 1.越界判断
    if (position < 0 || position >= this.length) return false;
    // 2.查找正确额节点
    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next;
    }

    // 3.将position位置的node的data修改成newData
    current.data = newData;

    return true;
  }

  /**
   * removeAt 根据索引移除元素方法
   * @param {number} position
   */

  removeAt(position) {
    // 1.越界判断
    if (position < 0 || position >= this.length) return null;

    // 2.判断是否删除的是第一个节点
    let current = this.head;
    if (position === 0) {
      this.head = this.head.next;
    } else {
      let index = 0;

      let previous = null;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      // 前一个节点的next指向 current的next即可
      previous.next = current.next;
    }

    // 改变长度
    this.length -= 1;
    return current.data;
  }

  /**
   * remvoe 删除元素方法
   * @param {any} data 要删除的链表中的数据
   */

  remove(data) {
    // 1.获取data在链表中的位置
    let position = this.indexOf(data);
    // 2.根据位置信息 删除节点
    return this.removeAt(position);
  }

  /**
   * isEmpty方法
   * 数据链表是否为空
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * size 方法 返回链表的长度
   */

  size() {
    return this.length;
  }

  /** toString方法 */
  toString() {
    // 1.定义变量
    let current = this.head;
    let listString = "";

    // 循环获取一个个的节点
    while (current) {
      listString += current.data + " ";
      current = current.next;
    }

    return listString;
  }
}

// const linkedList = new LinkedList();

// // 测试append方法
// linkedList.append("a");
// linkedList.append("b");
// linkedList.append("c");

// // 测试insert方法
// linkedList.insert(0, "1");
// linkedList.insert(4, "2");
// linkedList.insert(3, "66");

// console.log(linkedList.toString());

// // 测试get方法
// console.log(linkedList.get(2));

// // 测试index方法
// console.log(linkedList.indexOf("b"));
// console.log(linkedList.indexOf("bbbb"));

// // 测试update方法
// linkedList.update(3, "update3");

// console.log(linkedList.toString());

// // 测试removeAt方法
// console.log(linkedList.removeAt(1));

// console.log(linkedList.toString());

// // 测试remove方法
// console.log(linkedList.remove("b"));
// console.log(linkedList.toString());

// // 测试isEmpty 和 size方法
// console.log(linkedList.isEmpty(), linkedList.size());

class DoublyLinkedList {
  // 相关属性
  head = null; // 头部
  tail = null; // 尾部
  length = 0; // 长度

  /**
   * 根据data创建新的节点数据
   * @param {any} data 要创建新节点的数据
   */

  createNode(data) {
    return {
      data,
      prev: null,
      next: null,
    };
  }

  /**
   * append 方法添加节点
   * @param {any} data 要添加的节点数据
   */

  append(data) {
    // 1.根据data创建节点
    let newNode = this.createNode(data);

    // 2.判断添加的节点是否是第一个节点
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // 修改长度
    this.length += 1;
  }

  /**
   * insert 方法插入数据
   * @param {number} position 要插入数据的位置
   * @param {any} data 要插入的数据
   */
  insert(position, data) {
    // 1.越界判断
    if (position < 0 || position > this.length) return false;

    // 2.根据data创建新的节点
    let newNode = this.createNode(data);

    // 3.判断原来的列表是否为空
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 判断position是否为0
      if (position === 0) {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      } else if (position === this.length) {
        // 如果是插入到最后
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        // 如果是往中间插入
        let current = this.head;
        let index = 0;

        while (index++ < position) {
          current = current.next;
        }

        // 修改指针
        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;
      }
    }
  }

  /**
   * get方法 返回指定位置的数据
   * @param {number} position
   */

  get(position) {
    // 1.越界判断
    if (position < 0 || position >= this.length) return null;

    // 从前往后找 还是 从后往前找
    let queryFlag = this.length / 2 > position;
    // 2.获取元素
    let current;

    if (queryFlag) {
      // 前往后找
      current = this.head;
      let index = 0;
      while (index++ < position) {
        current = current.next;
      }
    } else {
      // 从后往前找
      current = this.tail;
      let index = this.length;
      while (index-- > position) {
        current = current.prev;
      }
    }

    return current.data;
  }

  /**
   * indexOf 方法
   * 找到传入数据在链表中的索引
   * @param {null} data
   */

  indexOf(data) {
    // 1.定义变量
    let current = this.head;
    let index = 0;

    // 查找和data相同的节点
    while (current) {
      if (current.data == data) {
        return index;
      }
      current = current.next;
      index += 1;
    }

    return -1;
  }

  /**
   * update 方法
   * @param {number} position 要更新的数据的索引
   * @param {any} newData 修改后的数据
   */

  update(position, newData) {
    // 1.越界的判断
    if (position < 0 || position >= this.length) return false;

    // 2.寻找正确的节点
    let current = this.head;
    let index = 0;

    while (index++ < position) {
      current = current.next;
    }

    // 3.修改找到节点的data信息
    current.data = newData;
    return true;
  }

  /**
   * removeAt方法 删除指定位置的节点元素
   * @param {number} position
   */

  removeAt(position) {
    // 1.越界判断
    if (position < 0 || position >= this.length) return null;

    // 2.判断是否只有一个节点
    let current = this.head;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      if (position === 0) {
        // 判断是否删除的是第一个节点
        this.head.next.prev = null;
        this.head = this.head.next;
      } else if (position === this.length - 1) {
        // 如果删除的是最后一个节点
        current = this.tail;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      } else {
        // 如果删除的是中间的节点
        let index = 0;
        while (index++ < position) {
          current = current.next;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    }

    this.length -= 1;

    return current.data;
  }

  /**
   * remove 方法 删除指定的节点数据
   * @param {any} data 要删除的节点数据
   */

  remove(data) {
    // 1.根据data获取下标值
    let index = this.indexOf(data);

    // 2.根据index删除对应的节点
    return this.removeAt(index);
  }

  /**
   * isEmpty方法
   * 数据链表是否为空
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * size 方法 返回链表的长度
   */

  size() {
    return this.length;
  }

  /**
   * getHead 获取链表的第一个元素
   *
   */

  getHead() {
    return this.head.data;
  }

  /**
   * getTail 获取链表的最后一个元素
   */

  getTail() {
    return this.tail.data;
  }

  /**
   * toString方法
   */

  toString() {
    return this.backwardString();
  }

  /**
   * forwardString方法
   * 依次向前遍历获取每一个节点 并返回对应的字符串
   */

  forwardString() {
    // 1.定义变量
    let current = this.tail;
    let resultString = "";

    // 2.依次向后遍历获取每一个节点
    while (current) {
      resultString += current.data + " ";
      current = current.prev;
    }

    return resultString;
  }

  /**
   * backwardString方法
   * 依次向后遍历获取每一个节点 并返回对应的字符串
   */

  backwardString() {
    // 1.定义变量
    let current = this.head;
    let resultString = "";

    // 2.依次向后遍历获取每一个节点
    while (current) {
      resultString += current.data + " ";
      current = current.next;
    }

    return resultString;
  }
}

// let list = new DoublyLinkedList();

// list.append("a");
// list.append("b");
// list.append("c");
// list.append("e");
// list.append("f");

// console.log(list.remove("f"));

// console.log(list.remove("a"));

// console.log(list.remove("e1"));

// console.log(list.toString());
// console.log(list.isEmpty());
// console.log(list.size());

// console.log(list.getHead());

// console.log(list.getTail());

/** 集合类  */
class Set {
  items = {};

  /**
   * add方法 添加数据
   * @param value 要添加的数据
   */
  add(value) {
    // 判断当前的集合中是否以及包含了该元素
    if (this.has(value)) return;

    // 将元素添加到集合中
    this.items[value] = value;
  }

  /**
   * has
   * 集合中是否以及包含某个数据
   * @param value 要检查的数据
   */
  has(value) {
    return this.items.hasOwnProperty(value);
  }

  /**
   * remove 删除元素的方法
   * @param {any} value 要删除的元素
   */
  remove(value) {
    // 1.判断该集合中是否包含该元素
    if (!this.has(value)) return false;

    // 2.将元素从属性中删除
    delete this.items[value];
    return true;
  }

  /**
   * clear 情况集合的方法
   */
  clear() {
    this.items = {};
  }

  /**
   * size 方法 返回集合的长度
   */
  size() {
    return Object.keys(this.items).length;
  }

  /**
   * 获取集合中所有的值
   */
  values() {
    return Object.keys(this.items);
  }

  /**
   * 集合间的操作 并集的实现
   * @param {Set} otherSet
   */
  union(otherSet) {
    // 1.创建一个新的集合
    let unionSet = new Set();

    // 2.将A集合中所有的元素添加到新集合中
    let values = this.values();
    values.forEach((item) => {
      unionSet.add(item);
    });

    // 3.取出B集合中的元素 判断是否需要加入到新集合中
    values = otherSet.values();
    values.forEach((item) => {
      unionSet.add(item);
    });

    return unionSet.values();
  }

  /**
   * 集合间的操作 交集的实现
   * @param {Set} otherSet
   */
  intersection(otherSet) {
    // 1.创建新的集合
    let intersectionSet = new Set();

    // 从A中取出一个个元素,判断是否同时存在于集合B中 如果存在则放入到新的集合中
    let values = this.values();
    values.forEach((item) => {
      if (otherSet.has(item)) {
        intersectionSet.add(item);
      }
    });

    return intersectionSet.values();
  }

  /**
   * 集合间的操作 差集的实现
   * @param {Set} otherSet
   */
  difference(otherSet) {
    // 1.创建新的集合
    let defferenceSet = new Set();

    // 从A中取出一个个元素,判断是否同时存在于集合B中 如果不存在则放入到新的集合中
    let values = this.values();
    values.forEach((item) => {
      if (!otherSet.has(item)) {
        defferenceSet.add(item);
      }
    });

    return defferenceSet.values();
  }

  /**
   * 集合间的操作 判断是否为子集的实现
   * @param {Set} otherSet
   */
  subset(otherSet) {
    // 遍历集合A中所有的元素 如果发现 集合A中的元素
    // 在集合B中不存在 那么返回false
    // 如果遍历完整个集合 依然没有返回false 那么返回true即可
    let values = this.values();
    for (let item of values) {
      if (!otherSet.has(item)) {
        return false;
      }
    }

    return true;
  }
}

// let setA = new Set();

// setA.add("c");
// setA.add("d");

// let setB = new Set();

// setB.add("c");
// setB.add("d");
// setB.add("e");
// setB.add("f");

// let unionA = setA.subset(setB);
// console.log(unionA);

/**
 * 设计哈希函数
 * 1.将字符串转换成比较大的数字 : hashCode
 * 2.将大的数字hashCode压缩到数组范围(大小)内
 * @param {string} str 要转换的字符串
 * @param {number} size 数组的长度
 */
function hashFunc(str, size) {
  // 1.定义hashCode变量
  let hashCode = 0;

  // 2.霍纳算法 来计算hashCode的值
  for (let i = 0; i < str.length; i++) {
    hashCode = 37 * hashCode + str.charCodeAt(i);
  }

  // 3.取余操作
  let index = hashCode % size;

  return index;
}

/**
 * HashTable 哈希表
 */

class HashTable {
  /** storage作为数组 数组中存放相关的元素  */
  storage = [];
  /** count表示当前已经存在多少数据  */
  count = 0;
  /** limit用于标记数组中一共可以存放多少个元素  */
  limit = 7;

  /**
   * 判断一个数是否为质数
   */
  isPrime(num) {
    let temp = parseInt(Math.sqrt(num));
    for (let i = 2; i < temp; i++) {
      if (num % i === 0) return false;
    }

    return true;
  }

  /**
   * 获取质数的方法
   * @param {number} num
   */

  getPrime(num) {
    while (!this.isPrime(num)) {
      num++;
    }

    return num;
  }

  /**
   * 设计哈希函数
   * 1.将字符串转换成比较大的数字 : hashCode
   * 2.将大的数字hashCode压缩到数组范围(大小)内
   * @param {string} str 要转换的字符串
   * @param {number} size 数组的长度
   */
  hashFunc(str, size) {
    // 1.定义hashCode变量
    let hashCode = 0;

    // 2.霍纳算法 来计算hashCode的值
    for (let i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i);
    }

    // 3.取余操作
    let index = hashCode % size;

    return index;
  }

  /**
   * 插入或修改操作
   * @param {string} key 要插入或修改的key
   * @param {any} value 要插入或修改的数据
   */
  put(key, value) {
    // 1.根据key获取对应的index
    let index = this.hashFunc(key, this.limit);

    // 2.根据index取出对应的bucket
    let bucket = this.storage[index];

    // 3.判断该bucket是否为存在
    if (!bucket) {
      bucket = [];
      this.storage[index] = bucket;
    }

    // 4.判断是否是修改数据
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        tuple[1] = value;
        return;
      }
    }

    // 5.进行添加操作
    bucket.push([key, value]);
    this.count += 1;

    // 6.判断是否需要扩容操作
    if (this.count > this.limit * 0.75) {
      let size = this.limit * 2;
      let limit = this.getPrime(size);
      this.resize(limit);
    }
  }

  /**
   * get获取元素
   * @param {string} key 要查找元素的key
   */

  get(key) {
    // 1.根据key获取对应的index
    let index = this.hashFunc(key, this.limit);
    // 2.根据index获取对应的bucket
    let bucket = this.storage[index];

    // 3.判断bucket是否存在
    if (!bucket) return null;

    // 4.有bucket 那么进行线性查找
    for (let item of bucket) {
      if (item[0] === key) return item[1];
    }

    // 5.依然没有找到 返回null
    return null;
  }

  /**
   * remove删除操作
   * @param {string} key 要删除数据的key
   */

  remove(key) {
    // 1.根据key获取对应的index
    let index = this.hashFunc(key, this.limit);
    // 2.根据index取出对应的bucket
    let bucket = this.storage[index];

    // 3.判断bucket是否为null
    if (!bucket) return null;

    // 4.有bucket 那么进行线性查找
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1);
        this.count--;

        // 缩小容量
        if (this.limit > 7 && this.count < this.limit * 0.25) {
          let size = Math.floor(this.limit / 2);
          let limit = this.getPrime(size);
          this.resize(limit);
        }
        return tuple[1];
      }
    }

    // 5.依然没有找到 那么返回null
    return null;
  }

  /**
   * 判断哈希表是否为空
   */
  isEmpty() {
    return this.count === 0;
  }

  /**
   * 判断哈希表中元素的个数
   */
  size() {
    return this.count;
  }

  /**
   * 对哈希表进行扩容
   * @param {number} newLimit
   */
  resize(newLimit) {
    // 1.保存旧的的数组内容
    let oldStorage = this.storage;

    // 2.重置所有属性
    this.storage = [];
    this.count = 0;
    this.limit = newLimit;

    // 遍历oldStorage中的所有bucket
    for (let bucket of oldStorage) {
      if (!bucket) continue;

      for (let item of bucket) {
        this.put(item[0], item[1]);
      }
    }
  }
}

// 测试代码
// console.log(hashFunc("abc", 7));
// console.log(hashFunc("cba", 7));
// console.log(hashFunc("nba", 7));
// console.log(hashFunc("mba", 7));

// let h = new HashTable();
// h.put("aa1", "值1");
// h.put("aa5", "值5");
// h.put("aa2", "值2");
// h.put("aa3", "值3");
// h.put("aa4", "值4");
// h.put("aa4", "值404");
// console.log(h);

// console.log(h.get("aaa"));

// // console.log(h.remove("aaa"));

// console.log(h.isEmpty());
// console.log(h.size());
// console.log(h.isPrime(101));
// console.log(h.isPrime(10));

/** 封装二叉搜索树  */
class BinarySearchTree {
  // 根节点
  root = null;
  /**
   * 创建插入的节点
   * @param {string | number} key key值
   * @param {any} value
   */
  createNode(key, value) {
    return {
      key,
      value,
      left: null,
      right: null,
    };
  }

  /**
   * 插入数据
   * @param {string | number} key key值
   * @param {any} value
   */

  insert(key, value) {
    // 1.根据key和value创建节点
    let newNode = this.createNode(key, value);

    // 2.判断根节点是否有值
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  /**
   * 查找合适位置并插入节点的方法
   * @param node 当前对比的节点
   * @param newNode 要插入的新节点
   */

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      // 向左查找
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // 向右边查找
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}

let b = new BinarySearchTree();

b.insert(11, "值11");
b.insert(7, "值7");
b.insert(15, "值15");
b.insert(5, "值5");
b.insert(3, "值3");
b.insert(9, "值9");
b.insert(8, "值8");
b.insert(10, "值10");
b.insert(13, "值13");
b.insert(12, "值12");
b.insert(14, "值14");
b.insert(20, "值20");
b.insert(18, "值18");
b.insert(25, "值25");
console.log(b);
