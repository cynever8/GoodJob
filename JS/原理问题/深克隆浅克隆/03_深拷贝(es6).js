// 封装一个深拷贝
function deepClone(origin) {
    // var isObject = any => typeof any == 'object' && any != null
    var isObject = function isObject(any) {
        return typeof(any) == 'object' && any != null;
    };
    // var isArray = any => Object.prototype.toString.call(any) === '[object Array]'
    var isArray = function isArray(any) {
        return Object.prototype.toString.call(any) === '[object Array]';
    };
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


var obj1 = {
    userlist: {
        username: "leon",
        age: "23"
    },
    joblist:["律师","教师"]
}

var obj2 = deepClone(obj1)
obj2.userlist.job = "律师"
obj2.id = "1"
obj2.joblist[1] = "工人"
console.log(obj1);
console.log(obj2);

