// theme.js: Theme switching logic with fun animations

const themes = ['light', 'dark', 'rainbow'];

function setTheme(theme) {
  document.body.classList.remove(...themes.map(t => 'theme-' + t));
  document.body.classList.add('theme-' + theme);
  localStorage.setItem('calc-theme', theme);

  // Add fun sparkle effect when changing themes
  createSparkles(window.innerWidth / 2, window.innerHeight / 2, 15);
}

function initThemeSwitcher() {
  const saved = localStorage.getItem('calc-theme') || 'light';
  setTheme(saved);
  // Button listeners are attached in ui.js via dropdown-item class
}

// 🎨 Create animated floating bubbles
function createBubbles() {
  const bubbleCount = 15;
  const colors = ['#ff6ec4', '#7873f5', '#ffd93d', '#64ffda', '#f093fb', '#a8edea', '#fed6e3', '#f6d365', '#fda085'];

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.random() * 100 + 50;
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    const color = colors[Math.floor(Math.random() * colors.length)];

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${startX}px`;
    bubble.style.top = `${startY}px`;
    bubble.style.background = color;
    bubble.style.animationDuration = `${Math.random() * 4 + 4}s`;
    bubble.style.animationDelay = `${Math.random() * 2}s`;

    document.body.appendChild(bubble);
  }
}

// ⭐ Create sparkle effects on click
function createSparkles(x, y, count = 8) {
  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    const angle = (Math.PI * 2 * i) / count;
    const distance = Math.random() * 50 + 30;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;

    sparkle.style.setProperty('--tx', `${tx}px`);
    sparkle.style.setProperty('--ty', `${ty}px`);

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1000);
  }
}

// Add sparkle effect to all buttons
document.addEventListener('DOMContentLoaded', function () {
  createBubbles();

  // Add sparkles to all button clicks
  document.body.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
      createSparkles(e.clientX, e.clientY, 6);
    }
  });
});

window.setTheme = setTheme;
window.initThemeSwitcher = initThemeSwitcher;
window.createSparkles = createSparkles;

