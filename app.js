let dot = document.getElementById("dot");
let start = document.getElementById("start"); 
let count_number = 3;

  document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
 
      intervalId = setInterval(() => {
        start.innerText = count_number;
        count_number--;

        if (count_number < 0) {
          clearInterval(intervalId);
          start.style.display  = "none"
          dot.style.display = "inline-block"
          setInterval(() => {
            dot.style.display = "none";
            start.style.display = "inline-block";
            start.style.color = "White";
            start.innerHTML = "<h1>Time's up⏲️ <br> Press ctrl + R to Restart!</h1>";
            this.body.style.backgroundColor = "red";
          }, 120000);
        }
      }, 1300);
    }
  });