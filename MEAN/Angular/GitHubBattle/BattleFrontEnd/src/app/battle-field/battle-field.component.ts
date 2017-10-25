import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-battle-field',
  templateUrl: './battle-field.component.html',
  styleUrls: ['./battle-field.component.css']
})
export class BattleFieldComponent implements OnInit {
  gotPlayerOne: Boolean = false;
  gotPlayerTwo: Boolean = false;

  constructor(private _playerService: PlayerService) { }

  ngOnInit() {
    this._playerService.gotPlayerOneObservable.subscribe( (value) => {
      this.gotPlayerOne = value;
    });
    this._playerService.gotPlayerTwoObservable.subscribe( (value) => {
      this.gotPlayerTwo = value;
    });
    this._playerService.setGotPlayerOne(false);
    this._playerService.setGotPlayerTwo(false);
  }

}
