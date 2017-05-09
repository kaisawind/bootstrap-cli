import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap';

import { OptionsComponent } from './options/options.component';
import { routing } from './buttons.routing';
import { ButtonsComponent } from './buttons.component';
import { TypesComponent } from './types/types.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    SharedModule,
    routing
  ],
  declarations: [
    OptionsComponent,
    ButtonsComponent,
    TypesComponent
  ]
})
export class ButtonsModule { }
