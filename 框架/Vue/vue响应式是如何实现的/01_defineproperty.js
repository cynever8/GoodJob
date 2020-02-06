/*
 * @Description: 
 * @Autor: Leon
 * @Date: 2020-02-04 19:04:23
 * @LastEditors  : Leon
 * @LastEditTime : 2020-02-04 21:37:01
 */
var ob1 = {
    a:1,
    b:2
}
// defineProperty 定义对象的属性 修改的属性描述符。
Object.defineProperty(ob1,"b",{
    writable:false, // obj b 将不可更改
    enumeerable:false, // 不可for in循环
    configurable:false, // 不可被删除
})

// 其实可以有很多的方法来修改属性描述符
Object.freeze(ob1) // 将 writable 和 configurable 设置为false
Object.seal(ob1) // 将 configurable 设置为false

// getOwnPropertyDescriptor 获取属性标签
console.log(Object.getOwnPropertyDescriptor(ob1,"b"));