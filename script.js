let x = [];
let runing = false;
const leakButton = document.getElementById('leak-button');
const stopButton = document.getElementById('stop-button');

function grow(){
  x.push(new Array(1000000).join('leak'));
  if(running) {
    setTimeout(grow, 1000)
  }
}

leakButton.addEventListener('click', () => {
  running = true;
  grow();
});

leakButton.addEventListener('click', () => {
  running = false;
});
