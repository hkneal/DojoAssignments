import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  currentTime = new Date();
  timeZones: Array<object> = [
    {zone: "PST", clicked: false},
    {zone: "MST", clicked: false},
    {zone: "CST", clicked: false},
    {zone: "EST", clicked: false}
  ];
  
  resetZones():void{
    for(let zone of this.timeZones){
      zone['clicked'] = false;
    }
  }
  clearTime():void{
    this.resetZones();
    this.currentTime = new Date();
  }
  displayZone(index): void{
    this.resetZones();
    this.currentTime = new Date();
    this.timeZones[index]['clicked'] = true;
    if(index === 1) {
      this.currentTime.setHours(this.currentTime.getHours() + 1);
    } else if (index === 2) {
      this.currentTime.setHours(this.currentTime.getHours() + 2);
    } else {
      this.currentTime.setHours(this.currentTime.getHours() + 3);
    }  
  }
}
