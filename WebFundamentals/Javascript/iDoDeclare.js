function declarations(){
  var num1 = num2 = num3 = num4 = 0;
  var string1 = string2 = string3 = "";
  var correct = flag = true;
  var whatAmI;

  //assigning values
  num1  = Math.random();
  num2  = Math.random();
  num3  = Math.random();
  num4  = Math.random();

  flag = (num1 > num2);

  string1 = "Hello";
  string2 = "Coding";
  string3 = "Dojo!";
  whatAmI = string2 + num1;

  //printing results
  console.log("The first number is: " + num1);
  console.log("The second number is: " + num2);
  console.log("The third number is: " + num3);
  console.log("The fourth number is: " + num4);
  console.log("The first string is: " + string1);
  console.log("The second string is: " + string2);
  console.log("The third string is: " + string3);
  console.log("The unknown string is: " + whatAmI);
  console.log("The firt Boolean is set to: " + correct);
  console.log("The second Boolean is set to: " + flag);
}

declarations();
