import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ButtonsComponent } from './buttons/buttons.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'buttons',
    component: ButtonsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
