'use strict'

/**
 * install: npm i -D gulp gulp-template gulp-rename yargs require-dir camelcase
 * command: gulp component --gulpfile template/gulpfile.js --name my-test
 * script: "tpl:component": "gulp component --gulpfile template/gulpfile.js --name"
 * edit the variable prefix
 * usage: npm run tpl:component -- my-test
 * manually: add route into @RouteConfig to pass test
 * generated files: template/generated
 */
const path = require('path');
const gulp = require('gulp');
const yargs = require('yargs');
const template = require('gulp-template');
const rename = require('gulp-rename');
const camelcase = require('camelcase');

const prefix = 'app';

function cap(val) {
    return val.charAt(0).toUpperCase() + val.slice(1);
}

gulp.task('component', () => {
    const name = yargs.argv.name;
    const parentPath = yargs.argv.parent || '';
    const destPath = path.join('generated/component', parentPath, name);

    return gulp.src(path.join(__dirname, 'component/**/*'))
        .pipe(template({
            prefix: prefix,
            classPrefix: cap(camelcase(prefix)),
            name: name,
            className: cap(camelcase(name))
        }))
        .pipe(rename(paths => {
            paths.basename = paths.basename.replace('tpl', name)
        }))
        .pipe(gulp.dest(destPath));
})
