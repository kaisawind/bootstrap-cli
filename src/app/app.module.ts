import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ButtonsModule } from './buttons/buttons.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HtmlModule } from './html/html.module';
import { SwitchModule } from './switch/switch.module';
import { AnimationModule } from './animation/animation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonsModule,
    DashboardModule,
    SidebarModule,
    SharedModule,
    CoreModule,
    HtmlModule,
    SwitchModule,
    AnimationModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
