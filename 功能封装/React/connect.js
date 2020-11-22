/*
 * @Description: context封装 解决Consumer重复编写的问题
 * @Autor: Leon
 * @Date: 2019-12-27 14:49:14
 * @LastEditors: Leon
 * @LastEditTime: 2019-12-27 19:29:52
 */
/**
 * @description: 解决Consumer重复编写的问题
 * @param {type} 使用方式
 *  1. 通过解构赋值引入
 *      import {Connect,DefaultConnect} from '../hoc/connect';
 * 
 *  2. 当需要提取props中全部数据的时候可以用 DefaultConnect
 *      # this.props.数据名称
 *      # 导出
 *          export default DefaultConnect(组件名称);
 * 
 *  3. 当需要提取其中一条数据的时候使用 Connect
 *      # 首先定义提取数据的内容
 *      const mapStateToProps = (state)=>({
 *          数据名称:state.传递过来的数据的名称
 *      })
 *      # this.props.数据名称
 *      # 导出
 *          export default Connect(组件名称)(提取数据名称);
 * @return: 
 * @author: Leon
 */

import React, { Component } from './node_modules/react';
import { Consumer } from '../utils/globalContext';

export const Connect = (WrapperComponent) => (mapStateToProps) => {
    return class extends Component {
        render() {
            return (
                <Consumer>
                    {
                        (props) => {
                            let state = mapStateToProps(props)
                            // 子组件使用父组件的数据
                            return <WrapperComponent {...state} />
                        }
                    }
                </Consumer>
            )
        }
    }
}
export const DefaultConnect = (WrapperComponent) => {
    return class extends Component {
        render() {
            return (
                <Consumer>
                    {
                        (props) => {
                            return <WrapperComponent {...props} />
                        }
                    }
                </Consumer>
            )
        }
    }
}

/* 
mapStateToProps : 
    1. 是一个函数 
    2. 这个函数必须有一个返回值 , 返回值为一个对象
    3. 这个对象就是后代组件需要用到的数据
*/