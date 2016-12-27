/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  // I'm a steamroller, baby
  
  var nArr = [];
  arr.forEach (function(e){
    if (! Array.isArray(e)) {
      nArr.push(e);
    }
    else {
      nArr = nArr.concat(steamrollArray(e));
    }
  });
  return nArr;
}

steamrollArray([[["a"]], [["b"]]]);
