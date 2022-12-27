<?php

use App\Http\Controllers\ListingController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here i2s where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[\App\Http\Controllers\IndexController::class,'index']);
Route::get('/hello',[\App\Http\Controllers\IndexController::class,'show'])->middleware('auth');

Route::resource('listing', ListingController::class)
    ->only(['create', 'store', 'edit', 'update', 'destroy'])
    ->middleware('auth');
Route::resource('listing', ListingController::class)
    ->except(['create', 'store', 'edit', 'update', 'destroy']);

include('auth.php');
