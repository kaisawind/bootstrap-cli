import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: 'app/sidebar/sidebar.module#SidebarModule'
  },
  {
    path: 'buttons',
    loadChildren: 'app/buttons/buttons.module#ButtonsModule'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
