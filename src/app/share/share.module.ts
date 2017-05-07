import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap';

import { SampleboxComponent } from './samplebox/samplebox.component';

@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot()
  ],
  declarations: [
    SampleboxComponent
  ],
  exports: [
    SampleboxComponent
  ]
})
export class ShareModule { }
