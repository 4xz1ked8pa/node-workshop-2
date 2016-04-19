// Create a function called firstChar that takes a string and a callback, and "returns" the first character of the string after one second.
// NOTE: You won't be allowed to use the return keyword, because you'll only be "returning" in the callback to setTimeout, way after your function has finished executing.
// Create a function called lastChar that takes a string and "returns" the last character of the string after one second.
// Create a function called getFirstAndLast that takes a string and "returns" the first+last character of the string. Your function should use firstChar and lastChar to do its work. I should be able to call your function like this:


function firstChar(str) {
  var strFirstCharacter = str.charAt(0);
  return setTimeout(function() {
    console.log(strFirstCharacter);
  },3000);
}

function lastChar() {
  var strLastCharacter = str.charAt(str.length);
  return setTimeout(function() {
    console.log(strLastCharacter);
  },2000);
}
