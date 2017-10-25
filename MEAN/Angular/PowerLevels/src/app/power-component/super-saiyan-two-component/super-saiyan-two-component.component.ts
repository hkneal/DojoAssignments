import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-two-component',
  templateUrl: './super-saiyan-two-component.component.html',
  styleUrls: ['./super-saiyan-two-component.component.css']
})
export class SuperSaiyanTwoComponentComponent implements OnInit {
  @Input() calculatedPower;
  constructor() { }

  ngOnInit() {
  }

  check20K(){
    if(this.calculatedPower['ss2PowerLevel'] > 20000 && this.calculatedPower['ss2PowerLevel'] != 50000){
      return true;
    }
    else return false;
  }
  
  check9K(){
    if(this.calculatedPower['ss2PowerLevel'] > 9000 && this.calculatedPower['ss2PowerLevel'] <= 20000){
      return true;
    }
    else return false;
  }

}
