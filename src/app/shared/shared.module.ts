import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap';

import { SampleboxComponent } from './samplebox/samplebox.component';
import { PhoneComponent} from './phone/phone.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabsModule.forRoot(),
  ],
  declarations: [
    SampleboxComponent,
    PhoneComponent
  ],
  exports: [
    FormsModule,
    SampleboxComponent,
    PhoneComponent
  ]
})
export class SharedModule { }
