import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap';

import { SharedModule } from '../shared/shared.module';

import { SwitchComponent } from './switch.component';
import { routing } from './switch.routing';
import { SwitchSizeComponent } from './switch-size/switch-size.component';
import { SwitchColorsComponent } from './switch-colors/switch-colors.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AccordionModule.forRoot(),
    routing
  ],
  declarations: [
    SwitchComponent,
    SwitchSizeComponent,
    SwitchColorsComponent
  ]
})
export class SwitchModule { }
