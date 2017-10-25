import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-washdc',
  templateUrl: './washdc.component.html',
  styleUrls: ['./washdc.component.css']
})
export class WashdcComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  weather: object = {};
  cityName: string = "washingtondc";
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
