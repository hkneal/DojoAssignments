import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from './player';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlayerService {
  playersObservable = new BehaviorSubject(null);
  gotPlayerOneObservable = new BehaviorSubject(null);
  gotPlayerTwoObservable = new BehaviorSubject(null);
  playerOneObservable = new BehaviorSubject(null);
  playerTwoObservable = new BehaviorSubject(null);
  
    constructor(private _http: Http) { }
  
    getPlayers(): Promise<Player[]> {
      return this._http.get('/api')
      .map(response => response.json())
      .toPromise();
    }

    createPlayer(player: Player): Promise<Player> {
      return this._http.post('/api/addplayer', player)
      .map(response => response.json())
      .toPromise();
    }

    updatePlayers(players: Array<Player>){
      this.playersObservable.next(players);
    }

    savePlayerOne(player: Player){
      this.playerOneObservable.next(player);
    }

    savePlayerTwo(player: Player){
      this.playerTwoObservable.next(player);
    }

    setGotPlayerOne(value: Boolean){
      this.gotPlayerOneObservable.next(value);
    }

    setGotPlayerTwo(value: Boolean){
      this.gotPlayerTwoObservable.next(value);
    }

    retrieveUser(userName) {
      console.log("in Retreive User:", userName)
      return this._http.get(`https://api.github.com/users/${ userName }`).map(data=>data.json()).toPromise()
    }

}
