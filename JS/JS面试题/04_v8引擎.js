/*
 * @Description: 
 * @Autor: Leon
 * @Date: 2020-02-08 20:29:54
 * @LastEditors  : Leon
 * @LastEditTime : 2020-02-08 22:05:59
 */

/* 
    1. 64位系统 V8 js执行引擎只有1.4g的内存可以支配

    2. 内存如何回收
        内存快接近满 --> 全局变量 不回收
                    --> 局部变量失去引用时 回收
    3. 在进行回收时,js执行会被暂停

    4. 如何查看内存
        1. 浏览器 window.performance;
        2. Node-process.memoryUsage();
    5. 容易引发内存使用不当的情形
        1. 滥用全局变量 
            - 手动释放 将变量赋值null 或underfined
        2. 缓存不限制
        3. 操作大文件
*/
// --------查看使用内存情况-------------
function getme() {
    var mem = process.memoryUsage();// 取得内存使用情况
    var format = function (bytes) {
        return (bytes / 1024 / 1024).toFixed(2) + "MB";// 转为Mb 单位
    }
    // 打印总内存和使用内存
    console.log("总内存heapTotal: " + format(mem.heapTotal)
        + "               使用heapUsed: " + format(mem.heapUsed));
}

// ---------解决内存溢出---------
var size = 20 * 1034 * 1024;
var arrall = [];

for (var i = 0; i < 20; i++) {
    // 如果数组长度大于4则进行删除
    if (arrall.length > 4) {
        arrall.shift();
    }
    arrall.push(new Array(size))
    getme();
}
// 