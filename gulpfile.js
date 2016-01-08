var gulp = require('gulp');

//var minifycss = require('gulp-minify-css');         // css压缩
var sass      = require('gulp-ruby-sass');          // sass编译
var browserify = require('gulp-browserify');        //bower 打包
var plumber = require('gulp-plumber');              //错误处理
//var uglify    = require('gulp-uglify');             // js压缩
//var jshint    = require('gulp-jshint');             // js检查
var rename    = require('gulp-rename');             // 重命名
var notify    = require('gulp-notify');             // 提示 && 处理错误

//基础地址   便于以后更改
var path = {
    css: {
        src : 'public/src/css/*.css',
        dest: 'public/dist/css',
        sass: 'public/src/scss/*.scss',
        sassDest: 'public/src/css',
    },
    js: {
        src : 'public/src/js/sms.min.js',
        srcT : 'public/src/js/**/*.js',//监控文件
        dest: 'public/dist/js',
    }
};

//css处理

/**  sass编译4种风格 1.nested  2.expanded  3.compact 4.compressed 【嵌套，正常，紧凑，压缩】 **/

gulp.task('css', function(){
    return sass(path.css.sass, { style: 'expanded',noCache: true, sourcemap: false})
    .pipe(gulp.dest(path.css.sassDest))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(path.css.dest))
    .pipe(notify({ message: 'Styles task complete' }));
});



// Browserify JS
gulp.task('js', function(){
    gulp.src( path.js.src )
    .pipe(plumber())
    .pipe(browserify({
        insertGlobals : false,
        debug : true
    }))
    .pipe(gulp.dest(path.js.dest))
    .pipe(notify({ message: 'js task complete' }));
});




//监听
gulp.task('watch', function(){
    //css
    gulp.watch(path.css.sass, ['css']);
    //js
    gulp.watch(path.js.srcT, ['js']);
});