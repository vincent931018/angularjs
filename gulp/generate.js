'use strict';

var path = require('path');
var gulp = require('gulp');
var fs = require('fs');

var minimist = require('minimist');

var options = minimist(process.argv.slice(2), {});
console.dir(options); 

// if (!options.m) {//模块名称
//     console.log('Source path cannot find');
//     return
// }

var $ = require('gulp-load-plugins')();

gulp.task('generate', function() {
    console.dir(options); 
    _generateModule('./src', options.m);
});
gulp.task('generate1',function(){
    console.dir(options);
    _generateFor();
});
gulp.task('generate2',function(){
    console.dir(options);
    _generateModule1('./src/app/fenqi.module',options.m);
});

/**
 * [template params]
 * @_author author
 * @_date the date of file created
 */
var _author = 'yangjing';
var _date = (function() {
    var date = new Date();
    return '' + date.getDate() + '.' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '.' + date.getFullYear();
})();


function _generateModule(basePath, srcPath) {

    if (srcPath.indexOf('\/') == 0) {
        //trim fisrt character '/' of srcPath
        srcPath = srcPath.substr(1, srcPath.length - 1)
    }
    var _index = srcPath.indexOf('\/');
    //append character '/' to srcPath
    srcPath = (srcPath && (_index == -1)) ? (srcPath + '\/') : srcPath;
    _index = srcPath.indexOf('\/');

    if (!srcPath) {
        return
    }

    var _restPath = srcPath.substr(_index, srcPath.length - 1);
    var _moduleName = srcPath.substr(0, _index);
    console.log('moduleName:' + _moduleName + ' restPath:' + _restPath);
    if (!_moduleName) {
        return
    }

    var _isExist = fs.existsSync(path.join(basePath, _moduleName));
    if (!_isExist) {
        fs.mkdirSync(path.join(basePath, _moduleName));
    }
    
    var _existModule = fs.existsSync(path.join(basePath, _moduleName, (_moduleName + '.module.js')));
    if (!_existModule && _moduleName!=='app') {

        var _angularModuleName = path.join(basePath, _moduleName).replace(/^src\//, '').replace(/\//g, '.');
        /**
         * generate module
         */
        gulp.src('./gulp/dev-template/moduleTpl.js')
            .pipe($.template({
                author: _author,
                date: _date,
                name: _moduleName,
                moduleName: _angularModuleName,
                tplUrl: (path.join(basePath, _moduleName, _moduleName) + '.tpl.html').replace(/^src\//, '')
            }))
            .pipe($.rename(_moduleName + '.module.js'))
            .pipe(gulp.dest(path.join(basePath, _moduleName)));

        /**
         * generate controller
         */
        gulp.src('./gulp/dev-template/controllerTpl.js')
            .pipe($.template({
                author: _author,
                date: _date,
                name: _moduleName,
                moduleName: _angularModuleName
            }))
            .pipe($.rename(_moduleName + 'Ctrl.js'))
            .pipe(gulp.dest(path.join(basePath, _moduleName)));
        
        /**
         * generate service
         */
        gulp.src('./gulp/dev-template/serviceTpl.js')
            .pipe($.template({
                author: _author,
                date: _date,
                name: _moduleName,
                moduleName: _angularModuleName
            }))
            .pipe($.rename(_moduleName + 'Service.js'))
            .pipe(gulp.dest(path.join(basePath, _moduleName)));

        /**
         * generate template
         */
        gulp.src('./gulp/dev-template/tplTpl.html')
            .pipe($.template({}))
            .pipe($.rename(_moduleName + '.tpl.html'))
            .pipe(gulp.dest(path.join(basePath, _moduleName)));
    }

    _generateModule(path.join(basePath, _moduleName), _restPath);
};
/**
 * 自动化生产模块
 * @param  {[type]} basePath [生成文件放置路径]
 * @param  {[type]} srcPath  [生成文件配置信息]
 * @return {[type]}          [description]
 */
function _generateModule1(basePath, srcPath) {
    if (!srcPath) {
        console.log("请输入模块名称-m")
        return;
    }
    //如果名称不符合要求直接返回
    if(!srcPath.match(/[a-zA-Z]+\d*/g)){
        console.log("请输入正确的模块名称");
        return;
    }

    var _fileName = srcPath.substr(0,1).toLowerCase()+srcPath.substr(1,srcPath.length-1);//文件名称
    var _moduleName = srcPath.substr(0,1).toUpperCase()+srcPath.substr(1,srcPath.length-1);;//模块名称

    console.log('moduleName:' + _moduleName + ' _fileName:' + _fileName);
    // var _isExist = fs.existsSync(path.join(basePath,'controllers', _moduleName));
    // var _isExist1 = fs.existsSync(path.join(basePath,'services', _moduleName));
    // if (!_isExist) {
    //     fs.mkdirSync(path.join(basePath, _moduleName));
    // }
    
    var _existModule = fs.existsSync(path.join(basePath, 'controllers', (_fileName + 'Ctrl.js')));
    if (!_existModule) {
        /**
         * generate module
         */
        gulp.src('./gulp/dev-template/conAndSer/controllerTpl.js')
            .pipe($.template({
                author: _author,
                date: _date,
                name: _moduleName,
                // moduleName: _angularModuleName
            }))
            .pipe($.rename(_fileName + 'Ctrl.js'))
            .pipe(gulp.dest(path.join(basePath,'controllers')));

        /**
         * generate controller
         */
        gulp.src('./gulp/dev-template/conAndSer/serviceTpl.js')
            .pipe($.template({
                author: _author,
                date: _date,
                name: _moduleName
                // moduleName: _angularModuleName
            }))
            .pipe($.rename( _fileName+ 'Service.js'))
            .pipe(gulp.dest(path.join(basePath, 'services')));
    }
};


function _generateFor(){
    var _modules=[
            'tab',
            'stages',
            'creditPhone',
            'position',
            'package',
            'product',
            'myPhone',
            'checkoutSuccess',
            'checkoutFail',
            'phoneList',
            'package',
            'auth',
            'idcard',
            'banked',
            'bankcd',
            'credited',
            'creditSuccess',
            'creditingEsay',
            'creditFailEsay',
            'orders',
            'waitCredit',
            'cancel',
            'crediting',
            'payOk',
            'creditFail',
            'completed',
            'goodsCode',
            'serve',
            'myInfo',
            'repaymentList2',
            'repaySet',
            'repayRecord',
            'repaySet',
            'allWaitPayDetail',
            'thisMonth',
            'allWaitPay',
            'repaymentList',
            'heightReal',
            'applyOut',
            'logistics',
            'ordersAllList',
            'ordersWaitPayList'
        ]
    for(var i=0;i<_modules.length;i++){
        console.log(_modules[i]);
        _generateModule1('./src/app/fenqi.module',_modules[i]);
    }
}
