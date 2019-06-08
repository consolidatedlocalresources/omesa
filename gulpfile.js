var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
    console.log('Hooray, you created a Gulp task!');
});

// Watch for changes within certain files
gulp.task('watch', function() {
    // Watch for HTML mods
    watch('./app/index.html', function html() {
        // Result of index.html mods
        console.log('Imagine something useful being done to your HTML!');
    });
});