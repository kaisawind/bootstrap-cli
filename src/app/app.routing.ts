import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'buttons',
    loadChildren: 'app/buttons/buttons.module#ButtonsModule'
  },
  {
    path: 'switch',
    loadChildren: 'app/switch/switch.module#SwitchModule'
  },
  {
    path: 'sidebar',
    loadChildren: 'app/sidebar/sidebar.module#SidebarModule'
  },
  {
    path: 'specialcharacter',
    loadChildren: 'app/html/html.module#HtmlModule'
  },
  {
    path: 'animation.css',
    loadChildren: 'app/animation/animation.module#AnimationModule'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
