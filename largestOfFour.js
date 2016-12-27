/* 
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/


function largestOfFour(arr) {
  // You can do this!
  var arrayOfLargest= [];
  
  for (var i = 0; i<arr.length; i++) {
    var arr1 = arr[i];
    var arr2 = arr1.sort(function(a, b) {
  return a - b;
  }).reverse();
    arrayOfLargest.push(arr2[0]);
    
  }
  return arrayOfLargest;
}
