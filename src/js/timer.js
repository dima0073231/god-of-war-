let days = 20;
let hours = 20;
let minutes = 59;
function updateCountdown() {
  minutes--;
  if (minutes < 0) {
    minutes = 59;
    hours--;
  }
  if (hours < 0) {
    hours = 23;
    days--;
  }
  document.querySelector('.days').textContent = days;
  document.querySelector('.hours').textContent = hours;
  document.querySelector('.minutes').textContent = minutes;
  if (days <= 0 && hours <= 0 && minutes <= 0) {
    clearInterval(countdownInterval);
  }
}
const countdownInterval = setInterval(updateCountdown, 6000);
updateCountdown();
