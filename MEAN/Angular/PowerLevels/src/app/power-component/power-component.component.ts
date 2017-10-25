import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power-component',
  templateUrl: './power-component.component.html',
  styleUrls: ['./power-component.component.css']
})
export class PowerComponentComponent implements OnInit {

  // powerLevelArray: Array<number> = [3, 5, 6];
  // // new Array(100);

  constructor() {}
  
  power: object = {
    powerLevel: 0
  }

  calculatedPower: object ={
    humanPowerLevel: 0,
    saiyanPowerLevel: 0,
    ssPowerLevel: 0,
    ss2PowerLevel: 0,
    ss3PowerLevel: 0,
    ss4PowerLevel: 0
  }

  onSubmit(){
    this.calculatedPower['humanPowerLevel'] = this.power['powerLevel'];
    this.calculatedPower['saiyanPowerLevel'] = this.power['powerLevel'] * 10;
    this.calculatedPower['ssPowerLevel'] = this.power['powerLevel'] * 90;
    this.calculatedPower['ss2PowerLevel'] = this.power['powerLevel'] * 150;
    this.calculatedPower['ss3PowerLevel'] = this.power['powerLevel'] * 250;
    this.calculatedPower['ss4PowerLevel'] = this.power['powerLevel'] * 500;
    console.log("New Power Level Submitted!");
  }

  ngOnInit() {
  }
  

}
