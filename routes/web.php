<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[\App\Http\Controllers\IndexController::class,'index']);
Route::get('/hello',[\App\Http\Controllers\IndexController::class,'show']);

Route::resource('listing',\App\Http\Controllers\ListingController::class)
    ->only(['index','show','create','store']);
