<!--
 * @Description: 
 * @Autor: Leon
 * @Date: 2020-02-06 15:38:21
 * @LastEditors  : Leon
 * @LastEditTime : 2020-02-08 14:10:46
 -->

# 路由

1. 后端路由
   - 输入url -> 轻轨发送到服务器 -> 服务器解析请求的路径 -> 拿取对应页面 -> 返回出去
2. 前端路由
   - 输入url -> js解析地址 -> 找到对应地址的页面 -> 执行页面生成的js -> 看到页面

## Vue-router工作流程

- url改变 -> 触发监听事件 -> 改变vur-router里面的current变量 -> 监视current变量的监视者 -> 获取新的组件 -> Render新组件

## Hash与History

| Hash                               | History                         |
| ---------------------------------- | ------------------------------- |
| #号后的就是hash的内容              | History即正常的路径             |
| 可以通过location.hash拿到          | location.pathname               |
| 可以通过onhashchange监听hash的改变 | 可以用onpopstate监听history变化 |

## Vue插件基础知识(常用API)

- Vuex Vue-router element-ui 都是Vue插件
  
### 1. Vue.mixin

1. Vue.use() 去使用一个插件,并且会执行install方法
2. Vue.mixin往vue的全局中混入自定义的操作
   1. 自定义生命周期(重要)
      1. 生命周期中的 this 指向的是当前的组件
   2. 自定义公共的 data 数据和 methods 方法
      1. 可以把一些公共的数据或是方法写在里卖弄
3. 可以通过this.$options拿到new vue时的参数

### 2. Vue.util

- [资料](https://www.kancloud.cn/diaoyundexia/text/181108)
- {warn: ƒ, extend: ƒ, mergeOptions: ƒ, defineReactive: ƒ}
    1. defineReactive:定义一个对象的响应属性（core/observer/index.js）
       
       - usage:
           - Vue.util.defineReactive(obj,key,value,fn)
           - obj: 目标对象，
           - key: 目标对象属性；
           - value: 属性值
           - fn: 只在node调试环境下set时调用
    2. vue.util.extend  
        - extend: 浅复制(shared/util.js)
            
            - usage:
                - Vue.util.extend(to,form);
                - to : 目标对象
                - form： 源对象
                
            - example:
                ```js
                let person ={
                        name: 'libai',
                        age : 100
                };
                
                let cloneObj = Vue.util.extend({},person);
                console.loh(cloneObj)
                ```
                
### 3. vue.extend 和 vue.util.extend 

1. vue.extend 
   - [资料](https://www.cnblogs.com/hentai-miao/p/10271652.html)
   - [Alert弹窗案例](https://www.jianshu.com/p/b183f93a4aa2)
   - 是一个构造器
   - 拿到组件实例化后的vue对象 , 拿到组件的构造函数
2. vue.util.extend
   - 做浅拷贝
   - 主要作用就是合并 { el: '#root', router, store }和 App。

## 封装一个vue-router

- [资料](https://segmentfault.com/a/1190000020213325?utm_source=tag-newest)