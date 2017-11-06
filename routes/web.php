<?php

Route::view('/', 'top');
Route::view('/{val}', 'room');

Route::get('/api', 'ApiController@post');