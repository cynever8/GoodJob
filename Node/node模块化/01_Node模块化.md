# NodeJS中的模块会分为哪些模块
1. 内置模块   
    1. NodeJS的核心模块  
    2. require("http")
2. 自定义模块 
    1. 通过CommonJS规范定义的模块   
    2. 通过module.exports  
    3. require("../");
3. 第三方模块  
    1. 通过npm 进行下载的模块  
    2. 引入的时候通过require("jquery")  
    3. 引入的时候默认的路径是node_modules