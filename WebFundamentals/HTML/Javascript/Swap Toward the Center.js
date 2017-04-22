function reverseArray(inputArray)
{
  for(var i=0; i<inputArray.length; i++)
  {
    if( i >= inputArray.length-1-i)
    {
      break;
    }
    if( i == 1) continue;
    var temp = inputArray[i];
    inputArray[i] = inputArray[inputArray.length-1-i];
    inputArray[inputArray.length-1-i] = temp;
  }
  return inputArray;
}

console.log(reverseArray([true,42,"Ada",2,"pizza"]));
