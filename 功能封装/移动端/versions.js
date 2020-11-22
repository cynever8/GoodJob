/**
 * @description: 判断当前设备/浏览器类型
 * @param {baseUtil.versions.trident等} 
 * @return: true/false
 */
(function () {
    window.baseUtil = {
        versions: (function () {
            var u = navigator.userAgent;
            return {
                //移动终端浏览器版本信息
                trident: u.indexOf("Trident") > -1, //IE内核
                presto: u.indexOf("Presto") > -1, //opera内核
                webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
                gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                //mobile: !(u.indexOf('MQQBrowser') == -1), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或uc浏览器
                iPhone: u.indexOf("iPhone") > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf("iPad") > -1, //是否iPad
                SDKVersion: u.indexOf("SDKVersion") > -1, //是否androidSDK新版
                MicroMessenger: u.indexOf("MicroMessenger") > -1, //是否微信
                miniProgram: u.indexOf("miniProgram") > -1, //是否微信小程序
                h5: u.indexOf("MQQBrowser") == -1, //是否浏览器
                h5plus: u.indexOf("Html5Plus") > -1, //是否有h5plus环境
                app: u.indexOf("XCSmartCity") > -1 //是否app环境
            };
        })(),
    }
})();
