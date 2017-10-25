import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  weather: object = {};
  cityName: string = "burbank";
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
