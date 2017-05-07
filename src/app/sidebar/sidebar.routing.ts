import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SidebarComponent } from './sidebar.component';

export const routes: Routes = [
  {
    path: 'sidebar',
    component: SidebarComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
