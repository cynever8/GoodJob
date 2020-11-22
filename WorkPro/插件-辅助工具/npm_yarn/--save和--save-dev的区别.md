<!--
 * @Description: 
 * @Autor: Leon
 * @Date: 2019-12-10 14:31:16
 * @LastEditors: Leon
 * @LastEditTime: 2019-12-10 14:32:50
 -->
# --save && --save-dev的区别
1. 可分别将依赖（插件）记录到package.json中的dependencies和devDependencies    下面。
2. dependencies
    - 记录的是项目在运行时必须依赖的插件，
    - 常见的例如react jquery等即及时项目打包好了、上线了，这些也是需要用的，否则程序无法正常执行
3. devDependencies
    - 下记录的是项目在开发过程中使用的插件，
    - 一旦项目打包发布、上线了之后，devDependencies中安装的东西就都没有用了