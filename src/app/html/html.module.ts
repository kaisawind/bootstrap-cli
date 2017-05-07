import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialCharacterComponent } from './special-character/special-character.component';
import { routing } from './html.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    SpecialCharacterComponent
  ]
})
export class HtmlModule { }
