

const timer = document.querySelector(".current");
var sec = 0;
var mint = 0;
var hrs = 0;
var startTime = true;

function start() {
  if (startTime == true) {
    startTime = false;
    changeTimer();
  }
}

function stop() {
  if (startTime == false) {
    startTime = true;
  }
}

function reset() {
  startTime = true;
  sec = 0;
  mint = 0;
  hrs = 0;
}

function changeTimer() {
  if (startTime == false) {
    sec = parseInt(sec);
    mint = parseInt(mint);
    hrs = parseInt(hrs);

    sec = sec + 1;

    if (sec == 60) {
      mint = mint + 1;
      sec = 0;
    }

    if (mint == 60) {
      hrs = hrs + 1;
      sec = 0;
      mint = 0;
    }

    if (sec < 10) {
      sec = "0" + sec;
    }

    if (mint < 10) {
      mint = "0" + mint;
    }
    if (hrs < 10) {
      hrs = "0" + hrs;
    }

    timer.innerHTML = hrs + ":" + mint + ":" + sec;
    setTimeout(changeTimer, 1000);
  }
}

// Call the changeTimer function initially
changeTimer();
