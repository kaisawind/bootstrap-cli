import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizesComponent } from './sizes/sizes.component';
import { FrameComponent } from './frame/frame.component';
import { Button3dComponent } from './button3d/button3d.component';
import { RaisedComponent } from './raised/raised.component';
import { LongshadowComponent } from './longshadow/longshadow.component';
import { GlowComponent } from './glow/glow.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { GroupComponent } from './group/group.component';
import { BlockComponent } from './block/block.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { FromComponent } from './from/from.component';
import { TypeComponent } from './type/type.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SizesComponent,
    FrameComponent,
    Button3dComponent,
    RaisedComponent,
    LongshadowComponent,
    GlowComponent,
    DropdownComponent,
    GroupComponent,
    BlockComponent,
    WrapperComponent,
    FromComponent,
    TypeComponent
  ]
})
export class ButtonsCssModule { }
