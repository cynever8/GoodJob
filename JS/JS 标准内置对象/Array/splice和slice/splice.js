/* 
    1. splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
*/

// 😂从第 2 位开始删除 0 个元素，插入“drum”
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
// myFish.splice(2,0,"drum")
// myFish.splice(2,0,"drum","guitar")

// console.log("F: myFish", myFish)


// 😂从第 3 位开始删除 1 个元素
var myFish2 = ["angel", "clown", "mandarin", "sturgeon"];
myFish2.splice(3, 1);
// console.log("F: myFish", myFish2)

//😂从第 2 位开始删除 1 个元素，插入“trumpet”
var myFish3 = ["angel", "clown", "mandarin", "sturgeon"];
myFish3.splice(2, 1, "trumpet");
// console.log("F: myFish3", myFish3)

// 😂从第 2 位开始删除所有元素
var myFish4 = ["angel", "clown", "mandarin", "sturgeon"];
myFish4.splice(2);
console.log("F: myFish4", myFish4)
