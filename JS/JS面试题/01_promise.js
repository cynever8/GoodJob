/*
 * @Description: promise 执行顺序问题 
 * @Autor: Leon
 * @Date: 2020-02-08 18:08:48
 * @LastEditors  : Leon
 * @LastEditTime : 2020-02-08 19:09:11
 */

/* 
    微任务 : Promise process.nextTick
    宏任务 : 整体代码Script ,setTimeout, setInterval
    
    微任务会先于宏任务执行
    微任务队列空了,才会执行下一个宏任务
 */
setTimeout(function () {
    console.log("set1");
    new Promise(function (resolve) {
        resolve();
    }).then(function () {
        console.log("then3");
    })
})

new Promise(function (resolve) {
    // 这里是同步的
    console.log("pr1");
    resolve();
}).then(function () {
    // .then之后就是异步的
    console.log("then1");
})

setTimeout(function () {
    console.log("set2");
})

new Promise(function (resolve) {
    resolve();
}).then(function () {
    // .then之后就是异步的
    console.log("then2");
})
console.log(3);
/* 
    微任务: []
    宏任务: []
 */
