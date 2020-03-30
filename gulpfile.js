// 引入需要的模块
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var imagemin = require('gulp-imagemin');

// 压缩public目录下所有html文件, minify-html是任务名, 设置为default，启动gulp压缩的时候可以省去任务名
gulp.task('minify-html', function() {
    return gulp.src('./public/**/*.html') // 压缩文件所在的目录
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public')) // 输出的目录
});

// 压缩css
gulp.task('minify-css', function() {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./public'));
});
// 压缩js
gulp.task('minify-js', function() {
    return gulp.src(['./public/**/.js','!./public/js/**/*min.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});
// 压缩图片
gulp.task('minify-images', function() {
    return gulp.src(['./public/**/*.png','./public/**/*.jpg','./public/**/*.gif'])
        .pipe(imagemin(
        [imagemin.gifsicle({interlaced: true}), 
        imagemin.mozjpeg({quality: 75,'progressive': true}), 
        imagemin.optipng({'optimizationLevel': 7}), 
        imagemin.svgo()],
        {'verbose': true}))
        .pipe(gulp.dest('./public'))
});
// 默认任务
/*
gulp.task('default', [
    'minify-html','minify-html1','minify-css','minify-js','minify-images'
]);
*/
// gulp 4.0 适用的方式
gulp.task('default', gulp.parallel('minify-html','minify-css','minify-js','minify-images'
 //build the website
));

// gulp-htmlclean // 清理html
// gulp-htmlmin // 压缩html
// gulp-minify-css // 压缩css
// gulp-uglify // 混淆js
// gulp-imagemin // 压缩图片

//1 npm install --global gulp
//2 npm install gulp-minify-css gulp-uglify gulp-htmlmin gulp-htmlclean  gulp-imagemin --save