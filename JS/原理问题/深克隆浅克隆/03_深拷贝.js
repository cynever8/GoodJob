// 1. 😂JSON.parse(JSON.stringify())
/* 
原理： 
    用JSON.stringify将对象转成JSON字符串，
    再用JSON.parse()把字符串解析成对象，一去一来，新的对象产生了，
    而且对象会开辟新的栈，实现深拷贝。

    😀这种方法虽然可以实现数组或对象深拷贝,但不能处理函数
*/
let arr = [1, 2, {
    username: 'Leon'
}];
let arr4 = JSON.parse(JSON.stringify(arr));
arr4[2].username = 'Nina';
// console.log(arr, arr4);

// let arr = [1, 3, {
//     username: ' kobe'
// }, function () { }];
// let arr4 = JSON.parse(JSON.stringify(arr));
// arr4[2].username = 'duncan';
// console.log(arr, arr4);

// 2.😂手写递归方法------------------------------------------
// 递归方法实现深度克隆原理：遍历对象、数组直到里边都是基本数据类型，然后再去复制，就是深度拷贝

// FIXME:这个地方还没有看懂
//定义检测数据类型的功能函数
var object = { username: "Leon", age: 21 };

//定义检测数据类型的功能函数
function checkedType(target) {
    // var obj2 = Object.prototype.toString.call(target)
    var obj = Object.prototype.toString.call(target).slice(8, -1)
    // console.log(obj2)
    // console.log(obj)
    return obj;
}
// checkedType(object) // 监测数据
function clone(target) {
    // 判断泡杯的数据类型
    // 初始化变量reslut成为最终克隆的数据
    let result, targetType = checkedType(target);
    if (targetType === 'Object') {
        result = {};
    } else if (targetType === 'Array') {
        result = [];
    } else {
        return target;
    }
    //遍历目标数据
    for (let i in target) {
        // 获取遍历数据结构的每一项值
        let value = target[i];
        // 判断目标结构里的每一值是否存在对象/数组
        if (checkedType(value) === 'Object' || checkedType(value) === 'Array') {//对象/数组里嵌套了对象/数组
            //继续遍历获取到value值
            result[i] = clone(value);
        } else {//获取到value值是基本的数据类型或是函数
            result[i] = value;
        }
    }
    return result;
}

// 封装一个深拷贝

function deepClone(origin) {
    var isObject = any => typeof any == 'object' && any != null
    var isArray = any => Object.prototype.toString.call(any) === '[object Array]'
    if (!isObject(origin)) return origin
    var target = isArray(origin) ? [] : {}
    for (var prop in origin) {
        if (origin.hasOwnProperty(prop)) {
            var value = origin[prop]
            if (isObject(value)) {
                target[prop] = deepClone(value)
            } else {
                target[prop] = value
            }
            //if...else...可换成三目运算符
            //target[prop] = isObject(value) ? deepClone(value) : value
        }
    }
    return target;
}

// 😂下面这个也是递归实现深拷贝

/*
 *  递归实现
 *  Zepto 中深拷贝的代码
 *  内部方法：用户合并一个或多个对象到第一个对象
 *  参数：
 *      target 目标对象  对象都合并到target里
 *      source 合并对象
 *      deep 是否执行深度合并
 */
// function extend(target, source, deep) {
//     for (key in source) {
//         if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
//             // source[key]是对象,而target[key]不是对象,则target[key]={}初始化一下,否则递归会报错
//             if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
//                 target[key] = {}
//             }
//             // source[key]是数组,而target[key]不是数组,则target[key]=[]初始化一下,否则递归会出错
//             if (isArray(source[key]) && !isArray(target[key])) {
//                 target[key] = []
//             }
//             //执行递归
//             extend(target[key], source[key], deep);
//         }
//         //不满足以上条件,说明source[key]是一般的值类型,直接赋值给target就是了
//         else if (source[key] !== undefined) {
//             target[key] = source[key];
//         }
//     }
// }
// $.extend = function (target) {
//     var deep, args = slice.call(arguments, 1);
//     // 第一个参数为boolean值时 , 表示是否深度合并
//     if (typeof target == 'boolean') {
//         deep = target;
//         // target 取第二个参数
//         target = args.shift();
//     }
//     //遍历后面的参数,都合并到target上
//     args.forEach(function (arg) {
//         extend(target, arg, deep);
//     });
//     return target
// }