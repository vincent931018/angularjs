var gulp = require('gulp');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var connect = require('gulp-connect');

gulp.task('minifyjs',['clean'],function(){
     return gulp.src('src/js/controllers/*.js')  //选择合并的JS
       .pipe(concat('myAppController.js'))   //合并js
       .pipe(gulp.dest('src/dist/controller'))      //输出
       .pipe(rename({suffix:'.min'}))     //重命名
       .pipe(uglify())                    //压缩
       .pipe(gulp.dest('src/dist/controller'))            //输出
       .pipe(notify({message:"js task ok"}));    //提示
});

gulp.task('minifyservice',['clean'],function(){
    return gulp.src('src/js/services/*.js')  //选择合并的JS
        .pipe(concat('myAppService.js'))   //合并js
        .pipe(gulp.dest('src/dist/service'))      //输出
        .pipe(rename({suffix:'.min'}))     //重命名
        .pipe(uglify())                    //压缩
        .pipe(gulp.dest('src/dist/service'))            //输出
        .pipe(notify({message:"js task ok"}));    //提示
});

gulp.task('clean', function(){
    return gulp.src('src/dist/*/*.js')
        .pipe(clean())
});

gulp.task('jshint', function(){
    gulp.src('src/dist/*/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});

gulp.task('serve',['webserver'], function () {
    browserSync.init({
        proxy: "http://127.0.0.1:8080/src/index.html"
    });

    gulp.watch('src/**/*').on('change', browserSync.reload);
});

//gulp起一个web服务 8080端口
gulp.task('webserver', function() {
    connect.server();
});

gulp.task('default', function(){
    gulp.run(['minifyjs','minifyservice'])
});