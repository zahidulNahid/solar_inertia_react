<?php
use Illuminate\Support\Facades\Route;

Route::get('/zabeerfrotnend', function () {
    return 'This is Zabeer’s route!';
});


Route::get('/billing', [BillingController::class, 'index'])->name('billing.index');
