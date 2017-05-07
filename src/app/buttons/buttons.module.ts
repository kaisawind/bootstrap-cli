import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap';

import { OptionsComponent } from './options/options.component';
import { routing } from './buttons.routing';
import { ButtonsComponent } from './buttons.component';
import { ShareModule } from '../share/share.module';
import { TypesComponent } from './types/types.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    AccordionModule.forRoot(),
    routing
  ],
  declarations: [
    OptionsComponent,
    ButtonsComponent,
    TypesComponent
  ]
})
export class ButtonsModule { }
