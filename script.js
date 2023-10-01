// script.js

// Get a reference to the mobile button
const mobileButton = document.querySelector('.add__new__btn__mobile');

// Check the screen width and hide the mobile button on larger screens
function checkScreenWidth() {
  if (window.innerWidth > 768) {
    mobileButton.style.display = 'none';
  } else {
    mobileButton.style.display = 'block';
  }
}

// Initial check when the page loads
checkScreenWidth();

// Listen for window resize events to adjust the button visibility
window.addEventListener('resize', checkScreenWidth);
