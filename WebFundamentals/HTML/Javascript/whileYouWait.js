function daysUntil(daysUntil){
  while(daysUntil >= 0){
    if(daysUntil > 30){
      console.log("Oh Man, there are still " + daysUntil + " freakin days until my Birthday.");
    } else if (daysUntil > 5) {
      console.log("Only " + daysUntil + " days until my Birthday.");
    } else if (daysUntil > 0) {
      console.log("MY BIRTHDAY IS IN " + daysUntil + " DAYS!!");
    } else if (daysUntil == 0) {
      console.log("YEAH TODAY IS MY BIRTHDAY,  HAPPY BIRTHDAY TO ME :) :) :) !!!!!!!!!!");
    }
    daysUntil--;
  }
}

daysUntil(66);
