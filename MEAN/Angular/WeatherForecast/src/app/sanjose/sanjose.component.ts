import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  weather: object = {};
  cityName: string = "sanjose";
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
