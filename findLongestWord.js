/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/
function findLongestWord(str) {
  var arr=[];
  var longest = 0;
  arr = str.split(" ");
  for (var i = 0; i <arr.length; i++){
    var array = [];
    array = arr[i].split("");
    if (array.length > longest) {
      longest = array.length;
    }
  }
  return longest;
}
