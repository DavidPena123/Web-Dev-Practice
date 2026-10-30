// document.querySelector("button").addEventListener("click", handleClick);
var buttons = document.querySelectorAll(".drum"); //. = class, # = id and returns a list of all elements with that class/id

// no () on the mthod because it will call it immediately call it as the js is being added
// so we pass in just the name because we're waiting for the event listener to happen
// The parentheses are the "execute now" operator in JavaScript. The function runs immediately during setup.
// If you include parentheses to pass arguments like handleClick(param), it executes immediately. 
// To pass arguments for later, wrap it in an anonymous function or an arrow function.

for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", handleClick); //parameters in javascript are optional, but could be dangerous
}//you can also do this.innerHTML in here as an anonymous function and pass it in as the parameter

document.addEventListener("keydown", function(event) {
    handleClick(event.key);
})

function handleClick(event){
    //this keyword calls upon the current object being handled
    //?? means if the left variable is null, use the right one.
    var buttonKey = this.innerHTML ?? event;

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
            return;
    }

    buttonAnimation(buttonKey);
}

function buttonAnimation(key){
    var buttonPressed = document.querySelector("." + key);
    
    buttonPressed.classList.add("pressed");

    setTimeout(function(){ //do this after waiting n milliseconds (set the button back to normal)
        buttonPressed.classList.remove("pressed");
    }, 100);
}