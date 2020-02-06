/*
 * @Description: Vue3.0 使用proxy来实现
 * @Autor: Leon
 * @Date: 2020-02-05 16:27:38
 * @LastEditors  : Leon
 * @LastEditTime : 2020-02-05 17:15:04
 */

/* 
    1. 和Vue2.0 实现响应式的不同
        1. Object.defineProperty是对原有的数据进行劫持,改变了源对象的属性的标签
        2. Proxy 对对象进行一个代理 , 不会改变源对象 , 返回新对象 , 对新对象进行操作
        3. Proxy 相对于vue就省去了for in 循环
        4. Proxy 没有必要在外层重新定义 value 值 

*/

/* var ob2 = {
    a: 1,
    b: 2
}
// 相对于vue就省去了for in 循环
var obj = new Proxy(ob2, {
    get: function (target,key,receiver) {
        console.log("get",target,key,receiver);
        return Reflect.get(target,key);
    },
    set:function  (target,key,value,receiver) {
        console.log("set",target,key,value,receiver);
        return Reflect.set(target,key,value)// 使用 Reflect 直接设置set
    }
})
obj.b=3
console.log(obj.b); */

// 使用Proxy实现响应式
function vue () {
    this.$data = {a:1};
    this.el = document.getElementById("app");
    this.virtualdom = "",
    this.observe(this.$data);
    this.render();
}
vue.prototype.observe = function () {
    var self = this;
    this.$data = new Proxy(this.$data, {
        get: function (target, key) {
            return target[key]
        },
        set: function (target, key, newval) {
            target[key] = newval;
            self.render();
        }
    })
}
vue.prototype.render = function  () {
    this.virtualdom = "I am "+ this.$data.a;
    this.el.innerHTML = this.virtualdom;
}