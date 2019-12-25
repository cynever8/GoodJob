# ref $refs

* ref 被用来给`元素`或`子组件`注册引用信息。
* 引用信息将会注册在父组件的 $refs 对象上。
1. 如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；
2. 如果用在子组件上，引用就指向组件实例：
```JavaScript
    <!-- `vm.$refs.p` will be the DOM node -->
    <p ref="p">hello</p>

    <!-- `vm.$refs.child` will be the child component instance -->
    <child-component ref="child"></child-component>
```
* 当 v-for 用于元素或组件的时候，引用信息将是包含 DOM 节点或组件实例的数组。

* 关于 ref 注册时间的重要说明：因为 ref 本身是作为渲染结果被创建的，在初始渲染的时候你不能访问它们 - 它们还不存在！$refs 也不是响应式的，因此你不应该试图用它在模板中做数据绑定。


1. 用来获取最新的DOM结构
2. [访问子组件实例或元素(ref)](https://cn.vhttps://cn.vuejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E6%88%96%E5%AD%90%E5%85%83%E7%B4%A0uejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E6%88%96%E5%AD%90%E5%85%83%E7%B4%A0)