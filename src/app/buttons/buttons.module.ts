import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from './options/options.component';
import { routing } from './buttons.routing';
import { ButtonsComponent } from './buttons.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    OptionsComponent,
    ButtonsComponent
  ]
})
export class ButtonsModule { }
