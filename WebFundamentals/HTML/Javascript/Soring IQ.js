function soaringIQ(totalIQ)
{
  growthRate = .01;
  for(var i=0; i<98; i++)
  {
    totalIQ = totalIQ + growthRate;
    growthRate = growthRate + .01;
    //console.log("the growth Rate is " + growthRate + " the total is " + totalIQ);
  }
  return totalIQ;
}

console.log("Bogdan's IQ after bootcamp will be " + soaringIQ(101));
