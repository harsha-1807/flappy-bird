//score card elements
let scorep1 = localStorage.getItem("score p1")

let scorecard1 = document.getElementById("p1score",scorep1)
scorecard1.textContent = scorep1


// player 2 score 
let scorep2 = localStorage.getItem("score p2")

let scorecard2 = document.getElementById("p2score",scorep2)
scorecard2.textContent = scorep2


console.log(scorep1,scorep2)
let player1 = localStorage.getItem("Name1")
let player2 = localStorage.getItem("Name2")




let winner = document.getElementById("winner")

if(scorep1<scorep2){
  winner.textContent = player2
}else{
  winner.textContent = player1
}

//high score

// let highestScore = localStorage.getItem("HighScore");

// if (score > highestScore || highestScore === null) {
//   highestScore = score;
//   localStorage.setItem("HighScore", highestScore);
// } else {
//   localStorage.setItem("HighScore", highestScore);
// }
// let high= document.getElementById("highscore")
// high.textContent = highestScore 
  


//buttons
let button1 = document.getElementById("Button1")
let button2 = document.getElementById("Button2")

button1.onclick = () => {
  window.open("/Pages/gamepage 2/game2.html","_self")
};

button2.onclick = () => {
  window.open("/Pages/start page/start.html","_self")
};

