let buttons = document.getElementsByClassName("colourButton");
let heading = document.getElementById("colourValue");

startGame();

function startGame() {
  let answerButton = Math.round(Math.random() * (buttons.length - 1));
  let answerMessage = document.getElementById("answer");
  answerMessage.innerHTML = "";
  let manyTimes = 0;

  for (let i = 0; i < buttons.length; i++) {
    let red = makeColourValue();
    let green = makeColourValue();
    let blue = makeColourValue();

    setButtonColour(buttons[i], red, green, blue);

    if (i === answerButton) {
      heading.innerHTML = `RGB(${red}, ${green}, ${blue})`;
    }

    buttons[i].addEventListener("click", function () {
      if (manyTimes === 0) {
        if (this === buttons[answerButton]) {
          answerMessage.innerHTML = "Correct!";
        } else {
          answerMessage.innerHTML = "Wrong answer! Guess again.";
        }
      }
      manyTimes = 1;
    });
  }
}

document.getElementById("resetButton").addEventListener("click", startGame);

function setButtonColour(button, red, green, blue) {
  button.setAttribute(
    "style",
    "background-color: rgb(" + red + "," + green + "," + blue + ");"
  );
}

function makeColourValue() {
  return Math.round(Math.random() * 255);
}
