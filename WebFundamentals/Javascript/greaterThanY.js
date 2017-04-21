function greaterThany(inputArray, numY){
  var count =0;
  for(var i=0; i<inputArray.length;i++)
  {
    if(inputArray[i] > numY){
      count++;
    }
  }
  console.log(count);
}

greaterThany([2,4,1,87,23,5], 4);
