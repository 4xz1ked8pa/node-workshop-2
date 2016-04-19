var prompt = require('prompt');
var request = require('request');

function betterLog(value) {
  console.log(require('util').inspect(value, {depth: 20, colors: true}));
}
function getWeather() {
  prompt.start();
  prompt.get(['location'],function(err, result) {
    var requestAddress = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + result.location;
    request(requestAddress, function(err, result) {
      var resultObject = JSON.parse(result.body);
      var latitude = resultObject.results[0].geometry.location.lat;
      var longitude = resultObject.results[0].geometry.location.lng;
      var forecastRequest = 'https://api.forecast.io/forecast/f245b8c06f2fee9beeb4e42223b29126/' + latitude + ',' + longitude;
      console.log(forecastRequest);
      request(forecastRequest, function(err, result) {
        resultObject = JSON.parse(result.body);
        betterLog(resultObject);
      });
    });
  });
}

getWeather();
