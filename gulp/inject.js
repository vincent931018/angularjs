var gulp = require('gulp');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;

//给index.html引入css与js文件
//如果是要在<!-- bower:js -->
//          <!-- endinject -->中引入文件则替换代码（加name属性）
//          .pipe(inject(gulp.src('src/js/bower_components/*/*.min.js', {read: false}), {name: 'bower', relative: true}))
gulp.task('devIndex',['bower'],function () {
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    return gulp.src('src/index.html')
        .pipe(inject(gulp.src('src/css/*.css', {read: false}), {relative: true}))
        .pipe(inject(gulp.src(['src/js/index.js','src/js/common/**/*.js','src/js/controllers/*.js','src/js/services/*.js','src/js/directives/*.js'] ,{read: false}), {relative: true}))
        .pipe(gulp.dest('./src'));
});

gulp.task('bower', function () {
    return gulp.src('src/index.html')
        .pipe(wiredep({
            optional: 'configuration',
            goes: 'here'
        }))
        .pipe(gulp.dest('./src'));
});

gulp.task('inject', ['devIndex'],function () {
    //default
    console.log('all js is injected!');
});