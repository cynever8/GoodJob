## for...of
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)
* for...of 语句创建一个循环来迭代可迭代的对象。
* 在 ES6 中引入的 for...of 循环，以替代 for...in 和 forEach() ，并支持新的迭代协议。
* for...of 允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等。

### 语法
```JavaScript
for (variable of iterable) {
    //statements
}
```
* variable
    - 在每次迭代中，将不同属性的值分配给变量。
* iterable
    - 被迭代枚举其属性的对象。 


## for...of与for...in的区别
* for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值。 所以for in更适合遍历对象，不要使用for in遍历数组。