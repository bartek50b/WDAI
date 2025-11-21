let seconds = 0;
let minutes = 0;
let clockInterval;

function stoperStart() {
  if (!clockInterval) {
    clockInterval = setInterval(addSeconds, 1000);
  }
}

function stoperPause() {
  clockInterval = clearInterval(clockInterval);
}

function stoperReset() {
  seconds = 0;
  minutes = 0;
  document.getElementById("stoper").innerHTML =
    String(seconds).padStart(2, "0") + "s";
}

function addSeconds() {
  seconds += 1;
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
  if (minutes > 0) {
    document.getElementById("stoper").innerHTML =
      String(minutes).padStart(2, "0") +
      "m " +
      String(seconds).padStart(2, "0") +
      "s";
  } else {
    document.getElementById("stoper").innerHTML =
      String(seconds).padStart(2, "0") + "s";
  }
}
