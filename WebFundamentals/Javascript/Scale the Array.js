function scaleArray(inputArray, mult)
{
  for(var i=0; i<inputArray.length; i++)
  {
    inputArray[i] = inputArray[i] *  mult;
  }
  return inputArray;
}

console.log(scaleArray([3,2,1,5,8,9,0], 4));
