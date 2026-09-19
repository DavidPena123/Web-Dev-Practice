//document.querySelector("button").addEventListener("click", handleClick);
//no () on the mthod because it will call it immediately call it as the js is being added
//so we pass in just the name because we're waiting for the event listener to happen
var buttons = document.querySelectorAll(".drum"); //. = class, # = id

for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", handleClick);
}

function handleClick(){
    alert("Clicked!");
}