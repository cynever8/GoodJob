/*
 * @Description: 
 * @Autor: Leon
 * @Date: 2020-01-07 09:28:09
 * @LastEditors: Leon
 * @LastEditTime: 2020-01-07 09:28:10
 */
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