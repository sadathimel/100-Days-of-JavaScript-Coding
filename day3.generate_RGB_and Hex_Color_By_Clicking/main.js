
/**
 * Project Requirements:
 * 1. Click the button
 * 2. Change the background color by generating random rgb color
 */
let container = document.querySelector(".container");
let changeBtn = document.getElementById("changeBtn");
let changeBtnHex = document.getElementById("changeBtnHex");
let copyBtn = document.getElementById("copyBtn");
let colorCode = document.getElementById("colorCode");
window.onload = () => {
  main();
};

function main() {
  changeBtn.addEventListener("click", () => {
    container.style.backgroundColor = generateRGBColor();
    changeBtn.style.color = generateRGBColor();
    colorCode.value = generateRGBColor();
  });
  changeBtnHex.addEventListener("click", ()=>{
    container.style.backgroundColor = generateHexColor();
    changeBtnHex.style.color = generateHexColor();
    colorCode.value = generateHexColor();
  })
  copyBtn.addEventListener("click", () => {
    myFunction();
  });
}

function generateRGBColor() {
  const R = Math.floor(Math.random() * 255);
  const G = Math.floor(Math.random() * 255);
  const B = Math.floor(Math.random() * 255);
  return `rgb(${R}, ${G}, ${B})`;
}

function generateHexColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return `#${hex}`;
}

function myFunction() {
  navigator.clipboard.writeText(colorCode.value);
  alert("Copied the text: " + colorCode.value);
}
