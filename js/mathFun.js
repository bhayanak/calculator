// mathFun.js: Math Fun instructions and logic

// 🔊 Sound Effects
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSound(type) {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  const now = audioCtx.currentTime;

  if (type === 'click') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.1);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    osc.start(now);
    osc.stop(now + 0.1);
  } else if (type === 'success') {
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.setValueAtTime(600, now + 0.1);
    osc.frequency.setValueAtTime(1000, now + 0.2);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.linearRampToValueAtTime(0, now + 0.4);
    osc.start(now);
    osc.stop(now + 0.4);
  } else if (type === 'clear') {
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.linearRampToValueAtTime(100, now + 0.2);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.linearRampToValueAtTime(0, now + 0.2);
    osc.start(now);
    osc.stop(now + 0.2);
  }
}

// 📜 History Management
function addToHistory(expr, result) {
  let history = JSON.parse(localStorage.getItem('calc-history') || '[]');
  history.unshift({ expr, result, time: Date.now() });
  if (history.length > 10) history.pop();
  localStorage.setItem('calc-history', JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  const historyPanel = document.getElementById('history-list');
  if (!historyPanel) return;

  const history = JSON.parse(localStorage.getItem('calc-history') || '[]');
  historyPanel.innerHTML = history.length ? '' : '<div class="no-history">No calculations yet</div>';

  history.forEach(item => {
    const div = document.createElement('div');
    div.className = 'history-item';
    div.innerHTML = `<span class="hist-expr">${item.expr}</span> = <span class="hist-res">${item.result}</span>`;
    div.onclick = () => {
      // Dispatch event to load expression
      window.dispatchEvent(new CustomEvent('loadExample', { detail: item.result.toString() }));
      playSound('click');
    };
    historyPanel.appendChild(div);
  });
}

// 🎉 Confetti Effect
function fireConfetti() {
  const colors = ['#ff6ec4', '#7873f5', '#ffd93d', '#64ffda', '#f093fb'];
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = '50%';
    confetti.style.top = '50%';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(confetti);

    // Animate
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 100 + 50;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity;

    const animation = confetti.animate([
      { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
      { transform: `translate(${tx}px, ${ty}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
    ], {
      duration: 1000,
      easing: 'cubic-bezier(0, .9, .57, 1)',
      fill: 'forwards'
    });

    animation.onfinish = () => confetti.remove();
  }
}

// Export for global use
window.playSound = playSound;
window.addToHistory = addToHistory;
window.renderHistory = renderHistory;
window.fireConfetti = fireConfetti;

// Did You Know Facts
const dykFacts = [
  "Zero is the only number that can't be represented in Roman numerals! 🏛️",
  "A 'jiffy' is an actual unit of time: 1/100th of a second! ⏱️",
  "The opposite sides of a die always add up to seven! 🎲",
  "111,111,111 × 111,111,111 = 12,345,678,987,654,321 - Perfect palindrome! 🔢",
  "If you shuffle a deck of cards, you've almost certainly created an order that has never existed before! 🃏",
  "The symbol for division (÷) is called an obelus! ➗",
  "Forty is the only number spelled with letters in alphabetical order! 🔤",
  "The word 'hundred' comes from 'hundrath' meaning 120, not 100! 💯",
  "In a room of 23 people, there's a 50% chance two share a birthday! 🎂",
  "The equals sign (=) was invented in 1557! ✏️",
  "Pi has been calculated to over 50 trillion digits! 🥧",
  "A googol is 1 followed by 100 zeros, but a googolplex is 1 followed by a googol zeros! 🌌",
  "The sum of all numbers from 1 to 100 is 5,050! ➕",
  "Mathematicians use the symbol ∞ for infinity, invented in 1655! ♾️",
  "There are more possible ways to arrange a deck of cards than atoms on Earth! 🌍",
  "The number 4 is the only number with the same number of letters as its value! 4️⃣",
  "Every odd number has an 'e' in it when written in English! 🔠",
  "A 'score' is 20 years (like in 'Four score and seven years ago')! 📜",
  "The ancient Babylonians did math in base-60, which is why we have 60 seconds and 60 minutes! ⏰",
  "The smallest perfect number is 6 (1+2+3=6 and 1×2×3=6)! 🌟",
  "The number 2520 is divisible by all numbers from 1 to 10! 🎯",
  "The Golden Ratio (1.618...) appears in nature: sunflowers, shells, galaxies! 🌻",
  "Hexagons are the most efficient shape for storing things (like honeycombs)! 🐝",
  "A 'baker's dozen' is 13 because bakers used to add an extra to avoid penalties! 🥖",
  "The number 9 is considered lucky in many Asian cultures! 🍀",
  "Shakespeare mentioned the number 7 exactly 700 times in his works! 📖",
  "The number 8 turned on its side (∞) represents infinity! ♾️",
  "Ancient Egyptians used fractions, but only unit fractions (1/2, 1/3, 1/4, etc.)! 🏺",
  "The Fibonacci sequence appears in pinecones, pineapples, and flower petals! 🌸",
  "Multiplying 21978 by 4 gives you 87912 - exactly reversed! 🔄",
  "The number 1 is neither prime nor composite - it's special! ⭐",
  "A 'gross' is 144 (12 dozen) and a 'great gross' is 1,728! 📦",
  "The @ symbol is called an 'amphora' in Greek! 📧",
  "Ancient Romans had no symbol for zero until they met Arab mathematicians! 0️⃣",
  "The number 13 is considered unlucky in some cultures but lucky in others! 🎲",
  "The word 'mathematics' comes from the Greek word 'mathema' meaning 'knowledge'! 📚",
  "Aardvark is the first word in most English dictionaries, and it has three A's! 🐜",
  "The number 142857 is called a 'cyclic number' - multiply it by 1-6 and see the magic! ✨",
  "A 'myriad' originally meant exactly 10,000! 🔟",
  "The percentage symbol % evolved from writing '0/0'! 💯",
  "The word 'algebra' comes from Arabic 'al-jabr' meaning 'reunion of broken parts'! 🧮",
  "Pi Day is March 14 (3/14) and Einstein was born on Pi Day! 🎂",
  "The number 1,729 is called the Hardy-Ramanujan number - it's magical! 🎩",
  "The probability of two people having the same birthday in a group of 367 is 100%! 🎉",
  "The number 0.999... (repeating forever) actually equals 1! 🤯",
  "The word 'calculation' comes from the Latin 'calculus' meaning 'small stone' (used for counting)! 🪨"
];

function getRandomFact() {
  return dykFacts[Math.floor(Math.random() * dykFacts.length)];
}

// Challenge Questions
const challenges = [
  { question: "What is 7 × 8?", answer: 56 },
  { question: "What is 15 + 27?", answer: 42 },
  { question: "What is 100 - 37?", answer: 63 },
  { question: "What is 12 × 12?", answer: 144 },
  { question: "What is 81 ÷ 9?", answer: 9 },
  { question: "What is 6 × 9?", answer: 54 },
  { question: "What is 25 × 4?", answer: 100 },
  { question: "What is 144 ÷ 12?", answer: 12 },
  { question: "What is 50 + 75?", answer: 125 },
  { question: "What is 200 - 88?", answer: 112 }
];

let currentChallenge = null;

function getRandomChallenge() {
  return challenges[Math.floor(Math.random() * challenges.length)];
}

function showChallenge() {
  currentChallenge = getRandomChallenge();
  const panel = document.getElementById('challenge-panel');
  const question = document.getElementById('challenge-question');
  const result = document.getElementById('challenge-result');
  const input = document.getElementById('challenge-answer');

  if (panel && question) {
    panel.style.display = '';
    question.textContent = currentChallenge.question;
    result.textContent = '';
    input.value = '';
    input.focus();
  }
}

function checkChallenge() {
  const input = document.getElementById('challenge-answer');
  const result = document.getElementById('challenge-result');

  if (!currentChallenge) return;

  const userAnswer = parseFloat(input.value);

  if (userAnswer === currentChallenge.answer) {
    result.textContent = '🎉 Correct! You\'re a math star!';
    result.style.background = 'rgba(17, 153, 142, 0.3)';
    result.style.color = '#fff';
    if (window.playSound) window.playSound('success');
    if (window.fireConfetti) window.fireConfetti();
    if (window.updateMascot) window.updateMascot('success');
    if (window.celebrateMascot) window.celebrateMascot();
    // Change to new mascot after celebration
    setTimeout(() => {
      if (window.changeMascotRandom) window.changeMascotRandom();
      showChallenge();
    }, 2000);
  } else {
    result.textContent = '❌ Not quite! Try again!';
    result.style.background = 'rgba(255, 87, 87, 0.3)';
    result.style.color = '#fff';
    if (window.playSound) window.playSound('click');
    if (window.updateMascot) window.updateMascot('error');
  }
}

// Initialize Did You Know and Challenge
document.addEventListener('DOMContentLoaded', () => {
  // Did You Know
  const dykFact = document.getElementById('dyk-fact');
  const newFactBtn = document.getElementById('new-fact');

  if (dykFact && newFactBtn) {
    dykFact.textContent = getRandomFact();
    newFactBtn.onclick = () => {
      dykFact.textContent = getRandomFact();
      if (window.playSound) window.playSound('click');
      // Change mascot when getting new fact
      if (window.changeMascotRandom && typeof window.changeMascotRandom === 'function') {
        window.changeMascotRandom();
      }
    };
  }

  // Challenge Mode
  const checkBtn = document.getElementById('check-answer');
  const skipBtn = document.getElementById('skip-challenge');
  const challengeInput = document.getElementById('challenge-answer');

  if (checkBtn) checkBtn.onclick = checkChallenge;
  if (skipBtn) skipBtn.onclick = showChallenge;
  if (challengeInput) {
    challengeInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') checkChallenge();
    });
  }

  // Auto-show first challenge after 5 seconds
  setTimeout(() => showChallenge(), 5000);
});

window.getRandomFact = getRandomFact;
window.showChallenge = showChallenge;

const mathFunList = [
  {
    title: 'Seven',
    instruction: 'Try dividing 1, 2, or 3 by 7 (e.g., 1/7, 2/7, 3/7).\nYou will see the same digits "142857" repeat in the decimal part, just starting at a different spot each time!\nFor example: 1/7 = 0.142857142857..., 2/7 = 0.285714285714...\nIt’s a fun repeating pattern.',
    example: '1/7',
  },
  {
    title: 'Magic 9',
    instruction: 'Multiply any number by 9, then add the digits of the answer.\nNo matter what number you start with, the digits will always add up to 9!\nFor example: 23 × 9 = 207, 2+0+7=9. Try with 23 × 9.',
    example: '23×9',
  },
  {
    title: 'Palindrome Play',
    instruction: 'Pick a number, reverse its digits, and add it to the original.\nRepeat this process until you get a palindrome (a number that reads the same forwards and backwards).\nTry with 56: 56 + 65 = 121.',
    example: '56+65',
  },
  {
    title: 'Square Surprise',
    instruction: 'Try squaring numbers ending in 5.\nThe trick: Take the first digit(s) n, multiply by n+1, then put 25 at the end.\nFor 25×25: 2×3=6, so answer is 625.',
    example: '25×25',
  },
  {
    title: 'Eleven Trick',
    instruction: 'Multiply 11 by numbers like 11, 111, 1111...\nYou’ll see a neat pattern: 11×11=121, 11×111=1221, 11×1111=12221, and so on!\nTry 11×111.',
    example: '11×111',
  },
  {
    title: 'Nines Squared',
    instruction: 'Try 1 divided by 81 (1/81).\nYou get 0.012345679... Notice the digits go up in order, but 8 is missing!\nTry 1/9801 for an even longer pattern.',
    example: '1/81',
  },
  {
    title: 'Eighty Nine',
    instruction: 'Type 1 divided by 89 (1/89).\nThe decimal part starts 0.011235... which is the Fibonacci sequence!\nSee how the digits follow the pattern?',
    example: '1/89',
  },
  {
    title: 'Ends With Seven Magic',
    instruction: 'Type any 3-digit number twice (e.g., 638638).\nDivide by 11, then by 13, then by your original number.\nYou always get 7! Try with 638638.',
    example: '638638/11/13/638',
  },
  {
    title: 'Ends With Seventy Three Magic',
    instruction: 'Type any 4-digit number twice (e.g., 63856385).\nDivide by 137, then by your original number.\nYou always get 73! Try with 63856385.',
    example: '63856385/137/6385',
  },
  {
    title: 'Guess the Number',
    instruction: 'Ask a friend to pick a number 1-9 and multiply by 12345679.\nTake their answer and multiply by 9.\nThe result will be all the same digit as their original number! Try with 7.',
    example: '7×12345679×9',
  },
  {
    title: 'Guess The Numbers',
    instruction: 'A friend picks two numbers 1-9.\nMultiply the first by 5, add 7, double it, add the second number.\nSubtract 14 from the result: the answer is their two numbers side by side! Try 4 and 9.',
    example: '(((4×5)+7)×2)+9-14',
  },
  {
    title: 'Calculator Words',
    instruction: 'Do a calculation, then turn the calculator upside down to read a word!\nFor example, 101×8=808 (BOB), 1−0.2266=0.7734 (HELLO).\nTry 1−0.2266 and flip the display!',
    example: '1-0.2266',
  },
  {
    title: 'Seven Again',
    instruction: 'Try 1 divided by 49 (1/49).\nYou get 0.0204081632... Notice how every two digits double each time: 2, 4, 8, 16, 32, 64!\nIt’s a doubling pattern in the decimals.',
    example: '1/49',
  },
  {
    title: 'Digital Root',
    instruction: 'Add the digits of any number repeatedly until you get a single digit.\nThis is called the digital root. Try with 9876: 9+8+7+6=30, 3+0=3.',
    example: '9+8+7+6',
  },
  {
    title: 'Multiplying by 11',
    instruction: 'To multiply a two-digit number by 11, add the digits and put the sum in between.\nFor 23×11: 2+3=5, so answer is 253.',
    example: '23×11',
  },
  {
    title: 'All the Same',
    instruction: 'Multiply any number by 37, then by 3.\nThe answer will be a number with all the same digits! Try 123×37×3=13653.',
    example: '123×37×3'
  },
  {
    title: 'Digital Root',
    instruction: 'Add the digits of any number repeatedly until you get a single digit. Try with 9876!',
    example: '9+8+7+6',
  },
  {
    title: 'Multiplying by 11',
    instruction: 'To multiply a two-digit number by 11, add the digits and put the sum in between. Try 23 × 11!',
    example: '23×11',
  },
  {
    title: 'All the Same',
    instruction: 'Multiply any number by 37, then by 3. Try 123 × 37 × 3!',
    example: '123×37×3',
  },
  {
    title: 'Divisibility by 3',
    instruction: 'If the sum of a number’s digits is divisible by 3, so is the number! Try 12345.',
    example: '1+2+3+4+5',
  },
  {
    title: 'Multiplying by 5',
    instruction: 'To multiply by 5, multiply by 10 and halve it. Try 24 × 5!',
    example: '24×5',
  },
  {
    title: 'Kaprekar’s Constant',
    instruction: 'Pick any 4-digit number (not all digits the same), subtract the smallest arrangement from the largest, repeat. You’ll get multiple of 3087!',
    example: '4321-1234',
  },
  {
    title: 'Multiplying by 15',
    instruction: 'To multiply by 15, multiply by 10 and add half again. Try 14 × 15!\nStep 1: 14 × 10 = 140\nStep 2: Half of 140 is 70\nStep 3: 140 + 70 = 210',
    example: '14×15',
  },
  {
    title: 'Birthday Math',
    instruction: 'Ask a friend to multiply their birth month by 2, add 5, multiply by 50, add their birth day, then subtract 250.\nThe answer will be their birth month and day together!\nFor example: If birthday is March 14: 3×2=6, 6+5=11, 11×50=550, 550+14=564, 564-250=314 (March 14).',
    example: '3×2+5×50+14-250',
  },
  {
    title: 'Handy 9s Trick',
    instruction: 'Hold out 10 fingers. To multiply 9 × n, fold down the nth finger.\nThe number of fingers left of the fold is tens, right is ones!\nFor example: 9 × 7, fold down the 7th finger: 6 fingers left, 3 right, so 63.',
    example: '9×7',
  },
  {
    title: 'Make 100!',
    instruction: 'Can you use four 9s and any math operations to make 100?\nTry: 99 + (9/9) = 100.\nChallenge: Try with four 4s!',
    example: '99+9/9',
  },
  {
    title: 'The Answer is Always 5',
    instruction: 'Pick any number. Multiply by 2, add 10, divide by 2, subtract your original number.\nThe answer is always 5!\nTry with 8: 8×2=16, 16+10=26, 26/2=13, 13-8=5.',
    example: '8×2+10÷2−8',
  },
  {
    title: 'Reverse and Add',
    instruction: 'Pick a two-digit number, reverse it, and add.\nMost of the time, you get a palindrome!\nTry: 34 + 43 = 77.',
    example: '34+43',
  },
  {
    title: 'Multiplying by 25',
    instruction: 'To multiply by 25, multiply by 100 and divide by 4.\nFor example: 36 × 25 = (36 × 100) ÷ 4 = 3600 ÷ 4 = 900.',
    example: '36×25',
  },
  {
    title: 'Guess the Age',
    instruction: 'Ask a friend to multiply their age by 2, add 5, multiply by 50, add 1769, subtract their birth year.\nThe answer ends with their age!\nTry with age 12, born in 2013: 12×2=24, 24+5=29, 29×50=1450, 1450+1769=3219, 3219-2013=1206.',
    example: '12×2+5×50+1769-2013',
  },
  {
    title: 'Magic Square Puzzle',
    instruction: 'Arrange the numbers 1 to 9 in a 3×3 grid so every row, column, and diagonal adds up to 15.\nCan you find the solution?\n(Hint: Center is 5!)',
    example: '',
  },
  {
    title: 'Triangle Numbers',
    instruction: 'The sum of the first N numbers is N(N+1)/2.\nFor example, for N=10: 10×11=110, 110÷2=55.\nTry for N=10!',
    example: '10×11÷2',
  },
  {
    title: 'Multiplying by 13',
    instruction: 'To multiply by 13, multiply by 10, then add triple the number.\nFor example: 7×10=70, 7×3=21, 70+21=91, so 7×13=91.',
    example: '7×13',
  },
  {
    title: 'Multiplying by 8',
    instruction: 'To multiply by 8, double the number three times.\nFor example: 6×2=12, 12×2=24, 24×2=48, so 6×8=48.\nTry 6 × 8 and follow the doubling steps!',
    example: '6×8',
  },
  {
    title: 'Multiplying by 7',
    instruction: 'To multiply by 7, multiply by 5, then add double the number.\nFor example: 9×5=45, 9×2=18, 45+18=63, so 9×7=63.\nTry 9 × 7 using this method!',
    example: '9×7',
  },
  {
    title: 'Multiplying by 12',
    instruction: 'Multiply by 10, then add double the number.\nFor example: 8×10=80, 8×2=16, 80+16=96, so 8×12=96.',
    example: '8×12',
  },
  {
    title: 'Multiplying by 4',
    instruction: 'Double the number twice!\nFor example: 13×2=26, 26×2=52, so 13×4=52.',
    example: '13×4',
  },
  {
    title: 'Multiplying by 99',
    instruction: 'To multiply by 99, multiply by 100 and subtract the number.\nFor example: 47×100=4700, 4700-47=4653, so 47×99=4653.',
    example: '47×99',
  },
  {
    title: 'Sum of Odd Numbers',
    instruction: 'The sum of the first N odd numbers is N².\nFor N=5: 1+3+5+7+9=25=5².',
    example: '1+3+5+7+9',
  },
  {
    title: 'Multiplying by 6',
    instruction: 'To multiply by 6, first multiply by 3, then double the result.\nFor example: 7×3=21, 21×2=42, so 7×6=42.\nTry 7 × 6 using this trick!',
    example: '7×6',
  },
  {
    title: 'Multiplying by 14',
    instruction: 'Double, then multiply by 7.\nFor example: 6×2=12, 12×7=84, so 6×14=84.',
    example: '6×14',
  },
  {
    title: 'Multiplying by 16',
    instruction: 'Double four times!\nFor example: 3×2=6, 6×2=12, 12×2=24, 24×2=48, so 3×16=48.',
    example: '3×16',
  },
  {
    title: 'Multiplying by 17',
    instruction: 'Multiply by 10, add seven times the number.\nFor example: 4×10=40, 4×7=28, 40+28=68, so 4×17=68.',
    example: '4×17',
  },
  {
    title: 'Multiplying by 18',
    instruction: 'Double, then multiply by 9.\nFor example: 5×2=10, 10×9=90, so 5×18=90.',
    example: '5×18',
  },
  {
    title: 'Multiplying by 19',
    instruction: 'Multiply by 20, subtract the number.\nFor example: 6×20=120, 120-6=114, so 6×19=114.',
    example: '6×19',
  },
  {
    title: 'Multiplying by 21',
    instruction: 'Multiply by 20, add the number.\nFor example: 7×20=140, 140+7=147, so 7×21=147.',
    example: '7×21',
  },
  {
    title: 'Multiplying by 50',
    instruction: 'Multiply by 100, halve it.\nFor example: 18×100=1800, 1800÷2=900, so 18×50=900.',
    example: '18×50',
  },
  {
    title: 'Quick Square',
    instruction: 'To square a number ending in 5: Take the first digit(s) n, multiply by n+1, then put 25 at the end.\nFor example: 25×25: 2×3=6, so answer is 625.',
    example: '25×25',
  },
  {
    title: 'Calculator Words',
    instruction: 'Do a calculation, then turn the calculator upside down to read a word!\nFor example, 101×8=808 (BOB), 1−0.2266=0.7734 (HELLO).\nTry 1−0.2266 and flip the display!',
    example: '1-0.2266',
  },
  {
    title: 'Number Riddle',
    instruction: 'I am a two-digit number. My digits add up to 9. If you reverse my digits, I am 27 more than the original. What number am I?\n(Try to solve it!)',
    example: '',
  },
  {
    title: 'Pattern Play',
    instruction: 'Type 12345679 × 9 = 111111111.\nNow try 12345679 × 18 = 222222222!\nWhat happens if you multiply by 27, 36, ...?',
    example: '12345679×9',
  },
  {
    title: 'Fibonacci Surprise',
    instruction: 'Type 1 divided by 89 (1/89).\nThe decimal part starts 0.011235... which is the Fibonacci sequence!\nSee how the digits follow the pattern?',
    example: '1/89',
  },
  {
    title: 'Palindrome Play',
    instruction: 'Pick a number, reverse its digits, and add it to the original.\nRepeat this process until you get a palindrome (a number that reads the same forwards and backwards).\nTry with 56: 56 + 65 = 121.',
    example: '56+65',
  },
  {
    title: 'Digital Root',
    instruction: 'Add the digits of any number repeatedly until you get a single digit.\nThis is called the digital root. Try with 9876: 9+8+7+6=30, 3+0=3.',
    example: '9+8+7+6',
  },
  {
    title: 'Finger Trick for 9s',
    instruction: 'Hold out 10 fingers. To multiply 9 × n, fold down the nth finger. The number of fingers left of the fold is tens, right is ones!',
    example: '9×7',
  },
  {
    title: 'Multiplying by 25',
    instruction: 'To multiply by 25, multiply by 100 and divide by 4. Try 36 × 25!',
    example: '36×25',
  },
  {
    title: 'Sum of First N Numbers',
    instruction: 'The sum of the first N numbers is N(N+1)/2. Try for N=10!',
    example: '10×11÷2',
  },
  {
    title: 'Multiplying by 99',
    instruction: 'To multiply by 99, multiply by 100 and subtract the number. Try 47 × 99!',
    example: '47×99',
  },
  {
    title: 'Squaring Numbers Near 50',
    instruction: 'To square a number near 50, use (50+x)² = 2500 + 100x + x². Try 53²!',
    example: '53×53',
  },
  {
    title: 'Multiplying by 4',
    instruction: 'Double the number twice! Try 13 × 4.',
    example: '13×4',
  },
  {
    title: 'Sum of Odd Numbers',
    instruction: 'The sum of the first N odd numbers is N². Try for N=5!',
    example: '1+3+5+7+9',
  },
  {
    title: 'Multiplying by 12',
    instruction: 'Multiply by 10, then add double the number. Try 8 × 12!',
    example: '8×12',
  },
  {
    title: 'Multiplying by 6',
    instruction: 'To multiply by 6, first multiply by 3, then double the result.\nFor example: 7×3=21, then 21×2=42, so 7×6=42.\nTry 7 × 6 using this trick!',
    example: '7×6',
  },
  {
    title: 'Multiplying by 8',
    instruction: 'To multiply by 8, double the number three times.\nFor example: 6×2=12, 12×2=24, 24×2=48, so 6×8=48.\nTry 6 × 8 and follow the doubling steps!',
    example: '6×8',
  },
  {
    title: 'Multiplying by 7',
    instruction: 'To multiply by 7, multiply by 5, then add double the number.\nFor example: 9×5=45, 9×2=18, 45+18=63, so 9×7=63.\nTry 9 × 7 using this method!',
    example: '9×7',
  },
  {
    title: 'Multiplying by 13',
    instruction: 'To multiply by 13, multiply by 10, then add triple the number.\nFor example: 7×10=70, 7×3=21, 70+21=91, so 7×13=91.\nTry 7 × 13 using this trick!',
    example: '7×13',
  },
  {
    title: 'Multiplying by 14',
    instruction: 'Double, then multiply by 7. Try 6 × 14!',
    example: '6×14',
  },
  {
    title: 'Multiplying by 15',
    instruction: 'Multiply by 10, add half again. Try 8 × 15!',
    example: '8×15',
  },
  {
    title: 'Multiplying by 16',
    instruction: 'Double four times! Try 3 × 16.',
    example: '3×16',
  },
  {
    title: 'Multiplying by 17',
    instruction: 'Multiply by 10, add seven times the number. Try 4 × 17!',
    example: '4×17',
  },
  {
    title: 'Multiplying by 18',
    instruction: 'Double, then multiply by 9. Try 5 × 18!',
    example: '5×18',
  },
  {
    title: 'Multiplying by 19',
    instruction: 'Multiply by 20, subtract the number. Try 6 × 19!',
    example: '6×19',
  },
  {
    title: 'Multiplying by 21',
    instruction: 'Multiply by 20, add the number. Try 7 × 21!',
    example: '7×21',
  },
  {
    title: 'Multiplying by 25',
    instruction: 'Multiply by 100, divide by 4. Try 12 × 25!',
    example: '12×25',
  },
  {
    title: 'Multiplying by 50',
    instruction: 'Multiply by 100, halve it. Try 18 × 50!',
    example: '18×50',
  },
  {
    title: 'Multiplying by 99',
    instruction: 'Multiply by 100, subtract the number. Try 23 × 99!',
    example: '23×99',
  },
  {
    title: 'Multiplying by 37',
    instruction: 'Multiply any 3-digit number like 123 by 3, then by 37. You get all repeating digits!\nExample: 123 × 3 = 369, then 369 × 37 = 13653... Wait, try 3 × 7 × 11 × 13 × 37!',
    example: '3×7×11×13×37',
  },
  {
    title: 'Amazing 1089',
    instruction: 'Pick any 3-digit number where first ≠ last. Reverse it, subtract smaller from larger, then reverse the result and add.\nYou always get 1089! Try 532: 532-235=297, 297+792=1089!',
    example: '532-235',
  },
  {
    title: 'Dividing by 9',
    instruction: 'To check if a number divides by 9, add its digits. If that sum divides by 9, so does the original!\nTry 4563: 4+5+6+3=18, 18÷9=2, so 4563÷9 works!',
    example: '4+5+6+3',
  },
  {
    title: 'Multiplying by 101',
    instruction: 'To multiply a 2-digit number by 101, just write it twice!\n52 × 101 = 5252. Try 47 × 101!',
    example: '47×101',
  },
  {
    title: 'Multiplying by 1001',
    instruction: 'To multiply a 3-digit number by 1001, write it twice!\n123 × 1001 = 123123. Try 456 × 1001!',
    example: '456×1001',
  },
  {
    title: 'Power of 2 Pattern',
    instruction: 'Powers of 2 follow a cool pattern: 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024...\nNotice the last digits repeat: 2, 4, 8, 6! Try 2^10 (1024).',
    example: '2×2×2×2×2×2×2×2×2×2',
  },
  {
    title: 'Sum of Cubes',
    instruction: 'Did you know? 1³ + 2³ + 3³ + ... + n³ = (1+2+3+...+n)²\nFor n=3: 1+8+27=36 and (1+2+3)²=6²=36! Try 1+8+27.',
    example: '1+8+27',
  },
  {
    title: 'Dividing by 11',
    instruction: 'To check divisibility by 11: alternate adding and subtracting digits. If result is 0 or 11, it divides!\n121: 1-2+1=0 ✓. 1331: 1-3+3-1=0 ✓. Try with 121÷11.',
    example: '121÷11',
  },
  {
    title: 'Russian Peasant Multiplication',
    instruction: 'Ancient method! Halve one number (drop remainder), double the other. Cross out even first numbers, add remaining second numbers.\n18×23: 18→9→4→2→1, 23→46→92→184→368. Answer: 46+368=414!',
    example: '18×23',
  },
  {
    title: 'Number 6174',
    instruction: 'Pick any 4-digit number (not all same). Arrange descending, then ascending, subtract. Repeat this!\nYou always reach 6174 (Kaprekar constant)! Try 3524: 5432-2345=3087, 8730-0378=8352...',
    example: '5432-2345',
  },
  {
    title: 'Casting Out Nines',
    instruction: 'Old trick to check multiplication! Add digits of each number until single digit (ignore 9s).\nMultiply those. Check: 234×7=1638. 2+3+4=9→0, 7=7, 0×7=0. 1+6+3+8=18→9→0 ✓!',
    example: '234×7',
  },
  {
    title: 'Vedic Math - All From 9, Last From 10',
    instruction: 'Quick subtraction from powers of 10! Subtract each digit from 9, except last from 10.\n1000-567: 9-5=4, 9-6=3, 10-7=3 → 433! Try 1000-567.',
    example: '1000-567',
  },
  {
    title: 'Multiplying Numbers Near 100',
    instruction: 'For numbers close to 100: (100-a)(100-b) = 100(100-a-b) + ab\n96×97: both under by 4 and 3. 96-3=93 (first 2 digits), 4×3=12 (last 2) → 9312!',
    example: '96×97',
  },
  {
    title: 'Vedic Vertically & Crosswise',
    instruction: 'Multiply 2-digit numbers: 23×12 = (2×1)(2×2+3×1)(3×2) = 2|7|6 = 276!\nTry 14×13: (1×1)(1×3+4×1)(4×3) = 1|7|12 = 182 (carry the 1)!',
    example: '14×13',
  },
  {
    title: 'Check Your Work With 9s',
    instruction: 'Add digits of numbers until single digit, then of answer. Should match!\n47+85=132: 4+7=11→2, 8+5=13→4, 2+4=6. Answer: 1+3+2=6 ✓!',
    example: '47+85',
  },
  {
    title: 'Difference of Squares',
    instruction: 'a²-b²=(a+b)(a-b). This makes some calculations easier!\n99²-1² = (99+1)(99-1) = 100×98 = 9800. Try 99×99.',
    example: '99×99',
  },
  {
    title: 'Perfect Numbers',
    instruction: 'A perfect number equals the sum of its divisors (excluding itself)!\n6: divisors are 1,2,3 → 1+2+3=6 ✓\n28: divisors 1,2,4,7,14 → 1+2+4+7+14=28 ✓. Try 1+2+4+7+14.',
    example: '1+2+4+7+14',
  },
  {
    title: 'Triangular Number Pattern',
    instruction: 'Triangular numbers: 1, 3, 6, 10, 15, 21... Add consecutive numbers!\n1, 1+2=3, 1+2+3=6, 1+2+3+4=10. Formula: n(n+1)÷2. Try 8×9÷2.',
    example: '8×9÷2',
  },
  {
    title: 'Square Patterns',
    instruction: 'Notice: 1²=1, 11²=121, 111²=12321, 1111²=1234321!\nThe pattern grows then shrinks. Try 111×111.',
    example: '111×111',
  },
  {
    title: 'Divisibility by 4',
    instruction: 'A number divides by 4 if its last 2 digits divide by 4!\n3,516: Look at 16. 16÷4=4 ✓, so 3516÷4 works! Try 3516÷4.',
    example: '3516÷4',
  },
  {
    title: 'Divisibility by 8',
    instruction: 'Check last 3 digits! If they divide by 8, the whole number does!\n5,128: Look at 128. 128÷8=16 ✓. Try 5128÷8.',
    example: '5128÷8',
  },
  {
    title: 'Digit Sum Equals Original',
    instruction: 'Keep adding digits until one remains. This is the digital root!\nFor any multiple of 9, digital root is always 9! Try 9×37=333: 3+3+3=9!',
    example: '9×37',
  },
  {
    title: 'Number Palindromes',
    instruction: 'Some multiplication creates palindromes! 11×11=121, 111×111=12321.\nTry 1111×1111 for an even bigger palindrome!',
    example: '1111×1111',
  },
  {
    title: 'Cool Cube Pattern',
    instruction: 'Sum of first n cubes equals square of sum of first n numbers!\n1³+2³+3³ = (1+2+3)². Try: 1+8+27=36, (1+2+3)²=6²=36!',
    example: '1+8+27',
  },
];
function getRandomFun() {
  const idx = Math.floor(Math.random() * mathFunList.length);
  return mathFunList[idx];
}
window.mathFunList = mathFunList;
window.getRandomFun = getRandomFun;
