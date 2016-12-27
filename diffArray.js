/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/
function diffArray(arr1, arr2) {
  var newArr = [];
  var nArr1 = arr1;
  var nArr2 = arr2;
  // Same, same; but different.
  nArr1 = arr1.filter(function (element){
    return arr2.indexOf(element) == -1;
  });
  nArr2 = arr2.filter(function (element){
    return arr1.indexOf(element) == -1;
  });
  newArr=nArr1.concat(nArr2);
  return newArr;
}
