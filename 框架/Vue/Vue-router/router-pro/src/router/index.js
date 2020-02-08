/*
 * @Description: 
 * @Autor: Leon
 * @Date: 2020-02-07 00:14:29
 * @LastEditors  : Leon
 * @LastEditTime : 2020-02-08 14:25:29
 */
import Vue from 'vue';
// import VueRouter from 'vue-router';
// 自行封装router
import VueRouter from '../myrouter';
import Home from '../components/HelloWorld'
import Test from '../components/test.vue'
Vue.use(VueRouter)

// const routes = [
//     {
//         path:"/",
//         name:"home",
//         component:Home
//     },
//     {
//         path:"/test",
//         name:"test",
//         component:Test
//     },
// ]
// const router = new VueRouter({
//     routes
// })

// export default router;
export default new VueRouter({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/test",
            name: "test",
            component: Test
        },
    ]
});