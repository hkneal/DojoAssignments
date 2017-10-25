import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-three-component',
  templateUrl: './super-saiyan-three-component.component.html',
  styleUrls: ['./super-saiyan-three-component.component.css']
})
export class SuperSaiyanThreeComponentComponent implements OnInit {
  @Input() calculatedPower;
  constructor() { }

  ngOnInit() {
  }

  check20K(){
    if(this.calculatedPower['ss3PowerLevel'] > 20000 && this.calculatedPower['ss3PowerLevel'] != 50000){
      return true;
    }
    else return false;
  }
  
  check9K(){
    if(this.calculatedPower['ss3PowerLevel'] > 9000 && this.calculatedPower['ss3PowerLevel'] <= 20000){
      return true;
    }
    else return false;
  }
}
