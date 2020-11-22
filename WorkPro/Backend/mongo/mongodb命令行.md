1. 如何开启数据库服务器
        mongod --dbpath c:\data\db
        mongo  进入数据库服务器
2. 常用命令

    1. 库命令
        1. show dbs             查看当前数据服务器中有多少个数据库
        2. use 数据库名称        创建/切换数据库  (如果数据库中没有东西则不会显示)
        3. db.dropDatabase()    删除数据库(先use数据库)

    2. 表命令
        1. 查看所有表   db.getCollectionNames()
        2. 使用表       db.getCollection("表名称")  
        3. 创建表       db.createCollection("表名称")  
        4. 删除表       db.user.drop();  
        5. 查找表中数据 db.表名.find() 

    3. 表数据操作
        1. 存数据       db.表名.save({key:val})
        2. 删除数据     
            - db.表名.remove({key:val})     删除某项
            - db.表名.remove({})            删除所有数据
        3. 修改数据     db.表名.update({key:val},{$set:{key:val}}) 
            > (key:val一般是id值,因为ID是唯一的) (需要将这条数据的某个字段改为某个值)
3. 数据库常用的命令

    db.表名.update({key:val},{$inc:{key:val}}) 修改数据  对数据的数字做加法操作

    db.表名.find({key:val}) 查找指定数据

    db.表名.find({age:{$gt:20}}) 查找age大于20的数据

    db.表名.find({age:{$lt:20}}) 查找age小于20的数据

    db.表名.find({age:{$gte:20}}) 查找age大于等于20的数据

    db.表名.find({age:{$lte:20}}) 查找age小于等于20的数据

    db.表名.find({age:{$gte:20,$lte:40}}) 查找age大于等于20小于等于40的数据

    db.表名.find({key:/value/}) 模糊查询

    db.表名.find({key:/^a/})  查询首字母是a的数据

    db.表名.find({key:/a$/}) 查找尾字母是a的数据

    db.表名.find({},{key:1,key:0}) 查找指定字段  1代表显示 0代表不显示

    db.表名.find().sort({age:1}) 升序

    db.表名.find().sort({age:-1}) 降序

    db.表名.find().limit(n) 显示多少条数据

    db.表名.find().skip(n)  跳过多少条数据

    db.表名.find().skip(n).limit(m) 跳过n条显示m条数据

    db.表名.find().count() 查询当前表中有多少条数据

    db.表名.findOne() 查询一条数据  返回值是一个对象



---
    Node如果连接mongodb
    1、安装mongodb
    cnpm install mongodb -S

    2、引入mongodb
---
    分页原理
        1 2 3 4 5 6 7 8 9 10

    需要的变量：
        page:当前的页码
        count:数据的总条数 100
        limit:每页显示多少条数据 10


    /goods/list?page=1&limit=10

    page limit 
    1     10

    db.students.find().skip((page-1)*10).limit(10);



---
    前端分页

    data = [] 100条数据


    1 2 3 4 5 6 7 8 9 10


    let str = "";

    for(var i=(page-1)*10;i<Math.min(page*10,data.length);i++){
        str += `<li>${data[i].name}</li>`
    }






    db.students.save({username:"吴彦祖",age:20})
    db.students.save({username:"胡歌",age:30})
    db.students.save({username:"刘德华",age:67})
    db.students.save({username:"赵亚华",age:17})
    db.students.save({username:"周星驰",age:88})
    db.students.save({username:"成龙",age:98})