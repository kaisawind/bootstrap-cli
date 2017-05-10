import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ButtonsComponent } from './buttons.component';

export const routes: Routes = [
  {
    path: 'buttons',
    component: ButtonsComponent,
    children: [
      {
        path: 'options',
        loadChildren: 'app/buttons/bootstrap/bootstrap.module#BootstrapModule'
      },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
