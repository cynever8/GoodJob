/*
 * @Description: async 执行顺序问题
 * @Autor: Leon
 * @Date: 2020-02-08 18:44:45
 * @LastEditors  : Leon
 * @LastEditTime : 2020-02-08 19:07:12
 */

/*
   async 不属于宏任务也不属于微任务
   async 其本身不是一个异步函数
   功能是帮助我们进行异步编程
*/

// -----------------1----------------------
/* async function fn() {
    console.log("async");
}
console.log(3);
fn() */
// fn()的调用位置决定了触发时机 现在的async是一个同步的


// --------------2--------------------
/* async function fn() {
    // await 从使用上来说,必须等待一个await
    var a = await new Promise(function (resolve) {
        resolve(1)
    })
    console.log(2);
    console.log(a);
}
fn();
console.log(3); */

// --------------3--------------

// 打印 0-10 
// 使用var
// for (var i = 0; i < 10; i++) {
//     // 使用闭包
//     (function (i) {
//         setTimeout(() => {
//             console.log(i);
//         })
//     })(i)
// }

// 使用let
// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     })
// }
