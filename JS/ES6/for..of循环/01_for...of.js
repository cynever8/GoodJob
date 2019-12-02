// 1. 迭代Array

let iterable = [1,2,3,4,5];

for( let value of iterable){
    value += 1;
    // console.log(value);
}

// 2. string
let iterable2 = "boo";

for (let value of iterable2) {
//   console.log(value);
}
// "b"
// "o"
// "o"


// 3. 迭代Map
// Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。
let iterable3 = new Map([["a",1],["b",2],["c",3]]);

for(let entry of iterable3){
    console.log(entry);
}
// ["a", 1]
// ["b", 2]
// ["c", 3]

for(let [key,value] of iterable3){
    console.log(key,value);
    console.log(value);
}
// 1
// 2
// 3