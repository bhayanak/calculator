// --- Convert Calculator ---
const convertTabs = document.querySelectorAll('.convert-tab');
const convertBody = document.getElementById('convert-body');

const convertUnits = {
  currency: [
    { name: 'US Dollar', abbr: 'USD' },
    { name: 'Euro', abbr: 'EUR' },
    { name: 'Indian Rupee', abbr: 'INR' },
    { name: 'Chinese Yuan', abbr: 'CNY' },
    { name: 'Japanese Yen', abbr: 'JPY' },
    { name: 'South Korean Won', abbr: 'KRW' },
    { name: 'Singapore Dollar', abbr: 'SGD' },
    { name: 'Hong Kong Dollar', abbr: 'HKD' },
    { name: 'Taiwan Dollar', abbr: 'TWD' },
    { name: 'Thai Baht', abbr: 'THB' },
    { name: 'Malaysian Ringgit', abbr: 'MYR' },
    { name: 'Indonesian Rupiah', abbr: 'IDR' },
    { name: 'Philippine Peso', abbr: 'PHP' },
    { name: 'Vietnamese Dong', abbr: 'VND' },
    { name: 'Pakistani Rupee', abbr: 'PKR' },
    { name: 'Bangladeshi Taka', abbr: 'BDT' },
    { name: 'UAE Dirham', abbr: 'AED' },
    { name: 'Saudi Riyal', abbr: 'SAR' },
    { name: 'Qatari Riyal', abbr: 'QAR' },
    { name: 'Kuwaiti Dinar', abbr: 'KWD' },
    { name: 'Sri Lankan Rupee', abbr: 'LKR' },
    { name: 'Nepalese Rupee', abbr: 'NPR' },
    { name: 'British Pound', abbr: 'GBP' },
    { name: 'Australian Dollar', abbr: 'AUD' },
    { name: 'Canadian Dollar', abbr: 'CAD' },
    { name: 'Swiss Franc', abbr: 'CHF' },
    { name: 'Brazilian Real', abbr: 'BRL' },
    { name: 'South African Rand', abbr: 'ZAR' }
  ],
  length: [
    { name: 'Millimeter', abbr: 'mm', factor: 0.001 },
    { name: 'Centimeter', abbr: 'cm', factor: 0.01 },
    { name: 'Meter', abbr: 'm', factor: 1 },
    { name: 'Kilometer', abbr: 'km', factor: 1000 },
    { name: 'Inch', abbr: 'in', factor: 0.0254 },
    { name: 'Foot', abbr: 'ft', factor: 0.3048 },
    { name: 'Yard', abbr: 'yd', factor: 0.9144 },
    { name: 'Mile', abbr: 'mi', factor: 1609.34 }
  ],
  area: [
    { name: 'Square Meter', abbr: 'm²', factor: 1 },
    { name: 'Square Kilometer', abbr: 'km²', factor: 1e6 },
    { name: 'Square Centimeter', abbr: 'cm²', factor: 0.0001 },
    { name: 'Square Millimeter', abbr: 'mm²', factor: 0.000001 },
    { name: 'Square Mile', abbr: 'mi²', factor: 2.59e6 },
    { name: 'Square Yard', abbr: 'yd²', factor: 0.836127 },
    { name: 'Square Foot', abbr: 'ft²', factor: 0.092903 },
    { name: 'Square Inch', abbr: 'in²', factor: 0.00064516 }
  ],
  volume: [
    { name: 'Cubic Meter', abbr: 'm³', factor: 1 },
    { name: 'Liter', abbr: 'L', factor: 0.001 },
    { name: 'Milliliter', abbr: 'mL', factor: 0.000001 },
    { name: 'Cubic Centimeter', abbr: 'cm³', factor: 0.000001 },
    { name: 'Cubic Millimeter', abbr: 'mm³', factor: 1e-9 },
    { name: 'Cubic Inch', abbr: 'in³', factor: 0.0000163871 },
    { name: 'Cubic Foot', abbr: 'ft³', factor: 0.0283168 },
    { name: 'Cubic Yard', abbr: 'yd³', factor: 0.764555 },
    { name: 'Gallon (US)', abbr: 'gal', factor: 0.00378541 }
  ],
  weight: [
    { name: 'Milligram', abbr: 'mg', factor: 0.000001 },
    { name: 'Gram', abbr: 'g', factor: 0.001 },
    { name: 'Kilogram', abbr: 'kg', factor: 1 },
    { name: 'Metric Ton', abbr: 't', factor: 1000 },
    { name: 'Ounce', abbr: 'oz', factor: 0.0283495 },
    { name: 'Pound', abbr: 'lb', factor: 0.453592 },
    { name: 'Stone', abbr: 'st', factor: 6.35029 }
  ],
  temperature: [
    { name: 'Celsius', abbr: '°C' },
    { name: 'Fahrenheit', abbr: '°F' },
    { name: 'Kelvin', abbr: 'K' }
  ],
  angle: [
    { name: 'Degree', abbr: '°', factor: 1 },
    { name: 'Radian', abbr: 'rad', factor: Math.PI / 180 },
    { name: 'Gradian', abbr: 'gon', factor: 0.9 }
  ],
  data: [
    { name: 'Bit', abbr: 'b', factor: 1 },
    { name: 'Byte', abbr: 'B', factor: 8 },
    { name: 'Kilobit', abbr: 'kb', factor: 1000 },
    { name: 'Kilobyte', abbr: 'kB', factor: 8000 },
    { name: 'Megabit', abbr: 'Mb', factor: 1e6 },
    { name: 'Megabyte', abbr: 'MB', factor: 8e6 },
    { name: 'Gigabit', abbr: 'Gb', factor: 1e9 },
    { name: 'Gigabyte', abbr: 'GB', factor: 8e9 },
    { name: 'Terabit', abbr: 'Tb', factor: 1e12 },
    { name: 'Terabyte', abbr: 'TB', factor: 8e12 }
  ],
  energy: [
    { name: 'Joule', abbr: 'J', factor: 1 },
    { name: 'Kilojoule', abbr: 'kJ', factor: 1000 },
    { name: 'Calorie', abbr: 'cal', factor: 4.184 },
    { name: 'Kilocalorie', abbr: 'kcal', factor: 4184 },
    { name: 'Watt hour', abbr: 'Wh', factor: 3600 },
    { name: 'Kilowatt hour', abbr: 'kWh', factor: 3.6e6 },
    { name: 'Electronvolt', abbr: 'eV', factor: 1.60218e-19 },
    { name: 'British thermal unit', abbr: 'BTU', factor: 1055.06 },
    { name: 'Foot-pound', abbr: 'ft·lb', factor: 1.35582 }
  ],
  power: [
    { name: 'Watt', abbr: 'W', factor: 1 },
    { name: 'Kilowatt', abbr: 'kW', factor: 1000 },
    { name: 'Megawatt', abbr: 'MW', factor: 1e6 },
    { name: 'Horsepower', abbr: 'hp', factor: 745.7 }
  ],
  pressure: [
    { name: 'Pascal', abbr: 'Pa', factor: 1 },
    { name: 'Kilopascal', abbr: 'kPa', factor: 1000 },
    { name: 'Bar', abbr: 'bar', factor: 100000 },
    { name: 'Atmosphere', abbr: 'atm', factor: 101325 },
    { name: 'Pound/sq inch', abbr: 'psi', factor: 6894.76 },
    { name: 'Torr', abbr: 'Torr', factor: 133.322 }
  ],
  speed: [
    { name: 'Meter/sec', abbr: 'm/s', factor: 1 },
    { name: 'Kilometer/hour', abbr: 'km/h', factor: 0.277778 },
    { name: 'Mile/hour', abbr: 'mph', factor: 0.44704 },
    { name: 'Foot/sec', abbr: 'ft/s', factor: 0.3048 },
    { name: 'Knot', abbr: 'kn', factor: 0.514444 }
  ],
  time: [
    { name: 'Second', abbr: 's', factor: 1 },
    { name: 'Minute', abbr: 'min', factor: 60 },
    { name: 'Hour', abbr: 'h', factor: 3600 },
    { name: 'Day', abbr: 'd', factor: 86400 },
    { name: 'Week', abbr: 'wk', factor: 604800 },
    { name: 'Month (30d)', abbr: 'mo', factor: 2592000 },
    { name: 'Year', abbr: 'yr', factor: 31536000 }
  ]
};

let currentConvertType = 'length';

function renderConvertUI(type) {
  convertBody.innerHTML = '';
  let units = convertUnits[type];
  let fromSel = document.createElement('select');
  let toSel = document.createElement('select');
  units.forEach((u, i) => {
    let opt1 = document.createElement('option');
    opt1.value = i;
    opt1.textContent = `${u.name} (${u.abbr})`;
    fromSel.appendChild(opt1);
    let opt2 = document.createElement('option');
    opt2.value = i;
    opt2.textContent = `${u.name} (${u.abbr})`;
    toSel.appendChild(opt2);
  });
  fromSel.selectedIndex = 0;
  toSel.selectedIndex = 1;
  let input = document.createElement('input');
  input.type = 'number';
  input.placeholder = 'Enter value';
  input.className = 'convert-input';
  let output = document.createElement('input');
  output.type = 'text';
  output.readOnly = true;
  output.className = 'convert-output';

  // Labels
  let fromLabel = document.createElement('div');
  fromLabel.className = 'convert-label';
  fromLabel.textContent = 'From:';
  let toLabel = document.createElement('div');
  toLabel.className = 'convert-label';
  toLabel.textContent = 'To:';

  // Rows
  let fromRow = document.createElement('div');
  fromRow.className = 'convert-row';
  fromRow.appendChild(fromLabel);
  fromRow.appendChild(input);
  fromRow.appendChild(fromSel);

  let toRow = document.createElement('div');
  toRow.className = 'convert-row';
  toRow.appendChild(toLabel);
  toRow.appendChild(output);
  toRow.appendChild(toSel);

  convertBody.appendChild(fromRow);
  convertBody.appendChild(toRow);

  // For currency, fetch live rates
  let rateInfo = null;
  let lastUpdated = null;
  let infoDiv = null;
  if (type === 'currency') {
    infoDiv = document.createElement('div');
    infoDiv.className = 'convert-info';
    infoDiv.style.fontSize = '0.95em';
    infoDiv.style.marginTop = '0.5em';
    convertBody.appendChild(infoDiv);
  }

  async function getCachedRates(base) {
    const key = `currencyRates_${base}`;
    const cached = localStorage.getItem(key);
    if (cached) {
      try {
        const obj = JSON.parse(cached);
        if (obj && obj.time_next_update_unix && Date.now() < obj.time_next_update_unix * 1000) {
          return obj;
        }
      } catch {}
    }
    // Fetch new rates
    infoDiv && (infoDiv.textContent = 'Fetching rates...');
    const url = `https://open.er-api.com/v6/latest/${base}`;
    const resp = await fetch(url);
    const data = await resp.json();
    if (data && data.result === 'success') {
      localStorage.setItem(key, JSON.stringify(data));
      return data;
    }
    return null;
  }

  async function convert() {
    let val = parseFloat(input.value);
    if (isNaN(val)) {
      output.value = '';
      if (infoDiv) infoDiv.textContent = '';
      return;
    }
    if (type === 'temperature') {
      let from = units[fromSel.value].abbr;
      let to = units[toSel.value].abbr;
      output.value = convertTemperature(val, from, to);
    } else if (type === 'currency') {
      let from = units[fromSel.value].abbr;
      let to = units[toSel.value].abbr;
      if (from === to) {
        output.value = val;
        if (infoDiv) infoDiv.textContent = '';
        return;
      }
      infoDiv.textContent = 'Loading rates...';
      let ratesData = await getCachedRates(from);
      if (!ratesData || !ratesData.rates || !ratesData.rates[to]) {
        output.value = '';
        infoDiv.textContent = 'Could not fetch rates.';
        return;
      }
      let rate = ratesData.rates[to];
      let result = val * rate;
      output.value = result.toFixed(4);
      let date = ratesData.time_last_update_utc || '';
      infoDiv.textContent = `1 ${from} = ${rate} ${to} (as of ${date.replace('00:00 UTC', '').trim()})`;
    } else {
      let fromF = units[fromSel.value].factor;
      let toF = units[toSel.value].factor;
      let base = val * fromF;
      let result = base / toF;
      output.value = result;
    }
  }
  input.addEventListener('input', convert);
  fromSel.addEventListener('change', convert);
  toSel.addEventListener('change', convert);
}

function convertTemperature(val, from, to) {
  if (from === to) return val;
  let c;
  if (from === '°C') c = val;
  else if (from === '°F') c = (val - 32) * 5 / 9;
  else if (from === 'K') c = val - 273.15;
  let result;
  if (to === '°C') result = c;
  else if (to === '°F') result = c * 9 / 5 + 32;
  else if (to === 'K') result = c + 273.15;
  return result;
}

convertTabs.forEach(tab => {
  tab.onclick = () => {
    convertTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentConvertType = tab.dataset.type;
    renderConvertUI(currentConvertType);
  };
});

// Render default convert UI
if (convertTabs.length) {
  convertTabs[0].classList.add('active');
  renderConvertUI('length');
}
// --- Scientific Calculator ---
const sciExprDiv = document.getElementById('sci-expression');
const sciResultDiv = document.getElementById('sci-result');
const sciButtonsDiv = document.querySelector('.sci-buttons');

const sciButtonLayout = [
  ['sin', 'cos', 'tan', 'ln', 'log'],
  ['π', 'e', '^', '√', '('],
  ['7', '8', '9', '÷', ')'],
  ['4', '5', '6', '×', 'C'],
  ['1', '2', '3', '−', '←'],
  ['0', '.', '=', '+', 'ANS']
];

let sciExpression = '';
let sciLastResult = '0';

function createSciButtons() {
  sciButtonsDiv.innerHTML = '';
  sciButtonLayout.forEach(row => {
    row.forEach(label => {
      const btn = document.createElement('button');
      btn.textContent = label;
      btn.setAttribute('data-key', label);
      btn.className = 'btn-sci-' + label.replace(/[^\w]/g, '');
      btn.onclick = () => handleSciButton(label);
      sciButtonsDiv.appendChild(btn);
    });
  });
}

function handleSciButton(label) {
  switch (label) {
    case 'C':
      sciExpression = '';
      sciExprDiv.textContent = '';
      sciResultDiv.textContent = '0';
      break;
    case '←':
      sciExpression = sciExpression.slice(0, -1);
      sciExprDiv.textContent = sciExpression;
      break;
    case '=':
      try {
        let expr = sciExpression
          .replace(/π/g, 'Math.PI')
          .replace(/e/g, 'Math.E')
          .replace(/÷/g, '/')
          .replace(/×/g, '*')
          .replace(/−/g, '-')
          .replace(/√/g, 'Math.sqrt')
          .replace(/\^/g, '**')
          .replace(/sin/g, 'Math.sin')
          .replace(/cos/g, 'Math.cos')
          .replace(/tan/g, 'Math.tan')
          .replace(/log/g, 'Math.log10')
          .replace(/ln/g, 'Math.log');
        // Replace ANS with last result
        expr = expr.replace(/ANS/g, sciLastResult);
        // eslint-disable-next-line no-eval
        let result = eval(expr);
        if (typeof result === 'number' && isFinite(result)) {
          sciLastResult = result.toString();
          sciResultDiv.textContent = sciLastResult;
        } else {
          sciResultDiv.textContent = 'Error';
        }
      } catch {
        sciResultDiv.textContent = 'Error';
      }
      sciExprDiv.textContent = sciExpression;
      break;
    case 'ANS':
      sciExpression += sciLastResult;
      sciExprDiv.textContent = sciExpression;
      break;
    default:
      sciExpression += label;
      sciExprDiv.textContent = sciExpression;
  }
}

// Render scientific buttons on load
createSciButtons();
// ui.js: UI rendering and event wiring

// Use global variables instead of imports
const display = document.getElementById('calc-display');
const exprDiv = document.getElementById('calc-expression');
const resultDiv = document.getElementById('calc-result');
const buttonsDiv = document.querySelector('.buttons');
const funInstruction = document.getElementById('fun-instruction');
const showFunBtn = document.getElementById('show-fun');
const tryFunBtn = document.getElementById('try-fun');

// Dropdowns
const optionsBtn = document.getElementById('options-btn');
const themesBtn = document.getElementById('themes-btn');
const optionsMenu = document.getElementById('options-menu');
const themesMenu = document.getElementById('themes-menu');

let lastResult = '0';
let lastExpression = '';
let currentMode = 'basic'; // basic | scientific | convert

function updateDisplay(val) {
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
// Dropdown menu logic
function closeMenus() {
  optionsMenu.style.display = 'none';
  themesMenu.style.display = 'none';
}
optionsBtn.onclick = (e) => {
  e.stopPropagation();
  const show = optionsMenu.style.display !== 'block';
  closeMenus();
  if (show) optionsMenu.style.display = 'block';
};
themesBtn.onclick = (e) => {
  e.stopPropagation();
  const show = themesMenu.style.display !== 'block';
  closeMenus();
  if (show) themesMenu.style.display = 'block';
};
document.body.addEventListener('click', closeMenus);

// Theme menu actions
themesMenu.querySelectorAll('.dropdown-item').forEach(btn => {
  btn.onclick = () => {
    window.setTheme(btn.dataset.theme);
    closeMenus();
  };
});

// Options menu actions
optionsMenu.querySelectorAll('.dropdown-item').forEach(btn => {
  btn.onclick = () => {
    setMode(btn.dataset.mode);
    closeMenus();
  };
});

function setMode(mode) {
  currentMode = mode;
  const basic = document.getElementById('basic-calc');
  const sci = document.getElementById('scientific-calc');
  const conv = document.getElementById('convert-calc');
  const fun = document.querySelector('.math-fun-section');
  // Always show basic by default or if mode is unknown
  if (mode === 'basic' || !mode) {
    basic.style.display = '';
    sci.style.display = 'none';
    conv.style.display = 'none';
    if (fun) fun.style.display = '';
    createButtons(); // Ensure buttons are rendered when switching to basic
  } else if (mode === 'scientific') {
    basic.style.display = 'none';
    sci.style.display = '';
    conv.style.display = 'none';
    if (fun) fun.style.display = 'none';
  } else if (mode === 'convert') {
    basic.style.display = 'none';
    sci.style.display = 'none';
    conv.style.display = '';
    if (fun) fun.style.display = 'none';
  } else {
    // fallback: show basic
    basic.style.display = '';
    sci.style.display = 'none';
    conv.style.display = 'none';
    if (fun) fun.style.display = '';
  }
}

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
setMode('basic');
