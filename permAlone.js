/*
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/

function permAlone (str){
  var arr=str.split('');
  var temp=[];
  var result=[];
  var stop=false;
  
  function expand(arr1){
    var i=0;
    var a=[];
    for (var j=0; j<arr1.length; j++){
      a.push({i: i, a: arr1.slice(j)});
    }
    return a;
  }
  
  function getPerm(arr1){
    var perm='';
    for (var l=0; l<arr1.length; l++){
       perm += arr1[l].a[arr1[l].i];
    }
    return perm;
  }
  
  function cutArr(element, index, self, cInd){
    return index!=this;
  }
  
  temp = expand(arr);
  result.push(getPerm(temp));
  
  while(temp.length!==0 || stop){
    for (var k=temp.length-1; k>=0; k--){
      if (temp[k].i<temp[k].a.length-1){
        temp[k].i++;
        var c = temp[k].i;
        var r=temp[k].a.filter(cutArr, c);
        temp = temp.concat(expand(r));
        result.push(getPerm(temp));
        break;
      }
      else {
        temp.splice(k, 1);
      }
    }
  }
  result = result.filter(function(e){
    return !/(.)\1+/.test(e);
  });
  return result.length;
}
