console.log("loaded");
// var fullDeck =[]; //Cyrus suggestion

$(document).ready(function(){
  var J = 11
  var Q = 12
  var K = 13
  var A = 14
var suits = ["H", "S", "D", "C"]; //image here?
var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A];
// var values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
fullDeck =[];

for (var i = 0; i< suits.length; i++) {
  values.forEach(function(values){
    fullDeck.push(values+suits[i]);

  })

}


});
// var randomCardValue = function(fullDeck){
//  randomNum1 = Math.floor(Math.random()*fullDeck.length);
//   randomNum2 = Math.floor(Math.random()*fullDeck.length);
//   var card1 = fullDeck[randomNum1];
//   var card2 = fullDeck[randomNum2];
//   var value1 = convertValue(card1);
//   var value2 = convertValue(card2);
