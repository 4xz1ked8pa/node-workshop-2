var sampleString = "DecodeMTL callbacks exercise";

function firstChar(str, callback) {
  var firstCharacter = str[0];
  setTimeout(function() {
    callback(firstCharacter);
  },1000);
}

function lastChar(str, callback) {
  var lastCharacter = str.charAt(str.length - 1);
  setTimeout(function() {
    callback(lastCharacter);
  },1000);
}

function getFirstAndLast(str, callback) {
  firstChar(str, function(firstLetter) {
    lastChar(str, function(lastLetter) {
        callback(firstLetter + " " + lastLetter);
    });
  });
}

getFirstAndLast(sampleString, function(str) {
  console.log(str);
});
