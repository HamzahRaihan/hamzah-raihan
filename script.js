// * Particles JS Library
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 }, image: { src: 'img/github.svg', width: 100, height: 100 } },
    opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
    size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
    line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
    move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } },
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: false, mode: 'push' }, resize: true },
    modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } },
  },
  retina_detect: true,
});

// * Typing Animation
const dynamicText = document.querySelector('h2 span');
const wordArray = ['Front-End Developer', 'Back-End Developer', 'UI Designer'];

// variables to track position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleteing = false;

const typeEffect = () => {
  const currentWord = wordArray[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add('stop-blinkinng');

  if (!isDeleteing && charIndex < currentWord.length) {
    // if true, type the next word
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleteing && charIndex > 0) {
    // if condition is true, remove the previous word
    charIndex--;
    setTimeout(typeEffect, 20);
  } else {
    // word is deleted, switch to the next word
    isDeleteing = !isDeleteing;
    dynamicText.classList.remove('stop-blinking');
    wordIndex = !isDeleteing ? (wordIndex + 1) % wordArray.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
};

typeEffect();

// * Navbar Animation
const navbar = document.querySelector('.navbar');
let previousScrollPosition = window.scrollY;

function hideNavbar() {
  navbar.classList.add('hide');
  navbar.classList.remove('show');
}
function showNavbar() {
  navbar.classList.remove('show');
  navbar.classList.remove('hide');
}
function showNavbarBlur() {
  navbar.classList.add('show');
  navbar.classList.remove('hide');
}

window.addEventListener('scroll', () => {
  let currentScrollPosition = window.scrollY;
  if (currentScrollPosition == 0) {
    showNavbar();
  } else if (previousScrollPosition < currentScrollPosition) {
    hideNavbar();
  } else {
    showNavbarBlur();
  }
  previousScrollPosition = currentScrollPosition;
});
