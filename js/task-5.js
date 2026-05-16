function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const myButton = document.querySelector('.change-color');
const myColor = document.querySelector('span.color')
const myBody = document.querySelector('body');

myButton.addEventListener('click', onMyButtonClick)

function onMyButtonClick() {
  myColor.textContent = getRandomHexColor()
  myBody.style.backgroundColor = myColor.textContent;
}