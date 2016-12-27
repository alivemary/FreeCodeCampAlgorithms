/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/
function titleCase(str) {
  var arr=[];
  arr = str.split(" ");
  for (var i=0; i<arr.length; i++){
    
    var j = arr[i].charAt(0).toUpperCase();
    var array = arr[i].split("");
    for (var k = 1; k<array.length; k++)
      array[k] = array[k].toLowerCase();
    var str1 = array.join("");
    arr[i] = j + str1.substr(1);
   
      
  }
  str = arr.join(" ");
  return str;
}
