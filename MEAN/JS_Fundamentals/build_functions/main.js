function runningLogger(){
  console.log("I am running!");
}

runningLogger();

function multiplyByTen(num){
  num *=10;
  return num;
}

console.log(multiplyByTen(5));

function stringReturnOne() {
  return "This is from stringReturnOne";
}

function stringReturnTwo() {
  return "This is from stringReturnTwo";
}

console.log(stringReturnOne(),stringReturnTwo());

function caller(parm){
  if(typeof(parm) == 'function'){
    parm();
  }
}

caller(runningLogger);

function myDoubleConsoleLog(parm1, parm2){
  if(typeof(parm1) == 'function'){
    console.log(parm1());
  }
  if(typeof(parm2) == 'function'){
    console.log(parm2());
  }
}

myDoubleConsoleLog(stringReturnOne, stringReturnTwo)

function caller2(parm) {
  console.log('Starting...');
  setTimeout(function(){
    if(typeof(parm) === 'function'){
        parm(stringReturnOne, stringReturnTwo);
    }
  }, 2000);
  console.log('Ending?');
  return "interesting";
}

console.log(caller2(myDoubleConsoleLog));
