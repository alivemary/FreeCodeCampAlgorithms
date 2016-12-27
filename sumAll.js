/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
  
  var summa = 0;
  
  for (var i = Math.min(...arr); i<=Math.max(...arr); i++) {
    summa+=i;
  }
  console.log(summa);
  return summa;
}
