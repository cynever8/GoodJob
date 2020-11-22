/**
 * gulp-uglify:用于压缩js
 * gulp-minify-css:用于压缩css
 * gulp-concat:用于合并文件
 * gulp-sass:用于把scss文件编译成css文件
 * gulp-babel:用于把es6转成与babel-preset-es2015联合使用
 */
/* 
* gulp-uglify:用于压缩js
    > npm install --save-dev gulp-uglify
* gulp-minify-css:用于压缩css
    > npm install gulp-clean-css --save-dev
* gulp-concat:用于合并文件
    > npm install --save-dev gulp-concat
* gulp-sass:用于把scss文件编译成css文件
    > npm install node-sass gulp-sass --save-dev
* gulp-babel:用于把es6转成与babel-preset-es2015联合使用
    > npm install --save-dev gulp-babel @babel/core @babel/preset-env
* gulp-connect:自动刷新
    > npm install --save-dev gulp-connect 
*/

const gulp = require("gulp");

//压缩js
const _ugly = require("gulp-uglify");
gulp.task("ugly", function () {
    // dest()表示输出到目标路径的方法
    // pipe() 管道函数
    //从src/*js中找到所有js文件输出到build/js文件夹下
    gulp.src("src/js/*.js").pipe(_ugly()).pipe(gulp.dest("build1/js"));
});

//压缩css
let cleanCSS = require('gulp-clean-css');
gulp.task('minify-css', () => {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('build/css'));
});

//ES6转ES5
const babel = require('gulp-babel');
//这个名字是default,默认的名字在cmd中可以不写,直接写gulp就能运行
gulp.task('default', () =>
    gulp.src('src/js/ES6.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('build/js'))
);

// 自动刷新
var _connect = require('gulp-connect'); //自动刷新
gulp.task('auto', () => {
    //创建一个服务
    //server什么都不写也可以,有默认的
    // _connect.server();
    _connect.server({
        port: 8080,
        root: '',
        //为真自动加载
        livereload: true
    });
    //watch监听当HTML网页的内容发生改变的时候
    gulp.watch(['*.html'], () => {}).on("change", () => {
        //就会执行下面这个任务
        gulp.src('*.html').pipe(_connect.reload());
    });
});

