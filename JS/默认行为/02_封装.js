// 1. 阻止冒泡行为
function stopBubble(e) {
    //如果提供了事件对象,则这是一个非IE浏览器
    if (e && e.stopPropagation) {
        // 因此它支持w3c的stopPropagation()方法
        e.stopPropagation();
    } else {
        //否则，我们需要使用IE的方式来取消事件冒泡         
        window.event.cancelBubble = true;
    }
}

// 2. 阻止默认行为
//阻止浏览器的默认行为 
function stopDefault(e) {
    //阻止浏览器的默认行为 
    if (e && e.preventDefault) {
        e.preventDefault();
        //IE中阻止浏览器的默认动作的防止
    }else{
        window.event.returnValue = false;
    }
    return false;
}