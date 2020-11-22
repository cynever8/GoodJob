/**  函数防抖 (t秒内只执行最后一次点击)
 * @param fn {String}  函数名
 * @param t  {Number}  延迟时间
 * @returns  处理后的执行函数
 */
export const Debounce = (fn, t) => {
  let delay = t || 500;
  let timer;
  return function () {
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, delay);
  };
};

/**
 * 函数节流 (每t秒执行一次)
 * @param fn {String}  函数名
 * @param t  {Number}  延迟时间
 * @returns  处理后的执行函数
 */
export const Throttle = (fn, t) => {
  let last;
  let timer;
  let interval = t || 500;
  return function () {
    let args = arguments;
    let now = +new Date();
    if (last && now - last < interval) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        fn.apply(this, args);
      }, interval);
    } else {
      last = now;
      fn.apply(this, args);
    }
  };
};
