

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// console.log(getRandomHexColor());
const button = document.querySelector('button.change-color')
const span = document.querySelector('span.color')


button.addEventListener('click', () => {
  // console.log(getRandomHexColor());
  const color = getRandomHexColor();
  span.textContent = color;
  document.body.style.backgroundColor = color;
});