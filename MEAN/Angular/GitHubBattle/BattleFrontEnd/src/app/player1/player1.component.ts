import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component implements OnInit {

  player: Player = new Player();
  playerList: Array<Player> = [];
  errors: Boolean = false;
  userName: String = "";
  gotPlayerOne: Boolean = false;

  constructor(private _playerService: PlayerService) { }

  ngOnInit() {
    this._playerService.playersObservable.subscribe( (players) => {
      this.playerList = players;
    });
    this._playerService.gotPlayerOneObservable.subscribe( (value) => {
      this.gotPlayerOne = value;
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
      this._playerService.setGotPlayerOne(true);
      this._playerService.savePlayerOne(this.player);
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


  //unsubscribe!!!!!!!!!
}
