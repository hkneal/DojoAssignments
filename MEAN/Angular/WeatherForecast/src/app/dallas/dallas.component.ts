import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  weather: object = {};
  cityName: string = "dallas";
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
