/*
 * @Description: 简单的排序 
 * @Autor: Leon
 * @Date: 2019-12-07 21:34:53
 * @LastEditors: Leon
 * @LastEditTime: 2019-12-08 18:30:47
 */

/**
 * @description: 
 * 参数 1 _data: 准备排序的数组的名称
 * 参数 2 _field: 排序的主键
 * 参数 3 _asc: 1 正序排序 ; 2 倒序排序
 * @param {type} 
 * @return: 
 * @author: Leon
 */
class Sort {
    sort(_data, _field, _asc) {
        var _temp;
        for (var m = 0; m < _data.length; m++) {
            for (var n = m + 1; n < _data.length; n++) {
                if (_data[m][_field] * _asc > _data[n][_field] * _asc) {
                    _temp = _data[m];
                    _data[m] = _data[n];
                    _data[n] = _temp;
                }
            }
        }
        return _data;
    }
}

var list = [{
    ID: 20, name: "小米", price: "1000", sold: 8000, praise: 899
}, {
    ID: 18, name: "华为", price: "2000", sold: 8999, praise: 5000
}, {
    ID: 30, name: "苹果", price: "5000", sold: 5000, praise: 5000
}, {
    ID: 31, name: "vivo", price: "1500", sold: 2000, praise: 1500
}, {
    ID: 28, name: "oppo", price: "1300", sold: 1000, praise: 1000
}]
var a = new Sort();
console.log(a.sort(list, "ID", 1));