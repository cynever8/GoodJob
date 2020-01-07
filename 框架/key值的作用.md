<!--
 * @Description: 
 * @Autor: Leon
 * @Date: 2020-01-07 22:26:48
 * @LastEditors  : Leon
 * @LastEditTime : 2020-01-07 22:37:12
 -->
# Key值的作用

1. key 的出现并不是给开发人员使用的 ,而是给diff算法准备的
2. key 一般情况下遍历子元素/子组件的时候需要使用key值(什么时候使用)
3. 作用
   1. 用来做diff算法的对比
   2. React认为diff算法在对比的时候
      1. 如果key值相同的情况下,则当前组件/元素会认为是同一个元素,那么接下来的时候只会进行数据的更新
      2. 如果key 值不一样,会先销毁后创建
      3. 因此当key 值不同的时候会执行以下生命周期
         1. componentWillUnmount
         2. constructor
         3. componentWillMount
         4. render
         5. componentDidMount
4. 注意
   1. 操作中有增删改的时候不要用`index/时间戳/随机数等不唯一的数据`当作key值,这样会造成组件的重新创建.
   2. 当数据渲染出之后不会改变的时候,可以使用`index`做下标.