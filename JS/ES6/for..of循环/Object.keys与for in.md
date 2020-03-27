for in

    for in一般用于遍历对象的属性；
    作用于数组的for in除了会遍历数组元素外，还会遍历自定义可枚举的属性，以及原型链上可枚举的属性；

Object.keys()

遍历结果为由对象自身可枚举属性组成的数组，数组中的属性名排列顺序与使用for in循环遍历该对象时返回的顺序一致；
与for in区别在于不能遍历出原型链上的属性；

for of

    ES6中添加的循环语法；
    for of支持遍历数组、类对象（例如DOM NodeList对象）、字符串、Map对象、Set对象；
    for of不支持遍历普通对象，可通过与Object.keys()搭配使用遍历；（见示例二）
    for of遍历后的输出结果为数组元素的值；
    搭配实例方法entries()，同时输出数组内容和索引；（见示例三）

1. Array.prototype.sayLength = function(){
 console.log(this.length);
 3}
 let arr = ['a','b','c','d'];
 arr.name = '数组';
 Object.defineProperties(arr,{
 type:{
       value:true,
       writable:true,
       enumerable:true
      }
});
 for(let i of arr){
     console.log(i);//a,b,c,d
 }

 2. var person={
    name:'coco',
    age:22,
    locate:{
        country:'China',
        city:'beijing',
    }
}
for(var key of Object.keys(person)){
    //使用Object.keys()方法获取对象key的数组
    console.log(key+": "+person[key]);//name: coco,age: 22,locate: [object Object]
}

3. 
let arr3 = ['a', 'b', 'c'];
        for (let [index, val] of arr3.entries()) {
            console.log(index + ':' + val);//0:a 1:b 2:c
        }