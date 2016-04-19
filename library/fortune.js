function randBetween(a, b) {
 return Math.floor(Math.random() * (b - a + 1)) + a;
}

function getFortune() {
  var quotes = ["The future smiles at you.", "You will soon find your soulmate.", "You will find yourself soon enough."];
  var randNumber = randBetween(1,5);
  console.log(str);
}

module.exports = {
  randBetween: randBetween,
  getFortune: getFortune
};
