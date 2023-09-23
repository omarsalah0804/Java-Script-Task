// ---------
// Variables
// ---------

const nav = document.querySelector(".nav");
const navActiveIndicator = document.querySelector(".nav__active-indicator");
const buttons = document.querySelectorAll("a");
let activeButton = document.querySelector(".active");

// ---
// App
// ---

setIndexKey(buttons);

buttons.forEach(button => {
  button.addEventListener("click", buttonClick);
});

// ---------
// Functions
// ---------

function setIndexKey(arrayOfElements) {
  arrayOfElements.forEach((element, index) => {
    element.index = index;
  });
}

function buttonClick() {
  // Position the text so that it appears to not move with the button width growth
  if (this.index > activeButton.index) {
    nav.classList.remove("slide-right");
    nav.classList.add("slide-left");
  } else {
    nav.classList.remove("slide-left");
    nav.classList.add("slide-right");
  }

  // Animate the active indicator position
  const iconWidth = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--icon-width")
  );
  const spaceBetweenIcons = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--space-between-icons"
    )
  );
  navActiveIndicator.style.transform = `translateX(${(iconWidth +
    spaceBetweenIcons) *
    this.index}px) translateY(-50%)`;

  // Update the active button
  if (activeButton) activeButton.classList.remove("active");
  this.classList.add("active");
  activeButton = this;
}



const divs = document.querySelectorAll('.tasks');
const labels = document.querySelectorAll('.label');
const icons = document.querySelectorAll('.icon1');

for (let i = 0; i < labels.length; i++) {
  labels[i].addEventListener('click', function() {
    divs[i].classList.toggle('active1');

    if (divs[i].classList.contains('active1')) 
      icons[i].textContent = '▲';
     else 
      icons[i].textContent = '▼';
  });
}
