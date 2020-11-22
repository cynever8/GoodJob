/*
 * @Description: 
 * @Autor: Leon
 * @Date: 2019-12-24 08:30:28
 * @LastEditors: Leon
 * @LastEditTime: 2019-12-30 16:32:54
 */
/*

   var eventList = {
        click:[fn1,fn2,fn2]
        handle:[]
   }



    $on(eventName,[callback])
    首先判断事件名称是否存在,如果存在则直接将事件函数push到对应的数组里面
    如果不存在则给当前事件名赋值一个数组，然后在将函数push进行
    


    $emit(eventName,[params])
    判断事件名称是否存在,如果存在则遍历对应的数组,调用数组中的每一个函数。需要需要传递参数，只需要在
    调用函数的时候将参数传入即可



    $off(eventName,[callbak])
    判断事件名称是否存在
    判断第二个参数是否存在，如果存在则获取到这个函数对应的下标，然后做移除。如果不存在，则数组为空


*/

const eventList = {}

// 接收数据
const $on = (eventName, callback) => {
    if (!eventList[eventName]) {
        eventList[eventName] = [];
    }
    eventList[eventName].push(callback);
}

// 发射数据
const $emit = (eventName, params) => {
    if (eventList[eventName]) {
        eventList[eventName].forEach(cb => {
            cb(params)
        });
    }
}

// 
const $off = (eventName, callback) => {
    if (eventList[eventName]) {
        if (callback) {
            let index = eventList[eventName].indexOf(callback);
            eventList[eventName].splice(index, 1);
        } else {
            eventList[eventName].length = 0;
        }
    }
}
export default {
    $on,
    $emit,
    $off
}

function fn1(params){
    console.log(111,params)
}



function fn2(params){
    console.log(222,params)
}


function fn3(params){
    console.log(333,params)
}


$on("handle",fn1);
$on("handle",fn2);
$on("handle",fn3);
//$off("handle",fn1)
$emit("handle","alley")