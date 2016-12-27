/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/_/g, ' ').replace(/(?!^)([A-Z])/g, ' $1').replace(/\s(?=\s)/g, '').replace(/\W/g, '-').toLowerCase();
  
  
  return str;
}
