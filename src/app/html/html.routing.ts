import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SpecialCharacterComponent } from './special-character/special-character.component';

export const routes: Routes = [
  {
    path: 'specialcharacter',
    component: SpecialCharacterComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
