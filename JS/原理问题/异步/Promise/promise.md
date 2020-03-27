[ES6 Promise 和 Async/await的使用](https://juejin.im/post/5a3c68426fb9a0451969c58e)

- 每一个异步任务返回一个Promise对象，
- 该对象有一个then方法，允许指定回调函数。
- Promises的出现大大改善了异步变成的困境，避免出现回调地狱，嵌套层级得到改善。

### 基本Api

- Promise.resolve()
- Promise.reject()
- Promise.prototype.then()
- Promise.prototype.catch()
- Promise.all()  // 所有的完成
- Promise.race() // 竞速，完成一个即可
