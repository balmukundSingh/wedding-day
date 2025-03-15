import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './core/home-page/home-page.component';
import { WeddingDayComponent } from './component/wedding-day/wedding-day.component';
import { EngagementComponent } from './component/engagement/engagement.component';
import { HaldiComponent } from './component/haldi/haldi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    WeddingDayComponent,
    EngagementComponent,
    HaldiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
