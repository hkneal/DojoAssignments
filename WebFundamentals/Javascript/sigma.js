function sigmaOf(sumNum){
  var sigmaOf = 0;
  for(var i=1; i<=sumNum; i++){
    sigmaOf += i;
  }
  return sigmaOf;
}

for(var i=1; i<11; i++){
  console.log("The sigma of " + i + " = " + sigmaOf(i));
}
