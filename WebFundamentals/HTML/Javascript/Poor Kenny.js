function whatHappensToday()
{
  var result = Math.random();
  console.log(result);
  if(result > .70)
  {
    console.log("A Meteor Strike will happen today!");
  }
  else if (result > .45)
  {
    console.log("A Blizzard will happen today!");
  }
  else if (result > .25)
  {
    console.log("An Earthquake will happen today!");
  }
  else if (result > .10)
  {
    console.log("A Tsunami will happen today!");
  }
  else
  {
    console.log("A Volcanic Erruption will happen today!");
  }
}

whatHappensToday();
