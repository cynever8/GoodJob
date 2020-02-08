/*
 * @Description: s
 * @Autor: Leon
 * @Date: 2020-02-08 00:04:07
 * @LastEditors  : Leon
 * @LastEditTime : 2020-02-08 15:27:13
 */
class HistoryRoute {
    constructor() {
        // 监听当前路由路径
        this.current = null;
    }
}

/**
 * @description: 
 * @param {
 *  options:"传入的路由参数" {
 *      mode:"路由模式"
 *      routes:"路由内容"
 *  }
 * } 
 * @return: 
 * @author: Leon
 */
class vueRouter {
    constructor(options) {
        this.mode = options.mode || "hash";
        this.routes = options.routes || [];
        this.history = new HistoryRoute;
        this.routerMap = this.createMap(this.routes);
        this.init();
    }
    init() {
        if (this.mode == "hash") {
            location.hash ? "" : location.hash = "/" // 存在传入空字符串 不存在传入/
            window.addEventListener('load', () => {
                console.log("load");
                this.history.current = location.hash.slice(1);
            })
            window.addEventListener('hashchange', () => {
                console.log("hashchange");
                this.history.current = location.hash.slice(1);
            })
        }
    }
    // 通过传递进来的routes构建路由表对象
    createMap(routes){
        // reduce方法是一个用于实现累加操作的方法
        return routes.reduce((memo,current)=>{
            // 将数组关系变为键值对关系
            memo[current.path] = current.component;
            return memo;
        },{})
    }
}

vueRouter.install = function (Vue) {
    // 写插件注意要判断插件是否已经注册
    if (vueRouter.install.installed) {
        return;
    }
    vueRouter.install.installed = true;
    Vue.mixin({
        beforeCreate() {
            // 组件中的一些选项 && this中有$option.router这个选项
            if (this.$options && this.$options.router) {
                // this 指向当前Vue示例
                this._root = this;
                // 将main.js中传入的 router 挂载到当前的组件中
                this._router = this.$options.router;
                Vue.util.defineReactive(this, 'current', this._router.history)
            } else {
                // 如果没有找到就向上查找一级
                this._root = this.$parent._root;
            }
            console.log(this);
            // 私有化
            // Object.defineProperty(this,"$router",{
            //     get(){
            //         return this._root._rooter;
            //     }
            // })
        },
    })
    Vue.component('router-view',{
        render(h) {
            console.log("F: h", h)
            // 获取路由地址
            let current = this._self._root._router.history.current;
            // console.log(this);
            // console.log("F: current", current)
            // 获取路由和组件的对应关系
            let routerMap = this._self._root._router.routerMap
            // console.log("F: routerMap", routerMap)
            return h(routerMap[current]);
        },
    })
}




export default vueRouter;