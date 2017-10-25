import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  switchArray: Array<object> = this.loadArray();

  loadArray():Array<object>{
    let switchArray: Array<object> = [];
    for(let i=0; i<10; i++){
      switchArray.push({on: true})
    }
    return switchArray;
  }

  togglePower(index: number):void{
    if(this.switchArray[index]['on']) {
      this.switchArray[index]['on'] = false;
    } else {
      this.switchArray[index]['on'] = true;
    }
  }
}

