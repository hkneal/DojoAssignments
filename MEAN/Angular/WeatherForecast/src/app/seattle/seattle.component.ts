import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  weather: object = {};
  cityName: string = "seattle";
  gotWeather: boolean = false;

  ngOnInit(){
    this._httpService.retrieveWeather(this.cityName)
    .then( weather => { 
      this.gotWeather = true;
      this.weather = weather; 
      console.log(this.weather)})
    .catch( err => { console.log(err); })
  }

}
