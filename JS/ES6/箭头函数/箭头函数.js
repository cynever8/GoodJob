/*
 * @Description: 
 * @Autor: Leon
 * @Date: 2019-11-29 20:33:56
 * @LastEditors: Leon
 * @LastEditTime: 2019-12-24 09:39:23
 */
// TODO:还没总结

// ES6 箭头函数
// 几种写法
// 1. 
let add = a => b => c => a + b + c
add(1)(2)(3) // 6

// 2.
let add = _=>{}

// 3. 
// return a
let add = (a=1)=>{
    return a // 1
}
// 简写
let add = a=>a;
// return 一个对象
let add = _=>({a:1,b:2})

