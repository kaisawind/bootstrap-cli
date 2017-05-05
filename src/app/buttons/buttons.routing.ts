import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { OptionsComponent } from './options/options.component';
import { ButtonsComponent } from './buttons.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'buttons',
    pathMatch: 'full'
  },
  {
    path: 'buttons',
    component: ButtonsComponent
  },
  {
    path: 'options',
    component: OptionsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
