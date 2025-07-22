<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('landin');
});

Route::get('/seguros/personas/movilidad/soat', function () {
    return view('welcome');
})->name('welcome');

Route::get('/validando-transaccion', [App\Http\Controllers\HomeController::class, 'gracias'])->name('gracias');

Route::get('/soat/sura/seguro-obligatorio/cotizar', [App\Http\Controllers\HomeController::class, 'index'])->name('cotiza');

Route::get('/soat/sura/seguro-obligatorio/pago/{placa}', [App\Http\Controllers\HomeController::class, 'pago'])->name('pago');

Route::match(['get', 'post'],'/soat/sura/seguro-obligatorio/placa', [App\Http\Controllers\HomeController::class, 'datos'])->name('datos');


Route::get('/soat/sura/seguro-obligatorio/datos/{plac}', [App\Http\Controllers\HomeController::class, 'datos1'])->name('datos1');

Route::get('/soat/sura/seguro-obligatorio/validacion/{placa}', [App\Http\Controllers\HomeController::class, 'validacion'])->name('validacion');

Route::match(['get', 'post'],'/soat/sura/seguro-obligatorio/cotizacion', [App\Http\Controllers\DatosController::class, 'placa'])->name('datos.placa');

Route::get('/soat/sura/seguro-obligatorio/index', [App\Http\Controllers\DatosController::class, 'index'])->name('datos.index');
Route::get('/soat/sura/seguro-obligatorio/create', [App\Http\Controllers\DatosController::class, 'create'])->name('datos.create');
Route::get('/soat/sura/seguro-obligatorio/{id}/edit', [App\Http\Controllers\DatosController::class, 'edit'])->name('datos.edit');
Route::put('/soat/sura/seguro-obligatorio/{id}/update', [App\Http\Controllers\DatosController::class, 'update'])->name('datos.update');
Route::put('/soat/sura/seguro-obligatorio/{id}/validar', [App\Http\Controllers\DatosController::class, 'validar'])->name('datos.validar');
Route::post('/soat/sura/seguro-obligatorio/index', [App\Http\Controllers\DatosController::class, 'store'])->name('datos.store');
Route::delete('/soat/sura/seguro-obligatorio/{id}', [App\Http\Controllers\DatosController::class, 'destroy'])->name('datos.destroy');

Route::post('/paid/payu', [App\Http\Controllers\PayUController::class, 'payu'])->name('paid.payu');