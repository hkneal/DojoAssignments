function thisLength(num1, num2)
{
  var outputArray = [num1.length];
  if(num1 == num2){
    console.log("Jinx");
  }
  for(var i=0; i<num2; i++)
  {
    outputArray[i] = num2;
  }
  return outputArray;
}

console.log(thisLength(2,2));
