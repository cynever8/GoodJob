<!--
 * @Description: 
 * @Autor: Leon
 * @Date: 2019-12-19 23:25:13
 * @LastEditors: Leon
 * @LastEditTime: 2019-12-19 23:28:42
 -->
 
# 如何做下拉刷新
1. 如果需要做下拉刷新的时候必须触发一个方法
    pullingDown:触发下拉刷新
    this.scroll.on("pullingDown",()=>{
        
    })

2. 注意的是下拉刷新默认是不会执行的，因为需要做下拉刷新的配置
    new BScroll(".wrapper",{
        pullDownRefresh:{
            threshold:距离顶部的距离
        }
    })

3. better-scroll默认帮我们做了性能的优化，当第一次数据加载完毕后才能进行第二次数据的加载
    this.scroll.finishPullDown();//通知better-scroll数据加载完毕
    this.scroll.refresh();//重新计算better-scroll


# 如何做上拉加载更多

1. 如果需要做下拉刷新的时候必须触发一个方法
    pullingUp:触发下拉刷新

    this.scroll.on("pullingUp",()=>{

    })

2. 注意的是上拉加载更多默认是不会执行的，因为需要做上拉加载更多的配置
        new BScroll(".wrapper",{
        pullUpLoad:{
            threshold:距离底部的距离
        }
    })

3. better-scroll默认帮我们做了性能的优化，当第一次数据加载完毕后才能进行第二次数据的加载
    this.scroll.finishPullUp();
    this.scroll.refresh();


# 如何监听滚动的变化
1. 通过事件scroll来去监听
this.scroll.on("scroll",({x,y})=>{

})

2. 这个事件默认不会执行的需要做better-scroll配置
new BScroll(".wrapper",{
        probeType:1,2,3//任意选择一个  优先选择1
})