import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Retro Barcode Generator';
  colorArray: Array<String> = ["DarkSeaGreen", "MediumAquaMarine", "Fuchsia", "SteelBlue", "LightSteelBlue"];
  colorIndex: Array<String> = new Array(10);
  
  randomNum(): number{
    return Math.floor(Math.random()*5);
  } 
  constructor(){
    for (let index=0; index<10; index++){
      this.colorIndex[index] = (this.colorArray[this.randomNum()]);
    }
  }
}
