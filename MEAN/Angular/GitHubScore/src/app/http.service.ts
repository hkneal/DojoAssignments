import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  retrieveUser(userName) {
    console.log("in Retreive User:", userName)
    return this._http.get(`https://api.github.com/users/${ userName }`).map(data=>data.json()).toPromise()
  }
}
