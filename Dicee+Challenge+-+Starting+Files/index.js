var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var myImages = document.querySelectorAll("img");
//or document.getElementsbyClassName("img1")[0].setAtt... because it returns a list, no matter the length.

myImages[0].setAttribute("src", "./images/dice" + randomNumber1 + ".png");
myImages[1].setAttribute("src", "./images/dice" + randomNumber2 + ".png");

var result = document.querySelector("h1")
if (randomNumber1 > randomNumber2) result.textContent = "🚩 Player 1 Wins!";
else if (randomNumber2 > randomNumber1) result.textContent = "Player 2 Wins! 🚩";
else result.textContent = "🚩 It's a tie! 🚩";