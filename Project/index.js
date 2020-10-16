/* ------------------------------ Analyze this code: ----------------------------------- */
let age = 35;
let tickets = 12;
let canDrive = false;

if (age - tickets > 16) {
  canDrive = true;
}

let onTime = true;
let extras = 120;
let fees = 0;
let charges = 100;

if (!onTime) {
  fees += 200;
} else if (extras > 0) {
  fees = extras;
} else if (charges > 0) {
  fees = charges;
} else {
  fees = 5;
}

let looped = 0;

for(i < 6; let i = 1; i++){
  looped += 1;
}

/* ------------------------------ Complete the instructions below this line: ----------------------------------- */

var water = Math.random();
const waterCopy = water;

/* 
  Write a for loop, for each loop add 10 to the variable water. You should loop 10 times. 
  If you do this correctly, the beaker should fill perfectly on index.html
*/


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* Dont change the code below this line*/
function fillBeaker() {
  const splash = document.querySelector(".splash");
  const message = document.querySelector(".message");
  const subMessage = document.querySelector(".sub-message");
  let air = document.querySelector(".air");
  water = water - waterCopy;
  if (water === 0) {
    return;
  }
  air.style.top = `${-380 - water * 4}px`;
  if (water > 100) {
    setTimeout(() => {
      splash.style.visibility = "visible";
      message.innerText = "Too much!";
      subMessage.innerText =
        "Look at your for loop and see where you went wrong. We only want to loop 10 times.";
    }, 3000);
  } else if (water < 99) {
    setTimeout(() => {
      message.innerText = "Not Enough!";
      subMessage.innerText =
        "Look at your for loop and see where you went wrong. We want to loop exactly 10 times.";
    }, 3000);
  } else {
    setTimeout(() => {
      message.innerText = "Just Right!";
      message.style.color = "green";
      subMessage.innerText = "Congratulations! You looped exactly 10 times.";
    }, 3000);
  }
}

fillBeaker();
