import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { OptionsComponent } from './options/options.component';
import { ButtonsComponent } from './buttons.component';

export const routes: Routes = [
  {
    path: 'buttons',
    component: ButtonsComponent,
    children: [
      {
        path: 'options',
        component: OptionsComponent
      },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
