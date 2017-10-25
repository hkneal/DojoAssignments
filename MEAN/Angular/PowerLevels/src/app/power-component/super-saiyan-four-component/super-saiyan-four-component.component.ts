import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-four-component',
  templateUrl: './super-saiyan-four-component.component.html',
  styleUrls: ['./super-saiyan-four-component.component.css']
})
export class SuperSaiyanFourComponentComponent implements OnInit {
  @Input() calculatedPower: object;
  constructor() {}
  over9K : boolean = false;
  superlative : boolean = false;
  theOne: boolean = false;

  ngOnInit() {
  }

  check50K(){
    console.log("in checkValues");
    if(this.calculatedPower['ss4PowerLevel'] == 50000){
      return true;
    }
    else return false;
  }

  check20K(){
    if(this.calculatedPower['ss4PowerLevel'] > 20000 && this.calculatedPower['ss4PowerLevel'] != 50000){
      return true;
    }
    else return false;
  }
  
  check9K(){
    if(this.calculatedPower['ss4PowerLevel'] > 9000 && this.calculatedPower['ss4PowerLevel'] <= 20000){
      return true;
    }
    else return false;
  }

}
