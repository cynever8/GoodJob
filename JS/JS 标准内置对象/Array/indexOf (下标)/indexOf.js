// --------------😂找出指定元素出现的所有位置--------------
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];

var element = 'a';
var idx = array.indexOf(element);
// console.log("F: idx", idx)

while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
}

// console.log(indices);

//---------------😀判断一个元素是否在数组里，不在则更新数组-------------
function goods(phones, phone) {
    if (phones.indexOf(phone) === -1) {
        phones.push(phone);
        console.log("已将加入" + phone + "商品列表中");
    } else if (phones.indexOf(phone) > -1) {
        console.log(phone + "已经在商品你列表中");
    }
}

var phones = ["小米", "华为", "苹果", "荣耀"];
goods(phones, "小米");
goods(phones, "oppo");
console.log("F: phones", phones)
