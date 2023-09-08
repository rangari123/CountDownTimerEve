const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

// get the target date

let newYears = "2024-01-01";

function countDown() {
  let newDateyear = new Date(newYears);

  let currentDate = new Date();

  const totalseconds = (newDateyear - currentDate) / 1000;
  const days = Math.ceil(totalseconds / 3600 / 24);
  const hours = Math.ceil(totalseconds / 3600) % 24;
  const minutes = Math.ceil(totalseconds / 60) % 60;
  const seconds = Math.ceil(totalseconds) % 60;
  //   console.log(days, hours, minutes, seconds);

  daysEl.innerHTML = formattime(days);
  hoursEl.innerHTML = formattime(hours);
  minutesEl.innerHTML = formattime(minutes);
  secondsEl.innerHTML = formattime(seconds);

  // if time is <10

  function formattime(time) {
    return time < 10 ? `0${time}` : time;
  }
}
countDown();
setInterval(countDown, 1000);

/*
(1000 * 60 * 60 * 24): This expression represents the number of milliseconds in a day. Let's break it down further:

1000 milliseconds in 1 second.
60 seconds in 1 minute.
60 minutes in 1 hour.
24 hours in 1 day.
 
 */
