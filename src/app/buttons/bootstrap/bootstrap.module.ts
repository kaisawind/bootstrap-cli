import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap';

import { SharedModule } from '../../shared/shared.module';
import { OptionsComponent } from './options/options.component';
import { TypesComponent } from './types/types.component';
import { SizesComponent } from './sizes/sizes.component';
import { StateComponent } from './state/state.component';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    SharedModule
  ],
  declarations: [
    OptionsComponent,
    TypesComponent,
    SizesComponent,
    StateComponent
  ],
  exports: [
    OptionsComponent,
    TypesComponent,
    SizesComponent,
    StateComponent
  ]
})
export class BootstrapModule { }
