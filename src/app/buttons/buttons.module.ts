import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap';

import { routing } from './buttons.routing';
import { ButtonsComponent } from './buttons.component';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { ButtonsCssModule } from './buttons-css/buttons-css.module';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BootstrapModule,
    ButtonsCssModule,
    routing
  ],
  declarations: [
    ButtonsComponent
  ]
})
export class ButtonsModule { }
