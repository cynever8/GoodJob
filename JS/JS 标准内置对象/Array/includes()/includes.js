// includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。

let site = ['runoob', 'google', 'taobao'];
console.log(site.includes("runoob")); // ture




// 作为通用方法的 includes()
// includes() 方法有意设计为通用方法。它不要求this值是数组对象，所以它可以被用于其他类型的对象 (比如类数组对象)。
// 下面的例子展示了 在函数的 arguments 对象上调用的 includes() 方法。
(function () {
    console.log([].includes.call(arguments, 'a')); // true
    console.log([].includes.call(arguments, 'd')); // false
})('a', 'b', 'c');