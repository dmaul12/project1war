// var fullDeck =[]; //Cyrus suggestion

$(document).ready(function(){
  console.log("loaded");
  // var J = 11
  // var Q = 12
  // var K = 13
  // var A = 14
var suits = ["H", "S", "D", "C"]; //image here?
// var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var fullDeck =[];


for (var i = 0; i< suits.length; i++) {
  values.forEach(function(values){
    fullDeck.push(values+suits[i]);


  })
}
$('#button').click(shuffleCards)
function shuffleCards() {
  var i, j;
  var temp;

  for(var i = fullDeck.length -1; i >0; i--){
    var j = Math.floor(Math.random()* i);
    temp = fullDeck[i];
    fullDeck[i]=fullDeck[j]
    fullDeck[j]= temp;

}
// console.log(fullDeck)
}
shuffleCards();

cpu = fullDeck.slice(0, 26);
player = fullDeck.slice(26);
// console.log(cpu);
// console.log(player);

$('#deal').click(compareCards);


function compareCards(){
  card1= cpu.shift();
 card2= player.shift();
  if(parseInt(card1)>parseInt(card2)){
    alert("computer wins")
      }else if(parseInt(card2)>parseInt(card1)){
      alert("player wins")
     }
     console.log(cpu);
console.log(player);
// else{
//       alert("tie breaker")
//         return tieBreaker;
//       }
//       }
// function tieBreaker(){
//   //append "I declare war" on screen
//   return false
}




// if(cpu[0].length ===3{
//   return 10
// }

// var randomCard = function(){
//   var randomNum1 = Math.floor(Math.random()*cpu.length);
//   var randomNum2 = Math.floor(Math.random()*player.length);
// }
//   var card1 = cpu[randomNum1];
//   var card2 = player[randomNum2];
//   value1 = convertValue(cpu);
//   value2 = convertValue(player);

// var convertValue= function(fullDeck){
//     if (fullDeck[0] === 'A'){
//     return 14;
//   } if (fullDeck[0] === 'J'){
//     return 11;
//   } if (fullDeck[0] === 'Q'){
//     return 12;
//     } if (fullDeck[0] === 'K') {
//       return 13;
//     } if (fullDeck.length === 3){
//   return 10;
//   } else {
//     return parseInt(fullDeck[0]);
//   }

// }
// console.log(cpu, player)
// console.log(value1, value2)

  // var value1 = convertValue(card1);
  // var value2 = convertValue(card2);
  // console.log(value1, value2)
})

