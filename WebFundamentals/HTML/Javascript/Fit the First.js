function fitFirst(inputArray)
{
  if(inputArray[0] > inputArray.length){
    console.log("Too big!");
  }
  else if (inputArray[0] < inputArray.length){
    console.log("Too small!");
  }
  else {
    console.log("Just right!");
  }
}

fitFirst([4,5,7,2]);
