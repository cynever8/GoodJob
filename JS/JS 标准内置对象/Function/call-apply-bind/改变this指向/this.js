// https://www.cnblogs.com/pssp/p/5215621.html

// 什么时候需要改变this的指向
var a = {
    user: "leon",
    fn: function () {
        // console.log(this.user);
    }
}
var b = a.fn;
b();// underfined // this的指向window
a.fn();// leon // this指向a

// 1. call()-----------------------------------------------
var c = {
    user: "leon",
    fn: function () {
        // console.log(this.user);
    }
}
var d = c.fn;
// 通过在call方法，给第一个参数添加要把d添加到哪个环境中，简单来说，this就会指向那个对象。
// 在d运行时使用c的this值
d.call(c); // leon

// call方法除了第一个参数以外还可以添加多个参数，如下：
var e = {
    user: "leon",
    fn: function (e, ee) {
        // console.log(this.user); //leon
        // console.log(e+ee); //3
    }
}
var f = e.fn;
f.call(e, 1, 2);

// 2. apply()------------------------------------------------
// apply方法和call方法有些相似，它也可以改变this的指向

var g = {
    user: "leon",
    fn: function () {
        // console.log(this.user); //leon
    }
}
var h = g.fn;
h.apply(g);

// 同样apply也可以有多个参数，但是不同的是，第二个参数必须是一个数组，如下：
// var a = {
//     user:"追梦子",
//     fn:function(e,ee){
//         console.log(this.user); //追梦子
//         console.log(e+ee); //520
//     }
// }
// var b = a.fn;
// var arr = [500,20];
// b.apply(a,arr);


//注意如果call和apply的第一个参数写的是null，那么this指向的是window对象
var a1 = {
    user: "追梦子",
    fn: function () {
        // console.log(this); //Window {external: Object, chrome: Object, document: document, a: Object, speechSynthesis: SpeechSynthesis…}
    }
}
var b1 = a1.fn;
b1.apply(null);


// 3. bind()-----------------------------------------------
// bind方法和call、apply方法有些不同，但是不管怎么说它们都可以用来改变this的指向。

// 不同
var obj = {
    user: "leon",
    fn: function () {
        // console.log(this.user);
    }
}
var obj2 = obj.fn;
obj2.bind(obj);//并没有打印
// 我们发现代码没有被打印，这就是bind和call、apply方法的不同，实际上bind方法返回的是一个修改过后的函数。

var obj3 = {
    user: "leon",
    fn: function () {
        console.log(this.user);
    }
}
var obj4 = obj3.fn;
var obj5 = obj4.bind(obj3);
obj5();

/* 
总结：
    call和apply都是改变上下文中的this并立即执行这个函数，
    bind方法可以让对应的函数想什么时候调就什么时候调用，
    并且可以将参数在执行的时候添加，这是它们的区别，
    根据自己的实际情况来选择使用。
*/