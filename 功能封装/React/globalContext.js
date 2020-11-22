/*
 * @Description: 
 * @Autor: Leon
 * @Date: 2019-12-26 14:06:13
 * @LastEditors: Leon
 * @LastEditTime: 2019-12-27 19:30:04
 */
// 

import React from "./node_modules/react";
// 创建context对象

let GlobalContext = React.createContext();

// console.log(GlobalContext);
export const Provider = GlobalContext.Provider;

export const Consumer = GlobalContext.Consumer;