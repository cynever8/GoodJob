/**
 * gulp-uglify:用于压缩js
 * gulp-minify-css:用于压缩css
 * gulp-concat:用于合并文件
 * gulp-sass:用于把scss文件编译成css文件
 * gulp-babel:用于把es6转成与babel-preset-es2015联合使用
 */


const _gulp = require("gulp"), //加载gulp模块
    _uglify = require("gulp-uglify"), //加载压缩JS模块
    _babel = require("gulp-babel");

const _gulp = require("gulp");
const _uglify = require("gulp-uglify");

_gulp.task("default", function (_done) {
    _gulp.src("src/js/*.js")
        //.pipe(_babel({presets:['@babel/env']}))
        .pipe(_uglify()) //将js压缩成丑陋的格式代码
        .on("error", function (e) {
            console.log(e)
        })
        .pipe(_gulp.dest("dist/js")); //如果build文件夹中没有js文件夹，dest方法会自动创建
    _done();
});




/**
 * gulp压缩css
 */

var _gulp = require("gulp");
var _clean = require("gulp-clean-css");
_gulp.task("minify:css", () => {
    _gulp.src("src/css/*.css")
    .pipe(_clean())
    .pipe(_gulp.dest("build/css"));
});


/**
 * gulp编译sass
 * @type {Gulp}
 */
var _gulp = require('gulp');
var _sass = require('gulp-sass');
_gulp.task('sass111', function () {
    return _gulp.src('src/sass/*.scss')
        .pipe(_sass())
        .pipe(_gulp.dest('dist/css'))
});


/**
 * gulp将多个js文件合并为1个js文件
 */

let _gulp = require("gulp");
let _uglify = require("gulp-uglify");
let _concat = require("gulp-concat");
_gulp.task("concat", () => {
    _gulp.src("src/js/*.js")
        .pipe(_concat("lib.js"))
        .pipe(_uglify())
        .pipe(_gulp.dest("build/js"));
});


/**
 * gulp实现实时刷新
 */
var _gulp = require('gulp'), //本地安装gulp所用到的地方
    _connect = require('gulp-connect'); //自动刷新
_gulp.task('default', () => {
    //_connect.server();
    _connect.server({
        port: 8080,
        root: '',
        livereload: true
    });
    _gulp.watch(['*.html'], () => {}).on("change", () => {
        _gulp.src('*.html').pipe(_connect.reload());
    });
});


/**
 * gulp@3.9
 * gulp-babel@6:用于把es6转成与
 * babel-preset-es2015联合使用
 * 新建  .babelrc文件与gulpfile文件保持相同的目录   内容：{ "presets": ["es2015"]}
 */

let _gulp = require("gulp");
let _babel = require("gulp-babel");
_gulp.task("babel", () => {
    _gulp.src("src/js/ES6.js")
        .pipe(_babel({
            presets: ['@babel/env']
        }))
        .pipe(_gulp.dest("es5/js"));
});

//can not find module '@babel/core'