const text_color = document.getElementById("text-color");
const display_game = document.getElementById("display-game");
const counter = document.getElementById("counter");

async function getArrayColors() {
  const path = "./colors.json"

  const response = await fetch(path);
  const colors_data = await response.json();
  const colors_list = colors_data.colors;

  return colors_list;
};

async function sortColors() {
  const array_colors = await getArrayColors();
  const sort_color = Math.floor(Math.random() * array_colors.length);

  return array_colors[sort_color];
}

async function createElementeColor() {
  const color = await sortColors();

  text_color.textContent = color.name;
  display_game.style.backgroundColor = color.hex;
}

function audioCurrency() {
  const audio_moeda = new Audio("./moeda.mp3");

  audio_moeda.play();
};

function audioError() {
  const audio_error = new Audio("./oh_no.mp3");

  audio_error.play();
};

function updatePoints(points) {
  let value = Number(counter.innerText);

  counter.innerText = value + (points);

  if (points < 0) {
    audioError();
  } else {
    audioCurrency();
  };
};

display_game.addEventListener("click", createElementeColor);


window.onload = () => {
  createElementeColor();
};
