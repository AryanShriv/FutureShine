// Animated nomination counter
let count = 0;
const target = 12; // Replace with actual nomination number
const speed = 150;
const el = document.getElementById("nomination-count");

function updateCounter() {
  if (count < target) {
    count++;
    el.innerText = count;
    setTimeout(updateCounter, speed);
  }
}
updateCounter();

// Smooth scroll function
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
