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
