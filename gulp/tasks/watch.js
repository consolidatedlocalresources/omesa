var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

// Watch for changes within certain files
gulp.task('watch', function() {
    
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    // Watch for HTML mods
    watch('./app/index.html', function() {
        browserSync.reload();
    });

    // Watch for CSS mods
    watch('./app/assets/styles/**/*.css', cssInject);

});

function cssInject() {
    styles();
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
};