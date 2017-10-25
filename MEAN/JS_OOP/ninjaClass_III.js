class Ninja {
    constructor(name){
        this.speed = 3;
        this.strength = 3;
        this.name = name;
        this.health = 100;
    }
    showName(){
      console.log("Hello my name is: " + this.name);
    }
    showStats(){
      console.log(this.name + "'s Stats");
      console.log("Strength:" + this.strength);
      console.log("Speed:" + this.speed);
      console.log("Health:" + this.health);
    }
    drinkSake(){
      this.health += 10;
    }
};

class Sensei extends Ninja {
  constructor(name){
    super(name);
    this.health *= 2;
    this.speed += 7;
    this.strength += 7;
    this.wisdom = 10;
  }
  speakWisdom(){
    super.drinkSake();
    console.log("Everything has its beauty, but not everyone sees it.");
  }
}

var red_ninja = new Ninja("Hiram");
red_ninja.showName();
red_ninja.showStats();
red_ninja.drinkSake();
red_ninja.showStats();

let super_sensei =  new Sensei("Master Splinter");
super_sensei.speakWisdom();
super_sensei.showStats();
