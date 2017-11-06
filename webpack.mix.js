const mix = require('laravel-mix')

const webpack = require('webpack');
const path = require('path');

mix.js('resources/assets/js/top.js', 'public/js/')
    .js('resources/assets/js/room.js', 'public/js/')
    .postCss('resources/assets/postcss/style.css', 'public/css', [
        require('postcss-simple-vars')(),
        require('postcss-cssnext')()
    ])