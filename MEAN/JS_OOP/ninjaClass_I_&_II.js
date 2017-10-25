function Ninja(name){
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;
    this.sayName = function(){
        console.log("Hello my name is " + this.name + "!");
    }
    this.showStats = function(){
        console.log(this.name + "'s Stats");
        console.log("Strength:" + strength);
        console.log("Speed:" + speed);
        console.log("Health:" + this.health);
    }
    this.drinkSake = function(){
      this.health += 10;
    }
    this.punch = function(ninja){
      if(ninja instanceof Ninja){
        if(ninja.health <= 5){
          ninja.health = 0;
        } else {
          ninja.health -= 5;
        }
        console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
      }
      else {
        console.log("Please Pass a Valid Ninja Object!");
      }
    }
    this.kick = function(ninja){
      if(ninja instanceof Ninja){
        var kickDamage = strength * 15;
        if(ninja.health <= 45){
          ninja.health = 0;
        } else {
          ninja.health = ninja.health - (kickDamage);
        }
        console.log(ninja.name + " was kicked by " + this.name + " and lost " + kickDamage + " Health!");
      } else {
        console.log("Please Pass a Valid Ninja Object!");
      }
    }
}
var hiram = new Ninja("Hiram");
hiram.sayName();
hiram.showStats();
hiram.drinkSake();
hiram.showStats();

var blue_ninja = new Ninja("Goemon");
var red_ninja = new Ninja("Bill Gates");
red_ninja.punch(blue_ninja);
blue_ninja.showStats();

blue_ninja.kick(red_ninja);
red_ninja.showStats();

blue_ninja.punch("alana");
blue_ninja.punch(red_ninja);
blue_ninja.kick("alana");
blue_ninja.kick(red_ninja);
red_ninja.showStats();
