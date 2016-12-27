/*
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
*/

function sym(args) {
  
  var l=arguments.length;
  var arr=[];
  
  for(var i=0; i<l; i++) {
    var arr1 = arguments[i].filter(function(val, index, self){
      return (self.indexOf(val) === index);
    });
    arr.push(arr1);
  }
  
  arr = arr.reduce(function(arr1, arr2){
    
    arr1.forEach(function(e1){
      if (arr2.indexOf(e1) !== -1) {
        arr2 = arr2.filter (function(val) {
          return val !== e1;
        });
        arr1 = arr1.filter (function(val) {
          return val !== e1;
        });
      }     
    });
    return arr1.concat(arr2);
  }, []);
  
  return arr;
}
