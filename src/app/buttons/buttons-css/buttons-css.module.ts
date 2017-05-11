import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap';

import { SharedModule } from '../../shared/shared.module';
import { FrameComponent } from './frame/frame.component';
import { Button3dComponent } from './button3d/button3d.component';
import { RaisedComponent } from './raised/raised.component';
import { LongshadowComponent } from './longshadow/longshadow.component';
import { GlowComponent } from './glow/glow.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { GroupComponent } from './group/group.component';
import { BlockComponent } from './block/block.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { TypeComponent } from './type/type.component';
import { ShapeComponent } from './shape/shape.component';
import { FormComponent } from './form/form.component';
import { PhoneComponent } from './phone/phone.component';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    SharedModule
  ],
  declarations: [
    FrameComponent,
    Button3dComponent,
    RaisedComponent,
    LongshadowComponent,
    GlowComponent,
    DropdownComponent,
    GroupComponent,
    BlockComponent,
    WrapperComponent,
    TypeComponent,
    ShapeComponent,
    FormComponent,
    PhoneComponent
  ],
  exports: [
    FrameComponent,
    Button3dComponent,
    RaisedComponent,
    LongshadowComponent,
    GlowComponent,
    DropdownComponent,
    GroupComponent,
    BlockComponent,
    WrapperComponent,
    TypeComponent,
    ShapeComponent,
    FormComponent,
    PhoneComponent
  ]
})
export class ButtonsCssModule { }
