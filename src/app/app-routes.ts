import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route Configuration
export const routes: Routes = [
  { path: '**', redirectTo: '' }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);