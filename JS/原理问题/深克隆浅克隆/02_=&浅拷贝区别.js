var obj1 = {
    name:'Leon',
    age:'19',
    language:[1,2,3,["a","b","c"]]
};

var obj2 = obj1;
console.log(obj1);
console.log(obj2);

var obj3 = shallowCopy(obj1);
function shallowCopy (src) {
    var det = {};
    for(var prop in src){
        if(src.hasOwnProperty(prop)){
            det[prop] = src[prop];
        }
    }
    return det;
}

obj2.name = "Nina";//改变赋值得到的对象 obj2 同时也会改变原始值 obj1
obj3.age = "20";//改变浅拷贝得到的的 obj3 则不会改变原始对象 obj1
// 这就可以说明赋值得到的对象 obj2 只是将指针改变，其引用的仍然是同一个对象，而浅拷贝得到的的 obj3 则是重新创建了新对象。

// 又改变了赋值得到的对象 obj2 和浅拷贝得到的 obj3 中的 language 属性的第二个值和第三个值（language 是一个数组，也就是引用类型）
// 可以看出来，无论是修改赋值得到的对象 obj2 和浅拷贝得到的 obj3 都会改变原始数据。
obj2.language[1] = ["一","二"];
obj3.language[2] = ["三","四"];

console.log(obj1);
console.log(obj2);
console.log(obj3);
