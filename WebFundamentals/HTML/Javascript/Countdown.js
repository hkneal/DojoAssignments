function countdownArray(inputNum)
{
  var newArray = [inputNum+1];
  for(var i = inputNum; i>=0; i--)
  {
    newArray[i] = inputNum-i;
  }
  return newArray;
}

console.log(countdownArray(5));
