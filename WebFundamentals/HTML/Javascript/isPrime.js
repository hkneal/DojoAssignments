function isItPrime(inputNum, primeListSet){
    //prmelist is a growing array list of prime numbers
    //Need to check if number is not already in list(maybe use)
    var primeListArray = Array.from(primeListSet);
    var primeListLen = primeListArray.length;
    var lastDigit = inputNum % 10;
    var isPrime = true;
    if(inputNum == 5 || inputNum == 2 || inputNum == 3) {
      return true;
    }
    if(lastDigit == 5 || inputNum < 2 || inputNum % 3 == 0 ||
      inputNum % 2 == 0) {
      return false
      }
    else {
        if(primeListLen > 0){
            for(var i=0; i<primeListLen; i++){
                if(inputNum % primeListArray[i] == 0){
                    return false;
                  }
            }
        }
      }
    return isPrime
}

var num = 197;
var primeListSet = new Set();  //Needed to us a unique list to keep the array from continually growing.
console.log(num + ", " + isItPrime(num, primeListSet));
if(isItPrime(num, primeListSet)){
  primeListSet.add(num);
}

for(var i=0; i<50; i++){
  console.log(i + ", " + isItPrime(i, primeListSet));
  if(isItPrime(i, primeListSet)){
    primeListSet.add(i);
  }
}
