/*
 * @Description: Vue2.0使用defineProperty 来实现
 * @Autor: Leon
 * @Date: 2020-02-04 21:54:05
 * @LastEditors  : Leon
 * @LastEditTime : 2020-02-06 14:59:27
 */
function vue() {
    this.$data = { a: 1 };
    this.el = document.getElementById("app");
    this.virtualdom = "";
    this.observe(this.$data);
    this.render();
}
vue.prototype.observe = function (obj) {
    var self = this;
    var value;
    // 问题 1 :defineProperty 需要劫持每一个属性
    for (var key in obj) {
        value = obj[key];
        // 如果是对象需要递归的调用自身
        if (typeof value === "object") {
            this.observe(value);
        } else {
            Object.defineProperty(this.$data, key, {
                get: function () {
                    // 1. 真正的Vue中get方法中会进行依赖收集
                    return value;
                },
                set: function (newval) {
                    // 2. 真正的Vue中set方法中会触发依赖
                    // 直接触发视图更新
                    value = newval;
                    self.render();
                }
            })
        }
    }
}
// 3. 真正的Vue中render方法会读取视图模板,生成AST语法树(抽象语法树)
vue.prototype.render = function () {
    this.virtualdom = "I am " + this.$data.a;
    this.el.innerHTML = this.virtualdom;
}

// Vue2.0 数组监听实现,上面只能监听对象
// vue组件的特性 , push, shift, unshift

var arraypro = Array.prototype;// 取出原型链
// Object.create https://www.jianshu.com/p/28d85bebe599
var arrayob = Object.create(arraypro);// 拷贝原型链 深拷贝
var arr = ['psuh', 'pop', 'shift'];
// 装饰者模式
arr.forEach(function (method, index) {
    arrayob[method] = function () {
        var ret = arraypro[method].apply(this, arguments)
        dep.notify();// 触发数据更新
        return ret;
    }
})