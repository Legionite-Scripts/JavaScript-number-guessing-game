"use strict";
const inputValue = document.getElementById("guessInput");
const enterBtn = document.getElementById("enterBtn");
const notify = document.getElementById("notifyText");

let validateInput = function() {
  event.preventDefault();
  let validNumbersArray = ["10", "14", "12", "49", "31", "19", "40","9","2","20"];

  if (inputValue.value === null || inputValue.value === "") {
    notify.innerHTML =
      "Please input a value to start playing. Click the try again button to retry";
  } else if (
    inputValue.value === validNumbersArray[0] ||
    inputValue.value === validNumbersArray[1] ||
    inputValue.value === validNumbersArray[2] ||
    inputValue.value === validNumbersArray[3] ||
    inputValue.value === validNumbersArray[4] ||
    inputValue.value === validNumbersArray[5] ||
    inputValue.value === validNumbersArray[6] ||
    inputValue.value === validNumbersArray[7] ||
    inputValue.value === validNumbersArray[8] ||
    inputValue.value === validNumbersArray[9] 
  ) {
    notify.innerHTML =
      "Correct!! You have guessed a lucky number!. Try Again";
    notify.style.color = "green";
  } else {
    notify.innerHTML =
      "Aww you were Incorrect. Try again";
      notify.style.color = "red";
  }
};

let clearInput = function() {
  event.preventDefault();
  inputValue.value = "";
};
