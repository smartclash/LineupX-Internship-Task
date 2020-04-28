const mix = require('laravel-mix');
const {join} = require('path');
require('laravel-mix-purgecss');

const OUTPUT_DIR = join(__dirname, '/public/');
const RESOURCE_DIR = join(__dirname, '/src/Resources/');

mix.js(join(RESOURCE_DIR, '/js/app.js'), OUTPUT_DIR)
    .sass(join(RESOURCE_DIR, '/sass/app.scss'), OUTPUT_DIR)
    .purgeCss({
        content: [join(RESOURCE_DIR, '/views/**/*.pug')],
    });
