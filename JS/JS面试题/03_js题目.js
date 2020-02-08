/*
 * @Description: 
 * @Autor: Leon
 * @Date: 2020-02-08 19:09:39
 * @LastEditors  : Leon
 * @LastEditTime : 2020-02-08 20:29:18
 */


// ---------1--------------
var a = [1,2,3,4];
function fn () {
    a[3]=10;
    a=[100];
}
fn();
// console.log(a);

// ------2-----------
/* 
   1. 对象,数组是引用类型
   2. 参数在方法内,相当于一个局部变量
*/

var b = [1, 2, 3, 4];
function fn2(b) {
    b[3] = 10;
    b = [100];
}
// 相当于
// 1. 
/* function fn2 (b) {
    var b = b;
    b[3] = 10;
    b = [100];
} */
// 2. 
/* function fn2 (c) {
    var c = b;
    b[3] = 10;
    c = [100];
} */
fn2(b);
// console.log(b);

// -------3-----------
// js查找变量会从当前作用域逐级向上,值到window,如果window没有,那就是undefined
var c= 123;
function fn3 () {
    // var c= 456;
    // console.log(c);
}
fn3();

// -----------4-----------
/* 
    JavaScript的数组并不是数据结构意义上的数组，为什么？
        1. 数据结构意义上的数组是，连续相等内存变量 。 大小，类型
        2. 真正的数组是不可扩容的
        [1,2,3,4]
        1000,1001,1002
        2000,2001,2002,2003
*/

// ----------5----------

/* 
    a.x .号运算优先级别最高
    a.x 会开辟一块新的内存地址

    1. a赋值b b= {n:1} 
    2. a.x .号运算优先级别最高 会开辟一块新的内存地址 a赋值给 a.x = {n:1}
    3. {n:2}赋值给a a={n:2} 会开辟一块新的内存地址 a不再有 x 这个属性
    4. b 仍然指向有 .x这个属性的数据
*/
var a = {n:1};
var b = a;
a.x = a = {n:2};

console.log(a)
console.log(a.x);// undefined
console.log(b.x);// { n: 2 }
console.log(b);// { n: 2 }
