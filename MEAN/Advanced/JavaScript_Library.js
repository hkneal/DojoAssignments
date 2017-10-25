var _ = {
   map: function(arr, callback) {
     var newArr = [];
     for(let i=0; i<arr.length; i++){
       arr[i] = callback(arr[i])
     }
     return arr;
   },
   reduce: function(arr, callback, memo) {
     var sum = 0;
     for(let i=0; i<arr.length; i++){
       sum += callback(memo, arr[i])
     }
     return sum;
   },
   find: function(arr, callback) {
     var found = 0;
     for(let i=0; i<arr.length; i++){
       if(callback(arr[i])){
         return arr[i];
       }
     }
     return "Not found";
   },
   filter: function(arr, callback) {
     var newArr = [];
     for(let i=0; i<arr.length; i++){
       if(callback(arr[i])){
         newArr.push(arr[i])
       }
     }
     return newArr;
   },
   reject: function(arr, callback) {
     var newArr = [];
     for(let i=0; i<arr.length; i++){
       if(!callback(arr[i])){
         newArr.push(arr[i])
       }
     }
     return newArr;
   }
 }
// you just created a library with 5 methods!

var map = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(map);
var reduce = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(reduce);
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].
var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(even);
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds);
