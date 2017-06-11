import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap';

import { SharedModule } from '../shared/shared.module';

import { AttentionSeekersComponent } from './attention-seekers/attention-seekers.component';
import { BouncingEntrancesComponent } from './bouncing-entrances/bouncing-entrances.component';
import { BouncingExitsComponent } from './bouncing-exits/bouncing-exits.component';
import { FadingEntrancesComponent } from './fading-entrances/fading-entrances.component';
import { FadingExitsComponent } from './fading-exits/fading-exits.component';
import { FlippersComponent } from './flippers/flippers.component';
import { LightspeedComponent } from './lightspeed/lightspeed.component';
import { RotatingEntrancesComponent } from './rotating-entrances/rotating-entrances.component';
import { RotatingExitsComponent } from './rotating-exits/rotating-exits.component';
import { SlidingEntrancesComponent } from './sliding-entrances/sliding-entrances.component';
import { SlidingExitsComponent } from './sliding-exits/sliding-exits.component';
import { ZoomEntrancesComponent } from './zoom-entrances/zoom-entrances.component';
import { ZoomExitsComponent } from './zoom-exits/zoom-exits.component';
import { SpecialsComponent } from './specials/specials.component';
import { AnimationComponent } from './animation.component';
import { routing } from './animation.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AccordionModule.forRoot(),
    routing
  ],
  declarations: [
    AttentionSeekersComponent,
    BouncingEntrancesComponent,
    BouncingExitsComponent,
    FadingEntrancesComponent,
    FadingExitsComponent,
    FlippersComponent, LightspeedComponent,
    RotatingEntrancesComponent,
    RotatingExitsComponent,
    SlidingEntrancesComponent,
    SlidingExitsComponent,
    ZoomEntrancesComponent,
    ZoomExitsComponent,
    SpecialsComponent,
    AnimationComponent
  ]
})
export class AnimationModule { }
