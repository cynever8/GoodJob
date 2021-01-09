// https://juejin.cn/post/6844903937426849799 资料链接
let obj = {
  name: "王一丁",
  age: 1,
  family: {
    mama: "母",
    father: "父",
  },
};
function clone1(target) {
  let cloneTarget = {};
  for (const key in target) {
    cloneTarget[key] = target[key];
  }
  return cloneTarget;
}
function clone2(target) {
  if (typeof target === "object") {
    let cloneTarget = {};
    for (const key in target) {
      cloneTarget[key] = clone2(target[key]);
    }
  } else {
    return target;
  }
}
let data = clone2(obj);
console.log("data", data);
