function factorialOf(sumNum){
  var sigmaOf = 1;
  for(var i=1; i<=sumNum; i++){
    sigmaOf *= i;
  }
  return sigmaOf;
}

for(var i=1; i<11; i++){
  console.log("The factorial of " + i + " = " + factorialOf(i));
}
