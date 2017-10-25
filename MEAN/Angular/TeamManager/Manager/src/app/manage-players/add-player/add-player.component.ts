import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Player } from '../../player';
import { PlayerService } from '../../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  player: Player = new Player();
  playerList: Array<Player> = [];

  constructor(private _playerService: PlayerService, private _router: Router ) { 
    this._playerService.playersObservable.subscribe( (players) => {
      this.playerList = players;
    });
  }

  ngOnInit() {}

  onSubmit(player: Player): void{
    // console.log(this.player);
    this._playerService.createPlayer(this.player).then(player =>{
      this.playerList.push(player);
      this._playerService.updatePlayers(this.playerList);
      this.player = new Player();
      console.log('Submitted Form');
    }).catch(err => { console.log(`Create Player Error: ${ err }`)});
    this._router.navigate(['/manage']);
  }

}
