//score card elements
let score = localStorage.getItem("score:")

let scorecard = document.getElementById("score",score)
scorecard.textContent = score


//name elements
let inputname = localStorage.getItem("Name")
let playername = document.getElementById("playername")
playername.textContent = inputname



//high score

let highestScore = localStorage.getItem("HighScore");

if (score > highestScore || highestScore === null) {
  highestScore = score;
  localStorage.setItem("HighScore", highestScore);
} else {
  localStorage.setItem("HighScore", highestScore);
}
let high= document.getElementById("highscore")
high.textContent = highestScore 
  


//buttons
let button1 = document.getElementById("Button1")
let button2 = document.getElementById("Button2")



button1.onclick = () => {
  window.open("../gamepage 1/game1.html","_self")
};

button2.onclick = () => {
  window.open("/index.html","_self")
};

