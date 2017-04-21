function previousLengths(inputArray)
{
  for(var i=0; i<inputArray.length; i++)
  {
    inputArray[i] = inputArray[i].length;
  }
  return inputArray;
}

console.log(previousLengths(["Hello","goodbye","MyMyMy","Hi"]));
