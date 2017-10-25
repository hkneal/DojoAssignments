import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ManagePlayerStatusComponent } from './manage-player-status/manage-player-status.component';
import { PlayerListComponent } from './manage-players/player-list/player-list.component';
import { AddPlayerComponent } from './manage-players/add-player/add-player.component';
import { Game1Component } from './manage-player-status/game1/game1.component';
import { Game2Component } from './manage-player-status/game2/game2.component';
import { Game3Component } from './manage-player-status/game3/game3.component';
import { PlayerService } from './player.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ManagePlayersComponent,
    ManagePlayerStatusComponent,
    PlayerListComponent,
    AddPlayerComponent,
    Game1Component,
    Game2Component,
    Game3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
