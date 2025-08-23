// theme.js: Theme switching logic

const themes = ['light', 'dark', 'rainbow'];

function setTheme(theme) {
  document.body.classList.remove(...themes.map(t => 'theme-' + t));
  document.body.classList.add('theme-' + theme);
  localStorage.setItem('calc-theme', theme);
}

function initThemeSwitcher() {
  const saved = localStorage.getItem('calc-theme') || 'light';
  setTheme(saved);
  document.getElementById('theme-light').onclick = () => setTheme('light');
  document.getElementById('theme-dark').onclick = () => setTheme('dark');
  document.getElementById('theme-rainbow').onclick = () => setTheme('rainbow');
}
window.setTheme = setTheme;
window.initThemeSwitcher = initThemeSwitcher;
