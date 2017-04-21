function squareArray(inputArray){
  for(var i=0; i<inputArray.length;i++)
  {
    inputArray[i] = inputArray[i] * inputArray[i];
  }
  return inputArray;
}

console.log(squareArray([2,4,1,87,23,5]));
