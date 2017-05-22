console.log( 'script.js sourced' );

var gripInfo = document.getElementsByClassName('gripInfo');
var switchHand = document.getElementsByClassName('switchHand');
var firstForm = document.getElementsByClassName('firstForm');
var firstBut = document.getElementById('firstButton');

var showGripInfo = function() {
  gripInfo[0].style.visibility = "visible";
  switchHand[0].style.visibility = "visible";
  firstForm[0].style.visibility = "hidden";
};

window.onload = function() {
  gripInfo[0].style.visibility = "hidden";
  switchHand[0].style.visibility = "hidden";
};

firstBut.onclick = showGripInfo;
