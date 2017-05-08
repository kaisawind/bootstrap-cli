import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap';

import { SidebarComponent } from './sidebar.component';
import { routing } from './sidebar.routing';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    routing
  ],
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
