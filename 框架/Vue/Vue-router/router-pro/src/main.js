/*
 * @Description: 
 * @Autor: Leon
 * @Date: 2020-02-07 00:09:45
 * @LastEditors  : Leon
 * @LastEditTime : 2020-02-08 14:36:50
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import router from './myrouter'

var fn = function  () {
  console.log(1);
}

// 1. mixin
/* fn.install = function  (vue) {
  vue.mixin({
    data: function () {
      return { c: 123 }// 在这里混入一个 c ,在项目中的任何地方都可以拿到
    },
    methods: {
      // 可以把一些常用的方法混入到vue里面 例如: 消息型弹窗 
      globalMethod: function () {
        console.log("我是全局方法");
      }
    },
    // 自定义生命周期
    // 所有的组件都会执行这个 created
    created() {
      console.log("I am create");
      // this 指向与当前的组件的 , 可以在mixin中拿到当前的组件
      console.log(this);
    },
  })
} */

// 2. vue.util
/* var test = {
  testa : 1
}
setTimeout(function () {
  test.testa = 444;
}, 2000)

fn.install = function  (vue) {
  console.log(vue.util);
  vue.util.defineReactive(test, 'testa');
  // 混入
  vue.mixin({
    beforeCreate() {
      this.test = test
      console.log("F: test", test)
    },
  })
} */


// 3. vue.extend 和 vue.util.extend 
/* var test = {
  testa : 1
}
const Constructor = Vue.extend(test)
// 新建这个组件的构造函数.也就是组件的this
const vm = new Constructor().$mount;

fn.install = function  (vue) {
  console.log(vm);
  console.log(vue.extend());
}

Vue.use(fn); */


Vue.config.productionTip = false//关闭生产环境错误提示
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
// new Vue({
//   el:"#app",
//   router,
//   component:{App},
//   template:"<App/>"
// })
