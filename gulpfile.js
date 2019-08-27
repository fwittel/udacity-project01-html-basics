const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

// Static server
gulp.task('default', function() {
    
    browserSync.init({
        server: "./"
    });
    
   	gulp.watch("*.html").on("change", reload);

});

