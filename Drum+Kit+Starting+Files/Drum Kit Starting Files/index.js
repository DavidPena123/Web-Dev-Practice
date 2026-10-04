// document.querySelector("button").addEventListener("click", handleClick);
// no () on the mthod because it will call it immediately call it as the js is being added
// so we pass in just the name because we're waiting for the event listener to happen
var buttons = document.querySelectorAll(".drum"); //. = class, # = id

// The parentheses are the "execute now" operator in JavaScript. The function runs immediately during setup.
// If you include parentheses to pass arguments like handleClick(param), it executes immediately. 
// To pass arguments for later, wrap it in an anonymous function or an arrow function.

for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", handleClick);
}

function handleClick(){
    var buttonKey = this.innerHTML; //this keyword calls upon the current object being handled
    
    switch (buttonKey) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log(buttonKey);
    }
}