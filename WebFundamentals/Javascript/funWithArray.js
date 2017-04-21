var numArray = [45,2,3,89,76,43];
console.log(Math.max(numArray));
console.log(Math.max(...numArray));
console.log(Math.max.apply(null, numArray));

console.log(Math.min(numArray));
console.log(Math.min(...numArray));
console.log(Math.min.apply(null, numArray));

// console.log(Math.average(numArray));
// console.log(Math.average(...numArray));
console.log([45,2,3,89,76,43].sum);
console.log(numArray.sum());
console.log(numArray.average());
