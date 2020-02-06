<!--
 * @Description: 
 * @Autor: Leon
 * @Date: 2020-02-04 18:53:44
 * @LastEditors  : Leon
 * @LastEditTime : 2020-02-04 21:48:05
 -->

# vue响应式是如何实现的

## 1. Vue2的数据响应式原理

### 什么是defineproperty

1. defineProperty其实是定义对象的属性
2. 而是给对象做属性标签
3. 只不过属性里get和set实现了响应式

| 属性名       | 默认值    | 含义           |
| ------------ | --------- | -------------- |
| value        | undefined | 属性值         |
| get          | undefined | 取出           |
| set          | undefined | 设置值         |
| writable     | false     | 是否可被重写   |
| enumeerable  | false     | 是否可以被枚举 |
| comfigurable | false     | 是否可被找到   |

### Vue中从改变一个数据到发生改变的过程

数据改变触发set --> Set部份触发notify --> 更改对应的虚拟DOM --> 重新render
                        |
                        |-->Get部份收集依赖
## 2. Vue3的数据响应式原理

## 3. Diff算法和virtual dom
