# foreach
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

#### forEach() 方法对数组的每个元素执行一次提供的函数。 
* 语法
    - arr.forEach(callback[, thisArg]);
    
* 参数
    1. callback
        - 为数组中每个元素执行的函数，该函数接收三个参数：
        1. currentValue
            - 数组中正在处理的当前元素。
        2. index可选
            - 数组中正在处理的当前元素的索引。
        3. array可选
            - forEach() 方法正在操作的数组。
    2. thisArg可选
        - 可选参数。当执行回调函数时用作 this 的值(参考对象)。 
* 描述
    - forEach 遍历的范围在第一次调用 callback 前就会确定。调用 forEach 后添加到数组中的项不会被 callback 访问到
    - forEach() 为每个数组元素执行callback函数
    - forEach() 被调用时，不会改变原数组（即调用它的数组），即使传递的参数里的 callback被调用时可能会改变原数组
        - forEach不直接改变调用它的对象，但是对象可能会被callback改变。
---

 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
#### map() 方法创建一个新数组，
* 其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
* 返回一个由回调函数的返回值组成的新数组。
### 语法
```JavaScript
    var new_array = arr.map(function callback(currentValue[, index[, array]]) {
        // Return element for new_array 
    } [, thisArg])
```


## 区别
1. 返回值
    - forEach()方法不会返回执行结果，而是undefined。也就是说，forEach()会修改原来的数组。
    - map()方法会得到一个新的数组并返回。
2. 修改原始数组
    - forEach()适合于你并不打算改变数据的时候，而只是想用数据做一些事情 – 比如存入数据库或则打印出来
    - map()适用于你要改变数据值的时候。不仅仅在于它更快，而且返回一个新的数组。这样的优点在于你可以使用复合(composition)(map(), filter(), reduce()等组合使用)来玩出更多的花样。
---
3. 能用forEach()做到的，map()同样可以。反过来也是如此。
4. map()会分配内存空间存储新数组并返回，forEach()不会返回数据。
5. forEach()允许callback更改原始数组的元素。map()返回新的数组。