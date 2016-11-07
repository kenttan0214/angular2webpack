import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app-component';

import { LandingComponent } from './modules/landing/landing-components';
import { LoginComponent } from './modules/login/login-components';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    children: [
    	{ path: 'login', component: LoginComponent },
    	{ path: '', component: LandingComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);