<?php
use App\Http\Controllers\CampaignDetailsController;
use App\Http\Controllers\SalesTrackedController;

use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->prefix('admin')->group(function () {
    Route::post('campaign-details', [CampaignDetailsController::class, 'storeOrUpdate'])->name('campaign.storeOrUpdate');
    Route::get('campaign-details', [CampaignDetailsController::class, 'showOrCreate'])->name('campaign.details');
});


Route::middleware(['auth'])->group(function () {
    // Display all sales tracked records
    Route::get('/sales-tracked', [SalesTrackedController::class, 'index'])->name('sales_tracked.index');

    // Create new sales entry
    Route::get('/sales-tracked/create', [SalesTrackedController::class, 'create'])->name('sales_tracked.create');
    Route::post('/sales-tracked', [SalesTrackedController::class, 'store'])->name('sales_tracked.store');

    // Edit an existing sales entry
    Route::get('/sales-tracked/{salesTracked}/edit', [SalesTrackedController::class, 'edit'])->name('sales_tracked.edit');
    Route::put('/sales-tracked/{salesTracked}', [SalesTrackedController::class, 'update'])->name('sales_tracked.update');

    // Delete a sales entry
    Route::delete('/sales-tracked/{salesTracked}', [SalesTrackedController::class, 'destroy'])->name('sales_tracked.destroy');
});