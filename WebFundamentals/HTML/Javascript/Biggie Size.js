function makeItBig(inputArray)
{
  for(var i=0; i<inputArray.length; i++)
  {
    if(inputArray[i]>=0)
    {
      inputArray[i]="big";
    }
  }
  return inputArray;
}

var output = makeItBig([-2,3,5]);
console.log(output);
