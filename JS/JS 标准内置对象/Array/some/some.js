// 判断数组元素中是否存在某个值

// var fruits = ['apple', 'banana', 'mango', 'guava'];
// function checkAvailability (arr,val) {
//     return arr.some(function  (arrVal) {
//         console.log(val,arrVal,val === arrVal);
//         return val === arrVal
//     })
// }
// checkAvailability(fruits,'a')

// 使用箭头函数判断数组元素中是否存在某个值

var fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true