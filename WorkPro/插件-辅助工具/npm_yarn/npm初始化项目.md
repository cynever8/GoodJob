1. 在项目文件夹中打开终端
2. 输入npm init -y
    * 这时候项目文件夹中会多一个json文件
    * 说明文件夹已经变成node包
3. 改scripts
```JavaScript
    {
    "name": "routerPractice",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        //改下下
        "dev":"supervisor server.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
    }
```
4. 在终端中启动npm run dev