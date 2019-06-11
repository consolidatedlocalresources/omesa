var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

// Test function
gulp.task('default', function() {
    console.log('Hooray, you created a Gulp task!');
});

function html() {
    console.log('HTML modified!');
};

function styles() {
    // Define source file
    return gulp.src('./app/assets/styles/styles.css')
    // Define mods to source files
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    // Define destination file to be created out of modified source files
    .pipe(gulp.dest('./app/temp/styles'));
}

// Watch for changes within certain files
gulp.task('watch', function() {
    
    // Watch for HTML mods
    watch('./app/index.html', html);

    // Watch for CSS mods
    watch('./app/assets/styles/**/*.css', styles);

});