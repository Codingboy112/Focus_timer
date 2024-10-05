let dot = document.getElementById("dot");
let start = document.getElementById("start");
let count_number = 3;
let intervalId;
let isCountingDown = false; 

document.addEventListener("keydown", startCountdown);
document.addEventListener("click", startCountdown);

function startCountdown(event) {
  if (!isCountingDown && (event.code === "Space" || event.type === "click")) {
    isCountingDown = true; 
    intervalId = setInterval(() => {
      start.innerText = count_number;
      count_number--;
      if (count_number < 0) {
        clearInterval(intervalId);
        start.style.display = "none";
        dot.style.display = "inline-block";

        // Show the message after countdown
        setInterval(() => {
          dot.style.display = "none";
          start.style.display = "inline-block";
          start.style.color = "White";
          start.innerHTML =
            "<h1>Time's up⏲️ <br> Press ctrl + R to Restart!</h1>";
          document.body.style.backgroundColor = "red";
        }, 120000);
      }
    }, 1000);
  }
}
