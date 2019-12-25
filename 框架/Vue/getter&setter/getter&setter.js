/* https://www.cnblogs.com/Leo_wl/p/6002068.html */

// 在平时，我们创建一个对象，并修改它的属性，是这样的：
var obj = {
    val: 99
}
obj.val = 100;
console.log(obj.val);

// 当我修改了这个对象的属性时，要去做一些事 , 使用getter和setter
var Coder = function () {
    var that = this;
    return {
        // get为取值，set为赋值
        get name() {
            // 可以把get看成一个取值的函数，函数的返回值就是它拿到的值。
            if (that.name) {
                return that.name
            }
            return '你还没有取名'
        },
        set name(val) {
            // set 方法相当于一个万能的监听器, 一旦name值改变就会进入这个函数.
            console.log("你把名字修改成了" + val);
            that.name = val;
        }
    }
}

var isMe = new Coder();
console.log(isMe.name);
isMe.name = "Leon";
console.log(isMe.name);
console.log(isMe);