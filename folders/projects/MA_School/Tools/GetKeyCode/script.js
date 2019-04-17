const wrapper = document.getElementById("wrapper");
const myAssignment = document.getElementById("myAssignment");
const myAwnser = document.getElementById("myAwnser");
const feedback = document.getElementById("feedback");

let mySum;
let sound = new Audio();
let sound2 = new Audio();
let sound3 = new Audio();
//let sound4 = new Audio();
let wrong=0;
let good=0;

myAwnser.focus();

function keyPressed(evt)
{
    //show_character.innerHTML = evt.char;
    show_keycode.innerHTML = evt.keyCode;
}
myAwnser.addEventListener("keydown",keyPressed,false);