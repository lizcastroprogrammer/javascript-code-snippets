let position = 1;
const gridSize = 100;

function createGrid() {
for(let i = 1; i <= gridSize; i++) {
   let newDiv = document.createElement('div');
   newDiv.setAttribute('id', 'n' + i);
   newDiv.innerText = i;
   let parentElement = document.getElementById('target');
   parentElement.appendChild(newDiv);
  }
}

function move() {
  let timer = setInterval(() => {
      toggle(position);
      position += 1;
      if(position === 101) { 
        window.clearInterval(timer);  
        }
  }, 100);
}

function toggle(position) {
  if(position < 1) {
    return 0;
  }
  const element = document.getElementById("" + position);
  element.classList.toggle('on');
}
