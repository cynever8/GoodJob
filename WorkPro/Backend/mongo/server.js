const mongoose = require("mongoose");
//定义连接的地址
const db_url = "mongodb://127.0.0.1:27017/qing";
//连接
mongoose.connect(db_url, function (err) {
    if (err) {
        console.log('连接失败');
    } else {
        console.log("连接成功")
    }
});
/* 
    mongoose.model 
        参数1 : 创建/链接表  如果这个表名末尾没有加s的情况下,会自动在表后加上s
        参数2 : 字段的约束
*/
let User = mongoose.model("users",{
    username:String,
    password:String,
    age:Number,
    data:Array
})
//设定约束
let user = new User({
    username:"Google",
    password:"1213",
    age:212,
    data:[1]
})
//保存数据
// user.save().then((data)=>{
//     console.log(data);
// })

//删除数据
// User.remove({username:"Nina"}).then((data)=>{
//     console.log(data);
// })
//修改数据
// User.update({username:"leon"},{$set:{username:"网易"}}).then((data)=>{
//     console.log(data);
// })


//查询数据
// User.find().then((data)=>{
//     console.log(data);
// })
//条件查询
// User.find({age:12}).then((data)=>{//查找age为12的
//     console.log(data);
// })
User.find().sort({age:1}).then((data)=>{//升序
    console.log(data);
})
