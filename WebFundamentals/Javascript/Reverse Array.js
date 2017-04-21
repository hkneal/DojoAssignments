function reverseArray(inputArray)
{
  for(var i=0; i<inputArray.length; i++)
  {
    if( i >= inputArray.length-1-i)
    {
      break;
    }
    var temp = inputArray[i];
    inputArray[i] = inputArray[inputArray.length-1-i];
    inputArray[inputArray.length-1-i] = temp;
  }
  return inputArray;
}

console.log(reverseArray([3,1,6,4,2,5]));
