<!--
 * @Description: 
 * @Autor: Leon
 * @Date: 2019-12-19 20:42:51
 * @LastEditors: Leon
 * @LastEditTime: 2019-12-19 23:16:04
 -->
# better-scroll封装

- [官方文档](http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html#resizepolling)

## 问题

1. 我总是忘了引入这写API ,就直接去用
```JavaScript
mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
        // 引入
      probeType: 1,
      pullDownRefresh:true
    });
  },
```
---

## 使用到的API

### 选项

1. probeType 
   1. 一种优化,js获取高度一般都是实时触发的,避免实时触发造成多次请求.

2. pullUpLoad/pullDownRefresh
   1. 这个配置用于做(上拉加载/下拉刷新)功能

3. pullingUp/pullingDown
   1. 在一次(上拉加载/下拉刷新)的动作后，这个时机一般用来`去后端请求数据`。

4. pullDownRefresh
   1. 这个配置用于做下拉刷新功能
   2. 可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）。
   
### 方法

1. refresh()
   1. 每次数据重新加载之后,因为数据量有可能不一样页面长度会改变,所以就需要重新计算页面长度
   2. 重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。

2. finishPullDown()/finishPullUp()
   1. 作用：当(下拉/上拉)加载`数据加载完毕后`，需要调用此方法告诉 better-scroll 数据已加载。
   2. 数据不加载完, 拉动无效



## 基本使用

### 在BScroll实例中指明选项

```JavaScript
// 写在了mounted钩子函数中
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 1,
      pullDownRefresh: true
    });
  },
```

### 函数方法

#### 1. 弹出的方法

```JavaScript
    //满足条件出现loading
    handleScroll() {
      this.scroll.on("scroll", pro => {
        if (pro.y > 20) {
          this.flag = true;
        }
      });
    },
```

#### 2. 下拉刷新请求数据的方法

```JavaScript
     //下拉刷新获取数据
    handlepullingDown(callback) {
      this.scroll.on("pullingDown", () => {
        callback();
      });
    },
```

#### 3. 数据请求成功后的方法

1. 重新计算高度 refresh()
2. 防止用户多次下拉 finishPullDown()
3. 取消loading


```JavaScript
    handleRefreshDown() {
      // 重新计算better-scroll
      this.scroll.refresh();
      //防止用户多次频繁下拉刷新做的防抖
      this.scroll.finishPullDown();
      setTimeout(() => {
        this.flag = false;
      }, 1000);
    }
```