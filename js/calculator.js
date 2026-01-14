// calculator.js: Core calculator logic

class Calculator {
  constructor(displayCallback) {
    this.displayCallback = displayCallback;
    this.clear();
  }

  clear() {
    this.expression = '';
    this.updateDisplay('0');
  }

  backspace() {
    this.expression = this.expression.slice(0, -1);
    this.updateDisplay(this.expression || '0');
  }

  append(char) {
    // Prevent multiple decimals in a number
    if (char === '.' && /[.][^+\-*/]*$/.test(this.expression)) return;
    this.expression += char;
    this.updateDisplay(this.expression);
    if (window.updateMascot) window.updateMascot('thinking');
  }

  evaluate() {
    try {
      // Replace unicode minus with ASCII minus for all cases
      let safeExpr = this.expression.replace(/÷/g, '/').replace(/×/g, '*').replace(/−/g, '-');
      // Only allow safe characters
      if (!/^[-+*/.\d\s()]+$/.test(safeExpr)) throw new Error('Invalid input');
      // eslint-disable-next-line no-eval
      let result = eval(safeExpr);
      if (typeof result === 'number' && isFinite(result)) {
        // Add to history if global function available
        if (window.addToHistory) window.addToHistory(this.expression, result);
        if (window.fireConfetti && result > 100) window.fireConfetti();
        if (window.updateMascot) window.updateMascot('success');

        this.expression = result.toString();
        this.updateDisplay(this.expression);
      } else {
        throw new Error('Math error');
      }
    } catch {
      this.updateDisplay('Error');
      this.expression = '';
      if (window.updateMascot) window.updateMascot('error');
    }
  }

  setExpression(expr) {
    // Replace unicode minus with ASCII minus for all cases
    this.expression = expr.replace(/−/g, '-');
    this.updateDisplay(this.expression);
  }

  updateDisplay(val) {
    if (this.displayCallback) this.displayCallback(val);
  }
}
// Attach to window for global access
window.Calculator = Calculator;
