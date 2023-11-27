let display = document.getElementById('displayCalc');

function appendValue(value) {
  display.value === '0' ? (display.value = value) : (display.value += value);
}
function clearDisplay() {
  display.value = '';
  return 0;
}

function clearLastCharacter() {
  let currentValue = display.value;

  if (currentValue.length > 1) {
    display.value = currentValue.slice(0, -1);
  } else {
    display.value = '0';
  }
  return 0;
  // currentValue.length > 0
  //   ? (display.value = currentValue.slice(1, -1))
  //   : (display.value = '0');
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// toggle light and dark theme
function changeTheme(theme) {
  const calcContainer = document.querySelector('.calculator');
  const buttons = document.querySelectorAll('.calculator .buttons button');
  const dispCalc = document.querySelector('#displayCalc');
  const bg = document.querySelector('#equal');

  const isDarkTheme = theme === 'dark';

  calcContainer.classList.toggle('light', !isDarkTheme);
  calcContainer.classList.toggle('dark', isDarkTheme);

  dispCalc.classList.toggle('inset', !isDarkTheme);
  dispCalc.classList.toggle('text-light', !isDarkTheme);
  dispCalc.classList.toggle('inset-dark', isDarkTheme);
  dispCalc.classList.toggle('text-dark', isDarkTheme);

  bg.classList.toggle('bg-blue', !isDarkTheme);
  bg.classList.toggle('bg-orange', isDarkTheme);

  buttons.forEach((button) => {
    button.classList.toggle('offset', !isDarkTheme);
    button.classList.toggle('offset-dark', isDarkTheme);
  });
}
