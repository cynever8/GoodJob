// toString() 方法返回一个表示该对象的字符串。

/* 
    每个对象都有一个 toString() 方法，
        当该对象被表示为一个文本值时，或者一个对象以预期的字符串方式引用时自动调用。
        默认情况下，toString() 方法被每个 Object 对象继承。
        如果此方法在自定义对象中未被覆盖，toString() 返回 "[object type]"，
        其中 type 是对象的类型。
        以下代码说明了这一点： 
*/

// 定义判断类型函数
let getType = target => Object.prototype.toString.call(target)

console.log(getType('')); // [object String]
console.log(getType(2)); // [object Number]
console.log(getType(true)); // [object Boolean]
console.log(getType(undefined)); // [object Undefined]
console.log(getType(null)); // [object Null]
console.log(getType(Symbol())); // [object Symbol]
console.log(getType({})); // [object Object]
console.log(getType([])); // [object Array]
console.log(getType(()=>{})); // [object Function]
console.log(getType(new RegExp())); // [object RegExp]
console.log(getType(new Date())); // [object Date]
