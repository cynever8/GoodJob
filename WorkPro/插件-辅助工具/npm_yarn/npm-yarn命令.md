# npm：包管理器
* 菜鸟教程
* https://www.runoob.com/nodejs/nodejs-npm.html 



* npm是一个包
* npm是一个网站
* npm是一个命令
- npm init -y                 初始化项目
- npm install                 安装package.json中的依赖
- npm install 包名 -g         全局安装
- npm install 包名 --save     将依赖安装到生产环境中
- npm install 包名 --save-dev 将依赖安装到开发环境中
- npm update  包名            升级依赖
- npm remove  包名            删除依赖
- npm search  包名            查找相关包

## npm install
### 含义: 
1. npm install module_name -S    即    npm install module_name --save    写入dependencies
2. npm install module_name -D    即    npm install module_name --save-dev 写入devDependencies
3. npm install module_name -g 全局安装(命令行使用)

### 使用场景: 
1. devDependencies ，是我们开发的时候需要用到的一些包，只需要用于开发阶段，真正打包上线的时候并不需要这些包，因为这些工具只是你用来打包代码的，是用来识别特定文件以及代码，帮助我们生产最终文件的

2. dependencies，这个则是需要发布到生产环境中的，就比如你要跑一个基于vue的项目，所以需要vue.js来支持，而这个vue.js文件就需要跟随项目到最终的生产环境

---
# yarn:包管理器
### cnpm install yarn -g

- yarn install          安装package.json中的依赖
- yarn add 包名 -g       全局安装
- yarn add 包名          将依赖安装到生产环境中
- yarn add 包名 --dev    将依赖安装到开发环境中
- yarn upgrade 包名      升级依赖
- yarn remove 包名       删除依赖
- yarn search 包名       查找相关包



## 区别：
* yarn安装依赖的时候是异步安装的  npm是同步
* yarn安装完依赖后会在本地缓存一份，下次安装的时候会从缓存中进行安装