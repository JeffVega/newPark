const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
gulp.task('serve',()=>{
    nodemon({
        script:"index.js",
        
    })
    browserSync.init({
        server:{
            baseDir:"./"
        }
    });
    gulp.watch("*.html").on("change",reload)
    
})