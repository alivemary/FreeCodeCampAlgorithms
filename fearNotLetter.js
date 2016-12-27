/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  var arr = [], arr1= [];
  var res = [];
  
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
  
  for (var i=0; i<str.length; i++) {
    arr.push (str.charCodeAt(i));
  }
  
  for (var j=str.charCodeAt(0); j<str.charCodeAt(str.length-1)+1; j++) {
    arr1.push(j);
  }
  
  res = diffArray (arr1, arr);
  
  
  if (res.length === 0) return  undefined;
  
  else return String.fromCharCode(res[0]);
  
  
}
