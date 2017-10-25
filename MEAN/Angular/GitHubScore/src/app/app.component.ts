import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _httpService: HttpService){}
  title = 'Gethub Score';

  user: object = {};
  userName: string = "";
  retrievedUser: boolean = false;
  userScore: number = 0;

  getUser(){
    console.log(this.userName);
    this._httpService.retrieveUser(this.userName)
    .then( user => { 
      this.retrievedUser = true;
      this.user = user; 
      this.userScore = this.user['public_repos'] + this.user['followers'];
      console.log(this.user)})
    .catch( err => { console.log(err); })
  }
}
