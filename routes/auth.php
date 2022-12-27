<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserAccountController;

/**
 * routes to manage auth
 */
Route::get('login', [AuthController::class, 'create'])->name('login');
Route::post('login', [AuthController::class, 'store'])->name('login.store');
Route::delete('logout', [AuthController::class, 'destroy'])->name('logout');

Route::resource('user-account', UserAccountController::class)->only(['create']);
