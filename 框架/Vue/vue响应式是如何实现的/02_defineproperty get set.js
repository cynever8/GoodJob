/*
 * @Description: 
 * @Autor: Leon
 * @Date: 2020-02-04 19:04:23
 * @LastEditors  : Leon
 * @LastEditTime : 2020-02-04 21:33:54
 */
var ob1 = {
    a:1,
    b:2
} 

// defineProperty 借助外部变量来实现双向数据绑定
var _value = ob1.b
Object.defineProperty(ob1,"b",{
    // 更改
    set:function  (newValue) {
        console.log("Set a newValue = "+newValue);
        _value = newValue;
    },
    // 获取
    get:function  () {
        console.log("Get");
        return _value;
    }
})


ob1.b
// getOwnPropertyDescriptor 获取属性标签
// console.log(Object.getOwnPropertyDescriptor(ob1,"b"));