import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  retrieveWeather(cityName) {
    console.log("in Retreive Weather:", cityName)
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${ cityName }&APPID=7ec7696ef056fcbddeee80a4f1a08455`).map(data=>data.json()).toPromise()
  }

}
