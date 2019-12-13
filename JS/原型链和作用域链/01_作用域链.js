/*
 * @Description: 
 * @Autor: Leon
 * @Date: 2019-12-13 08:38:52
 * @LastEditors: Leon
 * @LastEditTime: 2019-12-13 08:43:49
 */
var a = 1;
function fn1() {
    function fn2() {
        var a = 2;
        function fn3() {
            // var a = 3;
            console.log(a);
        }
        fn3();
    }
    fn2()
}
fn1();