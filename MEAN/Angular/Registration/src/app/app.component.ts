import { Component } from '@angular/core';

import { User } from './user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  
  user = new User();
  users: Array<object> = [];

  onSubmit(event: Event):void{

    event.preventDefault();
    console.log("Submitting an event")
  }
}
