const lowerBtn = document.getElementById('lower');
const addBtn = document.getElementById('add');

let result = document.getElementById('result-number');
let number = parseInt(result.textContent);

function increase(){
  number += 1;
  result.textContent = `${number}`;
 changeResultColor();
}

function decrease(){
  number -= 1;
  result.textContent = `${number}`;
 changeResultColor();
}

function changeResultColor(){
  if (number > 0) {
    document.getElementById('result-number').style.color = '#008000';
  } else if (number < 0) {
    document.getElementById('result-number').style.color = 'red';
  }
}

addBtn.addEventListener('click', increase);
lowerBtn.addEventListener('click', decrease);

