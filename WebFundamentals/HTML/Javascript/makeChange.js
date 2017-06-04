function generateCoinChange(remain){
    var valuesArray = [];
    var denomArray = [100, 50, 25, 10, 5, 1];
    var stringsArray = ["dollars: ", "half dollars: ", "quarters: ", "dimes: ", "nickels: ", "pennies: "]
    for(var i=0; i<6; i++){
      valuesArray[i] = Math.floor(remain/denomArray[i]);
      remain = (remain % denomArray[i])
    }
    for(var i=0; i<6; i++){
      console.log(stringsArray[i] + valuesArray[i]);
  }
}
generateCoinChange(194);
