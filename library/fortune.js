function randBetween(a, b) {
 return Math.floor(Math.random() * (b - a + 1)) + a;
}

function getFortune(str) {
  var quotes = ["The future smiles at you.", "You will soon find your soulmate.", "You will find yourself soon enough."];
  console.log(str);
}

module.exports = {
  getFortune: getFortune
};
