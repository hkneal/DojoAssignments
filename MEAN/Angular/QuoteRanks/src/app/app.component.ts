import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  quote: object = {
    quote: "",
    author: "",
    votes: 0
  }

  quoteArray: Array<object> = [];

  onSubmit(): void{
    this.quoteArray.push(this.quote);
    this.quote = {
      quote: "",
      author: "",
      votes: 0
    }
    console.log("New quote added!")
  }
  
  voteUp(i: number): void{
    this.quoteArray[i]['votes']++;
  }

  voteDown(i: number): void{
    this.quoteArray[i]['votes']--;
  }

  deleteQuote(i: number): void{
    this.quoteArray.splice(i, 1);
  }
  
}
