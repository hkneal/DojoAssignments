var firstMultiple = 1;
function countDown(mult,lowNum, highNum, skipNum)
{
  for(var i=lowNum; i<=highNum; i++)
  {
    if(i%mult==0)
    {
      firstMultiple = i;
      break;
    }
  }
  while(firstMultiple <= highNum)
  {
    if(firstMultiple != skipNum) {
      console.log(firstMultiple);
    }
    firstMultiple = firstMultiple + mult;
  }
}

countDown(3,5,17,9);
