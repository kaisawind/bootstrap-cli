import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SwitchComponent } from './switch.component';

export const routes: Routes = [
  {
    path: 'switch',
    component: SwitchComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
