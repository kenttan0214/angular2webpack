import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app-component';

import { landingRoutes } from './modules/landing/landing-routes';
import { loginRoutes } from './modules/login/login-routes';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    children: [
    	...loginRoutes ,
    	...landingRoutes
    ]
  },
  { path: '**', redirectTo: '' }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);