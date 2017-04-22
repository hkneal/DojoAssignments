function fToCelsius(fDegrees){
  var cDegrees = ((fDegrees - 32) / (9/5) );
  return cDegrees;
}
console.log("56 degrees Fahrenheit is " + fToCelsius(56) + " degrees Celsius");
