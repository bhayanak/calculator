// mascot.js: Animated Lottie mascot manager

// List of available Lottie animation files
// Add more animation JSON files to this array as you download them
const mascotAnimations = [
    // Add more animations here as you download them:
  { name: 'pigeon', file: 'pigeon.json', speed: 1 },
  { name: 'cat', file: 'dogWait.json', speed: 1.2 },
  { name: 'dog', file: 'dog.json', speed: 0.8 },
  { name: 'cat', file: 'flirtyDog.json', speed: 1.2 },
  { name: 'robot', file: 'happyDog.json', speed: 1.5 },
  { name: 'unicorn', file: 'kickBear.json', speed: 1 },
  { name: 'dragon', file: 'meditatingGiraffe.json', speed: 1.3 },
  { name: 'dragon', file: 'tiger.json', speed: 1.3 },
  { name: 'dragon', file: 'wavingBear.json', speed: 1.2 },
];

let currentMascotIndex = 0;
let mascotPlayer = null;

// Initialize mascot system
function initMascotSystem() {
  mascotPlayer = document.getElementById('mascot-animation');
  
  if (!mascotPlayer) {
    console.warn('Mascot player not found');
    return;
  }

  // Click to change animation randomly
  mascotPlayer.addEventListener('click', () => {
    changeMascotRandom();
    if (window.playSound && typeof window.playSound === 'function') {
      window.playSound('click');
    }
  });

  // Hover to speed up
  mascotPlayer.addEventListener('mouseenter', () => {
    mascotPlayer.setSpeed(2);
  });

  mascotPlayer.addEventListener('mouseleave', () => {
    const currentAnim = mascotAnimations[currentMascotIndex];
    mascotPlayer.setSpeed(currentAnim.speed);
  });

  console.log('Mascot system initialized with', mascotAnimations.length, 'animations');
}

// Change to random mascot animation
function changeMascotRandom() {
  if (!mascotPlayer || mascotAnimations.length === 0) return;

  // Pick a different random animation
  let newIndex;
  if (mascotAnimations.length === 1) {
    newIndex = 0;
  } else {
    do {
      newIndex = Math.floor(Math.random() * mascotAnimations.length);
    } while (newIndex === currentMascotIndex);
  }

  currentMascotIndex = newIndex;
  const anim = mascotAnimations[currentMascotIndex];
  
  mascotPlayer.load(anim.file);
  mascotPlayer.setSpeed(anim.speed);
  mascotPlayer.play();
  
  console.log('Switched to mascot:', anim.name);
}

// Change to specific mascot by index
function changeMascot(index) {
  if (!mascotPlayer || index < 0 || index >= mascotAnimations.length) return;
  
  currentMascotIndex = index;
  const anim = mascotAnimations[currentMascotIndex];
  
  mascotPlayer.load(anim.file);
  mascotPlayer.setSpeed(anim.speed);
  mascotPlayer.play();
}

// Trigger mascot celebration (speed up temporarily)
function celebrateMascot() {
  if (!mascotPlayer) return;
  
  mascotPlayer.setSpeed(3);
  setTimeout(() => {
    const currentAnim = mascotAnimations[currentMascotIndex];
    mascotPlayer.setSpeed(currentAnim.speed);
  }, 2000);
}

// Export functions globally
window.initMascotSystem = initMascotSystem;
window.changeMascotRandom = changeMascotRandom;
window.changeMascot = changeMascot;
window.celebrateMascot = celebrateMascot;
window.mascotAnimations = mascotAnimations;

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMascotSystem);
} else {
  initMascotSystem();
}
