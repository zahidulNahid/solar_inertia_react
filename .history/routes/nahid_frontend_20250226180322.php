<?php

use App\Http\Controllers\BillingController;
use App\Http\Controllers\CampaignDetailsController;


use Illuminate\Support\Facades\Route;

    // Display all sales tracked records
Route::get('/billing', [BillingController::class, 'index'])->name('sales_tracked.index');

    // Create new sales entry

