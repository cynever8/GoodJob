## 数组更新检测      
1. 使用以下方法操作数组，可以检测变动           
    * push() 
    * pop() 
    * shift() 
    * unshift() 
    * splice() 
    * sort() 
    * reverse()
2. 新数组替换旧数组
    * filter()
    * concat()
    * slice()
    * map()
3. 不能检测以下变动的数组
    * vm.items[indexOfItem] = newValue           
    * `解决`
        * (1)Vue.set(example1.items, indexOfItem, newValue)
        * (2)splice
