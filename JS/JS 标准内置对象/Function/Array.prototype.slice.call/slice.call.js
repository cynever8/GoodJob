// https://juejin.im/post/5a5a201f5188257345017af1
function test(a, b, c, d) {
    var arg = Array.prototype.slice.call(arguments, 1);
    // console.log(arg);
}
test("1", "2", "3", "4");

/* 
真正的机制
    Array.prototype.slice.call()能把类数组对象转化成数组，
    当然像传统的dom对象和js对象都是行不通的， 
*/

//类数组,有length属性，长度为2，第0个是lai，第1个是hua
var a = { length: 2, 0: 'lai', 1: 'hua' };
// ["lai", "hua"],调用数组的slice(0);
// console.log(Array.prototype.slice.call(a, 0));

// 下面这个是对bind的封装，可以兼容比较老的浏览器
function bind(func, thisArg) {
    var nativeBind = Function.prototype.bind;
    var slice = Array.prototype.slice;
    if (nativeBind && func.bind === nativeBind) {
        return nativeBind.apply(func,slice.call(arguments,1))
    }

    var args = slice.call(arguments,2);
    return function(){
        return func.apply(thisArg,args.concat(slice.call(arguments)));
    }
}
