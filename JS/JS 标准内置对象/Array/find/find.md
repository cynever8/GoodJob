## find
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
*  find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。

### 语法

* arr.find(callback[, thisArg])

### 参数

* callback
    - 在数组每一项上执行的函数，接收 3 个参数：

    - element
        > 当前遍历到的元素。
    - index可选
        > 当前遍历到的索引。
    - array可选
        > 数组本身。

* thisArg可选
    - 执行回调时用作this 的对象。

### 返回值

* 数组中第一个满足所提供测试函数的元素的值，否则返回 undefined。