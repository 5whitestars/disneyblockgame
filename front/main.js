let gameRunning = true;
let gameSpeed = 2500;
let timerSpeed = 4;

function createDiv() {

  let image = document.createElement("div");
  let input = document.createElement("input");
  let parent = document.querySelector("#parentdiv");


  // put parent div back from og code (each child node can be the new image)
  // use https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
  // to add an event listener to input that checks correctness of answer

  // Size of the image
  image.style.width = "300px";
  image.style.height = "300px";
  
  // Selecting the location where the image will appear
  image.style.position = "absolute";

  parent.appendChild(image);

  // Theoretically makes page less laggy
  if (parent.childNodes.length > 1) {
    parent.removeChild(parent.childNodes[0]);
  }
  console.log(parent.childNodes);

  
  // 
  const check = document.getElementById("input").value == "text_value";
  //check will be true or false
  if (check){
    document.querySelector("#totalcorrect").innerText = "Total Correct: " + score;
  }

}

// Variables for scoreboard
let score = 0;
let timeleft = 30;

let timer = document.querySelector("#timer");

// createDiv();

function runInterval() {
  const interval = setInterval(function () {
    createDiv();
    if (gameRunning === false) {
      clearInterval(interval);
    }
  }, 2500);
}
runInterval();

// Makes timer run
timeleft = 30;

function runTimer() {
  const runTimer = setInterval(function () {
    timeleft = timeleft - 1;
    timer.innerText = "Time Left: " + timeleft;
    if (timeleft == 0) {
      timer.innerText = "Time is Up";
      clearInterval(runTimer); // Stops timer code from running once it hits 0
      gameRunning = false;
      displayFinalTime();
    }
  }, 1000);
}
runTimer();

/*------------------------------------------------------*/
let endButton = document.getElementById("button5");
let againButton = document.getElementById("button6");
let scorekeeper = document.getElementById("totalhit");
let timekeeper = document.getElementById("timer");
let finalkeeper = document.getElementById("finalscore");

endButton.addEventListener("click", function () {
  console.log("click");
  gameRunning = false;
  displayFinalTime();
});

//totalhit timer finalscore button6 button5
function displayFinalTime() {
  scorekeeper.style.display = "none";
  timekeeper.style.display = "none";
  endButton.style.display = "none";
  finalkeeper.style.display = "block";
  againButton.style.display = "block";

  finalkeeper.innerText = "Final score: " + score;

againButton.addEventListener("click", function () {
  console.log("click");
  gameRunning = true;

  score = 0;
  timeleft = 30;

  scorekeeper.style.display = "block";
  timekeeper.style.display = "block";
  endButton.style.display = "block";
  finalkeeper.style.display = "none";
  againButton.style.display = "none";

  runInterval();
  runTimer();
  scorekeeper.innerHTML = "Total correct: " + score;
  timer.innerText = "Time Left: " + timeleft;
});
}