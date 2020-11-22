<!--
 * @Description: 
 * @Autor: Leon
 * @Date: 2019-12-26 12:09:47
 * @LastEditors: Leon
 * @LastEditTime: 2019-12-27 16:32:07
 -->
# context:

- 等同于Vue中的Provide/inject

## 什么时候要用context?   

- 当涉及到`跨组件传值`的时候需要用到context

## 生产者和消费者

- `生产者`：Provider 生产者所生产的状态(数据),可以公共后代组件进行使用 生产者一般情况下是根组件
    
    - Provider这个组件身上有一个属性是value  
    - value的作用是用来提供生产的数据
    ```js
    <!-- mian.js  -->
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    import { Provider } from './globalContext';

    ReactDOM.render(
        // 生产者
        <Provider value={{
            name: "Leon",
            age: "23",
            sex: "Man"
        }}>
            <App />

        </Provider>,
        document.getElementById("root"),
        () => {
            // alert('msg');
        }
    )
    ```

- `消费者`: Consumer 后代组件如果需要使用生产者的数据时候必须要通过Consumer这个组件进行包裹

    - 后代组件如果使用生产的数据时必须用Consumer进行包裹，并且通过一个函数进行接收生产者的数据，
    - 这个函数中的参数就是生产者的数据。另外这个函数必须要返回一个jsx语法
    ```js
    <!-- Three Module -->
    import { Consumer } from '../globalContext'

    render() {
        console.log(Consumer);
        return (
            <Consumer>
                {
                    (props) => {
                        return (
                            <div className='three'>
                                <h2>Three Template</h2>
                                <p>Three: {props.name} {props.age} {props.sex}</p>
                            </div>
                        )
                    }
                }
            </Consumer>
        )
    }
    ```


## 流程：

### 封装globalContext.js
1. 创建contex对象
    - let globalContext = React.createContext()


2. 创建生产者和消费者
    - let Provider = globalContext.Provider
    - let Consumer = globalContext.Consumer

3. 在Provider这个组件的属性value中生产数据

4. consumer组件中通过函数接收生产的数据
