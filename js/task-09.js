function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonEl = document.querySelector('.change-color');
console.log(buttonEl);
const colorEl = document.querySelector('.color');
const bodyEl = document.body;
buttonEl.addEventListener('click', onClick);

function onClick() {
  const randomColor = getRandomHexColor();

  colorEl.textContent = randomColor;
  bodyEl.style.backgroundColor = colorEl.textContent;
}

