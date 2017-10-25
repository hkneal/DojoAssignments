import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _httpService: HttpService){}
  // weather: object = {};
  // cityName: string = "sanjose";

  // ngOnInit(){
  //   this._httpService.retrieveWeather(this.cityName)
  //   .then( weather => { 
  //     this.weather = weather; 
  //     console.log(this.weather)})
  //   .catch( err => { console.log(err); })
  // }
}
