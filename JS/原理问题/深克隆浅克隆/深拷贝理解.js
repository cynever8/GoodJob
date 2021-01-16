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
// 考虑对象
function clone2(target) {
  if (typeof target === "object") {
    let cloneTarget = {};
    for (const key in target) {
      cloneTarget[key] = clone2(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
}
// 考虑数组
function clone3(target) {
  if (typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    for (const key in target) {
      cloneTarget[key] = clone3(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
}
obj.obj = obj
function clone4(target, map = new Map()) {
  if (typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    for (const key in target) {
      cloneTarget[key] = clone4(target[key], map);
    }
    return cloneTarget;
  } else {
    return target;
  }
}

let data = clone4(obj)
console.log("data", data)