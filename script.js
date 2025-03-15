function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function number(value) {
    document.getElementById('display').value += value;
  }
  
  function Result() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = 'Error';
    }
  }
  