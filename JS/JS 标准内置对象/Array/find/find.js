/*
 * @Description:
 * @Autor: Leon
 * @Date: 2019-12-05 20:49:37
 * @LastEditors: 王一丁
 * @LastEditTime: 2021-02-14 19:49:24
 */
// 1. 用对象的属性查找数组里的对象
var inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function findCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(findCherries)); //{ name: 'cherries', quantity: 5 }

// 2. 寻找数组中的质数
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5

let cartList = {
  items: [
    { id: "001", name: "电脑", price: "100", count: 1 },
    { id: "002", name: "键盘", price: "20", count: 1 },
  ],
};
let item = {
  id: "001",
  name: "电脑",
  price: "100",
};

console.log(
  cartList.items.find((items) => {
    return (items.id = item.id);
  })
);

let arr = [1, 3, 6, 4, 5, 9, 1];
let answer = arr.find((value, index, arr) => {
  console.log("value,index,arr", value, index, arr);
  return value > 4;
});
console.log("answer", answer);
