## 判断数据类型

 * [判断数据类型-掘金](https://juejin.im/post/5d99b56f518825222b5b6737)
---

## toString
* 这对对数据检测应该是最准确的😂
* toString是Object.prototype上的一个方法, 常用方式为
* `Object.prototype.toString.call(target)`
    > 返回值是 [object 类型]字符串,该方法基本上能判断所有的数据类型(自定义数据类型除外)