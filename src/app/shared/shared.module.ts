import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap';

import { SampleboxComponent } from './samplebox/samplebox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabsModule.forRoot(),
  ],
  declarations: [
    SampleboxComponent
  ],
  exports: [
    FormsModule,
    SampleboxComponent
  ]
})
export class SharedModule { }
