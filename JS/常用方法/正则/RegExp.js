// ------------ 1. 使用正则改变数据结构 -----------------
// 下例使用 replace 方法 （继承自 String）去匹配姓名 first last 输出新的格式 last, first。
// 脚本中使用 $1 和 $2 指明括号里先前的匹配.

// \s 匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \f\n\r\t\v]。
// \w 匹配字母、数字、下划线。等价于'[A-Za-z0-9_]'。

var re = /(\w+)\s(\w+)/;
var str = "John Smith";
// 括号代表子匹配项 , 我想获取正则中某一个部份的时候可以用子匹配项
// 一般可以用来拼接获取的信息
// 第一个()就代表$1 第二个()代表$2
var newstr = str.replace(re, "$2,$1");
// var newstr = str.replace(re, "$1,$2");
console.log(newstr);