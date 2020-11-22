#### `原文链接` [https://www.cnblogs.com/nanianqiming/p/9069760.html](原文链接)
----
1、安装mongoose

> npm install mongoose
 
2、启动数据库

> mongod --dbpath c:\data\db
> mongod 

3、引入mongoose模块并连接数据库

```javascript
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/test1",function(err) {
     if(err){
         console.log('连接失败');
     }else{
         console.log("连接成功")
     }
});
```
 

 4、创建表以及字段类型
```javascript
const User = mongoose.model("user",{
    name:String,
    age:Number
})
```

 5、增

```javascript
const user = new User({
    name:"张三",
    age:19
})

user.save().then((result)=>{
    console.log("成功的回调")
},()=>{
    console.log("失败的回调")
})
```

 6、删


1、删除指定数据
```javascript
User.remove({name:"zhao"}).then((result)=>{
    console.log(result)
})

// result:是一个对象 返回值是受影响条数
```

2、删除所有数据
```javascript
User.remove({}).then((result)=>{
             console.log(result)
})
```

3`删除指定ID
```javascript
User.findByIdAndRemove(id值).then((result)=>{

})
```

 7、改
```javascript
User.update({name:"ya"},{$set:{name:"hua"}},{multi:true}).then((result)=>{
             console.log(result)
})

// multi:true  表示修改多条数据

User.findByIdAndUpdate(id值,{$set:{需要修改的内容}}.then((result)=>{})

```
 

8、查

001查询符合条件的所有数据

```javascript
User.find({name:ya}).then((result)=>{
    console.log(result)
})

// result是查到的数据
```