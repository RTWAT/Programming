const linesContainer = document.querySelector('.lines');

// Generate a random number between min and max
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

// Create 20 lines with random positions and delays
for (let i = 0; i < 20; i++) {
  const line = document.createElement('div');
  line.classList.add('line');

  // Random horizontal position
  line.style.left = `${getRandom(0, 100)}%`;

  // Random delay for each line animation
  line.style.setProperty('--animation-delay', `${getRandom(0, 10)}s`);
  line.querySelector('::after').style.animationDelay = `${getRandom(0, 10)}s`;

  linesContainer.appendChild(line);
}
