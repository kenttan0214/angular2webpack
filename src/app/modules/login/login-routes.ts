import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-components'

// Route Configuration
const loginRoutes: Routes = [
  { path: '', component: LoginComponent }
];

export const LoginRouting: ModuleWithProviders = RouterModule.forRoot(loginRoutes);