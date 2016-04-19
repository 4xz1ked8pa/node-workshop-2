function randBetween(a, b) {
 return Math.floor(Math.random() * (b - a + 1)) + a;
}

function getFortune() {
  var quotes = ["The future smiles at you.", "You will soon find your soulmate.", "You will find yourself soon enough."];
  var randNumber = randBetween(1,quotes.length - 1);
  var resultQuote = quotes[randNumber];
  console.log(resultQuote);
}

module.exports = {
  getFortune: getFortune
};
