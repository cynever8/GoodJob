// ✡原数组不会被改变。

// 1. 截取字符串
var myFish = "[object Object]";
// slice(-2,-1) 表示抽取了原数组中的倒数第二个元素到最后 一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。
var a = myFish.slice(8,-1);
// console.log(myFish);// [object Object]
// console.log(a); // Object


// 2. 返回现有数组的一部分(截取数组)

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']

// 3. 类数组（Array-like）对象

// slice 方法可以用来将一个类数组（Array-like）对象/集合转换成一个新数组。
// 你只需将该方法绑定到这个对象上。 一个函数中的  arguments 就是一个类数组对象的例子。

function list() {
  return Array.prototype.slice.call(arguments);
//   return [].slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

