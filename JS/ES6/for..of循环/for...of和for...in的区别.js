/* 
    无论是for...in还是for...of语句都是迭代一些东西。它们之间的主要区别在于它们的迭代方式。
    for...in 语句以任意顺序迭代对象的可枚举属性。
    for...of 语句遍历可迭代对象定义要迭代的数据。
    以下示例显示了与Array一起使用时，for...of循环和for...in循环之间的区别。 
*/

Object.prototype.objCustom = function(){};
Array.prototype.arrCustom = function(){};

let iterable = [2,3,4,5];
iterable.foo = "hello";

for(let i in iterable){
    // console.log(i+"--");
     // 0, 1, 2, "foo", "arrCustom", "objCustom"
}
for(let i of iterable){
    // console.log(i);
    // 2,3,4,5
}


//-----------------------------------
//for in 应用于数组
Array.prototype.sayHello = function(){
    console.log("Hello")
}
Array.prototype.str = 'world';
var myArray = [1,2,10,30,100];
myArray.name='数组';

for(let index in myArray){
    console.log(index);
}
