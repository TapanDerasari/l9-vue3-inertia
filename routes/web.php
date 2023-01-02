<?php

use App\Http\Controllers\ListingController;
use App\Http\Controllers\RealtorListingController;
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
    ->only(['index', 'show']);
Route::prefix('realtor')
    ->name('realtor.')
    ->middleware('auth')
    ->group(function () {
        Route::put('listing/{listing}/restore', [RealtorListingController::class, 'restore'])
            ->name('listing.restore')
            ->withTrashed();
        Route::resource('listing', RealtorListingController::class)->except(['show']);
    });

include('auth.php');
