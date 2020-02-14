/*
 * @Description: 
 * @Autor: Leon
 * @Date: 2019-11-29 11:24:38
 * @LastEditors: Leon
 * @LastEditTime: 2020-02-11 14:04:33
 */
// 浅拷贝的实现方式
// 1. Object.assign()----------------------------
// Object.assign() 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。
// 但是 Object.assign()进行的是浅拷贝，拷贝的是对象的属性的引用，而不是对象本身。
var obj = { teacher: { name: "Leon", age: 23 } };
var initalObj = Object.assign({}, obj);
initalObj.teacher.name = "Mark";
// console.log(obj.teacher.name);
// console.log(initalObj);

// 注意：当object只有一层的时候，是深拷贝
// let obj = {
//     username: 'kobe'
// };
// let obj2 = Object.assign({}, obj);
// obj2.username = 'wade';
// console.log(obj);//{username: "kobe"}

// 2.Array.prototype.concat()----------------------------
let arr = [1, 3, {
    username: "Robin"
}];
let arr2 = arr.concat();
arr2[2].username = "Alex"
// console.log(arr);
// console.log(arr2);

//3..Array.prototype.slice()---------------------------------
let list = ["a","b",{
    username:"Pide"
}]
let list2 = list.slice();
list2[2].username = "Andi";
console.log("F: list", list)
console.log("F: list2", list2)
/* 
    关于Array的slice和concat方法的补充说明：
        Array的slice和concat方法不修改原数组，
        只会返回一个浅复制了原数组中的元素的一个新数组。
*/