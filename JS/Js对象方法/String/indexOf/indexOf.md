# indexOf
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
* indexOf() 方法返回调用它的 String 对象中第一次出现的指定值的索引，从 fromIndex 处进行搜索。如果未找到该值，则返回 -1

### 语法
* str.indexOf(searchValue)
* str.indexOf(searchValue, fromIndex)
### 参数

* searchValue
    - 一个字符串表示被查找的值。如果没有提供确切地提供字符串，searchValue 会被强制设置为 "undefined"， 然后在当前字符串中查找这个值。
* fromIndex 可选
    - 表示开始查找的位置。可以是任意整数，默认值为 0。如果 fromIndex 小于 0，则查找整个字符串（等价于传入了 0）。如果 fromIndex 大于等于 str.length，则必返回 -1。 
### 返回值

* 指定值的第一次出现的索引；如果没有找到，则返回 -1。若被查找的字符串是一个空字符串，则返回值在0---str.length 之间，即：
    * fromIndex 小于等于 0 时，返回 0；
    * fromIndex 大于 0 且小于等于 str.length 时，返回 fromIndex；
    * fromIndex 大于字符串长度 str.length 时，返回 str.length。
----
### 注意 
1. 区分大小写w
 > "Blue Whale".indexOf("blue") // 返回 -1