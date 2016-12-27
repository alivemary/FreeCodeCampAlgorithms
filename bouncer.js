/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/
function falsyVal(value) {
  
    if (value) return true;
      else return false;
 
}
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  arr = arr.filter(falsyVal);
  return arr;
}
