import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-high-score',
  templateUrl: './high-score.component.html',
  styleUrls: ['./high-score.component.css']
})
export class HighScoreComponent implements OnInit {

  playerList: Array<Player> = [];
  playerListSet: Set<Player> = new Set();
  constructor(private _playerService: PlayerService) { }

  ngOnInit() {
    this._playerService.playersObservable.subscribe( (players) => {
      this.playerList = players;
    });
    this.getPlayers();
  };

  getPlayers() {
    this._playerService.getPlayers()
      .then(players => {
        this.playerList = players;
        this._playerService.updatePlayers(this.playerList);
        // console.log(this.playerList);
        this.sortList();
      })
      .catch(console.log);
  };

  sortList(){
    this.playerList.sort(function(a, b) {
      return (b.score) - (a.score);
    });
    this.playerListSet = new Set(this.playerList);
    this._playerService.updatePlayers(this.playerList);
  }

}
