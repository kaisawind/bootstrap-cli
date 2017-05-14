import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwitchComponent } from './switch.component';
import { routing } from './switch.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    SwitchComponent
  ]
})
export class SwitchModule { }
