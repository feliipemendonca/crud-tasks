<?php

use App\Http\Controllers\dashboard\BlogsController;
use App\Http\Controllers\dashboard\ContactsController;
use App\Http\Controllers\dashboard\PagesController;
use App\Http\Controllers\dashboard\ProductsConttoller;
use App\Http\Controllers\dashboard\SettingsConttoller;
use App\Http\Controllers\dashboard\SlidesController;
use Illuminate\Support\Facades\Auth;
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

Route::view('/{slug?}', 'index');
