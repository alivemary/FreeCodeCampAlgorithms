/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/
function exNumber (value) {
     return (value != this) ;
}
function destroyer(arr) {
  // Remove all the values
      var args = Array.prototype.slice.call(arguments, 1);
      for (var i=0; i<args.length; i++) {
          arr = arr.filter(exNumber, args[i]);
      }
      return arr;
}
