function cToFahrenheit(cDegrees){
  var fDegrees = ((cDegrees * 9/5) +32 );
  return fDegrees;
}
console.log("56 degrees Celsius is " + cToFahrenheit(56) + " degrees Fahrenheit");

for(var i=200; i>0; i--)
{
  console.log(i + "," + cToFahrenheit(i));
  if(cToFahrenheit(i)==i)
  {
    console.log(i + "," + cToFahrenheit(i) + " We Have a Match!!");
    break;
  }

}
