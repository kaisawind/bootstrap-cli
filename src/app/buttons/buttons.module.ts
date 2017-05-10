import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap';

import { routing } from './buttons.routing';
import { ButtonsComponent } from './buttons.component';
import { BootstrapModule } from './bootstrap/bootstrap.module';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BootstrapModule,
    routing
  ],
  declarations: [
    ButtonsComponent
  ]
})
export class ButtonsModule { }
