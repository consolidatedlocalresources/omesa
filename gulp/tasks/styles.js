var gulp = require('gulp'),
postcss = require('gulp-postcss'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
autoprefixer = require('autoprefixer');

function styles() {
    // Define source file
    return gulp.src('./app/assets/styles/styles.css')
    // Define mods to source files
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    // Define destination file to be created out of modified source files
    .pipe(gulp.dest('./app/temp/styles'));
}