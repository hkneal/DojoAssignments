function printArray(inputArr, reversedFlag){
  if(reversedFlag){
    for(var i=inputArr.length-1; i>=0; i--){
      console.log(i + " -> " + inputArr[i]);
    }
  } else {
    for(var i=0; i<inputArr.length; i++){
      console.log(i + " -> " + inputArr[i]);
    }
  }
}

printArray(["James","Jill","Jane","Jack"], false);
console.log("============");
printArray(["James","Jill","Jane","Jack"], true);
console.log("============");
printArray(["=>","<-","::","------"], false);
