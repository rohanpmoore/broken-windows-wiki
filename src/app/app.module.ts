import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { PlotPageComponent } from './plot-page/plot-page.component';
import { CharacterPageComponent } from './character-page/character-page.component';
import { PlayerPageComponent } from './player-page/player-page.component';
import { IndexPageComponent } from './index-page/index-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailPageComponent,
    PlotPageComponent,
    CharacterPageComponent,
    PlayerPageComponent,
    IndexPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
