import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../player.service';
import { Player } from '../../player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  player: Player = new Player();
  playerList: Array<Player> = [];
  constructor(private _playerService: PlayerService) { }

  ngOnInit() {
    this._playerService.playersObservable.subscribe( (players) => {
      this.playerList = players;
    });
    this.getPlayers();
  }

  delete(id: String): void {
    this._playerService.removePlayer(id).then(() => {
      console.log('Player Deleted');
      this.getPlayers();
    }).catch(console.log);
    console.log('player delete called!');
  }

  getPlayers() {
    this._playerService.getPlayers()
      .then(players => {
        this.playerList = players;
        this._playerService.updatePlayers(this.playerList);
        // console.log(this.playerList);
      })
      .catch(console.log);
  }

}
