class Deck {
  constructor(){
    this.cardDeck = [];
    this.copyDeck = [];
    let letter = "";
    for(let j=0; j<4; j++){
        switch(j){
          case 0: letter = 'A'; break;
          case 1: letter = 'B'; break;
          case 2: letter = 'C'; break;
          case 3: letter = 'D'; break;
        }
      for(let i=1; i<15; i++){
        switch(i){
          case 10: this.cardDeck.push('\U+1F0' + letter + 'A');
          break;
          case 11: this.cardDeck.push('\U+1F0' + letter + 'B');
          break;
          case 12: break;
          case 13: this.cardDeck.push('\U+1F0' + letter + 'D');
          break;
          case 14: this.cardDeck.push('\U+1F0' + letter + 'E');
          break;
          default: this.cardDeck.push('\U+1F0' + letter + i);
        }
      }
    }
    for(let i=0; i<this.cardDeck.length; i++){
      this.copyDeck[i] = this.cardDeck[i];
    }
  }

  shuffle() {
    var m = this.cardDeck.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = this.cardDeck[m];
      this.cardDeck[m] = this.cardDeck[i];
      this.cardDeck[i] = t;
    }
  }

  reset(){
    for(let i=0; i<this.copyDeck.length; i++){
      this.cardDeck[i] = this.copyDeck[i];
    }
  }

  deal(playerDeck) {
    // Pick a random card
    let i=0;
    do {
     i = Math.floor(Math.random() * this.cardDeck.length);
   } while (this.cardDeck[i] == undefined);
    playerDeck.push(this.cardDeck[i]);
    delete this.cardDeck[i];
    console.log("card index number :" + i);
  }
}

class Player {
  constructor(name){
    this.name = name;
    this.hand = [];
  }

  playerDeal(deck){
    deck.deal(this.hand);
  }

  playerDiscard(deck, card){
    deck.cardDeck.push(this.hand[card]);
    delete this.hand[card];
  }
}

blue_deck = new Deck();
console.log(blue_deck);
blue_deck.shuffle();
console.log(blue_deck);
blue_deck.reset();
console.log(blue_deck.cardDeck);
hiram = new Player("Hiram");
hiram.playerDeal(blue_deck);
hiram.playerDeal(blue_deck);
hiram.playerDeal(blue_deck);
hiram.playerDeal(blue_deck);
console.log(blue_deck.cardDeck);
console.log(hiram.hand);
hiram.playerDiscard(blue_deck, 1);
console.log(blue_deck.cardDeck);
console.log(hiram.hand);
