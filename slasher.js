/*
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.
*/

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  if (arr.length-howMany>0) {
    return arr.slice(howMany, arr.length);
    
  }
  else {
    return [];
  }
  
  
}
