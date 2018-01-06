function Dice(sides) {
  this.sides = sides;
}

Dice.prototype.roll = function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
}

var dice6 = new Dice(6);


function printNumber(number) {
  var placeholder = document.getElementById("roll-dice-placeholder");
  if(number === 6){
		placeholder.innerHTML = '🔥';
	} else {
		placeholder.innerHTML = number;
	}
}

var button = document.getElementById("roll-dice-button");

button.onclick = function() {
  var result = dice6.roll();
  printNumber(result);
};
