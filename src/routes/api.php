<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['api']], function() {
    Route::resource('/post', 'Api\PostController', ['except' => ['edit','create']]);
    Route::resource('/favorite', 'Api\FavoriteController', ['only' => ['store']]);
    Route::resource('/comment' , 'Api\CommentController', ['only' => ['store']]);
});
