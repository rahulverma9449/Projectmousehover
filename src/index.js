import "./styles.css";
// document.addEventListener("DOMContentLoaded", function () {

const box = document.getElementById("box");
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
const boxWidth = box.clientWidth;
const boxHeight = box.clientHeight;
// Function to set a random position for the box
function setRandomPosition() {
  // Calculate the maximum possible positions to ensure the box stays inside the viewport
  const maxX = viewportWidth - boxWidth;
  const maxY = viewportHeight - boxHeight;

  // Generate random positions for the box
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Set the new position for the box
  box.style.left = randomX + "px";
  box.style.top = randomY + "px";
}

// Set the initial random position for the box
// setRandomPosition();

// Update the box size when the viewport size changes
// window.addEventListener("resize", function () {
//   const viewportWidth = window.innerWidth;
//   const viewportHeight = window.innerHeight;
//   box.style.width = viewportWidth * 0.2 + "px";
//   box.style.height = viewportHeight * 0.2 + "px";
//   setRandomPosition(); // Update position when resizing
// });

// Update the box position when the mouse hovers over it
box.addEventListener("mouseover", setRandomPosition);
