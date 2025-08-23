// ui.js: UI rendering and event wiring

// Use global variables instead of imports
const display = document.getElementById('calc-display');
const exprDiv = document.getElementById('calc-expression');
const resultDiv = document.getElementById('calc-result');
const buttonsDiv = document.querySelector('.buttons');
const funInstruction = document.getElementById('fun-instruction');
const showFunBtn = document.getElementById('show-fun');
const tryFunBtn = document.getElementById('try-fun');

let lastResult = '0';
let lastExpression = '';

function updateDisplay(val) {
  // If val is a number (result), show last expression above
  // If val is an expression, show it as expression, clear result
  if (!isNaN(val) && val !== '' && val !== 'Error') {
    exprDiv.textContent = lastExpression;
    resultDiv.textContent = val;
    lastResult = val;
  } else if (val === 'Error') {
    exprDiv.textContent = lastExpression;
    resultDiv.textContent = 'Error';
    lastResult = 'Error';
  } else {
    exprDiv.textContent = val;
    resultDiv.textContent = '';
    lastExpression = val;
  }
}

const calc = new window.Calculator(updateDisplay);

const buttonLayout = [
  ['7','8','9','÷'],
  ['4','5','6','×'],
  ['1','2','3','−'],
  ['0','.','=','+'],
  ['C','←']
];

function createButtons() {
  buttonsDiv.innerHTML = '';
  buttonLayout.flat().forEach(label => {
    if (!label) return;
    const btn = document.createElement('button');
    btn.textContent = label;
    btn.setAttribute('data-key', label);
    btn.className = 'btn-' + label.replace(/[^\w]/g, '');
    btn.onclick = () => handleButton(label);
    buttonsDiv.appendChild(btn);
  });
}

function handleButton(label) {
  switch(label) {
    case 'C':
      lastExpression = '';
      lastResult = '0';
      calc.clear();
      exprDiv.textContent = '';
      resultDiv.textContent = '0';
      break;
    case '←':
      calc.backspace();
      break;
    case '=':
      lastExpression = exprDiv.textContent || '';
      calc.evaluate();
      break;
    case '÷': case '×': case '+': case '−':
      calc.append(label === '−' ? '-' : label);
      break;
    default:
      calc.append(label);
  }
}

function handleKeyboard(e) {
  const key = e.key;
  if (/\d/.test(key)) calc.append(key);
  else if (key === '.') calc.append('.');
  else if (key === '+' || key === '-') calc.append(key);
  else if (key === '*' || key === 'x' || key === 'X') calc.append('×');
  else if (key === '/' || key === '÷') calc.append('÷');
  else if (key === 'Enter' || key === '=') {
    lastExpression = exprDiv.textContent || '';
    calc.evaluate();
  }
  else if (key === 'Backspace') calc.backspace();
  else if (key === 'c' || key === 'C') {
    lastExpression = '';
    lastResult = '0';
    calc.clear();
    exprDiv.textContent = '';
    resultDiv.textContent = '0';
  }
}

document.addEventListener('keydown', handleKeyboard);

// Math Fun logic
let currentFun = null;
showFunBtn.onclick = () => {
  currentFun = window.getRandomFun();
  funInstruction.innerHTML = `<b>${currentFun.title}:</b> ${currentFun.instruction}`;
  tryFunBtn.disabled = false;
};
tryFunBtn.onclick = () => {
  if (currentFun && currentFun.example) {
    // Replace unicode minus and times for calculator
    let expr = currentFun.example.replace(/×/g, '*').replace(/−/g, '-');
    calc.setExpression(expr);
    calc.evaluate();
  }
};

// Theme switcher
window.initThemeSwitcher();

// Render buttons
createButtons();

// Initial display
exprDiv.textContent = '';
resultDiv.textContent = '0';
