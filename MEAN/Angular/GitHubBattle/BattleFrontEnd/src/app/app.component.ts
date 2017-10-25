import { Component } from '@angular/core';
import { PlayerService } from './player.service';
import { BehaviorSubject } from 'rxjs';
import { Player } from './player';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub Battle';

  playersList: Array<Player> = [];
  gotPlayerOne: Boolean = false;
  gotPlayerTwo: Boolean = false;
  playerOne: Player = new Player();
  playerTwo: Player = new Player();
  
  constructor(private _playerService: PlayerService){
    this._playerService.updatePlayers(this.playersList);
    this._playerService.setGotPlayerOne(this.gotPlayerOne);
    this._playerService.gotPlayerOneObservable.subscribe( ( value ) => {
      this.gotPlayerOne = value;
    });
    this._playerService.setGotPlayerTwo(this.gotPlayerTwo);
    this._playerService.gotPlayerTwoObservable.subscribe( ( value ) => {
      this.gotPlayerTwo = value;
    });
    this._playerService.playersObservable.subscribe( ( players ) => {
      this.playersList = players;
    });
    this._playerService.playerOneObservable.subscribe( ( player ) => {
      this.playerOne = player;
    });
    this._playerService.playerTwoObservable.subscribe( ( player ) => {
      this.playerTwo = player;
    });
  }

}
