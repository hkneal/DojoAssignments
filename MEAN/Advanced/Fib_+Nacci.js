function fib() {
  // Some variables here
  var x = 0;
  var y = 1;
  var z = 1;
  function nacci() {
    // do something to those variables here
    console.log(z);
    z = x + y;
    x = y;
    y = z;
  }
  return nacci
}
var fibCounter = fib();


fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
