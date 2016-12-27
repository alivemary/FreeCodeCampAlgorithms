/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  // repeat after me
  
    var str1 = "";
    for (var i = 0; i<num; i++) {
      str1 += str;
    }
    return str1;
  
}
