import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component implements OnInit {

  player: Player = new Player();
  playerList: Array<Player> = [];
  errors: Boolean = false;
  userName: String = "";
  gotPlayerTwo: Boolean = false;

  constructor(private _playerService: PlayerService) { }

  ngOnInit() {
    this._playerService.playersObservable.subscribe( (players) => {
      this.playerList = players;
    });
    this._playerService.gotPlayerTwoObservable.subscribe( (value) => {
      this.gotPlayerTwo = value;
    });
  }

  getPlayer(player: Player){
    this._playerService.retrieveUser(this.player.username)
    .then( player => { 
      // this.retrievedUser = true; set gotPlayerOne
      this.errors = false;
      this.player = player; 
      this.player['score'] = (this.player['public_repos'] + this.player['followers']) * 12;
      if(this.player['name'] == 'null' || this.player['name'] == null){
        this.player['name'] = this.player['login'];
      }
      this._playerService.setGotPlayerTwo(true);
      this._playerService.savePlayerTwo(this.player);
      this._playerService.createPlayer(this.player).then(player =>{
        this.playerList.push(player);
        this._playerService.updatePlayers(this.playerList);
      }).catch(err => { console.log(`Create Player Error: ${ err }`)});
      console.log(this.player);
    })
    .catch( err => { 
      this.errors = true;
      console.log(err); })
  }

}
