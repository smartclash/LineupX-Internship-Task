const mix = require('laravel-mix');
const path = require('path');
require('laravel-mix-purgecss');

const OUTPUT_DIR = path.join(__dirname, '/public/');
const RESOURCE_DIR = path.join(__dirname, '/src/Resources/');

mix.js(path.join(RESOURCE_DIR, '/js/app.js'), OUTPUT_DIR)
    .sass(path.join(RESOURCE_DIR, '/sass/app.scss'), OUTPUT_DIR)
    .purgeCss({
        content: [path.join(RESOURCE_DIR, '/views/**/*.pug')],
    });
