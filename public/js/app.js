$(document).ready(function($){
// $('#picture').hide().fadeIn(1000);

$("#playerDeal").click(function() {
  var position = "#playerCards";
  var valuePosition = "#playerScoreValue"
  genPlayerCards(position, valuePosition);
  genPlayerCards(position, valuePosition);
});

$("#playerHit").click(function(){
  var position = "#playerCards";
  var valuePosition = "#playerScoreValue"
  genPlayerCards(position, valuePosition);
});

$("#playerStand").click(function(){
  genDealerResults();
});

});//end of window.onload


var suitArr = ['spades', 'hearts', 'clubs', 'diamonds'];
var cardArr = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'jack', 'queen', 'king', 'ace', ];
var playerVar = $('div').eq(0);
var deckArr = [];
var playerCardsValue = 0;
var globalPosition = 0;
var playerScore = 0;
var dealerScore = 0;
var dealerChips = 100;
var playerChips = 100;

function genDealerResults(){
  var position = "#dealerCards";
  var valuePosition = "#dealerScoreValue"
  genPlayerCards(position, valuePosition);
  if(dealerScore>21){
    alert('dealer busts');
    dealerChips = dealerChips - 10;
    playerChips = playerChips + 10;
  }
  else if(dealerScore<=21 && dealerScore > playerScore){
      alert('dealer wins');
    dealerChips = dealerChips + 10;
    playerChips = playerChips - 10;

    }
  else {
    genDealerResults();
  }
    updateChips();
};

function updateChips(){
  $(dealerChipsValue).html(dealerChips);
  $(playerChipsValue).html(playerChips);
}


function genPlayerCards(data, valuePosition){
  var position = randPosition();
  var cards = $('<li>' + deckArr[position] + '</li>');
  cards.attr('id','card');
  $(data).append(cards);
  globalPosition = position;
  if(data == "#dealerCards"){
    var value = getCardValue();
    dealerScore = dealerScore + value;
    $(valuePosition).html(dealerScore);
  }
  else if(data == "#playerCards"){
  var value = getCardValue();
  playerScore = playerScore + value;
  $(valuePosition).html(playerScore);
  }
}


function buildDeck(){
    for(i=0; i<suitArr.length; i++){
      var suit = suitArr[i];
      for(j=0; j<cardArr.length; j++){
        var card = cardArr[j]+ " of " + suit;
        deckArr.push(card);
      };
    };
};

function randPosition(){
    var genRandCard = Math.floor(Math.random()*52);
    return genRandCard;
};

buildDeck();


var gollum = $('<div>');
gollum.attr('id', 'gollum');

function getCardValue(){
var n = globalPosition;
switch(n)
{
  case 0: value = 2;
  break;
  case 1: value = 3;
  break;
  case 2: value = 4;
  break;
  case 3: value = 5;
  break;
  case 4: value = 6;
  break;
  case 5: value = 7;
  break;
  case 6: value = 8;
  break;
  case 7: value = 9;
  break;
  case 8: value = 10;
  break;
  case 9: value = 10;
  break;
  case 10: value = 10;
  break;
  case 11: value = 10;
  break;
  case 12: value = 11;
  break;
  case 13: value = 2;
  break;
  case 14: value = 3;
  break;
  case 15: value = 4;
  break;
  case 16: value = 5;
  break;
  case 17: value = 6;
  break;
  case 18: value = 7;
  break;
  case 19: value = 8;
  break;
  case 20: value = 9;
  break;
  case 21: value = 10;
  break;
  case 22: value = 10;
  break;
  case 23: value = 10;
  break;
  case 24: value = 10;
  break;
  case 25: value = 11;
  break;
  case 26: value = 2;
  break;
  case 27: value = 3;
  break;
  case 28: value = 4;
  break;
  case 29: value = 5;
  break;
  case 30: value = 6;
  break;
  case 31: value = 7;
  break;
  case 32: value = 8;
  break;
  case 33: value = 9;
  break;
  case 34: value = 10;
  break;
  case 35: value = 10;
  break;
  case 36: value = 10;
  break;
  case 37: value = 10;
  break;
  case 38: value = 11;
  break;
  case 39: value = 2;
  break;
  case 40: value = 3;
  break;
  case 41: value = 4;
  break;
  case 42: value = 5;
  break;
  case 43: value = 6;
  break;
  case 44: value = 7;
  break;
  case 45: value = 8;
  break;
  case 46: value = 9;
  break;
  case 47: value = 10;
  break;
  case 48: value = 10;
  break;
  case 49: value = 10;
  break;
  case 50: value = 10;
  break;
  case 51: value = 11;
  break;
};
return value;
};
