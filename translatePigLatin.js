
/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/
function translatePigLatin(str) {
  
  var vowel = ['a', 'o', 'u', 'e', 'y' ];
  var arr = str.split(' ');
  var pigWord = '';
  var i = 0;
  
  arr.forEach (function (word) {
    
    if (vowel.indexOf(word.charAt(0)) != -1){
      pigWord = word+'way';
    }
    else {
      
      for (var k=1; k < word.length; k++){
        
           if (vowel.indexOf(word.charAt(k)) != -1){
             pigWord = word.substring(k)+word.substring(0, k)+'ay';
             break;
           }
        
    } 
        
     
    }
    arr[i] = pigWord;
    i++;
  });
  str = arr.join(' ');
  return str;
}
