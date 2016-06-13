// var fullDeck =[]; //Cyrus suggestion

$(document).ready(function(){
  console.log("loaded");
  var J = "11"
  var Q = "12"
  var K = "13"
  var A = "14"
var suits = ["H", "S", "D", "C"]; //image here?

var values = [A, "2", "3", "4", "5", "6", "7", "8", "9", "10", J, Q, K];
var fullDeck =[];
var bet=0;
var playerScore = 0;
var cScore = 0;

for (var i = 0; i< suits.length; i++) {
  values.forEach(function(values){
    fullDeck.push(values+suits[i]);


  })
}
$('#button').click(shuffleCards)
function shuffleCards() {
  var i, j;
  var temp;
//fisher-yates
  for(var i = fullDeck.length -1; i >0; i--){
    var j = Math.floor(Math.random()* i);
    temp = fullDeck[i];
    fullDeck[i]=fullDeck[j]
    fullDeck[j]= temp;

}
console.log(fullDeck)
}
shuffleCards();

cpu = fullDeck.slice(0, 26);
player = fullDeck.slice(26);



$('#deal').click(compareCards);



function compareCards(){

document.getElementById('pactual').innerHTML=playerScore;
document.getElementById('cactual').innerHTML=cScore;

 card1= cpu.shift();
 card2= player.shift();
 document.getElementById('player').innerHTML = player[0];
  document.getElementById('cpu').innerHTML = cpu[0];

  if(parseInt(card1)>parseInt(card2)){
    cScore+=1;
  document.getElementById('player').innerHTML = player[0];
  document.getElementById('cpu').innerHTML = cpu[0];
  document.getElementById('console').innerHTML="Computer wins hand";

      }else if(parseInt(card2)>parseInt(card1)){
    playerScore+=1;
    bet+=10;
  document.getElementById('player').innerHTML = player[0];
  document.getElementById('cpu').innerHTML = cpu[0];
  document.getElementById('console').innerHTML="Player wins hand";
  document.getElementById('winnings').innerHTML = bet[0];
      }else{
  document.getElementById('console').innerHTML="Tie Breaker! 3 Cards Played";

      return tieBreaker;
      }
     console.log(cpu);
     console.log(player);
}
function tieBreaker(){

  //append "I declare war" on screen
 card1= cpu.splice(0,2);
 card2= player.splice(0,2);
  var b = prompt("place bet")
  var num1= parseInt(b)
  document.getElementById('cash').innerHTML = num1;
 // if(parseInt(card2)>parseInt(card1)){
 //  document.getElementById('winnings').innerHTML = num1*2;
 // }

}
compareCards();
tieBreaker();

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


})

