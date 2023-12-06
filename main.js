let playButton = document.getElementById("play-button");
let pauseButton = document.getElementById("pause-button");
let shuffleButton = document.getElementById("shuffle-button");
let repeatButton = document.getElementById("repeat-button");
let shuffleState = "off";
let repeatState = "off";

let pause = function () {
  pauseButton.style.display = "block";
  playButton.style.display = "none";
};

let play = function () {
  pauseButton.style.display = "none";
  playButton.style.display = "block";
};

let shuffle = function () {
  if (shuffleState === "off") {
    shuffleButton.style.fill = "white";
    shuffleState = "on";
  } else if (shuffleState === "on") {
    shuffleButton.style.fill = "#7f7f7f";
    shuffleState = "off";
  }
};

let repeat = function () {
  if (repeatState === "off") {
    repeatButton.style.fill = "white";
    repeatState = "on";
  } else if (repeatState === "on") {
    repeatButton.style.fill = "#7f7f7f";
    repeatState = "off";
  }
};

playButton.addEventListener("click", pause);
pauseButton.addEventListener("click", play);
shuffleButton.addEventListener("click", shuffle);
repeatButton.addEventListener("click", repeat);
