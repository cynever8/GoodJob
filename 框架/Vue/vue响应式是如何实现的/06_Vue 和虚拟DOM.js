/*
 * @Description: Vue 与 虚拟DOM的关系
 * @Autor: Leon
 * @Date: 2020-02-05 22:58:22
 * @LastEditors  : Leon
 * @LastEditTime : 2020-02-06 15:17:56
 */

// virtual dom 是一个虚拟层,并不真实存在
<template>
    <div>
        <p><span>100</span></p>
        <p>{{ mes }}</p>
        <p>200</p>
    </div>
</template>

// 虚拟DOM 将上面的dom结构解析为下面的样式
// more then 6x faster
// Vue2.0 遍历速度由数量决定
// Vue2.0 中会遍历子节点,直到所有节点被遍历
// Vue3.0 会动中求静 , 会将动态变化的节点挑出来
// 遍历速度由动态数量决定
var virtual = {
    dom:'div',
    props:{
        id:1
    },
    test:""
    children:[
        {
            dom:"p",
            children:[
                dom:'span',
                children:[]
            ]
        },
        {
            dom:"p",
            children:[
            ]
        },
        {
            dom:"p",
            children:[
            ]
        },
    ]
}
// diff算法
/**
 * @description: 
 * @param {
 *  oldVnode 旧节点
 *  vnode 新节点
 *  oldCh =  oldVnode.children 旧子节点
 *  ch = vnode.children 新子节点
 * }
 *    
 * @return: 
 * @author: Leon
 */
patchVnode(oldVnode, vnode){
    // 先拿真实dom
    const el = vnode.el = oldVnode.el;
    // 分别拿出旧节点子元素和新节点子元素
    let i, oldCh = oldVnode.children, ch = vnode.children
    // 如果新旧节点相同直接返回
    if (oldVnode === vnode) return;
    // 分情况操作--- 1只有纯文字节点 , 2删除了子元素, 3增加了子元素, 4子元素改变
    if(oldVnode.text !== null && vnode.text !== null && oldVnode.text !== vnode.text){
        // 1. 只有纯文字节点
        api.setTextContent(el,vnode.text)// 更新文字
    }else{
        updataEle();
        // 2. 如果新旧子元素都存在,肯定是发生了变动
        if(oldCh && ch && oldCh !== ch){
            updataChildren();// 更新子元素
        // 3. 如果只有新节点有子元素
        }else if(ch){
            createEL(vnode);// 创建子元素
        // 4. 如果只有旧节点有子元素
        }else if(oldCh){
            api.removeChildren(el);//删除子元素
        }
    }
}