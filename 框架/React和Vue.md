<!--
 * @Description: 
 * @Autor: Leon
 * @Date: 2019-12-24 09:44:54
 * @LastEditors: Leon
 * @LastEditTime: 2019-12-25 21:57:33
 -->
1. 语法不同
   1. vue是template语法
   2. React是JSX语法
2. 设计模式不同[声明式,命令式](https://juejin.im/post/5950b0c56fb9a06bca0b7c04)
   1. React是声明范式
   2. Vue主要是命令式
3. 设置默认值的方式不同
   1. vue做了整合
      ```js
        props:{
            title:{
                // 确定数据传输类型
                type:String,
                // 下面这两个不能同时使用
                // 1. 当没有传输数据时,就把默认值传过去
                default:"默认值",
                // 2. 把数据规定为必填项 
                required:true,
                
            }
        }
      ```
   2. react 需要单独设置,和安装依赖
       1. 接收数据的组件如果没有收到数据可以设置默认值
           - 组件名.defaultProps = {}
           ```js
           <!-- Oneone组件 -->
           Oneone.defaultProps = {
               title : "默认值",
           }
           ```
       2. 数据校验
          1. 安装 cnpm install prop-types -S
          ```js
           import PropTypes from 'prop-types';
           
           Oneone.propTypes = {
               title:PropTypes.string
           }
          ```
