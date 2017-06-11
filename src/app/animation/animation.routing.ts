import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AnimationComponent } from './animation.component';

export const routes: Routes = [
  {
    path: 'animation.css',
    component: AnimationComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
