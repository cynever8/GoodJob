// fromIndex 小于等于 0 时，返回 0；
"Blue Whale".indexOf("", -1); // 返回 0

// fromIndex 大于 0 且小于等于 str.length 时，返回 fromIndex；
"Blue Whale".indexOf("Whale", 0); // 返回  5
"Blue Whale".indexOf("Whale", 5); // 返回  5

// fromIndex 大于字符串长度 str.length 时，返回 str.length。
"Blue Whale".indexOf("", 11);     // 返回 10

//----------------------检测是否存在某字符串---------------------
console.log("Blue Whale".indexOf("Blue") !== -1);
console.log("Blue Whale".indexOf("Bluea") !== -1);

// ------------😂使用 indexOf 统计一个字符串中某个字母出现的次数---------------
var str = 'To be, or not to be, that is the question.';
var count = 0;
var pos = str.indexOf('e');

while(pos !== -1){
    count++;
    pos = str.indexOf('e',pos+1);
}
console.log(count);