import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing-components'

// Route Configuration
const landingRoutes: Routes = [
  { path: 'landing', component: LandingComponent }
];

export const LandingRouting: ModuleWithProviders = RouterModule.forRoot(landingRoutes);