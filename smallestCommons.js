/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/

function smallestCommons(arr) {
  
  var result = 1;
  var min = Math.min(arr[0], arr[1]),
      max = Math.max(arr[0], arr[1]);
  
  function nSd(a, b) {
    while ((a !== 0) && (b !== 0)) {
      if (a>b) a=a%b;
      else b = b%a;
    }
    return a+b;
  }
  
  for (var i=max; i>=min; i--) {
     result=result/nSd(result, i)*(i);
  }
  
  return result;
}
