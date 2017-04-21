var counter = 0;
var firstMultiple = 0;
for(var i=512; i<=4096; i++)
{
  if(i%5==0)
  {
    firstMultiple = i;
    break;
  }
}
for(var num=firstMultiple; num<=4096; num=num+5){
    console.log(num);
    counter++;
}
console.log(counter);
