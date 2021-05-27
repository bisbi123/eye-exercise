const balls = document.getElementsByClassName('ball');
const eyes = document.getElementsByClassName("eye");
const trigger = false;

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";
        
  }
};

function randomColor() {
  var letters = '0F1E2D3C4B5A6';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}


function changeEyeColor(idx) 
{
  eyes[idx].style.background = randomColor();

}