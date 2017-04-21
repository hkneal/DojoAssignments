function beginGame(){
  var userName;
  var yourAnswer;
  var qNum = aNum = numRight = numAnswered = 0;
  var questions = ["What game is played on the GridIron?", "What is 6 + 7",
  "How many World Wars have there been?"];
  var answers = ["football", 13, 2];
  userName = window.prompt("Please Enter Your Name:");
  if((userName === "") || (userName === null) || (userName == "Q") || (userName == "q")){
    yourAnswer = alert(userName + ", You Answered: " + numAnswered +
    " Questions, You Answered: " + numRight + " Correctly!")
    return;
    }
  for(var i=0; i<3; i++){
    yourAnswer = window.prompt(userName + " " + questions[qNum]);
    if((yourAnswer === null) || (yourAnswer === "") || (yourAnswer == "Q") ||
      (yourAnswer == "q")){
      yourAnswer = alert(userName + ", You Answered: " + numAnswered +
      " Questions and you Answered: " + numRight + " Correctly!")
      return;
    }
    numAnswered++;
    qNum++;
    if(yourAnswer == answers[aNum]) numRight++;
    aNum++;
  }
  yourAnswer = alert(userName + ", You Answered: " + numAnswered +
  " Questions and you Answered: " + numRight + " Correctly!");
}
