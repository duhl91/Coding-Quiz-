var timeEl = document.querySelector(".timeCounter");
var secondsLeft = 120;

startButton.onclick = setTime;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}
setTime();

