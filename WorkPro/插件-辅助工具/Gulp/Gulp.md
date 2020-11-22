#### 主要任务与目的
* 学习Gulp
* 了解工程化的作用
* gulp安装
* gulp插件安装（编译/压缩/合并/即时刷新/）
---
#### Gulp介绍
* 易于使用
* 构建快速
* 插件高质
* 易于学习
---
#### Gulp安装
* 自动化构建工具：就是指程序自动化解决复杂繁琐无聊的工作的工具
* 全局安装：npm install gulp
* 项目开发依赖安装：npm install --save-dev gulp-cli
    * --save 项目依赖：发布项目时需要同时被发布到网络上
    * --save-dev 开发依赖：发布项目时不需要跟随项目一起发布到网络。
    * --global 全局安装：好处就是在任意地方都可以使用该命令。
---
#### 如何学习gulp
* 先去看入门文档：解决掉如何安装
* 在gulp中任务的概念很重要
    * 任务：比如压缩js、css、编译sass、合并css|js等一系列的工作都称之为一个任务。
* 管道流的方式执行。
---
#### Gulp指定文件的方式
* “src/a.js”：指定具体文件；
* “\*”：匹配所有文件    例：src/*.js(包含src下的所有js文件)；
* “\*\*”：匹配0个或多个子文件夹    例：src/\*\*/*.js(包含src的0个或多个子文件夹下的js文件)；
* “{}”：匹配多个属性    例：src/{a,b}.js(包含a.js和b.js文件)  src/*.{jpg,png,gif}(src下的所有jpg/png/gif文件)；
* “!”：排除文件    例：!src/a.js(不包含src下的a.js文件)；
---
#### Gulp的使用
* 1、创建gulpfile.js文件，名称是固定的不能修改
* 2、加载Gulp模块：var _gulp=require("gulp");
* 了解gulp中的任务方法task()的使用
* 了解gulp中的管道方法pipe()的使用
* 了解gulp中的目标方法dest()的使用
* gulp安装插件 npm install --save-dev common_name
* 设置我们的第一个任务压缩js
* 设置我们的第二个任务压缩CSS
* gulp taskname 启动一个任务
* gulp watch().on("change",function(){});根据修改持续监听任务
* gulp 编译sass
* gulp 合并文件
* gulp 实现及时刷新:gulp-connect
