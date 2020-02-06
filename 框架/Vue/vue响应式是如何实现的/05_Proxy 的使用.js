/*
 * @Description: 
 * @Autor: Leon
 * @Date: 2020-02-05 18:50:49
 * @LastEditors  : Leon
 * @LastEditTime : 2020-02-05 19:24:19
 */

//  1. Proxy验证类型
/* 
    策略模式
        使用策略模式使代码更优雅
        自定义检测
*/
var valiob = {
    name: function (value) {
        var reg = /^[\u4E00-\u9FA5]+$/;
        if (typeof value === 'string' && reg.test(value)) {
            return true;
        }
        return false;
    },
    age: function (value) {
        if (typeof value === 'number' && value >= 18) {
            return true;
        }
        return false;
    }
}
function person(age, name) {
    this.age = age;
    this.name = name;
    return new Proxy(this, {
        get: function (target, key) {
            return target[key];
        },
        set: function (target, key, value) {
            if (valiob[key](value)) {
                return Reflect(target, key);
            } else {
                throw new Error(key + " type error ")
            }
        }
    })
}
var tss = new person();
tss.age = "123";

// 2. 真正的私有变量