import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  gotPlayerOne: Boolean = false;
  gotPlayerTwo: Boolean = false;
  playerOne: Player = new Player();
  playerTwo: Player = new Player();
  winner: Player = new Player();
  loser: Player = new Player();

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
    this._playerService.playerOneObservable.subscribe( ( player1 ) => {
      this.playerOne = player1;
    });
    this._playerService.playerTwoObservable.subscribe( ( player2 ) => {
      this.playerTwo = player2;
    });
    this.getWinner();
  }

  getWinner(){
    if(this.playerOne['score'] > this.playerTwo['score']){
      this.winner = this.playerOne; 
      this.loser = this.playerTwo;
      console.log(this.winner);
    } else {
      console.log(this.winner);
      this.winner = this.playerTwo; 
      this.loser = this.playerOne;
    }
  }
}
